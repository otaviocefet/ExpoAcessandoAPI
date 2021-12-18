import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { homeStyle} from '../styles/home.style'
import { ImageBackground, View, Pressable, Text} from 'react-native';

export function Home() {
    const navigation = useNavigation();
    return (
        <View style={homeStyle.container}>
            <ImageBackground  source={require('../../img/Home.png')} style={homeStyle.image}>
                <View style={homeStyle.botao}>
                <Pressable style={homeStyle.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={homeStyle.text}>COMEÇAR</Text>
                </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home;