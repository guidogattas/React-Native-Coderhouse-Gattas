import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import AddItem from './src/AddItem';
import ListItem from './src/ListItem';
import CustomModal from './src/CustomModal';


export default function App() {

  const initialState = [
    { id: 1, text: 'Harina' },
    { id: 2, text: 'Cereal' },
    { id: 3, text: 'Huevos' },
  ]

  const [text, setText] = useState('');
  const [list, setList] = useState(initialState);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addItem = () => {
    if (text) {
      const newItem = { id: Math.random(), text: text };
      setList([...list, newItem]);
      setText('');
    }
  }

  const clearList = () => {
    setList([]),
      setIsModalVisible(false);
  }

  return (
    <View >

      <CustomModal clearList={clearList} setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />

      <Image style={styles.image} source={{ uri: 'https://media.istockphoto.com/id/1303877287/vector/paper-checklist-and-pencil-flat-pictogram.jpg?s=612x612&w=0&k=20&c=NoqPzn94VH2Pm7epxF8P5rCcScMEAiGQ8Hv_b2ZwRjY=' }} />
      <Text style={styles.titulo}>Lista de Compras</Text>

      <AddItem text={text} addItem={addItem} setText={setText} />

      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <ListItem item={item} />
        }
      />

      <Pressable style={styles.button} onPress={() => setIsModalVisible(true)}>
        <Ionicons name="trash" size={30} color="red" />
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  titulo: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 30,
    borderBottomColor: 'red',
    borderBottomWidth: 5,
    width: 'auto',
  },
  image: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    marginTop: 40,
  },
  button: {
    marginTop: 40,
    alignSelf: 'center',
  }
});
