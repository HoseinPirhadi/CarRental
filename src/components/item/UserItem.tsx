import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MyIcon from '../MyIcon';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';

type Props = {
  item: any;
};

const UserItem = ({ item }: Props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.White,
        borderRadius: 12,
        padding: 18,
        gap: 12,
      }}
      onPress={item.onPress}
    >
      <MyIcon
        name={item.icon}
        color={item.isDestructive ? 'red' : COLORS.TextDark}
      />
      <Text
        style={{
          flex: 1,
          fontFamily: FONTFAMILY.iransansx_medium,
          fontSize: FONTSIZE.size_14,
          color: item.isDestructive ? 'red' : COLORS.TextDark,
        }}
      >
        {item.title}
      </Text>
      {item.isDestructive ? null : (
        <MyIcon name="arrow-left-2" size={FONTSIZE.size_18} />
      )}
    </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({});
