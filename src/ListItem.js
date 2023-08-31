import { StyleSheet, View, Text, Pressable } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'

const ListItem = ({ item }) => {

  const [done, setDone] = useState(false)

  return (
    <View style={styles.viewContainer}>
      <Text style={[styles.list, done ? styles.notDone : styles.list]} >
        {item.text}
      </Text>

      <Pressable onPress={() => { setDone(!done) }}>

        {done
          ? <AntDesign name="checkcircle" size={24} color="green" />
          : <MaterialIcons name="radio-button-unchecked" size={24} color="green" />
        }

      </Pressable>

    </View>
  )
}
const styles = StyleSheet.create({
  viewContainer:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginHorizontal: 20,
    alignItems: 'center',
  },

  list: {
    fontSize: 20,
    marginVertical: 2,
    textAlign: 'left',
  },

  notDone: {
    textDecorationLine: 'line-through',
  }

})

export default ListItem