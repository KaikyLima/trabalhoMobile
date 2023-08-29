import { Alert, SafeAreaView, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   


const verificarLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('O preenchimento dos campos é obrigatório');
    }
  };

     return (
        <SafeAreaView>
            <TextInput 
            placeholder="Email"
            style={styles.input}
            onChangeText= {setEmail}
            value = {email}
        />
        <TextInput 
        placeholder="Senha"
            style={styles.input}
            onChangeText= {setPassword}
            value = {password}
        />

        <TouchableOpacity style={styles.button} onPress={verificarLogin}>

            <Text>Logar</Text>

        </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 60,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        backgroundColor:"#AAA"
    }
  });

export default LoginPage;