import React, { Component } from 'react';

import HomeScreen from './pages/home.js';
import ChatScreen from './pages/chat.js';
import Login from './pages/login.js';
import RegisterScreen from './pages/register.js';
import { StackNavigator } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import store from './store/index.js';

const Myapp3 = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
    Login:{ screen: Login},
    Register:{screen:RegisterScreen}
});
class ReduxExampleApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Myapp3 />
            </Provider>
        );
    }
}
export default ReduxExampleApp;