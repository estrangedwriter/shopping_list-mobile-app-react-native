import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const ListItem = ({item}) => {
  return ( 
    
    <View style = {styles.listItem}>
        
        <Text style={styles.listItemName}>{item.text}</Text>

        <Image source = {{uri: item.emoji}} style={styles.emoji}></Image>

        <Text style = {styles.description}>{item.subtitle}</Text>     
        
        <TouchableOpacity style = {styles.myButton}>
            <View>
                <Text style = {styles.FollowingStyle}>Following</Text>
            </View>
        </TouchableOpacity>
        
        <View style = {styles.shadow}/>  
        <Image source = {{uri: item.imageURL}} style = {styles.img}/>


        <Text style = {styles.stats}>{item.stats}</Text>
        
        <Text style = {styles.username}> {item.username}</Text>
    
    </View>

    
  );
};


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
        bottom: 20,
        left: 80,
        textAlign: 'left',
        },

    description: {
        marginTop: 5,
        textAlign: 'left',
        fontSize: 14,
        color: 'grey',
        bottom: 15,
        left: 80,
        },
        
    username: {    
        textAlign: 'left',
        fontSize: 11,
        color: 'grey',
        bottom: 84,
        left: 75,
    },

    stats: {
        textAlign: 'left', 
        fontSize: 14,
        color: 'grey',
        bottom: 5,
        left: 80,
    },
    myButton:{
        padding: 5,
        width: 75,
        borderRadius:20,
        backgroundColor:'#FF5959',
        right: 10,
        top: -27,
        marginTop: 5,
        position: 'absolute',
        },

    FollowingStyle: {
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
          top: -10,
          position: 'absolute',
          elevation: 17,
        },

    img: {
        height: 56,
        width: 56,
        backgroundColor: 'white',
        borderRadius: 28,
        left: 12,
        top: -8,
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
