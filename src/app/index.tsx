import { View, StyleSheet } from "react-native";

import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/btn";
import { IconMapPin } from "@tabler/icons-react-native";

export default function HomePage(){
  return (
    <View style={style.container}>
      <Welcome/>
      <Steps/>
      <Button isLoading={false}>
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