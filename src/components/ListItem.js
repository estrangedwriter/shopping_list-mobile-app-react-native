/*
** Bitbroker Labs React Native Challenge, 2020
** 
** File description: This ListItem.js file models the 'ListItem' component of the application.
** 
**
*/

import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = ({item}) => {
  return (     
    <View style = {styles.listItem}>
        
        <Text style={styles.listItemName}>{item.text}</Text>
        <Image source = {{uri: item.emoji}} style={styles.emoji}></Image>
        <Text style = {styles.username}> {item.username}</Text>        
        <View style = {styles.shadow}/>  
        <Image source = {{uri: item.imageURL}} style = {styles.img}/>

        <TouchableOpacity style = {styles.myButton}>
            <View>
                <Text style = {styles.ButtonText}>Following</Text>
            </View>
        </TouchableOpacity>

        <View style = {styles.textcontainer}>
            <Text style = {styles.description}>{item.description}</Text>  
            <Text style = {styles.stats}>{item.stats}</Text>
        </View>
    
    </View>
  );
};


const styles = StyleSheet.create({
/* listItem is the div where information for each item in the list is displayed */
    listItem: {
        height: 120,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#D9D9D9',
    },

    listItemName: {
        position: 'absolute',
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        top: 10,
        left: 80,
    },
    /* For the @heypmiller username */
    username: {    
        position: 'absolute',
        fontSize: 11,
        color: 'grey',
        top: 30,
        left: 75,
        elevation: 1,
    },
    /* div that stores and organizes the text within ListItem*/
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

        description: {
            position: 'absolute',
            fontSize: 14,
            color: 'grey',
            top: 3,
            left: 1,
        },

        stats: {
            position: 'absolute',
            fontSize: 14,
            color: 'grey',
            bottom: 7,
            left: 1,
        },
    /**/
    /* For the "Following" button" */
    myButton:{
        padding: 5,
        width: 75,
        borderRadius: 20,
        backgroundColor:'#FF5959',
        right: 10,
        top: 8,
        position: 'absolute',
    },
    /* Text for the "Following" button"*/
    ButtonText: {
          color:'white',
          fontSize: 13,
          textAlign: 'center',
        },
    /* In Android, there is no 'shadow' option, unlike iOS. To achieve a shadow 
    effect and a border effect for the images , I made a blank white circle to be placed
    underneath each image. Also, the white circle is 'elevated' which creates a shadow effect. */
    shadow: {
          height: 60,
          width: 60,
          backgroundColor: 'white',
          borderRadius: 30,
          left: 10,
          top: 17,
          position: 'absolute',
          elevation: 17,
        },
    img: {
        height: 56,
        width: 56,
        backgroundColor: 'white',
        borderRadius: 28,
        left: 12,
        top: 19,
        position: 'absolute',
        elevation: 18,
    },
    /*emoji after 'entrepreneur' */
    emoji: {
        height: 24,
        width: 20,
        left: 192,
        top: 8,
        position: 'absolute',
    },
});

export default ListItem;
