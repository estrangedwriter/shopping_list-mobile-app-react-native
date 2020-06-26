import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return ( 
    <TouchableOpacity style={styles.listItem}>
        <View>
            <Text style={styles.listItemText}>{item.text}</Text>

            <Text style = {styles.subtitles}>{item.subtitle}</Text>     
    
            <View style ={styles.myButton}>
                <Text style = {styles.FollowingStyle}>Following</Text>
            </View>
            
            {/*<View style = {styles.shadow}/>   */}
            
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
        bottom: 25,
        left: 80,
        textAlign: 'left',
        },

    subtitles: {
        textAlign: 'left',
        fontSize: 14,
        color: 'grey',
        bottom:10,
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
          height: 30,
          width: 30,
          backgroundColor: 'white',
          borderRadius: 40,
          position: 'relative',
          right: -30,
          bottom: 0,
          right: 30,
          elevation: 19,
          
        },
    img: {
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        width: 60,
        height: 60,
        right: 15,
        top: -40,
        elevation: 20,
        },

});

export default ListItem;
