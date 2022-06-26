/**
 * React Native BottomView
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 26 June 2022
 * @format
 * @flow strict-local
 */

 import axios from 'axios';
 import {
     Alert,
 } from 'react-native';
 import { AppText } from '../constant';
 
 export const axiosCallAPI = (method, endpoint, headerRequest, isShowMessage) => {
     const client = axios.create({
         withCredentials: true,
         responseType: 'json',
         timeout: 30000,
     });
     if (method === 'get') {
         return axios.get(endpoint, headerRequest)
             .then((response) => {
                return response.data.data;
             })
             .catch((error) => {
                showMessage(error.message, 'error');
             })
     }
 }
 
 const showMessage = (message, type) => {
     Alert.alert(AppText.ALERT_APP_NAME, message)
 }