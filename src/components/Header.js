import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = ({title, followers, following}) => {
  return ( 
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.followers}>{followers}</Text>
      <Text style={styles.following}>{following}</Text>
    </View>
  );
};

Header.defaultProps = {
    title: 'Parker Miller',
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
      marginLeft:0,
  },
  following: {
    color: '#F08080',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

export default Header;
