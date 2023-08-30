import React, { useState, useCallback, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const Home = () => {
  const [csgo, setCsgo] = useState([]);

  const fetchCsgoData = useCallback(async () => {
    try {
      const { data: response } = await axios.get(
        "https://cs2-api.vercel.app/api/items?page=1"
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
    <SafeAreaView style={styles.container}>
      <FlatList data={csgo} renderItem={renderItem} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create =( {
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

console.log("teste")

export default Home;
