import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  MapView,
  Camera,
  MarkerView,
  addCustomHeader,
} from '@maplibre/maplibre-react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import MyIcon from '../components/MyIcon';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MAP_API_KEY } from '../api/Config';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, toggleFavorite } from '../store/favoritesSlice';

const CarDetailScreen = () => {
  const route = useRoute();
  const { car } = route.params;
  // set map api key
  addCustomHeader('x-api-key', MAP_API_KEY);

  const navigation = useNavigation();
  const backHandler = () => navigation.goBack();

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((favItem: any) => favItem.id === car.id);
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(car));
  };

  const iconName = isFavorite ? 'heart-fill' : 'heart';
  const iconColor = isFavorite ? COLORS.Primary : COLORS.Black;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainerL}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={handleToggleFavorite}>
            <MyIcon name={iconName} color={iconColor} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>موقعیت خودرو</Text>
          <TouchableOpacity onPress={backHandler}>
            <MyIcon name="arrow-left" color={COLORS.Black} />
          </TouchableOpacity>
        </View>
      </View>

      <MapView
        style={styles.mapContainer}
        logoEnabled={false}
        compassEnabled={false}
        rotateEnabled={false}
        mapStyle="https://map.ir/vector/styles/main/mapir-xyz-style-min-poi.json"
      >
        <Camera
          centerCoordinate={[car.longitude, car.latitude]}
          zoomLevel={14}
          minZoomLevel={11}
          maxZoomLevel={15}
        />
        <MarkerView coordinate={[car.longitude, car.latitude]}>
          <MyIcon name="location-bold" color={COLORS.Primary} size={35} />
        </MarkerView>
      </MapView>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomHeader}>
          <View>
            <Text style={styles.carName}>{car.name}</Text>
            <Text style={styles.carPrice}>
              {car.price.toLocaleString('fa-IR')} تومان
            </Text>
          </View>
          <Image
            source={car.image}
            style={styles.carImg}
            resizeMode="stretch"
          />
        </View>

        <View style={styles.bottomContent}>
          <Text style={styles.bottmHeadingText}>مشخصات کلی</Text>

          <View style={styles.generalDetail}>
            <View style={styles.generalBox}>
              <View style={styles.generalContent}>
                <MyIcon
                  name="speedometer"
                  size={FONTSIZE.size_20}
                  color={COLORS.Primary}
                />
                <Text style={styles.generalValue}>{car.max_speed} km/s</Text>
              </View>
              <Text style={styles.generalTitle}>حداکثر سرعت</Text>
            </View>

            <View style={styles.generalBox}>
              <View style={styles.generalContent}>
                <MyIcon
                  name="gearbox"
                  size={FONTSIZE.size_20}
                  color={COLORS.Primary}
                />
                <Text style={styles.generalValue}>{car.gearbox}</Text>
              </View>
              <Text style={styles.generalTitle}>گیربکس</Text>
            </View>

            <View style={styles.generalBox}>
              <View style={styles.generalContent}>
                <MyIcon
                  name="bucket"
                  size={FONTSIZE.size_20}
                  color={COLORS.Primary}
                />
                <Text style={styles.generalValue}>{car.color}</Text>
              </View>
              <Text style={styles.generalTitle}>رنگ</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.reservBtn}>
            <Text style={styles.reservText}>رزرو کردن</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CarDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainerL: {
    position: 'absolute',
    height: 56,
    width: '100%',
    top: 0,
    left: 0,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    zIndex: 2,
  },
  headerContent: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    backgroundColor: COLORS.White,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingHorizontal: 15,
  },
  headerTitle: {
    flex: 1,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.iransansx_medium,
    textAlign: 'center',
  },
  mapContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  bottomContainer: {
    borderRadius: 25,
    marginTop: -25,
  },
  bottomHeader: {
    flexDirection: 'row',
    backgroundColor: COLORS.DarkGrey,
    padding: 25,
    paddingBottom: 50,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  carName: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.iransansx_extrabold,
  },
  carPrice: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.iransansx_medium,
  },
  carImg: {
    width: 200,
    height: 120,
    position: 'absolute',
    end: -40,
    top: -30,
  },
  bottomContent: {
    backgroundColor: COLORS.White,
    borderRadius: 25,
    marginTop: -25,
    padding: 25,
    gap: 15,
  },
  bottmHeadingText: {
    fontFamily: FONTFAMILY.iransansx_bold,
    fontSize: FONTSIZE.size_18,
  },
  generalDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  generalBox: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.BlackRGB10,
    gap: 3,
  },
  generalContent: {
    flexDirection: 'row',
    gap: 5,
  },
  generalTitle: {
    fontFamily: FONTFAMILY.iransansx_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.Grey,
  },
  generalValue: {
    fontFamily: FONTFAMILY.iransansx_bold,
    fontSize: FONTSIZE.size_14,
  },
  reservBtn: {
    backgroundColor: COLORS.Primary,
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
  },
  reservText: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.iransansx_bold,
  },
});
