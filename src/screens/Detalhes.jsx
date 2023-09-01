import { useCallback, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { TouchableOpacityComponent } from "react-native";
import { FlatList, Image, SafeAreaView, StyleSheet, View, Text} from "react-native";
import axios from "axios";


const Detalhes = ({route}) => {

    console.log(route.params.id)

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

    const [detalhe, setDetalhes] = useState([])

    const fetchDetalhesData = useCallback(async () => {
        try{
            const { data: response } = await axios.get(
                "https://cs2-api.vercel.app/api/items"
            );
            setDetalhes(response.data);
        }catch(error){
            console.error(error);
        }
    }, [])

    useEffect(() => {
        fetchDetalhesData();
      }, []);

      

      const renderItem = ({ item }) => {
        return  (
          <View>
            <Text style={styles.itemText}>{item.name}</Text>
            <Image source={{uri:item.image}} style={styles.imageCss}/>
            <Text>{item.rarity}</Text>
            <Text>{item.description}</Text>
          </View>
        )
      };

    return (
        <SafeAreaView>
             <FlatList data={detalhe} renderItem={renderItem} />
        </SafeAreaView>
        
    );
}

export default Detalhes;