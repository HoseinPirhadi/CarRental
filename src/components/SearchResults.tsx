import React, { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import VerticalItem from './item/VerticalItem';
import { FONTFAMILY, FONTSIZE } from '../theme/theme';
import { normalizeNumerals } from '../utils/textUtils';

type Props = {
  data: any;
  searchText: string;
  onPress: (car: object) => void;
};

const SearchResults = ({ data, searchText, onPress }: Props) => {
  const filteredData = useMemo(() => {
    if (!searchText) {
      return [];
    }

    const normalizedSearchText = normalizeNumerals(searchText)
      .toLowerCase()
      .trim();
    return data.filter((item: any) => {
      const normalizedItemName = normalizeNumerals(item.name).toLowerCase();
      return normalizedItemName.includes(normalizedSearchText);
    });
  }, [data, searchText]);

  const renderItem = useCallback(
    ({ item }: any) => (
      <VerticalItem car={item} onPress={() => onPress(item)} />
    ),
    [],
  );

  return (
    <View>
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={false}
        />
      ) : searchText.length > 0 ? (
        <Text style={styles.notfoundText}>
          نتیجه‌ای برای "{searchText}" یافت نشد.
        </Text>
      ) : null}
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  notfoundText: {
    fontFamily: FONTFAMILY.iransansx_medium,
    fontSize: FONTSIZE.size_18,
    color: 'gray',
  },
});
