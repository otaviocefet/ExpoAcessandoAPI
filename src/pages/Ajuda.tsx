import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { AjudaStyle} from '../styles/ajuda.style'
import { SafeAreaView, View, Text, ImageBackground} from 'react-native';
import { Card, TextInput, Button} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    Texto: Yup.string().required("É necessário que preencha o campo! ")
});




export function Ajuda() {
    const navigation = useNavigation();
    return (
        <View style={AjudaStyle.container}>
            <ImageBackground  source={require('../../img/Login.png')} style={AjudaStyle.image}>
            <SafeAreaView style={AjudaStyle.content}>
                    <View style={AjudaStyle.view}>
                        <Card>
                            <Card.Title title="Informe seu Problema!"></Card.Title>
                            <Formik
                            
                                validationSchema = {schema}
                                initialValues={{
                                    Texto: '',
                                }}
                                
                                onSubmit={values => console.log(values)}
                                
                            >
                                {({errors, handleChange, handleSubmit, isValid, values}) => (
                                    <Card.Content>
                                        <TextInput onChangeText={handleChange('Texto')} value={values.Texto} label="O que você Precisa?"></TextInput>
                                        {errors.Texto && (
                                            <Text style={{fontSize:10, color: 'red'}}>{errors.Texto} </Text>)}

                                        <Text></Text>
                                    

                                        <Button onPress= {() => {
                                            alert ("Enviado!")
                                        }} disabled={!isValid} mode="contained" style={AjudaStyle.cardButton}>Enviar</Button>

                                        <Text></Text>
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
    )
}

export default Ajuda;