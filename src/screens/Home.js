import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import { Title, Input, Item, Body, Label, Icon, Spinner } from 'native-base';
import MyIcon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {

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

    drawerOpen = () => {
        console.log('Pressed');
        console.log(this.props.navigation);
    }
    render() {
        const { isPasswordShown, email, password, showSpinner } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" />

                <View style={styles.header}>
                    <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()} style={{marginTop:'5%',marginRight:'10%'}}>
                        <Icon name="menu" />
                    </TouchableOpacity>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                </View>
                <View style={styles.body}>
                    <View style={styles.loginBody}>


                        <Text style={styles.bodyTitle}> WELCOME TO AVS</Text>


                        <ScrollView style={{ width: '100%', height: '85%' }}>

                            <TouchableOpacity style={styles.meetings}>
                                <Text style={styles.meetingsTitle}>Meeting Title</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>demoemail@avs.com</Text>
                                    <Text style={styles.meetingsTitle}>Pending</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>Location</Text>
                                    <Text style={styles.meetingsTitle}>13/04/2021</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.meetings}>
                                <Text style={styles.meetingsTitle}>Meeting Title</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>demoemail@avs.com</Text>
                                    <Text style={styles.meetingsTitle}>Pending</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>Location</Text>
                                    <Text style={styles.meetingsTitle}>13/04/2021</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.meetings}>
                                <Text style={styles.meetingsTitle}>Meeting Title</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>demoemail@avs.com</Text>
                                    <Text style={styles.meetingsTitle}>Done</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>Location</Text>
                                    <Text style={styles.meetingsTitle}>13/04/2021</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.meetings}>
                                <Text style={styles.meetingsTitle}>Meeting Title</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>demoemail@avs.com</Text>
                                    <Text style={styles.meetingsTitle}>Pending</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>Location</Text>
                                    <Text style={styles.meetingsTitle}>13/04/2021</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.meetings}>
                                <Text style={styles.meetingsTitle}>Meeting Title</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>demoemail@avs.com</Text>
                                    <Text style={styles.meetingsTitle}>Done</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>Location</Text>
                                    <Text style={styles.meetingsTitle}>13/04/2021</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.meetings}>
                                <Text style={styles.meetingsTitle}>Meeting Title</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>demoemail@avs.com</Text>
                                    <Text style={styles.meetingsTitle}>Done</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>Location</Text>
                                    <Text style={styles.meetingsTitle}>13/04/2021</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.meetings}>
                                <Text style={styles.meetingsTitle}>Meeting Title</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>demoemail@avs.com</Text>
                                    <Text style={styles.meetingsTitle}>Pending</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>Location</Text>
                                    <Text style={styles.meetingsTitle}>13/04/2021</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.meetings}>
                                <Text style={styles.meetingsTitle}>Meeting Title</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>demoemail@avs.com</Text>
                                    <Text style={styles.meetingsTitle}>Pending</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.meetingsTitle}>Location</Text>
                                    <Text style={styles.meetingsTitle}>13/04/2021</Text>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>

                    </View>
                </View>
            </View>
        )
    }
}

export default Home;

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
        marginTop:'5%',
        width:'90%',
        justifyContent:'center',
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
        // marginBottom: 20,
        // marginTop: '16%',
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