/**
 * Created by hyjoy on 2018/3/27.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

import Category from './read/category';
import List from './read/list';
import Recommend from './read/recommend';
import Search from './read/search';
import Topic from './read/topic';
import Util from '../util';

class Hr extends Component {
    render() {
        return (
            <View>
                <View style={styles.hr}></View>
            </View>
        );
    }
}

class read extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }

    render() {
        return (
            <View>
                <Search/>
                <Hr/>
                {
                    this.state.isShow
                        ?
                        <ScrollView>
                            <Topic/>
                            <Recommend/>
                            <Category/>
                            <List/>
                        </ScrollView>
                        :
                        null
                }
            </View>
        )
    };

    // TODO: fetch data
    componentDidMount() {
        this.setState({
            isShow: true
        })
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    hr: {
        borderColor: "#F0F0F0",
        borderWidth: Util.pixel,
        marginTop: 10
    }
});


module.exports = read;