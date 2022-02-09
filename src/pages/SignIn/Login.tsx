import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { loginStyle} from '../../styles/login.style';
import { ImageBackground} from 'react-native';
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import {  View,  Text,  KeyboardAvoidingView,  TextInput,  StyleSheet,  Alert,} from "react-native";
import { Button, ButtonText } from "../../components";
import Loading from '../../components/Loading';
import { useAuth } from "../../contexts/auth";
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import { LoginTypes } from "../../types/ScreenStack.types";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({ navigation }: LoginTypes) {
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  const [isLoading, setIsLoading] = useState(true);


  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }
  function handleCadastrar() {
    navigation.navigate("CriarConta");
  }
  async function handleSignIn() {
    try {
      setIsLoading(true);
      if (data?.email && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
        setIsLoading(false);
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
      Alert.alert(`${data.message} ${message}`);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

    return (
      <>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={loginStyle.container}>
            <ImageBackground  source={require('../../../img/Login.png')} style={loginStyle.image}>
                <SafeAreaView style={loginStyle.content}>
                    <View style={loginStyle.view}>
                        <KeyboardAvoidingView>
                            <Text style={styles.title}>Login</Text>
                            <View style={styles.formRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="Insira seu email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={(i) => handleChange({ email: i })}
                            ></TextInput>
                            </View>
                            <View style={styles.formRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="Senha"
                                secureTextEntry={true}
                                onChangeText={(i) => handleChange({ password: i })}
                            ></TextInput>
                            </View>
                            <Button style={styles.autenticar} title="Autenticar" onPress={handleSignIn} />
                            
                        </KeyboardAvoidingView>
                        <ButtonText style={styles.criarConta} title="Não tem uma conta? Clique aqui para criar"  onPress={handleCadastrar} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
      )}
      </>
    );

    
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: "center",
      justifyContent: "center",
    },
    autenticar: {
      backgroundColor: "#2079FF",
      borderRadius: 47,
      marginTop: 30,
      height: 50,
     
    },
    criarConta:{
      fontSize: 2,
    },
    title: {
      fontSize: 45,
      color: "#003777",
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
      margin: 1,
      width:250,
      borderWidth: 1,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 7,
      
    },
  });
