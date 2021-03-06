import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';

const DrawerScreen = DrawerNavigator({
    Screen1: {screen: Screen1},
    Screen2: {screen: Screen2},
    Screen3: {screen: Screen3},
}, {
    headerMode: 'none',
})

export default DrawerScreen;