import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.moreText}>مشاهده همه</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 35,
  },
  headingText: {
    fontFamily: FONTFAMILY.iransansx_bold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.TextDark,
  },
  moreText: {
    fontFamily: FONTFAMILY.iransansx_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.Primary,
  },
});

export default SectionHeader;
