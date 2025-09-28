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
import { cars } from '../data/cars';
import { brands } from '../data/brand';

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
