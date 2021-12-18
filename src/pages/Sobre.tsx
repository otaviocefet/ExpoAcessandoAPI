import React from 'react'
import { SafeAreaView, View, Text, ImageBackground} from 'react-native';
import {SobreStyle} from '../styles/sobre.style'

export function Sobre() {
    return (
        <View style={SobreStyle.container}>
            <ImageBackground  source={require('../../img/Login.png')} style={SobreStyle.image}>
            <SafeAreaView style={SobreStyle.content}>
                    <View style={SobreStyle.view}>
                        <Text style={SobreStyle.titulo}> Sobre:</Text>
                        <Text></Text>
                        <Text style={SobreStyle.texto}> Living Music é um aplicativo desesnvolvido com o objetivo de proporcinar aos seus usuários uma boa experiência ao escutar sua música. Sem interrupções, anúncios e limitações, com o Living Music você terá experiência que merece ao escutar sua música! </Text>
                        <Text></Text>

                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default Sobre;