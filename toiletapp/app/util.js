/**
 * Created by hyjoy on 2018/3/27.
 */

import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    PixelRatio
} from 'react-native';


module.exports = {
    size: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').widget
    },
    pixel: 1 / PixelRatio.get(),
    // fetch <=> ajax
    get: function (url, success, error) {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                success(responseJson);
            }).catch((err) => {
            error(err);
        })
    }
};