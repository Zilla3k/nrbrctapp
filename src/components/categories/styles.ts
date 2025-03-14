import { StyleSheet, useWindowDimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    maxHeight: 36,
    position: "absolute",
    zIndex: 9999,
    top: "7%",
    marginHorizontal: "auto"
  },
  content: {
    gap: 8,
    paddingHorizontal: 24,
  },
})