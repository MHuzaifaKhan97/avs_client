import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Body,
  Title,
  Right,
  Item,
  Icon,
  Button,
  View
} from "native-base";
import SideBar from "./CustomDrawer";
import Splash from './Splash';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Meeting from './Meeting';
import JobCard from './JobCard';
import AddMeeting from './AddMeeting';
import Contact  from './Contact';
import About from './About';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) =>
      (
        <SideBar {...props} />
      )}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Meeting"
        component={Meeting}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="people" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="JobCard"
        component={JobCard}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="briefcase" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home" style={{ fontSize: size, color: color }} />
          ),
        }}
      />

    </Drawer.Navigator>
  );
}

function MyCustomDrawer() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}

export default MyCustomDrawer;