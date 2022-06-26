/**
 * React Native BottomView
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 26 June 2022
 * @format
 * @flow strict-local
 */

import { StyleSheet } from 'react-native';
import { color, fonts } from '../constant';
import { vh, normalize, vw } from '../constant/dimesnion'


export default StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems:'center'
    },
    safeAreaStyle: {
        backgroundColor: color.WHITE,
        flex: 1,
    },
    primaryButtonBackground: {
        backgroundColor: color.APP_PRIMARY,
        borderRadius: 10,
        marginTop:vh(90),
        width: '90%',
        height: vh(45) ,
        justifyContent:'center',
        alignSelf: 'center',
    },
    primaryButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: color.WHITE,
        fontFamily: fonts.ROBOTO_BOLD
    },
    backBtnView:{
        height: vh(55),
        width: '100%',
        borderBottomEndRadius: vh(10),
        borderBottomStartRadius: vh(10),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: vw(8),
        backgroundColor: color.APP_PRIMARY
    },
    headerImage:{
        height: vh(30),
        width: vw(30),
        resizeMode: 'contain',
    },
    detailImage:{
        height: vh(100),
        width: vw(100),
        resizeMode: 'contain',
    },
    detailID:{
        color: color.APP_PRIMARY,
        fontFamily: fonts.ROBOTO_MEDIUM,
        fontSize: normalize(18),
        marginTop:vh(15),
    },
    detailName:{
        color: color.BLACK,
        fontFamily: fonts.ROBOTO_MEDIUM,
        fontSize: normalize(22),
    },
    detailEmail:{
        color: color.BLACK,
        fontFamily: fonts.ROBOTO_REGULAR,
        fontSize: normalize(16),
        marginEnd:vw(10)
    },
    detailEmailValue:{
        color: color.BLACK,
        fontFamily: fonts.ROBOTO_REGULAR,
        fontSize: normalize(16),
    },
    logoImage:{
        height: vh(200),
        width: vw(200),
        resizeMode: 'contain',
        marginBottom: vh(30)
    },
    mainViewLogin:{
        alignSelf: 'flex-start',
        marginHorizontal: vw(20),
        marginTop: vh(20),
        width: '90%',
    },
    emailText:{
        fontFamily: fonts.ROBOTO_REGULAR,
        fontSize: normalize(16),
        marginStart: vw(2),
        color: color.TEXT_COLOR
    },
    inputView:{
        height: vh(40),
        marginTop: vh(5),
        borderColor: color.BORDER_COLOR,
        flexDirection: 'row',
        color: color.BLACK,
        borderWidth: vh(1),
        borderRadius: vh(10),
        fontSize: normalize(16),
        alignItems: 'center',
        paddingStart: vh(10)
    },
    loginICON:{
        height: vh(20),
        width: vw(20),
        resizeMode: 'contain',
    },
    textInputView:{
        width: '90%',
        fontSize: normalize(16),
        padding:vh(8)
    },
    frgText:{
        marginTop: vh(10),
        color: color.TEXT_COLOR,
        fontSize: normalize(14),
        fontFamily: fonts.ROBOTO_REGULAR,
        position: 'absolute',
        end: vw(20)
    },
    flatListView:{
        marginTop: 5,
        marginBottom: 10,
    },
    textIputView:{
        height: vh(40),
        marginTop: vh(10),
        color: color.BLACK,
        fontSize: normalize(14),
        fontFamily: fonts.ROBOTO_ITALIC,
    },
    taskText:{
        color: color.APP_PRIMARY,
        fontFamily: fonts.ROBOTO_BOLD,
        fontSize: normalize(20),
    },
    taskView:{
        width: '100%',
        paddingHorizontal: vw(20),
        paddingVertical: vh(20)
    },
    detailMainView:{
        flex: 1,
        backgroundColor: color.LIGHT_BACKGROUND,
        borderRadius: 10,
        paddingHorizontal:vw(10),
        paddingVertical:vh(10),
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        shadowColor: Platform.OS === 'ios' ? color.LIGHT_GREY : color.BLACK,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 3,
        shadowRadius: 1,
        elevation: 2,
    },
    detailText:{
        color: color.APP_PRIMARY,
        fontFamily: fonts.ROBOTO_MEDIUM,
        fontSize: normalize(13),
        marginStart:vw(2)
    },
    nameTextView:{
        color: color.BLACK,
        fontFamily: fonts.ROBOTO_REGULAR,
        fontSize: normalize(12),
        marginEnd:vw(10)
    },
    emailValView:{
        color: color.BLACK,
        fontFamily: fonts.ROBOTO_REGULAR,
        fontSize: normalize(12),
    },
    statusImage:{
        height: vh(30),
        width: vw(30),
        resizeMode: 'contain',
        position:'absolute',
        end:vh(10),
        top:vh(10)
    },
    genderView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginStart:vw(10)
    }

});
