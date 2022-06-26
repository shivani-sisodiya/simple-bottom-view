/**
 * React Native BottomView
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 26 June 2022
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import stylesCommon from './stylesCommon';


export const LoaderViewWithBackground = (props) => {

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
        <ActivityIndicator size="large" color={props.color} />
        </View>
    );
}

