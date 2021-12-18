import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../pages/Home';
import {Login} from '../pages/Login';
import {Sobre} from '../pages/Sobre'
import {Ajuda} from '../pages/Ajuda'
import {CriarConta} from '../pages/CriarConta';
import Player from '../pages/Player';
import Playlist from '../pages/Playlist';
import { AudioProvider } from "../pages/Inicial";
import Inicial from '../pages/Inicial';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator()


export function MenuLi() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Menu" component={InicialFunction} />
            <Drawer.Screen name="Sobre" component={Sobre} />
            <Drawer.Screen name="Ajuda" component={Ajuda} />
            <Drawer.Screen name="Sair" component={Home} />
        </Drawer.Navigator>
    );
}





const Tab = createBottomTabNavigator()
function InicialFunction () {
    return (
        <AudioProvider>
            <Tab.Navigator initialRouteName="Inicial">
                <Tab.Screen name="Reproduções" component={Inicial} options={{
                    tabBarIcon: ({color,size}) => {
                        return <MaterialIcons name="headset" size={size} color={color} />
                    },
                }} />

                <Tab.Screen name="Player" component={Player} options={{
                    tabBarIcon: ({color,size}) => {
                        return <FontAwesome5 name="compact-disc" size={size} color={color} />
                    },
                }} />

                <Tab.Screen name="Playlist" component={Playlist} options={{
                    tabBarIcon: ({color,size}) => {
                        return <MaterialIcons name="library-music" size={size} color={color} />
                    },
                }} />
            </Tab.Navigator>
        </AudioProvider>
    );
}


const Stack = createNativeStackNavigator()

export function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="MenuLi" component={MenuLi} options={{
                }} />
                <Stack.Screen name="CriarConta" component={CriarConta} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


