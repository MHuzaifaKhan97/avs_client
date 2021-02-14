import * as React from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import {
    Body,
    Button,
    Container,
    Content,
    Footer,
    H3,
    Header,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Switch,
    Text,
    Thumbnail
} from "native-base";
import { StatusBar } from 'react-native';
import Animated from "react-native-reanimated";
import { DrawerActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

function SideBar({ progress, ...props }) {
    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0]
    });

    return (
        <Container>
            <StatusBar backgroundColor="#fff" />
            <Header style={{ backgroundColor: '#46a0b3' }}>
                <Right style={{ backgroundColor: '#46a0b3' }}>
                    <TouchableOpacity style={{ backgroundColor: '#fff' }} onPress={() =>
                        props.navigation.dispatch(DrawerActions.closeDrawer())
                    }>
                        <Icon name="menu" style={{ color: '#fff', backgroundColor: '#46a0b3' }} />
                    </TouchableOpacity>
                </Right>
            </Header>
            <Content contentContainerStyle={{ flex: 1, backgroundColor: '#46a0b3' }}>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail source={{
                            uri: 'https://attiehandassociates.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png'
                        }} />
                    </Left>
                    <Body>
                        <H3 style={{ color: '#fff' }}>Saad Hashim</H3>
                        <Text style={{ color: '#fff' }} note>MERN Stack Developer</Text>
                    </Body>
                </ListItem>
                <DrawerContentScrollView {...props}>
                    <Animated.View style={{ transform: [{ translateX }] }}>
                        <DrawerItemList {...props} labelStyle={{ color: '#fff' }} activeTintColor="orange" activeBackgroundColor="#a1c9d1" />
                        <DrawerItem
                            labelStyle={{ color: '#fff' }}
                            label="Log Out"
                            icon={({ color, size }) => (
                                <Icon type="FontAwesome" name="sign-out" style={{ fontSize: size, color: '#fff' }} />
                            )}
                            onPress={() => props.navigation.navigate('Login')}
                        />
                    </Animated.View>
                </DrawerContentScrollView>
            </Content>
        </Container>

    )
}

export default SideBar;