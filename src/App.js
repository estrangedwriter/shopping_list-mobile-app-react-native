import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: '1', text: 'Entrepreneur', subtitle: "A group of builders talking about what they've\nbuilt already and what's still ahead"} ,
    {id: '3', text: "Oprah's Book Club", subtitle: "Highlights books chosen by Oprah Winfrey\nsince 1996"},
    {id: '5', text: 'Sports 24/7' , subtitle: "The leading group of sports experts covering\neverything you love from football to boxing"},
    {id: '7',text: "Women's fitness tips", subtitle: "Fitness professionals who will show YOU how to\nget that rockin' BOD you been waitin' for!" },
    {id: '9', text: "Parker Miller", subtitle: "Husband. Father. Product creator. Stanford + BYU\nalum." },
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
        renderItem={({item}) => ( <ListItem item = {item}/>)}
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

