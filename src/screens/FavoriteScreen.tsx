import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FavItem from '../components/FavItem';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, selectFavorites } from '../store/favoritesSlice';
import { FONTFAMILY, FONTSIZE } from '../theme/theme';

const FavoriteScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavorites);
  const handleRemoveItem = React.useCallback(
    (itemId: any) => {
      dispatch(removeItem(itemId));
    },
    [dispatch],
  );

  const carPress = (car: object) => {
    navigation.navigate('CarDetail', { car });
  };

  const renderItem = React.useCallback(
    ({ item }: any) => (
      <FavItem car={item} onPress={carPress} onRemove={handleRemoveItem} />
    ),
    [handleRemoveItem],
  );

  if (favoriteItems.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: FONTFAMILY.iransansx_medium,
            fontSize: FONTSIZE.size_18,
            color: 'gray',
          }}
        >
          لیست علاقه‌مندی‌های شما خالی است.
        </Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={favoriteItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        extraData={favoriteItems.length}
        scrollEnabled={false}
        numColumns={2}
      />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
