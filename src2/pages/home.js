import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';
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
                    onPress={this.props.counterAdd}
                    title="加一"
                />
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />
                <Button
                    onPress={() => navigate('Login')}
                    title="登录"
                />
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
