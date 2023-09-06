import React, { useState } from 'react';
import { Alert, SafeAreaView, TextInput, Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verificarLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('O preenchimento dos campos é obrigatório');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <Image source={require('../images/logo.gif')} style={styles.imageCss}/>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={verificarLogin}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Defina a cor de fundo desejada
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    width: '80%', // Use a largura desejada
    marginVertical: 10, // Reduza a margem vertical
    borderWidth: 1,
    padding: 10,

  },
  button: {
    backgroundColor: '#c1bdad',
    width: '80%', // Use a largura desejada
    padding: 10,
    alignItems: 'center', // Centralize o conteúdo horizontalmente
  },
  buttonText: {
    color: '#0c242a', // Defina a cor do texto desejada
  },
  imageCss: {
    width: 400,
    height: 300,
    margin: -100
  },
});

export default LoginPage;
