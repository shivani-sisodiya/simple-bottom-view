/**
 * React Native BottomView
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 26 June 2022
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';
import { color, icon, AppText } from '../constant';
import stylesCommon from '../commonTheme/stylesCommon';
import TooBarView from '../commonTheme/TooBarView'

const TaskDetail = ({ navigation, route }) => {
    const { data } = route.params;

    return (
        <SafeAreaView style={[stylesCommon.safeAreaStyle, { backgroundColor: color.LIGHT_BAblaCKGROUND, }]}>
            <TooBarView
                onPress={() => navigation.goBack()} />

            <View style={[stylesCommon.MainContainer, { justifyContent: 'center' }]}>
                {
                    data.status == 'inactive' ?
                        <Image
                            style={stylesCommon.detailImage}
                            source={icon.IC_FAIL}></Image>
                        :
                        <Image
                            style={stylesCommon.detailImage}
                            source={icon.IC_SUCCESS}></Image>
                }
                <Text style={stylesCommon.detailID}>
                    {'#' + data.id}
                </Text>
                <Text style={stylesCommon.detailName}>
                    {data.name}
                </Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={stylesCommon.detailEmail}>
                        {AppText.EMAIL}
                    </Text>
                    <Text style={stylesCommon.detailEmailValue}>
                        {data.email}
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={stylesCommon.detailEmail}>
                        {AppText.GENDER}
                    </Text>
                    <Text style={stylesCommon.detailEmailValue}>
                        {data.gender}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={stylesCommon.detailEmail}>
                        {AppText.STATUS}
                    </Text>
                    <Text style={stylesCommon.detailEmailValue}>
                        {data.status}
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    );
};


export default TaskDetail;
