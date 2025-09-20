import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MyIcon from './MyIcon';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

const VerticalItem = ({ car }: any) => {
  return (
    <View style={styles.countainer}>
      <Image source={car.image} style={styles.carImage} resizeMode="contain" />

      <View style={styles.cardBottom}>
        <View style={styles.detailCountainer}>
          <Text style={styles.carName}>{car.name}</Text>
          <View style={styles.priceCountainer}>
            <MyIcon name="moneys" size={FONTSIZE.size_24} />
            <Text style={styles.priceText}>
              {car.price}
              <Text style={{ fontSize: FONTSIZE.size_12 }}>/روزانه</Text>
            </Text>
          </View>
        </View>

        <View style={styles.buttonCountainer}>
          <TouchableOpacity style={styles.buttonAction}>
            <MyIcon name="arrow-left" color={COLORS.White} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerticalItem;

const styles = StyleSheet.create({
  countainer: {
    backgroundColor: COLORS.White,
    margin: 10,
    borderRadius: 12,
    gap: 15,
    paddingTop: 15,
    paddingStart: 15,
  },
  carImage: {
    height: 150,
    alignSelf: 'center',
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailCountainer: {
    marginBottom: 8,
    gap: 4,
  },
  carName: {
    fontFamily: FONTFAMILY.iransansx_bold,
    fontSize: FONTSIZE.size_18,
  },
  priceCountainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  priceText: {
    fontFamily: FONTFAMILY.iransansx_medium,
    fontSize: FONTSIZE.size_14,
  },
  buttonCountainer: {
    backgroundColor: 'rgb(242, 242, 242)',
    height: 71,
    width: 61,
    borderTopStartRadius: 12,
    paddingStart: 8,
    paddingVertical: 8,
  },
  buttonAction: {
    backgroundColor: COLORS.Primary,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
