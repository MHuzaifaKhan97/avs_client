import React from 'react';
import MyCustomDrawer from './src/screens/MyCustomDrawer';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <MyCustomDrawer />
    </>
  );
}