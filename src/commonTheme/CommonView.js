/**
 * React Native BottomView
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 26 June 2022
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity, Modal, Pressable, button } from 'react-native';
import stylesCommon from '../commonTheme/stylesCommon'
import { AppText, color, fonts, icon, PreferenceKeys } from '../constant';

export const ButtonView = (props) => {
    return (
        <TouchableOpacity style={stylesCommon.primaryButtonBackground}
            onPress={props.onClick}>
            <Text style={stylesCommon.primaryButtonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}
