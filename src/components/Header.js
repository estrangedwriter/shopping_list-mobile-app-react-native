import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = ({name, followers, following}) => {
  return ( 
      <View style={styles.header}>
        <Text style={styles.text}>{name}</Text>

        <Text style={styles.followers}>{followers}</Text>

        <Text style={styles.following}>{following}</Text>

        <Icon name="chevron-left" 
            size = {21} 
            color = '#708090'
            style = {styles.icon} >
        </Icon>
        <Icon name = "ellipsis-h"
          size = {21}
          color = '#708090'
          style = {styles.ellipsis} >
        </Icon>
        <View style = {styles.border}/>
      </View>
  );
};


Header.defaultProps = {
    name: 'Parker Miller',
    following: 'Following',
    followers: 'Followers'
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    padding: 50,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
  },
  border: {
    position: 'absolute',
    padding: 0,
    height: 0,
    right: 0,
    width: 200,
    bottom: 0,
    borderBottomColor: '#F08080',
    borderBottomWidth: 3,
    backgroundColor: 'black',
  },
  text: {
      color: '#F08080',
      fontSize: 22,
      textAlign: 'center',
      top: -35,
      fontWeight: 'bold',
  },
  followers: {
      color: 'black',
      fontSize: 17,
      textAlign:'left',
      fontWeight:'bold',
      top:-12,
      left: 30,
  },
  following: {
    color: '#F08080',
    fontSize: 17,
    textAlign:'right',
    fontWeight:'bold',
    top: -35,
    right: 15,
  },

  icon: {
    textAlign:'left',
    bottom: 108,
    left: -30,
  }, 
  ellipsis: {
    textAlign:'right',
    bottom: 130,
    left: 20,
  } 
});

export default Header;
