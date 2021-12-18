import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { loginStyle} from '../styles/login.style';
import { SafeAreaView, View, Text, ImageBackground} from 'react-native';
import { Card, TextInput, Button} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';



const schema = Yup.object().shape({
    Email: Yup.string().email("Informe um email válido").required("Email requerido"),
    Senha: Yup.string().required("Senha Requerida"),
});



export function Login() {
    const navigation = useNavigation();
    const login = () => navigation.navigate('MenuLi');
    return (
        <View style={loginStyle.container}>
            <ImageBackground  source={require('../../img/Login.png')} style={loginStyle.image}>
                <SafeAreaView style={loginStyle.content}>
                    <View style={loginStyle.view}>
                        <Card>
                            <Card.Title title="Login"></Card.Title>
                            <Formik
                            
                                validationSchema = {schema}
                                initialValues={{
                                    Email: '',
                                    Senha: '',
                                }}
                                
                                onSubmit={login}
                                
                            >
                                {({errors, handleChange, handleSubmit, handleBlur, isValid, values}) => (
                                    <Card.Content>
                                        <TextInput onChangeText={handleChange('Email')} value={values.Email} label="Email:" keyboardType="email-address"></TextInput>
                                        {errors.Email && (
                                            <Text style={{fontSize:10, color: 'red'}}>{errors.Email} </Text>)}


                                        <TextInput onChangeText={handleChange('Senha')} value={values.Senha} label="Senha:" secureTextEntry={true}></TextInput>
                                        {errors.Senha && 
                                            <Text style={{fontSize:10, color: 'red'}}>{errors.Senha} </Text>
                                        }
                                        <Button onPress={() => navigation.navigate('CriarConta')} uppercase={false} style={loginStyle.cardButton}>Não tem conta? Crie aqui!</Button>

                                        <Button onPress={handleSubmit} disabled={!isValid} mode="contained" style={loginStyle.cardButton}>Login</Button>

                                    </Card.Content>

                                )}
                                </Formik>
                                <Text> </Text>
                                <Text> </Text>
                        </Card>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default Login;