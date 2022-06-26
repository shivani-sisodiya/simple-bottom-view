/**
 * React Native BottomView
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 26 June 2022
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    RefreshControl,
    FlatList
} from 'react-native';
import { color, icon ,AppText} from '../constant';
import stylesCommon from '../commonTheme/stylesCommon';
import { BackHandler } from 'react-native';
import { axiosCallAPI } from '../API/axiosCommonService';
import { LoaderViewWithBackground } from '../commonTheme/LoaderView'
import TooBarView from '../commonTheme/TooBarView'
import * as Utills from '../API/Utills';
import { normalize } from '../constant/dimesnion'

const TaskList = ({ navigation }) => {
    const [searchResult, onChangeSearchResult] = React.useState("");
    const [loaderView, setLoaderView] = useState(true);
    const [taskList, setTaskList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getTaskList();
        return () => {
        };
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => {
            getTaskList()
        });
    }, []);

 function getTaskList() {
        let requestOptions = {
            headers: {
                Accept: 'application/json',
            }
        };

        axiosCallAPI('get', Utills.TASK_LIST, requestOptions, true)
            .then(response => {
                setLoaderView(false)
                setRefreshing(false)
                setTaskList(response)
            })
    }

    const DetailView = (item) => {
        navigation.navigate('TaskDetail', { data: item })
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={stylesCommon.detailMainView}
                onPress={() => DetailView(item)}>
                <Text style={stylesCommon.detailText}>
                    {'#' + item.id}
                </Text>
                <Text style={[stylesCommon.detailName, { fontSize: normalize(18) }]}>
                    {item.name}
                </Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={stylesCommon.nameTextView}>
                        {AppText.EMAIL}
                    </Text>
                    <Text style={stylesCommon.emailValView}>
                        {item.email}
                    </Text>
                </View>
                <View style={stylesCommon.genderView}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={stylesCommon.nameTextView}>
                            {AppText.GENDER}
                        </Text>
                        <Text style={stylesCommon.emailValView}>
                            {item.gender}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={stylesCommon.nameTextView}>
                            {AppText.STATUS}
                        </Text>
                        <Text style={[stylesCommon.emailValView, { color: item.status != 'inactive' ? '#6DA937' : '#D24D4D' }]}>
                            {item.status}
                        </Text>
                    </View>
                </View>
                {
                    item.status == 'inactive' ?
                        <Image
                            style={stylesCommon.statusImage}
                            source={icon.IC_FAIL}></Image>
                        :
                        <Image
                            style={stylesCommon.statusImage}
                            source={icon.IC_SUCCESS}></Image>
                }
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={stylesCommon.safeAreaStyle}>

            <View style={stylesCommon.MainContainer}>
                <TooBarView
                    onPress={ () => BackHandler.exitApp()} />
                {
                    loaderView ?
                            <LoaderViewWithBackground
                                color={color.APP_PRIMARY} />
                        :
                        <View style={stylesCommon.taskView}>
                            <Text style={stylesCommon.taskText}>
                                {'Tasks'}
                            </Text>
                            <TextInput
                                style={stylesCommon.textIputView}
                                placeholder="Search Results"
                                onChangeText={(text) => {
                                    onChangeSearchResult(text)
                                }}
                                value={searchResult}
                            />
                            <FlatList
                                // data={taskList}
                                data={taskList}
                                renderItem={renderItem}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={onRefresh}
                                    />
                                }
                                keyExtractor={item => item.id}
                                style={stylesCommon.flatListView}
                                showsVerticalScrollIndicator={false}
                            />

                        </View>
                }
            </View>

        </SafeAreaView >
    );
}

export default TaskList;