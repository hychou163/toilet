/**
 * Created by hyjoy on 2018/3/27.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

import Util from '../../util';

class Search extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.search_input}
                    placeholder={"搜索"}
                    placeholderTextColor={"#5e6877"}/>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20
    },
    search_input: {
        height: 35,
        borderWidth: Util.pixel,
        paddingLeft: 5,
        borderColor: '#eeeeee',
        borderRadius: 3,
        fontSize: 15
    }
});

module.exports = Search;