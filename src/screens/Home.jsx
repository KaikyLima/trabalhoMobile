import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View, TouchableOpacity} from "react-native";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#50515a", 
  },
  itemText: {
    backgroundColor: "#50515a",
    color: "#f9f9f9", 
    fontSize: 16,
    padding: 10,
  },
  imageCss: {
    backgroundColor: "#50515a",
    width: 100,
    height: 100,
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
      <View style={styles.container}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Image source={{uri:item.image}} style={styles.imageCss}/>
        <Text style={styles.itemText}>{item.rarity}</Text>
        <TouchableOpacity onPress={() => navegarDetalhes(item)}>
            <Text style={styles.itemText}>Detalhes...</Text>
        </TouchableOpacity>
      </View>
    )
  };

  

  return (
    <SafeAreaView >
      <FlatList data={csgo} renderItem={renderItem} />
    </SafeAreaView>
  );

}


export default Home;