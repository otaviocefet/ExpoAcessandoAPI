import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { criarcontaStyle} from '../styles/criarcontaStyle';
import { SafeAreaView, View, Text, ImageBackground} from 'react-native';
import { Card, TextInput, Button} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    Email: Yup.string().email("Informe um email válido").required("Email requerido"),
    Senha: Yup.string().required("Senha Requerida"),
    ConfirmarSenha: Yup.string().oneOf([Yup.ref('Senha')]).required("Senha Requerida"),

});


export function CriarConta() {
    const navigation = useNavigation();
    const login = () => navigation.navigate('MenuLi');

    return (
        <View style={criarcontaStyle.container}>
            <ImageBackground  source={require('../../img/Login.png')} style={criarcontaStyle.image}>
                <SafeAreaView style={criarcontaStyle.content}>
                    <View style={criarcontaStyle.view}>
                        <Card>
                            <Card.Title title="Registrar"></Card.Title>
                            <Formik
                                
                                validationSchema = {schema}
                                initialValues={{
                                    Email: '',
                                    Senha: '',
                                    ConfirmarSenha: '',
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
                                        <TextInput onChangeText={handleChange('ConfirmarSenha')} value={values.ConfirmarSenha} label="Confirmar Senha:" secureTextEntry={true}></TextInput>
                                        {errors.ConfirmarSenha &&
                                            <Text style={{fontSize:10, color: 'red'}}>{errors.ConfirmarSenha} </Text>
                                        }
                                        <Button onPress={handleSubmit} mode="contained" style={criarcontaStyle.cardButton} disabled={!isValid}>Registrar</Button>
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

export default CriarConta;