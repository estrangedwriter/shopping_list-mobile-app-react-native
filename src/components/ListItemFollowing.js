/*
** Bitbroker Labs React Native Challenge, 2020
** 
** File description: This ListItem.js file models the 'ListItem' component of the application.
** 
**
*/
import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

const ListItemFollowing = ({item}) => {
  return (     
    <View style = {globalStyles.listItem}>
        {/* this block of code positions the item name, emoji if any, username if any, and the profile
        photo */}
        <Text style={globalStyles.listItemName}>{item.text}</Text>
        <Image source = {item.emoji} style={globalStyles.emoji}></Image>
        <Text style = {globalStyles.username}> {item.username}</Text>        
        <View style = {globalStyles.shadow}/>  
        <Image source = {item.path} style = {globalStyles.img}/>

        {/* this block handles the "following" button */}
        <TouchableOpacity style = {globalStyles.myButton}>
            <View>
                <Text style = {globalStyles.ButtonText}>Following</Text>
            </View>
        </TouchableOpacity>

        {/* this block handles the "textcontainer" div */}
        <View style = {globalStyles.textcontainer}>

            <Text style = {globalStyles.description}>{item.description}</Text>  
            
            {/* this block handles "stats" div within the text container div */}
            <View style = {globalStyles.figure_one_container}>
                <Text style = {globalStyles.stats}>{item.figure1}</Text>
            </View>
            <View style = {globalStyles.figure_two_container}>
                <Text style = {globalStyles.stats}>{item.figure2}</Text>
            </View> 
            <View style = {globalStyles.figure_three_container}>
                <Text style = {globalStyles.stats}>{item.figure3}</Text>
            </View> 

        </View>    
    </View>
  );
};


export default ListItemFollowing;
