import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { criarcontaStyle} from '../styles/criarcontaStyle';
import { SafeAreaView, ImageBackground} from 'react-native';
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import {  View,  Text,  KeyboardAvoidingView,  TextInput,  StyleSheet,  Alert,} from "react-native";
import { Button, ButtonText } from "../components";
import { useAuth } from "../hook/auth";
import { IRegister, IUser } from "../interfaces/User.interface";
import { LoginTypes } from "../types/ScreenStack.types";
export function CriarConta() {
    const navigation = useNavigation();
    const login = () => navigation.navigate('MenuLi');

  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  const [isLoading, setIsLoading] = useState(true);
  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
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
  
    return (
        <View style={criarcontaStyle.container}>
            <ImageBackground  source={require('../../img/Login.png')} style={criarcontaStyle.image}>
                <SafeAreaView style={criarcontaStyle.content}>
                    <View style={criarcontaStyle.view}>
                        <KeyboardAvoidingView>
                            <Text style={styles.title}>Criar Conta</Text>
                            <View style={styles.formRow}>
                            <Text style={styles.label}>Nome:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nome"
                                onChangeText={(i) => handleChange({ name: i })}
                            ></TextInput>
                            </View>
                            <View style={styles.formRow}>
                            <Text style={styles.label}>E-mail: </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={(i) => handleChange({ email: i })}
                            ></TextInput>
                            </View>
                            <View style={styles.formRow}>
                            <Text style={styles.label}>Senha: </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Senha"
                                secureTextEntry={true}
                                onChangeText={(i) => handleChange({ password: i })}
                            ></TextInput>
                            </View>
                            <Button title="Salvar" onPress={() => navigation.navigate('MenuLi')} />
                            <ButtonText title="Voltar"  onPress={() => navigation.navigate('Login')} />
                        </KeyboardAvoidingView>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default CriarConta;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 36,
      color: "black",
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
      color: "black",
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