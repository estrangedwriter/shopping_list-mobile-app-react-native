/*
** Bitbroker Labs React Native Challenge, 2020
** 
** File description: This ListItem.js file contains the CSS components for the application.
** 
**
*/
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    /* listItem is the div where information for each item in the list is displayed */
    listItem: {
        height: 120,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#D9D9D9',
    },
        /* name of each item (entrepreneur, oprah's book club, etc.) */
        listItemName: {
            position: 'absolute',
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
            top: 10,
            left: 80,
        },
        /*emoji after 'entrepreneur' */
        emoji: {
            height: 24,
            width: 20,
            left: 192,
            top: 8,
            position: 'absolute',
        },
        /* To handle usernames (@heypmiller) */
        username: {    
            position: 'absolute',
            fontSize: 11,
            color: 'grey',
            top: 30,
            left: 75,
            elevation: 1,
        },
        /* For the "Following" button"*/
        /* */
        myButton:{
            padding: 5,
            width: 75,
            borderRadius: 20,
            backgroundColor:'#FF5959',
            right: 10,
            top: 8,
            position: 'absolute',
        },
            // Text inside of the "Following" button"
            ButtonText: {
                color:'white',
                fontSize: 13,
                textAlign: 'center',
                },
        /* *
        /
        /* On Android, there is no 'shadow' option, unlike iOS. To achieve a shadow 
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
    
        /* div that stores and organizes the text within ListItem*/
        textcontainer: {
            backgroundColor: 'white',
            borderColor: 'blue',
            borderWidth: 0,
            position: 'absolute',
            height: 75,
            width: 270,
            left: 80,
            bottom: 5,
            elevation: 0,
        },
            description: {
                position: 'absolute',
                fontSize: 12.75,
                color: 'grey',
                top: 3,
                left: 1,
                fontWeight: 'bold',
            },
            /* div within "textcontainer" that stores the stat figure 1*/
            figure_one_container: {
                backgroundColor: 'white',
                borderColor: 'black',
                borderWidth: 0,
                position: 'absolute',
                height: 20,
                width: 80,
                left: 0,
                bottom: 10,
            },
            /* div within "textcontainer" that stores the stat figure 2*/
            figure_two_container: {
                backgroundColor: 'white',
                borderColor: 'black',
                borderWidth: 0,
                position: 'absolute',
                height: 20,
                width: 80,
                left: 85,
                bottom: 10,
            },
            /* div within "textcontainer" that stores the stat figure 3*/
            figure_three_container: {
                backgroundColor: 'white',
                borderColor: 'black',
                borderWidth: 0,
                position: 'absolute',
                height: 20,
                width: 93,
                left: 175,
                bottom: 10,
            },
                /* handles statistical figure's font and text*/
                stats: {
                    position: 'absolute',
                    fontSize: 12.75,
                    color: 'gray',
                    bottom: 0,
                    left: 1,
                    textAlign: 'left',
                    fontWeight: 'bold',
                },
});
    