import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: '1', text: 'Entrepreneur', subtitle: "A group of builders talking about what they've\nbuilt already and what's still ahead", 
    stats: "8 Members   1.2M Thanks   57k Followers",
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYRldrYp8rAUVWdWEYkuoir3abUwsskDC76g&usqp=CAU' },

    {id: '3', text: "Oprah's Book Club", subtitle: "Highlights books chosen by Oprah Winfrey\nsince 1996",
    stats: "6 Members   1M Thanks   49k Followers",
    imageURL: "https://i.pinimg.com/originals/3a/20/5a/3a205a95123932e04466b68c81d2771e.jpg" },

    {id: '5', text: 'Sports 24/7' , subtitle: "The leading group of sports experts covering\neverything you love from football to boxing",
    stats: "15 Members   5.3M Thanks   291k Followers",
    imageURL: "https://d1qxviojg2h5lt.cloudfront.net/images/01D1Q9RER1CRRW194K8TBDC8D4/sportscenter4090.png"},

    {id: '7',text: "Women's fitness tips", subtitle: "Fitness professionals who will show YOU how to\nget that rockin' BOD you been waitin' for!",
    stats: "1 Member   1M Views   1M Followers",
    imageURL: "https://www.dhresource.com/0x0/f2/albu/g6/M00/F0/48/rBVaR1tj_gWAfGENAAF9liT5_5Y282.jpg"},

    {id: '9', text: "Parker Miller", subtitle: "Husband. Father. Product creator. Stanford + BYU\nalum.",
    stats: "8 Members   1.2M Thanks   57k Followers",
    imageURL: "https://randomuser.me/api/portraits/men/1.jpg", 
    username: "@heypmiller"},
  ]);


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

