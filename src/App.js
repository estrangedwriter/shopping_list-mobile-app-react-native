/*
** Bitbroker Labs React Native Challenge, 2020
** 
** File description: This App.js file is the main file that will render and run the react native challenge application.
** 
**
*/

import React, {useState} from 'react';
import { View, FlatList, StyleSheet} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items] = useState([
    {id: '1', 
    text: 'Entrepreneur', 
    description: "A group of builders talking about what they've built already and what's still ahead", 
    figure1: "8 Members", figure2:  "1.2M Thanks", figure3:  "57k Followers",
    path: require('./images/entrepreneur.jpeg'),
    emoji: require('./images/ship.png') },

    {id: '2', 
    text: "Oprah's Book Club", 
    description: "Highlighting books chosen by Oprah Winfrey since 1996",
    figure1: "6 Members", figure2: "1M Thanks", figure3: "49k Followers",
    path: require("./images/oprah.jpg") },

    {id: '3', 
    text: 'Sports 24/7' , 
    description: "The leading group of sports experts covering everything you love from football to boxing",
    figure1: "15 Members", figure2:"5.3M Thanks", figure3: "291k Followers",
    path: require("./images/sportscenter.png")},

    {id: '4',
    text: "Women's fitness tips", 
    description: "Fitness professionals who will show YOU how to get that rockin' BOD you been waitin' for!",
    figure1: "1 Member", figure2:  "1M Views", figure3:  "1M Followers",
    path: require("./images/woman.jpg")},

    {id: '5', 
    text: "Parker Miller", 
    description: "Husband. Father. Product creator. Stanford + BYU alum.",
    figure1: "8 Members", figure2:  "1.2M Thanks", figure3:  "57k Followers",
    path: require("./images/parker.jpeg"), 
    username: "@heypmiller"},
  ]);

  return ( 
    <View style={styles.container}>
      <Header/>
      <FlatList 
        data={items} 
        renderItem={({item}) =>  <ListItem item = {item}/> }
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

