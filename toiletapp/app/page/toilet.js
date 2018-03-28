/**
 * Created by hyjoy on 2018/3/27.
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, WebView} from 'react-native';

import HWebview from '../widget/hwebview';

import Util from '../util';

const nearByURL = 'http://localhost:63343/tolletapp/app/html/nearby.html';
class tollet extends Component {
    render() {
        return (
            <HWebview url='http://localhost:63343/tolletapp/app/html/nearby.html?_ijt=mvse464jrn3qf1tqji71dc3g95'/>
        );
    }
}


var styles = StyleSheet.create({
    text: {
        fontSize: 60
    }
});

module.exports = tollet;


