import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const ListItem = ({item}) => {
  return ( 
    <TouchableOpacity style={styles.listItem}>
        <View>
            <Text style={styles.listItemText}>{item.text}</Text>

            <Text style = {styles.subtitles}>{item.subtitle}</Text>     
    
            <View style ={styles.myButton}>
                <Text style = {styles.FollowingStyle}>Following</Text>
            </View>
            
            <View style = {styles.shadow}/>  

            <Text style = {styles.stats}>{item.stats}</Text>
            <Image source = {{uri: item.imageURL}} style = {styles.img}/>

            <Text style = {styles.username}> {item.username}</Text>
        </View> 
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    listItem: {
        // padding: 20,
        marginTop: 30,
        height: 90,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'grey',
        },

    listItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        bottom: 20,
        left: 80,
        textAlign: 'left',
        },

    subtitles: {
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
        bottom: 85,
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
        backgroundColor:'#F08080',
        right: 10,
        top: -30,
        marginTop: 5,
        elevation: 5,
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
          elevation: 19,
        },

    img: {
        height: 56,
        width: 56,
        backgroundColor: 'white',
        borderRadius: 28,
        left: 11,
        top: -9,
        position: 'absolute',
        elevation: 20,
    },

});

export default ListItem;
