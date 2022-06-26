/**
 * React Native BottomView
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 26 June 2022
 * @format
 * @flow strict-local
 */

import React from 'react';
import { icon } from '../constant';
import { Image, View, TouchableOpacity } from 'react-native';
import stylesCommon from '../commonTheme/stylesCommon'

const TooBarView = (props) => {
    return (
        <View style={stylesCommon.backBtnView}>
            <TouchableOpacity onPress={props.onPress}>
                <Image
                    style={stylesCommon.headerImage}
                    source={icon.IC_BACK_ARROW}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={stylesCommon.headerImage}
                    source={icon.IC_MENU}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default TooBarView;
