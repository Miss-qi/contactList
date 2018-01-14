import React, { Component } from 'react';
import { Text, View } from "react-native";

class PhoneContactDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>{this.props.item.fullName}</Text>
            </View>
        );
    }
}

export default PhoneContactDetail;