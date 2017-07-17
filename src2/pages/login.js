import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    TextInput
} from 'react-native';
export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:'',
            password:''
        };
    }
    static navigationOptions = {
        title: '登录',
        headerRight: <Button title="注册" onPress={() =>navigate('Register')}/>
    };
    login(){
        console.log('gg')
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={style.content}>
                <View style={style.body}>
                    <Text style={style.title}>用户登陆</Text>
                    <TextInput
                        style={style.inputStyle}
                        onChangeText={(user) => this.setState({user})}
                        value={this.state.user}
                        placeholder="用户名"
                    />
                    <TextInput
                        style={style.inputStyle}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder="密码"
                    />
                    <View  style={style.loginBtn}>
                        <Button
                            onPress={this.login}
                            title="登录"
                            color="#fff"
                        />
                    </View>
                    <Button
                        onPress={() => navigate('Chat')}
                        title="忘记密码"
                    />
                    <Text style={style.title}></Text>
                </View>
            </View>
        );
    }
}
const style=StyleSheet.create({
    content:{
        flex:1,
    },
    header:{
        flex:0,
        height:40,
        backgroundColor:'#e3e3e3'
    },
    title:{
        height:60,
        fontSize:30,
        textAlign:'center',
        color:"#434343"
    },
    body:{
        flex:1,
        justifyContent:"center",
        padding:15
    },
    inputStyle:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        padding:10,
        marginTop:10,
        marginBottom:10
    },
    loginBtn:{
        borderRadius:6,
        backgroundColor:'#57b382',
        padding:6,
        marginTop:15
    }
});