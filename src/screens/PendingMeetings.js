import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import { Title, Input, Item, Body, Label, Icon, Spinner } from 'native-base';
import MyIcon from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

class PendingMeetings extends Component {

    state = {
        isPasswordShown: false,
        email: '',
        password: '',
        showSpinner: false,
        socialLoggedIn: false,
        meetingInfo: [],
    }

    componentDidMount() {
        const { meetingInfo } = this.state;
        this.setState({
            showSpinner: true
        })
        auth().onAuthStateChanged((user) => {
            if (user) {
                database().ref('meetings').once('value', (data) => {
                    let arr = [];

                    setTimeout(() => {
                        for (var key in data.val()) {
                            if (user.email.toLowerCase() === data.val()[key].meetingAddedBy.toLowerCase()) {
                                arr.push(data.val()[key]);
                            }
                        }
                        this.setState({
                            meetingInfo: arr,
                        })
                        this.setState({
                            showSpinner: false
                        })
                    }, 2000);

                })
            }
        })
    }
    render() {
        const { isPasswordShown, email, password, showSpinner, meetingInfo } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Meeting')} style={{ marginTop: '5%', marginRight: '10%' }}>
                        <Icon name="arrow-left" type="FontAwesome" style={{ color: '#46a0b3' }} />
                    </TouchableOpacity>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                </View>
                <View style={styles.body}>
                    <View style={styles.loginBody}>


                        <Text style={styles.bodyTitle}> MY PENDING MEETINGS</Text>


                        <ScrollView style={{ width: '100%', height: '85%' }}>

                            {
                                !showSpinner ?
                                    !meetingInfo ?
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: '#46a0b3', fontSize: 22 }}>No Meeting Added Yet</Text>
                                        </View>
                                        :
                                        meetingInfo.map((meeting) => {
                                            return <TouchableOpacity key={meeting.id} style={styles.meetings}>
                                                <Text style={styles.meetingsTitle}>{meeting.title}</Text>

                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={styles.meetingsTitle}>{meeting.represenativeEmail}</Text>
                                                    <Text style={styles.meetingsTitle}>{meeting.status}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={styles.meetingsTitle}>{meeting.location}</Text>
                                                    <Text style={styles.meetingsTitle}>{meeting.date}</Text>
                                                </View>
                                            </TouchableOpacity>

                                        })

                                    :
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Spinner color="#46a0b3" />
                                    </View>

                            }
                        </ScrollView>

                    </View>
                </View>
            </View>
        )
    }
}

export default PendingMeetings;

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
        flex: 1,
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
        fontSize: 24,
        alignItems: 'center',
        color: '#46a0b3',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8,
    },
    meetings: {
        width: '100%',
        backgroundColor: '#46a0b3',
        shadowColor: "#46a0b3",
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    meetingsTitle: {
        color: '#fff',
    }
})