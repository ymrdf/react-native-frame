import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Button} from 'antd-mobile';
import { connect } from 'react-redux';
 class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Text>{this.props.myCount}</Text>
                <Button
                    onClick={this.props.counterAdd}
                >
                加一
                </Button>
                <Button
                    onClick={() => navigate('Chat')}
                >
                Chat with Lucy
                </Button>
                <Button
                    onClick={() => navigate('Login')}
                >
                登录
                </Button>
            </View>
        );
    }
}
const mapS2P=(state)=>{
     return{
         myCount:state.count.number
    }
}
const mapD2P=(dispatch)=>{
     return{
         counterAdd:()=>{
             dispatch({
                 type:'increase'
             })
         }
     }
}
export default connect(mapS2P,mapD2P)(HomeScreen);
