import React from 'react';
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
import HorizontalItem from '../components/HorizontalItem';
import VerticalItem from '../components/VerticalItem';
import CategoryItem from '../components/CategoryItem';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  let api_data = [
    {
      id: '1',
      brand: 'ایران خودرو',
      image: require('../assets/brands/iran-khodro.png'),
    },
    { id: '2', brand: 'بی ام و', image: require('../assets/brands/bmw.png') },
    { id: '3', brand: 'بنز', image: require('../assets/brands/benz.png') },
    { id: '4', brand: 'سایپا', image: require('../assets/brands/saipa.png') },
    { id: '5', brand: 'نیسان', image: require('../assets/brands/nissan.png') },
  ];
  let api_data2 = [
    {
      id: '1',
      name: '207',
      image: require('../assets/images/207.png'),
      price: '800 هزار تومان',
      location: 'اصفهان',
      gear: 'دنده ای',
      volume: '30 لیتر',
      type: 'سدان',
    },
    {
      id: '2',
      name: 'Mazda 3',
      image: require('../assets/images/mazda-3.png'),
      price: '2 میلیون تومان',
      location: 'یزد',
      gear: 'دنده ای',
      volume: '42 لیتر',
      type: 'کوپه ',
    },
    {
      id: '3',
      name: 'Tiggo 8 ProMax',
      image: require('../assets/images/tiggo-8.png'),
      price: '1.5 میلیون تومان',
      location: 'مشهد',
      gear: 'اتوماتیک',
      volume: '50 لیتر',
      type: 'شاسی‌بلند',
    },
    {
      id: '4',
      name: 'BMW Z4',
      image: require('../assets/images/bmw-z4.png'),
      price: '3 میلیون تومان',
      location: 'تهران',
      gear: 'اتوماتیک',
      volume: '70 لیتر',
      type: 'کوپه',
    },
  ];

  const carPress = (id: string) => {
    navigation.navigate('CarDetail', { id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />

        <SectionHeader title="بر اساس برند" />
        <FlatList
          data={api_data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CategoryItem category={item} />}
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          style={styles.horizontalList}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <SectionHeader title="خودرو های لوکس" />
        <FlatList
          data={api_data2}
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
          data={api_data2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <VerticalItem car={item} />}
          scrollEnabled={false}
        />
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
