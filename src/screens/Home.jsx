import React, { useState, useCallback, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const Home = () => {
  const [csgo, setCsgo] = useState([]);

  const fetchCsgoData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://cs2-api.vercel.app/api/items?page=1"
      );
      setCsgo(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchCsgoData();
  }, []);

  const renderItem = ({ item }) => {
    return <Text style={styles.itemText}>{item.name}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={csgo} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    backgroundColor: "#f0f0f0", 
  },
  itemText: {
    color: "black", 
    fontSize: 16,
    padding: 10,
  },
};

export default Home;
