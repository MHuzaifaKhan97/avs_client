import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Animated } from 'react-native';


class Splash extends Component {

    state = {
        animation: new Animated.Value(0),
        checkAnim:true,
    }
    componentDidMount(){
        this.startAnimation();
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 3000);

    }
    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue:250,
            duration: 1500,
            useNativeDriver:false
        }).start(() => {
            this.state.animation.setValue(0);
        });
       setTimeout(() => {
        this.setState({
            checkAnim:false
        })
       }, 1500);
    }

    render() {
        const transformStyle = {
            transform: [{
                translateY: this.state.animation,
            }]
        }
        return (
            <React.Fragment>
                <View style={styles.container}>
                <StatusBar backgroundColor="#fff" />
                   <View style={{...styles.topSide,paddingTop:this.state.checkAnim ? 0 :250}}>
                   <Animated.View useNativeDr style={[styles.animatedBox, transformStyle]}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={{ width: "80%", height: 100 }}
                        />
                    </Animated.View>
                   </View>
                </View>
                <View style={styles.developedBy}>
                    <Text style={styles.developedByText}>Developed By Saad Hashim</Text>
                </View>
            </React.Fragment>
        );
    }
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        // marginHorizontal: 40,
        justifyContent: 'center',
        backgroundColor: '#46a0b3'
    },
    topSide: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
    },
    developedBy: {
        flex: 0.3,
        alignItems: 'center',
        backgroundColor: '#46a0b3',
    },
    developedByText: {
        fontSize: 18,
        color: '#fff',
        justifyContent: 'center',
        marginTop: 50,
        fontWeight: '700',
        marginBottom: 60
    },
    MainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    animatedBox:{
        alignItems:'center',
        width:"100%",
    },
});