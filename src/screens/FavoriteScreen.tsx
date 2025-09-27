import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FavItem from '../components/FavItem';
import { useNavigation } from '@react-navigation/native';

const FavoriteScreen = () => {
  const navigation = useNavigation();

  let cars = [
    {
      id: '1',
      name: '207',
      type: 'سدان',
      gearbox: 'دنده ای',
      fuel_capacity: 30,
      max_speed: 200,
      city: 'اصفهان',
      latitude: 32.6622103,
      longitude: 51.6703114,
      image: require('../assets/images/207.png'),
      brand_id: 1,
      price: 5000000,
      color: 'سفید',
    },
    {
      id: '2',
      name: 'مزدا 3',
      type: 'کوپه',
      gearbox: 'اتوماتیک',
      fuel_capacity: 5,
      max_speed: 220,
      city: 'یزد',
      latitude: 31.9017073,
      longitude: 54.3684658,
      image: require('../assets/images/mazda-3.png'),
      brand_id: 4,
      price: 6500000,
      color: 'سفید',
    },
    {
      id: '3',
      name: 'تیگو 8 پرومکس',
      type: 'شاسی بلند',
      gearbox: 'اتوماتیک',
      fuel_capacity: 60,
      max_speed: 240,
      city: 'مشهد',
      latitude: 36.3044858,
      longitude: 59.6135057,
      image: require('../assets/images/tiggo-8.png'),
      brand_id: 3,
      price: 6200000,
      color: 'مشکی',
    },
    {
      id: '4',
      name: 'بی ام و Z4',
      type: 'کوپه',
      gearbox: 'اتوماتیک',
      fuel_capacity: 70,
      max_speed: 270,
      city: 'تهران',
      latitude: 35.7834014,
      longitude: 51.3767525,
      image: require('../assets/images/bmw-z4.png'),
      brand_id: 2,
      price: 7000000,
      color: 'قرمز',
    },
  ];

  const carPress = (car: object) => {
    navigation.navigate('CarDetail', { car });
  };

  return (
    <View>
      <FlatList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <FavItem car={item} onPress={carPress} />}
        scrollEnabled={false}
        numColumns={2}
      />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
