import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { criarcontaStyle} from '../../styles/criarcontaStyle';
import { SafeAreaView, ImageBackground} from 'react-native';
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import {  View,  Text,  KeyboardAvoidingView,  TextInput,  StyleSheet,  Alert,} from "react-native";
import { Button, ButtonText } from "../../components";
import Loading from '../../components/Loading';
import { useAuth } from "../../contexts/auth";
import { IRegister, IUser } from "../../interfaces/User.interface";
import { LoginTypes } from "../../types/ScreenStack.types";


export default function Cadastrar({ navigation }: LoginTypes) {
  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  const [isLoading, setIsLoading] = useState(true);
  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
  }
  function handleLogin() {
    navigation.navigate("Login");
  }
  async function handleRegister() {
    try {
      setIsLoading(true);
      if (data?.email && data.name && data.password) {
        await register(data);
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
      Alert.alert(`${data.message} ${message}`);
    } finally {
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
        <View style={criarcontaStyle.container}>
            <ImageBackground  source={require('../../../img/Login.png')} style={criarcontaStyle.image}>
                <SafeAreaView style={criarcontaStyle.content}>
                    <View style={criarcontaStyle.view}>
                        <KeyboardAvoidingView>
                            <Text style={styles.title}>Crie sua Conta</Text>
                            <View style={styles.formRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="Nome"
                                onChangeText={(i) => handleChange({ name: i })}
                            ></TextInput>
                            </View>
                            <View style={styles.formRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"
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
                            <Button  style={styles.cadastrar} title="Cadastrar" onPress={handleRegister} />
                            <ButtonText style={styles.voltar} title="Voltar"  onPress={() => navigation.navigate('Login')} />
                        </KeyboardAvoidingView>
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
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 36,
      color: "#003777",
      fontWeight: "500",
      marginBottom: 20,
      textAlign: "center",
    },
    cadastrar: {
      backgroundColor: "#2079FF",
      borderRadius: 47,
      marginTop: 10,
      height: 50,
     
    },
    formRow: {
      margin: 10,
      flexDirection: "row",
    },
    label: {
      fontSize: 18,
      color: "black",
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
    voltar:{
      marginTop: -5,
    },
  });