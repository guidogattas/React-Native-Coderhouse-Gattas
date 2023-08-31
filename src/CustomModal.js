import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomModal = ({ clearList, setIsModalVisible, isModalVisible }) => {
  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
    >
      <View
        style={styles.modalContainer}>
        <Text style={styles.modalText}>¿Estás seguro que deseas eliminar la lista?</Text>
        <Pressable onPress={() => clearList()}>
          <Text style={styles.modalPressable}>Sí</Text>
        </Pressable>
        <Pressable onPress={() => setIsModalVisible(false)}>
          <Text style={styles.modalPressable}>No</Text>
        </Pressable>

      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    height: 250,
    top: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalPressable: {
    margin: 6,
    fontSize: 20,
    color: 'white',
    textAlign: "center",
    justifyContent: "center",
  },
})

export default CustomModal