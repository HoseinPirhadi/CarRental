import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import UserScreen from '../screens/UserScreen';
import { COLORS, FONTFAMILY } from '../theme/theme';
import MyIcon from '../components/MyIcon';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 100,
          paddingTop: 15,
        },
        headerTitleStyle: {
          fontFamily: FONTFAMILY.iransansx_medium,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.countainer}>
                <MyIcon
                  name="home"
                  color={focused ? COLORS.Primary : COLORS.Grey}
                  size={size}
                />
                <View
                  style={[
                    styles.bottomDot,
                    { display: focused ? 'flex' : 'none' },
                  ]}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="علاقه مندی ها"
        component={FavoriteScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.countainer}>
                <MyIcon
                  name="heart"
                  color={focused ? COLORS.Primary : COLORS.Grey}
                  size={size}
                />
                <View
                  style={[
                    styles.bottomDot,
                    { display: focused ? 'flex' : 'none' },
                  ]}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="پروفایل"
        component={UserScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.countainer}>
                <MyIcon
                  name="user"
                  color={focused ? COLORS.Primary : COLORS.Grey}
                  size={size}
                />
                <View
                  style={[
                    styles.bottomDot,
                    { display: focused ? 'flex' : 'none' },
                  ]}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  countainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  bottomDot: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.Primary,
    borderRadius: '50%',
  },
});

export default BottomNavigator;
