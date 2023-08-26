import { Alert, SafeAreaView, TextInput, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   


const verificarLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.Alert('O preenchimento dos campos é obrigatório');
    }
  };

     return (
        <SafeAreaView>
            <TextInput 
            style={styles.input}
            onChangeText= {setEmail}
            value = {email}
        />
        <TextInput 
            style={styles.input}
            onChangeText= {setPassword}
            value = {password}
        />
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
  });

export default LoginPage;