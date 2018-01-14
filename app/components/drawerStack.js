import {
    StackNavigator
} from 'react-navigation';
import { TouchableHighlight, View, Text } from 'react-native';

import React from 'react';

import DrawerScreen from './drawerScreen';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen:DrawerScreen}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
       headerStyle: {
            backgroundColor:'maroon',
            paddingLeft:10,
            paddingRight:10
       },
       title:'Home',
       headerTintColor:'white',
       headerLeft:
        <View>
            <TouchableHighlight
                onPress={() => {
                    navigation.navigate('DrawerOpen');
                }}
            >
                <Text>Menu</Text>
            </TouchableHighlight>
        </View>
    })
})

export default DrawerNavigation;