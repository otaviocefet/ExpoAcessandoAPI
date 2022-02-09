import React from 'react'
import { SafeAreaView, View, Text, ImageBackground} from 'react-native';
import {SobreStyle} from '../../styles/sobre.style'

export function Sobre() {
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    return (
        
        <View style={SobreStyle.container}>
            <ImageBackground  source={require('../../../img/Login.png')} style={SobreStyle.image}>
            <SafeAreaView style={SobreStyle.content}>
                    <View style={SobreStyle.view}>
                        <Text style={SobreStyle.titulo}>Sobre:</Text>
                        <Text></Text>
                        <Text style={SobreStyle.texto}>O Living Music é um aplicativo <B>(ainda em desenvolvimento)</B>, que tem como objetivo proporcinar aos seus usuários uma boa experiência ao escutar suas música. Sem interrupções, anúncios e limitações, com o Living Music você terá a experiência que merece ao escutar sua música!{"\n"}{"\n"}{"\n"}Developed by Otavio (3° INFO)</Text>
                        <Text></Text>

                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default Sobre;