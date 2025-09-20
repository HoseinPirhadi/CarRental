import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import MyIcon from './MyIcon';

const HorizontalItem = ({ car }: any) => {
  return (
    <TouchableOpacity style={styles.countainer}>
      <Image style={styles.carImage} source={car.image} />

      <View style={styles.countainerCar}>
        <Text style={styles.carName}>{car.name}</Text>
        <Text style={styles.carType}>{car.type}</Text>
      </View>

      <View style={styles.countainerDetail}>
        <View style={styles.detailItem}>
          <MyIcon
            name="location"
            color={COLORS.Primary}
            size={FONTSIZE.size_18}
          />
          <Text style={styles.detalText}>{car.location}</Text>
        </View>

        <View style={styles.detailItem}>
          <MyIcon
            name="gearbox"
            color={COLORS.Primary}
            size={FONTSIZE.size_18}
          />
          <Text style={styles.detalText}>{car.gear}</Text>
        </View>

        <View style={styles.detailItem}>
          <MyIcon
            name="gas-station"
            color={COLORS.Primary}
            size={FONTSIZE.size_16}
          />
          <Text style={styles.detalText}>{car.volume}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalItem;

const styles = StyleSheet.create({
  countainer: {
    backgroundColor: COLORS.White,
    padding: 15,
    borderRadius: 12,
    gap: 25,
  },
  carImage: {
    width: 120,
    position: 'absolute',
    height: 67,
    top: -25,
    right: -5,
  },
  countainerCar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  carName: {
    fontFamily: FONTFAMILY.iransansx_bold,
    fontSize: FONTSIZE.size_16,
  },
  carType: {
    fontFamily: FONTFAMILY.iransansx_medium,
    fontSize: 12,
    backgroundColor: COLORS.PrimaryRGBA15,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    color: COLORS.Primary,
  },
  countainerDetail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 15,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  detalText: {
    fontFamily: FONTFAMILY.iransansx_regular,
    fontSize: 13,
  },
});
