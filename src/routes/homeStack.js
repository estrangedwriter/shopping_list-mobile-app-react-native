import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ListItemFollowing from '../components/ListItemFollowing';

const screens = {
    Following: {
        screen: ListItemFollowing
    },
    Followers: {
        screen: ListItemFollowers
    }
}


const HomeStack = createStackNavigator(screens); 

export default createAppContainer(Homestack);