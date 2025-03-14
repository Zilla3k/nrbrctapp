import { View, StyleSheet } from "react-native";
import { router } from "expo-router"

import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";

export default function HomePage(){
  return (
    <View style={style.container}>
      <Welcome/>
      <Steps/>
      <Button 
        isLoading 
        onPress={
          () => router.navigate("/home")
        }>
        <Button.Title>
          Ver locais parceiros
        </Button.Title>
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 40
  },
})