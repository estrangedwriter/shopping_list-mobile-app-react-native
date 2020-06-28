/*
** Bitbroker Labs React Native Challenge, 2020
** 
** File description: This App.js file is the main file that will render and run the react native challenge application.
** 
**
*/
import React from 'react';
import Header from './components/Header';
import ListItemFollowing from './components/ListItemFollowing';
import flatlistdata from './data/FlatListData';

const App = () => {

  return ( 
    <View style={styles.container}>
      <Header/>
      <FlatList 
        data={flatlistdata} 
        renderItem={({item}) =>  <ListItemFollowing item = {item}/> }
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

