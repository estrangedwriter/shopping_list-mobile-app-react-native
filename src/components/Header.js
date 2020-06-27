/*
** Bitbroker Labs React Native Challenge, 2020
** 
** File description: This Header.js file models the 'header' component of the application.
** 
**
*/

import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = ({name, followers, following}) => {
  return ( 
      <View style={styles.header}>
        
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.followers}>{followers}</Text>

        <Text style={styles.following}>{following}</Text>
      
        <Icon name="chevron-left" 
            size = {21} 
            color = '#708090'
            style = {styles.chevron} >
        </Icon>
        <Icon name = "ellipsis-h"
          size = {21}
          color = '#708090'
          style = {styles.ellipsis} >
        </Icon>

        <View style = {styles.followingborder}/>
      </View>
  );
};


Header.defaultProps = {
    name: 'Parker Miller',
    following: 'Following',
    followers: 'Followers'
}

const styles = StyleSheet.create({
/* primary div for the header component*/  
  header: {
    height: 100,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
  },
/* styling for the user's name "Parker Miller"*/  
  name: {
      textAlign: 'center',
      color: '#FF5959',
      fontSize: 22,
      top: 12,
      fontWeight: 'bold',
      fontFamily: 'Normal'
  },
/* styling for the 'back' arrow button*/  
  chevron: {
    top: 20,
    left: 20,
    position: 'absolute',
  }, 
/* styling for the 'ellipsis' menu button*/  
  ellipsis: {
    top: 20,
    right: 20,
    position: 'absolute',
  },
/* styling for the followers text*/  
  followers: {
      position: 'absolute',
      color: 'black',
      fontSize: 17,
      textAlign:'left',
      fontWeight:'bold',
      bottom: 10,
      left: 65,
  },
/* styling for the following text*/  
  following: {
    position: 'absolute',
    color: '#FF5959',
    fontSize: 17,
    textAlign:'right',
    fontWeight:'bold',
    bottom: 10,
    right: 65,
  },
/* styling for the border underneath 'Following'*/  
  followingborder: {
    position: 'absolute',
    height: 0,
    right: 0,
    width: 205,
    bottom: 0,
    borderBottomColor: '#FF5959',
    borderBottomWidth: 3,
  },
});

export default Header;
