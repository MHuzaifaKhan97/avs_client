import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import { Title, Input, Item, Body, Label, Icon, Spinner } from 'native-base';
import MyIcon from 'react-native-vector-icons/FontAwesome';

class Login extends Component {

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
                console.log('pressed')
                if(email == 'saad@avs.com' && password == 'saad12345'){
                    this.props.navigation.navigate('Home');
                }
            }
        }
    }
    signInWithFacebook = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Facebook Signin Available Soon",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
    }
    signInWithGoogle = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Google Signin Available Soon",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
    }

    render() {
        const { isPasswordShown, email, password, showSpinner } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" />
                <View style={styles.header}>
                    <Body style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                    </Body>
                </View>
                <View style={styles.body}>
                    <View style={styles.loginBody}>
                        <Text style={styles.bodyTitle}>AVS - LOGIN</Text>
                        <Item floatingLabel style={{ marginTop: '15%' }}>
                            <Label style={{ color: '#46a0b3' }}>Enter Email</Label>
                            <Input style={{color:'#46a0b3'}} value={email} maxLength={40} keyboardType="email-address" onChangeText={(text) => this.setState({ email: text })} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label style={{ color: '#46a0b3' }}>Enter Password...</Label>
                            <Input style={{color:'#46a0b3'}} value={password} maxLength={25} onChangeText={(text) => this.setState({ password: text })} secureTextEntry={!isPasswordShown} />
                            <Icon active solid={true} name={isPasswordShown ? "eye-slash" : "eye"} type='FontAwesome5' style={{ color: '#46a0b3', fontSize: 16 }} onPress={this.showHidePassword} />
                        </Item>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 4, alignItems: 'flex-end' }}>
                                <Spinner color="#46a0b3" style={{ display: showSpinner ? 'flex' : 'none' }} />
                            </View>
                            <View style={{ flex: 3, alignItems: 'flex-end', margin: 5, marginRight: 10 }}>
                                <Text style={{ color: '#46a0b3', fontWeight: '700' }}>
                                    Forgot Password?
                            </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor: '#46a0b3',
                            width: '100%',
                            alignItems: 'center',
                            marginTop: '8%',
                            paddingTop: 15,
                            borderWidth:2,
                            borderColor: '#388a9c',
                            borderWidth: 2,
                            borderColor:'#fff',
                            paddingBottom: 15,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            borderBottomRightRadius: 30,
                            borderBottomLeftRadius: 30,
                        }}
                            onPress={this.loggedIn}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <MyIcon name="sign-in" color='white' size={15} style={{ marginTop: 3 }} />
                                <Text style={{ marginLeft: 8, color: 'white', fontSize: 15, fontWeight: '700' }}>
                                    SIGNIN
                                    </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            alignItems: 'center',
                            marginTop: 10,
                            paddingTop: 15,
                            paddingBottom: 15,
                            borderColor: '#388a9c',
                            borderWidth: 2,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            borderBottomRightRadius: 30,
                            borderBottomLeftRadius: 30,
                        }}
                            onPress={() => console.log(this.props.navigation.navigate('Register'))}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <MyIcon name="user" color='#46a0b3' size={15} style={{ marginTop: 3 }} />
                                <Text style={{ marginLeft: 8, color: '#46a0b3', fontSize: 15, fontWeight: '700' }}>
                                    REGISTER
                                    </Text>
                            </View>
                        </TouchableOpacity>
                      
                        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:'5%'}}>
                            <TouchableOpacity
                            style={{
                                backgroundColor: '#fff',
                                width: '30%',
                                alignItems: 'center',
                                marginTop: 10,
                                paddingTop: 15,
                                paddingBottom: 15,
                                borderColor: '#388a9c',
                                borderWidth: 2,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                                borderBottomRightRadius: 30,
                                borderBottomLeftRadius: 30,
                            }}
                            >
                            <Icon active solid={true} name="facebook" type='FontAwesome5' style={{ color: '#46a0b3', fontSize: 20 }} onPress={() => console.log()} />
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={{
                                backgroundColor: '#fff',
                                width: '30%',
                                alignItems: 'center',
                                marginTop: 10,
                                paddingTop: 15,
                                paddingBottom: 15,
                                borderColor: '#388a9c',
                                borderWidth: 2,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                                borderBottomRightRadius: 30,
                                borderBottomLeftRadius: 30,
                            }}
                            >
                            <Icon active solid={true} name="twitter" type='FontAwesome5' style={{ color: '#46a0b3', fontSize: 20 }} onPress={() => console.log()} />
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={{
                                backgroundColor: '#fff',
                                width: '30%',
                                alignItems: 'center',
                                marginTop: 10,
                                paddingTop: 15,
                                paddingBottom: 15,
                                borderColor: '#388a9c',
                                borderWidth: 2,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                                borderBottomRightRadius: 30,
                                borderBottomLeftRadius: 30,
                            }}
                            >
                            <Icon active solid={true} name="linkedin" type='FontAwesome5' style={{ color: '#46a0b3', fontSize: 20 }} onPress={() => console.log()} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        fontFamily: 'monospace',
        flex: 1,
    },
    header: {
        display: 'flex',
        // flexDirection: 'row',
        backgroundColor: '#fff',
        flex: 0.15,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
      
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
        marginBottom: 20,
        marginTop:50,
    },
    loginBody: {
        width: '80%',
        alignItems: 'center',
    },
    bodyTitle: {
        marginTop: 60,
        fontWeight: '700',
        fontSize: 40,
        alignItems: 'center',
        color: '#46a0b3',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8,
    },
})