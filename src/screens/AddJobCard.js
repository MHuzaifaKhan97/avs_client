import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { Title, Input, Item, Body, Label, Icon, Textarea } from 'native-base';
import MyIcon from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

class AddJobCard extends Component {

    state = {
        authUser: {},
        title: '',
        customer: '',
        represenativeName: '',
        represenativeDesignation: '',
        represenativeContact: '',
        represenativeEmail: '',
        location: '',
        description: '',
        date: '',
        status: 'pending',
        userReference: '',
        meetingAddedBy: ''
    }
    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                database().ref('users').once('value', (data) => {
                    for (var key in data.val()) {
                        if (data.val()[key].email.toLowerCase() === user.email.toLowerCase()) {
                            setTimeout(() => {
                                this.setState({
                                    authUser: data.val()[key]
                                })
                            }, 1200);
                        }
                    }
                })
            }
        });
    }
    addJobCard = () => {
        const { title,
            customer,
            represenativeName,
            represenativeDesignation,
            represenativeContact,
            represenativeEmail,
            location,
            description,
            date,
            status,
            meetingAddedBy,
            authUser,
        } = this.state;
        let id = database().ref("users").push().key;

        if (title == "") {
            Alert.alert('Error', 'Please Enter JobCard Title',);
        } else if (customer == "") {
            Alert.alert('Error', 'Please Enter Customer Name',);
        } else if (represenativeName == "") {
            Alert.alert('Error', 'Please Enter Representative Name',);
        } else if (represenativeDesignation == "") {
            Alert.alert('Error', 'Please Enter Representative Designation',);
        } else if (represenativeEmail == "") {
            Alert.alert('Error', 'Please Enter Representative Email',);
        } else if (represenativeContact == "") {
            Alert.alert('Error', 'Please Enter Representative Contact Number',);
        } else if (location == "") {
            Alert.alert('Error', 'Please Select Location',);
        } else if (description == "") {
            Alert.alert('Error', 'Please Enter JobCard Description',);
        }
        else {
           if (represenativeContact.length != 11) {
                Alert.alert('Error', 'Invalid Contact Number');
            }
            else {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
                today = dd + '/' + mm + '/' + yyyy;
                database().ref(`jobcards/${id}`).set({
                    id: id,
                    title: title,
                    customer: customer,
                    represenativeName: represenativeName,
                    represenativeEmail: represenativeEmail,
                    represenativeDesignation: represenativeDesignation,
                    represenativeContact: represenativeContact,
                    location: location,
                    status: status,
                    description: description,
                    date: today,
                    meetingAddedBy: authUser.email,
                }).then(() => {
                    Alert.alert('Success', 'Successfully JobCard Added.');
                    this.props.navigation.navigate('JobCard');
                    this.setState({
                        title: '',
                        customer: '',
                        represenativeName: '',
                        represenativeEmail: '',
                        represenativeDesignation: '',
                        represenativeContact: '',
                        location: '',
                        status: '',
                        description: '',
                        date: '',
                    })
                }).catch((error) => {
                    Alert.alert('Error', error.message);
                })
            }
        }
    }

    render() {
        const { title,
            customer,
            represenativeName,
            represenativeDesignation,
            represenativeContact,
            represenativeEmail,
            location,
            description,
            meetingAddedBy,
            authUser, } = this.state;
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
                    <View style={styles.signUpBody}>
                        {/* <Text style={styles.bodyTitle}>AVS - REGISTER</Text> */}

                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label style={{ color: '#46a0b3', fontSize: 14 }}>Enter JobCard Title</Label>
                            <Input style={{ color: '#46a0b3', fontSize: 14 }} value={title} maxLength={25} onChangeText={(text) => this.setState({ title: text })} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 4 }}>
                            <Label style={{ color: '#46a0b3', fontSize: 14 }}>Enter Customer Name</Label>
                            <Input style={{ color: '#46a0b3', fontSize: 14 }} value={customer} maxLength={30} onChangeText={(text) => this.setState({ customer: text })} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 4 }}>
                            <Label style={{ color: '#46a0b3', fontSize: 14 }}>Enter Representative Name</Label>
                            <Input style={{ color: '#46a0b3', fontSize: 14 }} value={represenativeName} maxLength={30} onChangeText={(text) => this.setState({ represenativeName: text })} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 4 }}>
                            <Label style={{ color: '#46a0b3', fontSize: 14 }}>Enter Representative Designation</Label>
                            <Input style={{ color: '#46a0b3', fontSize: 14 }} value={represenativeDesignation} maxLength={25}
                                onChangeText={(text) => this.setState({ represenativeDesignation: text })}
                            />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 4 }}>
                            <Label style={{ color: '#46a0b3', fontSize: 14 }}>Enter Representative Email</Label>
                            <Input style={{ color: '#46a0b3', fontSize: 14 }} value={represenativeEmail} keyboardType="email-address" maxLength={50} onChangeText={(text) => this.setState({ represenativeEmail: text })} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 4 }}>
                            <Label style={{ color: '#46a0b3', fontSize: 14 }}>Enter Representative Contact</Label>
                            <Input style={{ color: '#46a0b3', fontSize: 14 }} value={represenativeContact} keyboardType="number-pad" maxLength={11} onChangeText={(text) => this.setState({ represenativeContact: text })} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 4 }}>
                            <Label style={{ color: '#46a0b3', fontSize: 14 }}>Enter Location</Label>
                            <Input style={{ color: '#46a0b3', fontSize: 14 }} value={location}  maxLength={40} onChangeText={(text) => this.setState({ location: text })} />
                        </Item>

                        <Textarea bordered style={{ borderRadius: 5, color: '#46a0b3', width: '100%', fontSize: 14, marginTop: 10 }} placeholderTextColor="#46a0b3" value={description} onChangeText={(text) => this.setState({ description: text })} rowSpan={2} placeholder="Enter JobCard Description" />

                        <TouchableOpacity style={{
                            backgroundColor: '#46a0b3',
                            width: '100%',
                            alignItems: 'center',
                            marginTop: '4%',
                            paddingTop: 10,
                            paddingBottom: 10,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            borderBottomRightRadius: 30,
                            borderBottomLeftRadius: 30,
                        }}
                            onPress={this.addJobCard}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <MyIcon name="briefcase" color='#fff' size={14} style={{ marginTop: 3 }} />
                                <Text style={{ marginLeft: 8, color: '#fff', fontSize: 14, fontWeight: '700' }}>
                                    ADD JOBCARD
                                    </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default AddJobCard;

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
    signUpBody: {
        width: '80%',
        alignItems: 'center',
    },
    bodyTitle: {
        marginTop: 60,
        fontWeight: '700',
        fontSize: 35,
        alignItems: 'center',
        color: '#46a0b3',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8,
    },

})