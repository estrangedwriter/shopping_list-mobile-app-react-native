import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return ( 
    <TouchableOpacity style={styles.listItem}>
        <View style = {styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            
            <View style ={styles.myButton}>
                <Text style = {styles.FollowingStyle}>Following</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    listItem: {
        padding: 40,
        backgroundColor: 'white',
        borderBottomWidth: 3,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        bottom: 25,
        left: 40,
    },
    myButton:{
        padding: 8,
        borderRadius:20,
        backgroundColor:'#F08080',
        marginRight: -30,
        position: 'absolute',
        left: 290,
        bottom: 20,
      },
     
      TextStyle:{
          color:'#fff',
          textAlign:'center',
      },
      FollowingStyle: {
          color:'white',
          fontSize: 13,
      },

});

export default ListItem;
