import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator, Text, TextProps } from "react-native";

import { styles } from "./style";
import { colors } from "@/styles/theme";
import { IconProps } from "@tabler/icons-react-native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean,
}

export function Button({ children, style, isLoading = false, ...rest}: ButtonProps){
  return (
    <TouchableOpacity 
      style={[styles.container, style]}
      activeOpacity={0.5}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : (children)}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps){
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

type IconProp = { 
  icon?: React.ComponentType<IconProps>
}


function Icon({ icon: Icon }: IconProp){
  return (
    Icon ? <Icon size={24} color={colors.gray[100]} /> : null
  );
}

Button.Title = Title;
Button.Icon = Icon;