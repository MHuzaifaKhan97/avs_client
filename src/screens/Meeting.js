import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, Alert, ToastAndroid, ImageBackground } from 'react-native';
import { Title, Input, Item, Body, Label, Icon, Spinner } from 'native-base';
import MyIcon from 'react-native-vector-icons/FontAwesome';

class Meeting extends Component {

    state = {
        isPasswordShown: false,
        email: '',
        password: '',
        showSpinner: false,
        socialLoggedIn: false,
        userInfo: [],
    }

    componentDidMount() {
    }

    showHidePassword = () => {
        this.setState({
            isPasswordShown: !this.state.isPasswordShown
        });
        console.log('Clicked');
    }
    loggedIn = () => {

        const { email, password } = this.state;
        if (email == "") {
            Alert.alert('Error', 'Please Enter Your Email',);
        } else if (password == "") {
            Alert.alert('Error', 'Please Enter Your Password',);
        }
        else {
            if (password.length <= 8) {
                Alert.alert('Error', 'Weak Password');
            }
            else {
            }
        }
    }


    render() {
        const { isPasswordShown, email, password, showSpinner } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{ marginTop: '5%', marginRight: '10%' }}>
                        <Icon name="menu" />
                    </TouchableOpacity>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                </View>
                <View style={styles.body}>
                    <View style={styles.loginBody}>
                        <Text style={styles.bodyTitle}> WELCOME TO AVS</Text>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddMeeting')} style={styles.myMeeting}>
                            <Text style={styles.myMeetingText}>Add New Meeting</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log('goto my pending meeting')} style={styles.pendingMeeting}>
                            <Text style={styles.pendingMeetingText}>My Pending Meetings</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }
}

export default Meeting;

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
        color: '#46a0b3',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    myMeeting: {
        width: '100%',
        height: '30%',
        shadowColor: "#46a0b3",
        marginTop: 30,
        backgroundColor: '#46a0b3',
        borderRadius: 10,
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
    myMeetingText: {
        fontSize: 24,
        color: '#fff',
        textTransform: 'uppercase',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8,
    },
    pendingMeeting: {
        width: '100%',
        height: '30%',
        marginTop: '5%',
        shadowColor: "#46a0b3",
        backgroundColor: '#46a0b3',
        borderRadius: 10,
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
    pendingMeetingText: {
        fontSize: 22,
        color: '#fff',
        textTransform: 'uppercase',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8,
    },
})