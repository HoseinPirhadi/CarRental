import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import MyIcon from './MyIcon';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="جستجو ..." />
      <MyIcon name="search" color={COLORS.Grey} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.White,
    marginHorizontal: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: FONTFAMILY.iransansx_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.Grey,
  },
});
