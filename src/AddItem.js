import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const AddItem = ({ text, setText, addItem }) => {


  return (
    <View style={styles.buttonContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escriba aquí..."
          onChangeText={(value) => setText(value)}
          value={text}
        />
      </View>
      <Pressable style={styles.button} onPress={() => addItem()}>
        <Ionicons name="add-circle-outline" size={35} color="red" />
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({

  inputContainer: {
    borderColor: "red",
    borderWidth: 1,
    width: 200,
    borderRadius: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  input: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 18,
    width: 180,
  },

  button: {
    marginLeft: 10,
  },


})

export default AddItem
