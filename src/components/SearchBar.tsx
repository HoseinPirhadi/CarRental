import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import MyIcon from './MyIcon';

type Props = TextInputProps & {
  isSearching: boolean;
  onCancel: (isSearching: boolean) => void;
};

const SearchBar = ({ isSearching, onCancel, ...props }: Props) => {
  return (
    <View style={{ flexDirection: 'row', gap: 10 }}>
      {isSearching ? (
        <TouchableOpacity
          onPress={() => onCancel(false)}
          style={styles.btnCloseSearch}
        >
          <MyIcon name="arrow-right" />
        </TouchableOpacity>
      ) : null}
      <View style={[styles.container, { marginStart: isSearching ? 0 : 15 }]}>
        <TextInput
          style={styles.searchInput}
          placeholder="جستجو ..."
          {...props}
        />
        <MyIcon name="search" color={COLORS.Grey} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.White,
    marginEnd: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  btnCloseSearch: {
    width: 56,
    height: 56,
    backgroundColor: COLORS.White,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 15,
  },
  searchInput: {
    flex: 1,
    fontFamily: FONTFAMILY.iransansx_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.Grey,
  },
});
