// src/components/InfoCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../theme/color';

const InfoCard = ({ text }) => {
  return (
    <View style={styles.card}>
      <MaterialCommunityIcons
        name="information-outline"
        size={18}
        color={COLORS.textSecondary}
        style={{ marginRight: 8 }}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',

    // backgroundColor: '#212020ff',
    backgroundColor: 'rgb(19, 18, 18)',
    // borderWidth:1,
    borderColor: '#1F232B',
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 30, // more rounded
    marginTop:35,
    marginBottom:8,
    
  },
  text: {
    flex: 1,
    color: COLORS.textSecondary,
    fontSize: 11,
    lineHeight: 17,
  },
});
