import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  imageCss:{
    width: 400,
    height: 400,
    
  }
})

const PaginaExtra = () => {
  const [cat, setCat] = useState([]);

  const fetchCat = useCallback(async () => {
    try {
      const { data: response } = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=10`
      );
      setCat(response);
      console.log(cat)
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchCat();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={{ uri: item.url }} style={styles.imageCss} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={cat}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={fetchCat}
      />
    </SafeAreaView>
  );
};

export default PaginaExtra;
