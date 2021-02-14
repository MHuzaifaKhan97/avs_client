import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, Alert, ToastAndroid, ImageBackground } from 'react-native';
import { Title, Input, Item, Body, Label, Icon, Spinner } from 'native-base';
import MyIcon from 'react-native-vector-icons/FontAwesome';


class Contact extends Component {
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
                            <Text style={styles.bodyTitle}> HOW TO CONTACT AVS ?</Text>

                            <View style={{ flexDirection: 'row', margin: 10, padding: 10, marginTop: 20, backgroundColor: '#fff', borderRadius: 10, width: '90%' }}>
                                <Icon type="FontAwesome" name="envelope" style={{ color: '#46a0b3', fontSize: 20, marginTop: 4 }} />
                                <Text style={{ color: '#46a0b3', fontSize: 20, marginLeft: 10, fontWeight: 'bold' }}>info@avs.com</Text>
                            </View>

                            <View style={{ flexDirection: 'row', margin: 10, padding: 10, marginTop: 20, backgroundColor: '#fff', borderRadius: 10, width: '90%' }}>
                                <Icon type="FontAwesome" name="phone" style={{ color: '#46a0b3', fontSize: 20, marginTop: 4 }} />
                                <Text style={{ color: '#46a0b3', fontSize: 20, marginLeft: 10, fontWeight: 'bold' }}>+92-312-1234567</Text>
                            </View>

                            <View style={{ flexDirection: 'row', margin: 10, padding: 10, marginTop: 20, backgroundColor: '#fff', borderRadius: 10, width: '90%' }}>
                                <Icon type="Foundation" name="web" style={{ color: '#46a0b3', fontSize: 20, marginTop: 4 }} />
                                <Text style={{ color: '#46a0b3', fontSize: 20, marginLeft: 10, fontWeight: 'bold' }}>avs.com.pk</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: '8%' }}>
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
            </View>
        )
    }
}

export default Contact;

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
        justifyContent: 'center'
    },
    bodyTitle: {
        marginTop: '5%',
        marginBottom: '5%',
        fontWeight: '700',
        fontSize: 20,
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
        height: '90%',
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
        alignItems: 'center'
    },
    aboutText: {
        fontSize: 16,
        color: '#fff',
        textTransform: 'capitalize',
    },
})