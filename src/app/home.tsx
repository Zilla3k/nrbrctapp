import { View, Text, StyleSheet, Alert} from "react-native";
import { useEffect, useState } from "react";

import { api } from "@/api/api";

import { Places } from "@/components/places";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { colors } from "@/styles/theme";

type MarketsProps = PlaceProps & {

}

export default function HomePage(){
  const [categories, setCategories] = useState<CategoriesProps>([])
  const [category, setCategory] = useState("")
  const [markets, setMarkets] = useState<MarketsProps[]>([])

  async function fetchCategories(){
    try {
      const { data } = await api.get('/categories')
      setCategories(data)
      setCategory(data[0].id)
    } catch (error) {
      console.error(error)
      Alert.alert('Error', 'An error occurred while fetching categories')
    }
  }

  async function fetchMarkets(){
    try{
      if(!category) return

      const {data} = await api.get("/markets/category/" + category)
      setMarkets(data)
    } catch(err){
      console.log(err)
      Alert.alert("Erro", "Erro ao carregar estabelecimentos!")
    }
  }

  useEffect(() => {
    fetchCategories() 
  }, [])
 
  useEffect(() => {
    fetchMarkets() 
  }, [category])

  return (
    <View style={styles.container}>
      <Categories 
        data={categories} 
        onSelected={setCategory} 
        selected={category}
      />
      <Places data={markets}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cecece"
  },
}) 