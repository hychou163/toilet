/**
 * Created by hyjoy on 2018/3/27.
 */

import React, {Component} from 'react';

import {Text, View, WebView, StyleSheet} from 'react-native';

class HWebview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            isError: false
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isError
                        ?
                        <View style={styles.errorInfo}><Text style={styles.text}>网络有问题，请检查</Text></View>
                        :
                        <WebView
                            onError={this._onError.bind(this)}
                            startInLoadingState={true}
                            source={{uri: this.state.url}}
                            style={{marginTop: -20}}/>
                }


            </View>
        );
    }

    _onError() {
        this.setState({
            isError: true
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    errorInfo: {
        // marginTop: 100,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '300'
    }
});

module.exports = HWebview;