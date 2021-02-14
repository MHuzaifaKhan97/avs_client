import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, Alert, ToastAndroid, ImageBackground } from 'react-native';
import { Title, Input, Item, Body, Label, Icon, Spinner } from 'native-base';
import MyIcon from 'react-native-vector-icons/FontAwesome';
import AddMeeting from './AddMeeting';

class About extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ marginTop: '5%', marginRight: '10%' }}>
                        <Icon name="arrow-left" type="FontAwesome" style={{ color: '#46a0b3' }} />
                    </TouchableOpacity>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                </View>
                <View style={styles.body}>
                    <View style={styles.loginBody}>
                        <View style={styles.about}>
                            <Text style={styles.bodyTitle}> ABOUT AVS</Text>
                            <Text style={styles.aboutText}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default About;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        fontFamily: 'monospace',
        flex: 1,
    },
    header: {
        flex: 0.15,
        flexDirection: 'row',
        marginTop: '5%',
        width: '90%',
        justifyContent: 'center',
    },
    body: {
        flex: 0.85,
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    logo: {
        width: 170,
        height: 60,
    },
    loginBody: {
        width: '80%',
        alignItems: 'center',
    },
    bodyTitle: {
        marginTop: '5%',
        marginBottom: '5%',
        fontWeight: '700',
        fontSize: 30,
        alignItems: 'center',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    about: {
        width: '100%',
        shadowColor: "#46a0b3",
        marginTop: 10,
        backgroundColor: '#46a0b3',
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    aboutText: {
        fontSize: 16,
        color: '#fff',
        textTransform: 'capitalize',
    },

})