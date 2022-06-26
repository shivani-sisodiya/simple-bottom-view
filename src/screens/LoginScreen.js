/**
 * React Native BottomView
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 26 June 2022
 * @format
 * @flow strict-local
 */

import React, {  } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { color, icon, PreferenceKeys, AppText } from '../constant';
import { ButtonView } from '../commonTheme/CommonView';
import stylesCommon from '../commonTheme/stylesCommon';
import * as Preference from '../storeData/Preference';
import { vh } from '../constant/dimesnion'


const LoginScreen = ({ navigation }) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    function Validation() {
        if (email.length === 0) {
            Alert.alert(AppText.ALERT_APP_NAME, AppText.ENTER_EMAIL)
            return false;
        } else if (emailRegex.test(email) === false) {
            Alert.alert(AppText.ALERT_APP_NAME, AppText.ENTER_VALID_EMAIL)
            return false;
        } else if (password.length === 0) {
            Alert.alert(AppText.ALERT_APP_NAME, AppText.ENTER_PASSWORD)
            return false;
        } else {
            return true;
        }
    }

    function renderBtnClick() {
        if (Validation()) {
            Preference.SetData(PreferenceKeys.IS_LOGIN, 'true')
            Alert.alert(AppText.YOUR_MAIL, email)
            navigation.navigate('BottomNavigation')
        }
    }
    return (
        <SafeAreaView style={[stylesCommon.safeAreaStyle, { backgroundColor: color.LIGHT_BAblaCKGROUND, }]}>
            <View style={[stylesCommon.MainContainer, { marginTop: vh(60) }]}>
                <Image
                    style={stylesCommon.logoImage}
                    source={icon.IC_LOGO}></Image>
                <View style={stylesCommon.mainViewLogin}>
                    <Text style={stylesCommon.emailText}>E- Mail Address</Text>
                    <View style={stylesCommon.inputView}>
                        <Image
                            style={stylesCommon.loginICON}
                            source={icon.IC_EMAIL}></Image>
                        <TextInput
                            style={stylesCommon.textInputView}
                            onChangeText={(text) => onChangeEmail(text)}
                            value={email}
                        />
                    </View>

                </View>
                <View style={stylesCommon.mainViewLogin}>
                    <Text style={stylesCommon.emailText}>Password</Text>
                    <View style={stylesCommon.inputView}>
                        <Image
                            style={stylesCommon.loginICON}
                            source={icon.IC_LOCK}></Image>

                        <TextInput
                            style={stylesCommon.textInputView}
                            secureTextEntry={true}
                            onChangeText={(text) => onChangePassword(text)}
                            value={password}
                        />
                    </View>

                </View>
                <TouchableOpacity style={{
                    width: '100%'
                }}>
                    <Text style={stylesCommon.frgText}>Forgot Password?</Text>
                </TouchableOpacity>
                <ButtonView
                    text={'Login'}
                    onClick={() => renderBtnClick()} />
            </View>

        </SafeAreaView >
    );
}
export default LoginScreen;