import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../pages/SignIn/Home';
import Login from '../pages/SignIn/Login';
import {Sobre} from '../pages/Dashboard/Sobre'
import {Ajuda} from '../pages/Dashboard/Ajuda'
import {CriarConta} from '../pages/SignIn/CriarConta';
import Player from '../pages/Dashboard/Player';
import Playlist from '../pages/Dashboard/Playlist';
import { AudioProvider } from "../pages/Dashboard/Inicial";
import Inicial from '../pages/Dashboard/Inicial';
import { useAuth } from '../contexts/auth';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Sair from '../pages/Dashboard/Sair';

const Drawer = createDrawerNavigator()


export default function AppRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Menu'>
            <Drawer.Screen name="Menu" component={InicialFunction} />
            <Drawer.Screen name="Sobre" component={Sobre} />
            <Drawer.Screen name="Ajuda" component={Ajuda} />
            <Drawer.Screen name="Sair" component={Sair} options={{
                headerShown: false
              }} ></Drawer.Screen> 
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
};


