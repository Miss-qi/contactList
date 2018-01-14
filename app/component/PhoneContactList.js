import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, NativeModules } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Avatar from "./avatar/Avatar";

const phoneContact = NativeModules.PhoneContact;

const data = [];
const styles = StyleSheet.create({
    contactItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#ccc',
    }
});
export default class PhoneContactList extends Component {
    constructor(props) {
        super(props);
        this.keyExtractor = this.keyExtractor.bind(this);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        phoneContact.show().then(data => this.setState({data}));
    }

    keyExtractor(item, index) {
        return index;
    }

    _keyExtractor = (item, index) => index;

    _renderItem = ({item}) => (
        <TouchableOpacity style={styles.contactItem}
                          onPress={() => Actions.phoneContactDetail({item})}>
            <Avatar text={item.familyName}/>
            <Text>{item.fullName}</Text>
            <Text>{item.phoneNumber}</Text>
        </TouchableOpacity>
    );

    _renderSeparator = () => (
        <View style={styles.separator}/>
    );

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._renderSeparator}
            />
        )
    }
}