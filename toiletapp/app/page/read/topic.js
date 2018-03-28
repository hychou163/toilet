/**
 * Created by hyjoy on 2018/3/27.
 */

import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

class Topic extends Component {

    render() {
        return (
            <View>
                <View>
                    <Text>推荐专题</Text>
                </View>
                <View>
                    <View>
                        <Image
                            style={styles.img}
                            source={{uri: 'http://7xtp9h.com2.z0.glb.clouddn.com/42.jpg'}}/>
                    </View>
                    <View>
                        <Image
                            style={styles.img}
                            source={{uri: 'http://7xtp9h.com2.z0.glb.clouddn.com/42.jpg'}}/>
                    </View>
                </View>
                <View>
                    <Text>查看更多同期专题</Text>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    img: {
        height: 100,
        width: 100
    }
});

module.exports = Topic;
/**
 * Created by hyjoy on 2018/3/27.
 */