import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import LoginPage from './src/screens/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Detalhes from './src/screens/Detalhes';
import { FlatList, Image, SafeAreaView, StyleSheet, View, TouchableOpacity} from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PaginaExtra from './src/screens/PaginaExtra';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="PaginaExtra" component={PaginaExtra} />

      </Stack.Navigator>
  </NavigationContainer>
  );
}