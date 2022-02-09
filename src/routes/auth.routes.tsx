import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/SignIn/Home';
import Login from '../pages/SignIn/Login';
import CriarConta from '../pages/SignIn/CriarConta';


const AuthStack = createNativeStackNavigator();


export default function AppRoutes(){
    return(
            <AuthStack.Navigator initialRouteName='Home' screenOptions={{
                headerShown: false
              }} >
                <AuthStack.Screen name="Home" component={Home} />
                <AuthStack.Screen name="Login" component={Login} />
                <AuthStack.Screen name="CriarConta" component={CriarConta} />
            </AuthStack.Navigator>
    )
}