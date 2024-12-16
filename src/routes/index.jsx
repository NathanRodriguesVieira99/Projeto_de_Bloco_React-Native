import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Configurations from '../screens/Configurations'
import Login from '../screens/Login'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarStyle: {
        backgroundColor: '#111',
        borderTopWidth: 0,
        marginTop: 0
      },
      tabBarLabelStyle: { fontSize: 11, fontFamily: 'Montserrat_700Bold' },
    }}>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{
        title: '', tabBarIcon: ({ size, focused }) => (
          <Feather name='home' color={focused ? '#ff0000' : '#ffffff'} size={size} />
        ),
      }} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} options={{
        title: '', tabBarIcon: ({ size, focused }) => (
          <Feather name='user' color={focused ? '#ff0000' : '#ffffff'} size={size} />
        )
      }} />
      <Tab.Screen name="Configurations" component={Configurations} options={{
        title: '', tabBarIcon: ({ size, focused }) => (
          <Feather name='settings' color={focused ? '#ff0000' : '#ffffff'} size={size} />
        )
      }} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}