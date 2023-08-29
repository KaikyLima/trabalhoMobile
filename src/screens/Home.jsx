import axios from "axios";
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

const Pagination = ({request, offset}) => {

    const nextPage = () => {
        request(offset + 10)
    }

    const previousPage = () => {
        if (offset <= 10) return
        request(offset - 10)
    }

    return (
        <view>
            <TouchableOpacity>
            <Text onClick={previousPage}> Carregar menos </Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <Text onClick={nextPage}> Carregar mais </Text>
            </TouchableOpacity>
            
        </view>
    )

    
}

const Home = () => {


const fetchCsgoData = useCallback (async (paramOffset) =>{
    const [offset, setOffset] = useState(10);
    const [csgo, setCsgo] = useState ([]);

        try{
            const{data} = await axios.get('https://cs2-api.vercel.app/api/items?page=1')
            setCsgo(data)
        }catch(error){
            console.error(error)
        }

    },[])

    useEffect(() => {
        fetchCsgoData()
    },[])

    return (

    );
}

export default Home;