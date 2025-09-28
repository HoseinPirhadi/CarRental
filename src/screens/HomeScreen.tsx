import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import SectionHeader from '../components/SectionHeader';
import HorizontalItem from '../components/item/HorizontalItem';
import VerticalItem from '../components/item/VerticalItem';
import BrandItem from '../components/item/BrandItem';
import { useNavigation } from '@react-navigation/native';
import SearchResults from '../components/SearchResults';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigation = useNavigation();

  const handleSearchChange = (text: string) => {
    setSearchText(text);

    if (text.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  const handleCancelSearch = (isSearching: boolean) => {
    setSearchText('');
    setIsSearching(isSearching);
  };

  let brands = [
    {
      id: '1',
      name: 'ایران خودرو',
      img_logo: require('../assets/brands/iran-khodro.png'),
      created_at: '2025-09-24T10:51:00.803861+00:00',
    },
    {
      id: '2',
      name: 'بی ام و',
      img_logo: require('../assets/brands/bmw.png'),
      created_at: '2025-09-24T10:51:35.971605+00:00',
    },
    {
      id: '3',
      name: 'بنز',
      img_logo: require('../assets/brands/benz.png'),
      created_at: '2025-09-24T10:51:52.322591+00:00',
    },
    {
      id: '4',
      name: 'سایپا',
      img_logo: require('../assets/brands/saipa.png'),
      created_at: '2025-09-24T10:52:06.953867+00:00',
    },
    {
      id: '5',
      name: 'نیسان',
      img_logo: require('../assets/brands/nissan.png'),
      created_at: '2025-09-24T10:52:22.039149+00:00',
    },
  ];
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar
          isSearching={isSearching}
          onCancel={handleCancelSearch}
          value={searchText}
          onChangeText={handleSearchChange}
          onFocus={() => setIsSearching(true)}
        />
        {isSearching ? (
          <SearchResults
            data={cars}
            searchText={searchText}
            onPress={carPress}
          />
        ) : (
          <View>
            <SectionHeader title="بر اساس برند" />
            <FlatList
              data={brands}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <BrandItem brand={item} />}
              ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
              style={styles.horizontalList}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

            <SectionHeader title="خودرو های لوکس" />
            <FlatList
              data={cars}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <HorizontalItem car={item} onPress={carPress} />
              )}
              ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
              style={styles.horizontalList}
              contentContainerStyle={{ paddingTop: 25, paddingEnd: 15 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

            <SectionHeader title="جدیدترین ها" />
            <FlatList
              data={cars}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <VerticalItem car={item} onPress={carPress} />
              )}
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: -26,
  },
  horizontalList: {
    marginHorizontal: 15,
    overflow: 'visible',
  },
});
