import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native";

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

const Home = () => {
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
  
  useEffect(() => {
    fetchCsgoData();
  }, []);

  const renderItem = ({ item }) => {
    return  (
      <View>
        <Text style={styles.itemText}>{item.name}</Text>
        <Image source={{uri:item.image}} style={styles.imageCss}/>
        <Text>{item.rarity}</Text>
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