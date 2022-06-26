/**
 * React Native BottomView
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 26 June 2022
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from '../src/screens/TaskList';
import { color, icon, PreferenceKeys, AppText, fonts } from '../src/constant';
import { vh, normalize, vw, screenWidth, screenHeight } from '../src/constant/dimesnion'
import * as Preference from '../src/storeData/Preference';

function AuditReports({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{
        color: color.APP_PRIMARY,
        fontFamily: fonts.ROBOTO_MEDIUM,
        fontSize: normalize(20),
        marginStart: vw(2)
      }}>Audit Reports</Text>
    </View>
  );
}

function ProfileScreen({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: vw(20) }}>
      <Text style={{
        color: color.APP_PRIMARY,
        fontFamily: fonts.ROBOTO_MEDIUM,
        fontSize: normalize(20),
        marginStart: vw(2)
      }}>Profile</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottomNavigation = ({ navigation }) =>{

  // React.useEffect( async () => {
  //   var IS_LOGIN = await Preference.GetData(PreferenceKeys.IS_LOGIN);
  //   navigation.navigate(IS_LOGIN == 'false' || IS_LOGIN == null && 'LoginScreen')
  // },[])

  return (
    <Tab.Navigator
      initialRouteName="TaskList"
      screenOptions={{
        tabBarStyle: {
          height: vh(67),
          backgroundColor: color.WHITE,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        },
        tabBarItemStyle: {
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.58,
          shadowRadius: 8.0,
          elevation: 0.5,
        }
      }}
    >
      <Tab.Screen
        name="TaskList"
        component={TaskList}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <Text style={{
              color: '#CFCFCF',
              marginTop: vh(-10),
              paddingBottom: vh(5),
              fontFamily: fonts.ROBOTO_REGULAR
            }}>Dashboard</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{
                height: vh(30),
                width: vw(30),
                resizeMode: 'contain',
              }}
              source={icon.IC_HOME_MENU}></Image>
          ),
        }}
      />
      <Tab.Screen name="Report" component={AuditReports}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <Text style={{
              color: '#CFCFCF',
              fontFamily: fonts.ROBOTO_REGULAR,
              marginTop: vh(-10),
              paddingBottom: vh(5),
            }}>Audit Reports</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{
                height: vh(30),
                width: vw(30),
                resizeMode: 'contain',
              }}
              source={icon.IC_REPORT_MENU}></Image>
          ),
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <Text style={{
              color: '#CFCFCF',
              fontFamily: fonts.ROBOTO_REGULAR,
              marginTop: vh(-10),
              paddingBottom: vh(5),
            }}>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{
                height: vh(30),
                width: vw(30),
                resizeMode: 'contain',
              }}
              source={icon.IC_PROFILE_MENU}></Image>
          ),
        }} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;