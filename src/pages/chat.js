import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';
import { DatePicker, List } from 'antd-mobile';
class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}
export default class AntdMobieDemo extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    state = {
        dpValue: null,
        visible: false,
    }
    render() {
        return (<View style={{ marginTop: 30 }}>
            <List>
                <DatePicker mode="datetime"
                            value={this.state.dpValue}
                            onChange={v => this.setState({ dpValue: v })}
                >
                    <List.Item arrow="horizontal">
                        选择时间
                    </List.Item>
                </DatePicker>
            </List>

        </View>);
    }
}