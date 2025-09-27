import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

const BrandItem = ({ brand }: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={brand.img_logo} style={styles.brandImage} />
      <Text style={styles.brandTitle}>{brand.name}</Text>
    </TouchableOpacity>
  );
};

export default BrandItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    alignItems: 'center',
    borderRadius: 12,
    padding: 15,
    gap: 15,
  },
  brandImage: {
    width: 56,
    height: 56,
    padding: 5,
  },
  brandTitle: {
    fontFamily: FONTFAMILY.iransansx_medium,
    fontSize: FONTSIZE.size_12,
  },
});
