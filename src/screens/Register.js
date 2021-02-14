import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { Title, Input, Item, Body, Label, Icon, Left } from 'native-base';
import MyIcon from 'react-native-vector-icons/FontAwesome';

class Register extends Component {

    state = {
        isPasswordShown: false,
        name: '',
        email: '',
        contactNo: '',
        password: '',
    }
    componentDidMount() {

    }
    showHidePassword = () => {
        this.setState({
            isPasswordShown: !this.state.isPasswordShown
        });
        console.log('Clicked');
    }
    createUser = () => {
        const { name, email, password, contactNo } = this.state;
   
        if (name == "") {
            Alert.alert('Error', 'Please Enter Your Name',);
        } else if (email == "") {
            Alert.alert('Error', 'Please Enter Your Email',);
        } else if (contactNo == "") {
            Alert.alert('Error', 'Please Enter Your Contact Number',);
        } else if (password == "") {
            Alert.alert('Error', 'Please Enter Your Password',);
        }
        else {
            if (password.length <= 8) {
                Alert.alert('Error', 'Weak Password');
            }
            else if (contactNo.length != 11) {
                Alert.alert('Error', 'Invalid Contact Number');
            }
            else {

            }
        }
    }

    render() {
        const { isPasswordShown, name, email, password, contactNo } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" />
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')} style={{marginTop:'5%',marginRight:'10%'}}>
                        <Icon name="arrow-left" type="FontAwesome" style={{color:'#46a0b3'}} />
                    </TouchableOpacity>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                </View>
                <View style={styles.body}>
                    <View style={styles.signUpBody}>
                        <Text style={styles.bodyTitle}>AVS - REGISTER</Text>

                        <Item floatingLabel style={{ marginTop: 15 }}>
                            <Label style={{ color: '#46a0b3' }}>Enter Name</Label>
                            <Input style={{color:'#46a0b3'}} value={name} maxLength={25} onChangeText={(text) => this.setState({ name: text })} />
                        </Item>

                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label style={{ color: '#46a0b3' }}>Enter Email</Label>
                            <Input style={{color:'#46a0b3'}} value={email} maxLength={30} keyboardType="email-address" onChangeText={(text) => this.setState({ email: text })} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label style={{ color: '#46a0b3' }}>Enter Contact No</Label>
                            <Input style={{color:'#46a0b3'}} value={contactNo} maxLength={11} keyboardType="numeric" onChangeText={(text) => this.setState({ contactNo: text })} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label style={{ color: '#46a0b3' }}>Enter Password...</Label>
                            <Input style={{color:'#46a0b3'}} value={password} maxLength={25}
                                onChangeText={(text) => this.setState({ password: text })}
                                secureTextEntry={!isPasswordShown}
                            />
                            <Icon active solid={true} name={isPasswordShown ? "eye-slash" : "eye"} type='FontAwesome5' style={{ color: '#46a0b3', fontSize: 16 }} onPress={this.showHidePassword} />
                        </Item>

                        <TouchableOpacity style={{
                            backgroundColor: '#46a0b3',
                            width: '100%',
                            alignItems: 'center',
                            marginTop: '12%',
                            paddingTop: 15,
                            paddingBottom: 15,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            borderBottomRightRadius: 30,
                            borderBottomLeftRadius: 30,
                        }}
                            onPress={this.createUser}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <MyIcon name="user" color='#fff' size={15} style={{ marginTop: 3 }} />
                                <Text style={{ marginLeft: 8, color: '#fff', fontSize: 15, fontWeight: '700' }}>
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

export default Register;

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
        flex: 0.85,
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
        marginTop: '15%',
        fontWeight: '700',
        fontSize: 35,
        alignItems: 'center',
        color: '#46a0b3',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8,
    },

})