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
    borderBottomColor: '#DCDCDC',
    
  },
  text: {
      color: '#F08080',
      fontSize: 22,
      textAlign: 'center',
      marginTop: -40,
      fontWeight: 'bold',
  },
  followers: {
      color: 'black',
      fontSize: 17,
      textAlign:'left',
      fontWeight:'bold',
      marginTop:20,
      marginLeft:15,
  },
  following: {
    color: '#F08080',
    fontSize: 17,
    textAlign:'right',
    fontWeight:'bold',
    marginTop:-20,
    marginRight:30,
  },

  icon: {
    textAlign:'left',
    marginTop:-65,
    marginLeft: -30,
  }, 
  ellipsis: {
    textAlign:'right',
    marginTop: -25,
    marginRight: -15,
  } 
});

export default Header;
