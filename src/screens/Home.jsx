import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View, TouchableOpacity} from "react-native";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0fdff", 

  },
  itemText: {
    color: "black", 
    fontSize: 16,
    padding: 10,
  },
  imageCss: {
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
    navigation.navigate('Detalhes', {id: item.id})
  }
  
  useEffect(() => {
    fetchCsgoData();
  }, []);

  const renderItem = ({ item }) => {
    return  (
      <View>
        <Text style={styles.itemText}>{item.name}</Text>
        <Image source={{uri:item.image}} style={styles.imageCss}/>
        <Text>{item.rarity}</Text>
        <TouchableOpacity onPress={() => navegarDetalhes(item)}>
            <Text>Detalhes...</Text>
        </TouchableOpacity>
      </View>
    )
  };

  

  return (
    <SafeAreaView>
      <FlatList data={csgo} renderItem={renderItem} />
    </SafeAreaView>
  );

}


export default Home;