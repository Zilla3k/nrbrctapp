import { ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

export function LoadingComponent(){
  return <ActivityIndicator style={styles.container} color={colors.green.base}/>;
}