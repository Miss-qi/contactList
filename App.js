import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import {
    StyleSheet,
    View
} from 'react-native';
import reducer from './app/reducers';
import AppRouter from "./app/route/router";
import logger from './app/middleware/logger';

const store = createStore(reducer, applyMiddleware(logger));

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <AppRouter/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
    },
});
