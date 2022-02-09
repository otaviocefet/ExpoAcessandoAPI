import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { loginStyle} from '../styles/login.style';
import { ImageBackground} from 'react-native';
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import {  View,  Text,  KeyboardAvoidingView,  TextInput,  StyleSheet,  Alert,} from "react-native";
import { Button, ButtonText } from "../components";
import { useAuth } from "../hook/auth";
import { IAuthenticate, IUser } from "../interfaces/User.interface";
import { LoginTypes } from "../types/ScreenStack.types";
import { SafeAreaView } from 'react-native-safe-area-context';

export function Login() {
    const navigation = useNavigation();
    const login = () => navigation.navigate('MenuLi');
    const { signIn } = useAuth();
    const [data, setData] = useState<IAuthenticate>();


    function handleChange(item: IAuthenticate) {
        setData({ ...data, ...item });
      }
      async function handleSignIn() {
        try {
          if (data?.email && data.password) {
            await signIn(data);
            navigation.navigate('MenuLi');
          } else {
            Alert.alert("Preencha todos os campos!!!");
          }
        } catch (error) {
          const err = error as AxiosError;
          const data = err.response?.data as IUser;
          let message = "";
          if (data.data) {
            for (const [key, value] of Object.entries(data.data)) {
              message = `${message} ${value}`;
            }
          }
        
        }
      }
    
 


    return (
        <View style={loginStyle.container}>
            <ImageBackground  source={require('../../img/Login.png')} style={loginStyle.image}>
                <SafeAreaView style={loginStyle.content}>
                    <View style={loginStyle.view}>
                        <KeyboardAvoidingView>
                            <Text style={styles.title}>Login</Text>
                            <View style={styles.formRow}>
                            <Text style={styles.label}>E-mail:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={(i) => handleChange({ email: i })}
                            ></TextInput>
                            </View>
                            <View style={styles.formRow}>
                            <Text style={styles.label}>Senha:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Senha"
                                secureTextEntry={true}
                                onChangeText={(i) => handleChange({ password: i })}
                            ></TextInput>
                            </View>
                            <Button title="Login" onPress={() => navigation.navigate('MenuLi')} />
                            <ButtonText title="Cadastre-se"  onPress={() => navigation.navigate('CriarConta')} />
                        </KeyboardAvoidingView>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );

    
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 36,
      color: 'black',
      fontWeight: "500",
      marginBottom: 20,
      textAlign: "center",
    },
    formRow: {
      margin: 10,
      flexDirection: "row",
    },
    label: {
      fontSize: 18,
      color: 'black',
      padding: 5,
    },
    input: {
      borderBottomWidth: 1,
      fontSize: 18,
      padding: 5,
      width: "50%",
      marginLeft: 5,
      marginBottom: 5,
    },
  });

export default Login;