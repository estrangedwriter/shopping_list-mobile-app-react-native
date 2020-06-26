import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: '1', text: 'Entrepreneur' },
    {id: '2', text: "Oprah's Book Club"},
    {id: '3', text: 'Sports 24/7' },
    {id: '4',text: "Women's fitness tips" },
    {id: '5', text: "Men's Health"},
    {id: '6', text: "Black Lives Matter"},
  ]);


const deleteItem = id => {
  setItems(prevItems => {
    return prevItems.filter(item=> item.id != id);
  });
}

const addItem = (text) => {
  if(!text) {
    Alert.alert('Error', 'Please enter an item', { text: 'Ok'});
  } else {
  setItems(prevItems => {
    return [{id: '5', text}, ...prevItems];
  });
 }
}

  return ( 
    <View style={styles.container}>
      <Header/>
      <FlatList 
        data={items} 
        renderItem={({item}) => (
        <ListItem item = {item} deleteItem = {deleteItem}/>
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 0,
  },
});

export default App;

