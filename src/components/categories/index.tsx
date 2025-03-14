import { FlatList } from "react-native"

import { styles } from './styles'
import { Category } from "@/components/category"

export type CategoriesProps = {
  id: string,
  name: string,
}[]

type Props = {
  data: CategoriesProps,
  selected: string,
  onSelected: (id: string) => void
}

export function Categories({ data, selected, onSelected }: Props){
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => 
        <Category 
          name={item.name} 
          iconId={item.id} 
          onPress={() => onSelected(item.id)} 
          isSelected={item.id === selected}
        />
      }
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  )
}