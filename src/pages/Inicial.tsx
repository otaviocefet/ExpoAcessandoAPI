import React, {Component, createContext} from 'react'
import {useEffect} from 'react'
import {View, Text, Alert} from 'react-native';
import { inicialStyle } from '../styles/inicial.style';
import * as MediaLibrary from 'expo-media-library';
import { ScrollView } from 'react-native-gesture-handler';


export const AudioContext = createContext()
export class AudioProvider extends Component {
    constructor (props){
        super(props);
        this.state = {
            audioFiles: [],
            permissionError:false, 
        }
    }

    permissionAllert = () => {
        Alert.alert("Permissão Requerida", "Para usar o aplicativo é necessário conceder permissão!",
        [{
            text: 'Permitir',
            onPress: () => this.getPermission()
        },{
            text: 'Cancelar',
            onPress: () => this.permissionAllert()
        }])
    }

    getAudioFiles = async () => {
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
        });
        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: media.totalCount,
        });

        this.setState({...this.state, audioFiles: media.assets})
       
    }

    getPermission= async () => {
        const permission = await MediaLibrary.getPermissionsAsync()
        if (permission.granted){
            //Pegar os audios
            this.getAudioFiles();
        }

        if (!permission.granted && !permission.canAskAgain){
            //Alerta de erro 
            this.setState({...this.state, permissionError: true})
        }



        if (!permission.granted && permission.canAskAgain){
            const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync()
            MediaLibrary.requestPermissionsAsync();
            if (status == 'denied' && canAskAgain){
                // Alerta que o usuario precisa conceder permissão
                this.permissionAllert()
            }

            if (status == 'granted'){
                //Pegue os audios
                this.getAudioFiles();
            }
            if (status == 'denied' && !canAskAgain){
                //Alerta de erro 
                this.setState({...this.state, permissionError: true})
            }
        }

        
    }
    componentDidMount(){
        this.getPermission()
    }
    render(){
        if (this.state.permissionError) return <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>É necessário permitir o acesso.</Text>
        </View>
        return <AudioContext.Provider value={{audioFiles: this.state.audioFiles}}>
                    {this.props.children}
                </AudioContext.Provider> 
    }
}


export class Inicial extends Component {
    static contextType = AudioContext

    render(){
        return(
                <ScrollView>
                    {this.context.audioFiles.map(item => <Text key={item.id}>{item.filename}</Text>)}
                    <Text style={{padding: 10, borderBottomColor: 'black', borderBottomWidth: 2 }}>Lista de Músicas</Text>
                </ScrollView>
        );
    }
}


export default Inicial;