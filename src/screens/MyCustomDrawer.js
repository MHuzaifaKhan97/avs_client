import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
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
import Contact from './Contact';
import About from './About';
import AddJobCard from './AddJobCard';
import PendingMeetings from './PendingMeetings';
import PendingJobCards from './PendingJobCards';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => (<SideBar {...props} />)
        }
        drawerContentOptions={{
          style:{backgroundColor:'#46a0b3'}
        }}
        // initialRouteName="_____________________________"
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="home" style={{ fontSize: size, color: '#fff' }} />
            ),
          }}
        />

        <Drawer.Screen
          name="Meeting"
          component={Meeting}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="people" style={{ fontSize: size, color: '#fff' }} />
            ),
          }}
        />
        <Drawer.Screen
          name="JobCard"
          component={JobCard}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon type="FontAwesome" name="briefcase" style={{ fontSize: size, color: '#fff' }} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon type="FontAwesome" name="info-circle" style={{ fontSize: size, color: '#fff' }} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon type="FontAwesome" name="phone" style={{ fontSize: size, color: '#fff' }} />
            ),
          }}
        />
        <Drawer.Screen
          name="_____________________________"
          component={Root2}
          options={{
            headerStyle:{color:'#fff'},
          }}
        />
        </Drawer.Navigator>
    </>
  );
}

const Stack = createStackNavigator();

function Root2() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
      <Stack.Screen name="AddMeeting" options={{ headerShown: false }} component={AddMeeting} />
      <Stack.Screen name="AddJobCard" options={{ headerShown: false }} component={AddJobCard} />
      <Stack.Screen name="PendingMeetings" options={{ headerShown: false }} component={PendingMeetings} />
      <Stack.Screen name="PendingJobCards" options={{ headerShown: false }} component={PendingJobCards} />
    </Stack.Navigator>
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