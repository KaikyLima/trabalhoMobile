import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View, TouchableOpacity} from "react-native";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000", 
  },
  itemText: {
    backgroundColor: "#000",
    color: "#808080", 
    fontSize: 30,
    padding: 10,
  },
  imageCss: {
    backgroundColor: "#000",
    width: 400,
    height: 350,
  },
  divisao: {
    backgroundColor: "#FFFF00",
    width: 800,
    height: 5
  }
});

const Home = ({navigation}) => {
  const [csgo, setCsgo] = useState([]);

  const fetchCsgoData = useCallback(async () => {
    try {
      const { data: response } = await axios.get(
        "https://cs2-api.vercel.app/api/items"
      );
      setCsgo(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const navegarDetalhes = (item) => {
    console.log(item.id)
    navigation.navigate('Detalhes', {id: item.id})
  }
  
  useEffect(() => {
    fetchCsgoData();
  }, []);

  const renderItem = ({ item }) => {
    return  (
      <TouchableOpacity onPress={() => navegarDetalhes(item)}>
      <View style={styles.container}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Image source={{uri:item.image}} style={styles.imageCss}/>
        <Text style={styles.itemText}>{item.rarity}</Text>
      </View>
      <View style={styles.divisao}></View>
      </TouchableOpacity>
      
    )
  };

  

  return (
    <SafeAreaView >
      <FlatList data={csgo} renderItem={renderItem} />
    </SafeAreaView>
  );

}


export default Home;