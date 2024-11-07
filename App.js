import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import AboutMeScreen from './screens/AboutMeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactMeScreen from './screens/ContactMeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About Me') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'Projects') {
              iconName = focused ? 'code-slash' : 'code-slash-outline';
            } else if (route.name === 'Contact Me') {
              iconName = focused ? 'mail' : 'mail-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff6347',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { 
            backgroundColor: '#fff', 
            top: -9, 
            borderTopWidth: 0 
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Hide top header
        />
        <Tab.Screen 
          name="About Me" 
          component={AboutMeScreen} 
          options={{ headerShown: false }} // Hide top header
        />
        <Tab.Screen 
          name="Projects" 
          component={ProjectsScreen} 
          options={{ headerShown: false }} // Hide top header
        />
        <Tab.Screen 
          name="Contact Me" 
          component={ContactMeScreen} 
          options={{ headerShown: false }} // Hide top header
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
