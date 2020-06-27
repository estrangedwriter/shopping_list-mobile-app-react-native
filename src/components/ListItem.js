import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = ({item, followers, following}) => {
  return ( 
    
    <View style = {styles.listItem}>
        
        <Text style={styles.listItemName}>{item.text}</Text>
        <Image source = {{uri: item.emoji}} style={styles.emoji}></Image>
        <Text style = {styles.username}> {item.username}</Text>        
        <View style = {styles.shadow}/>  
        <Image source = {{uri: item.imageURL}} style = {styles.img}/>

        <TouchableOpacity style = {styles.myButton}>
            <View>
                <Text style = {styles.ButtonText}>{following}</Text>
            </View>
        </TouchableOpacity>

        <View style = {styles.textcontainer}>
            <Text style = {styles.description}>{item.description}</Text>  
            <Text style = {styles.stats}>{item.stats}</Text>
        </View>
    
    </View>
  );
};

ListItem.defaultProps = {
    following: 'Following',
    followers: 'Followers'
}

const styles = StyleSheet.create({
    listItem: {
        marginTop: 30,
        height: 90,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#D9D9D9',
        },

    listItemName: {
        fontSize: 18,
        fontWeight: 'bold',
        bottom: 21,
        left: 80,
        textAlign: 'left',
        },

    description: {
        top: 3,
        position: 'absolute',
        textAlign: 'left',
        fontSize: 14,
        color: 'grey',
        left: 1,
        },
        
    username: {    
        textAlign: 'left',
        fontSize: 11,
        color: 'grey',
        position: 'absolute',
        top: 0,
        left: 75,
        elevation: 1,
    },

    stats: {
        textAlign: 'left', 
        fontSize: 14,
        color: 'grey',
        bottom: 7,
        position: 'absolute',
        left: 1,
        // left: 80,
    },
    textcontainer: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 0,
        height: 75,
        position: 'absolute',
        width: 300,
        right: 33,
        bottom: 5,
        elevation: 0,
    },

    myButton:{
        padding: 5,
        width: 75,
        borderRadius: 20,
        backgroundColor:'#FF5959',
        right: 10,
        top: -22,
        position: 'absolute',
        },

    ButtonText: {
          color:'white',
          fontSize: 13,
          textAlign: 'center',
        },

    shadow: {
          height: 60,
          width: 60,
          backgroundColor: 'white',
          borderRadius: 30,
          left: 10,
          top: -14,
          position: 'absolute',
          elevation: 17,
        },

    img: {
        height: 56,
        width: 56,
        backgroundColor: 'white',
        borderRadius: 28,
        left: 12,
        top: -12,
        position: 'absolute',
        elevation: 30,
    },

    emoji: {
        height: 24,
        width: 20,
        left: 192,
        top: -21,
        position: 'absolute',
    },
});

export default ListItem;
