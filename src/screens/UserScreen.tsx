import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import UserItem from '../components/item/UserItem';
import Avatar from '../assets/icons/avatar.svg';

export default function UserScreen() {
  const menuItems = [
    {
      id: '1',
      icon: 'user-edit',
      title: 'ویرایش اطلاعات پروفایل',
      onPress: () => Alert.alert('ویرایش اطلاعات'),
    },
    {
      id: '2',
      icon: 'lock',
      title: 'تغییر رمز عبور',
      onPress: () => Alert.alert('تغییر رمز عبور'),
    },
    {
      id: '3',
      icon: 'receipt-text',
      title: 'تاریخچه تراکنش‌ها',
      onPress: () => Alert.alert('تاریخچه تراکنش‌ها'),
    },
    {
      id: '4',
      icon: 'notification',
      title: 'تنظیمات اعلان‌ها',
      onPress: () => Alert.alert('تنظیمات اعلان‌ها'),
    },
    {
      id: '5',
      icon: 'message-question',
      title: 'سوالات متداول',
      onPress: () => Alert.alert('سوالات متداول'),
    },
    {
      id: '6',
      icon: 'lifebuoy',
      title: 'پشتیبانی',
      onPress: () => Alert.alert('پشتیبانی'),
    },
    {
      id: '7',
      icon: 'logout',
      title: 'خروج از حساب',
      onPress: () => Alert.alert('خروج'),
      isDestructive: true,
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Avatar style={styles.avatar} />
          <Text style={styles.name}>حسین پیرهادی</Text>
          <Text style={styles.email}>info@hoseinpirhadi.ir</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>رزرو</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3 ماه</Text>
            <Text style={styles.statLabel}>سابقه</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.7</Text>
            <Text style={styles.statLabel}>امتیاز</Text>
          </View>
        </View>

        <FlatList
          data={menuItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <UserItem item={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
  name: {
    fontFamily: FONTFAMILY.iransansx_bold,
    fontSize: FONTSIZE.size_20,
  },
  email: { fontSize: 14, color: 'gray', marginBottom: 20 },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    gap: 15,
  },
  statItem: {
    flex: 1,
    backgroundColor: COLORS.White,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: FONTFAMILY.iransansx_extrabold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.Primary,
  },
  statLabel: {
    fontFamily: FONTFAMILY.iransansx_medium,
    fontSize: FONTSIZE.size_14,
    color: 'gray',
    marginTop: 4,
  },
});
