import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../..//theme/theme';
import MyIcon from '../MyIcon';

type Props = {
  car: any;
  onPress: (car: object) => void;
  onRemove: (id: any) => void;
};

const FavItem = React.memo(({ car, onPress, onRemove }: Props) => {
  return (
    <TouchableOpacity style={styles.countainer} onPress={() => onPress(car)}>
      <TouchableOpacity onPress={() => onRemove(car.id)}>
        <MyIcon name="close-Circle" />
      </TouchableOpacity>
      <Image source={car.image} style={styles.carImage} resizeMode="contain" />
      <View style={{ gap: 5 }}>
        <Text style={styles.carName}>{car.name}</Text>
        <View style={styles.priceCountainer}>
          <MyIcon name="moneys" size={FONTSIZE.size_20} />
          <Text style={styles.priceText}>
            {car.price.toLocaleString('fa-IR')} تومان
            <Text style={{ fontSize: FONTSIZE.size_10 }}>/روزانه</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default FavItem;

const styles = StyleSheet.create({
  countainer: {
    flex: 1,
    backgroundColor: COLORS.White,
    margin: 10,
    borderRadius: 12,
    gap: 15,
    padding: 15,
  },
  carImage: {
    width: 150,
    height: 80,
    alignSelf: 'center',
  },
  carName: {
    fontFamily: FONTFAMILY.iransansx_bold,
    fontSize: FONTSIZE.size_16,
  },
  priceCountainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priceText: {
    fontFamily: FONTFAMILY.iransansx_medium,
    fontSize: FONTSIZE.size_12,
  },
});
