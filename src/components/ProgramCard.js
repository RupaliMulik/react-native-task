// src/components/ProgramCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PrimaryButton from './PrimaryButton';
import { COLORS } from '../theme/color';

const ProgramCard = ({
  title,
  tag,
  progress,
  duration,
  description,
}) => {
  return (
    <View style={styles.card}>

      {/* Inner gradient glow */}
      <LinearGradient
        colors={[
          'rgba(167,255,79,0.22)',
          'rgba(167,255,79,0.08)',
          'rgba(0,0,0,0)',
        ]}
            start={{ x: 0.8, y: 0.2 }}
            end={{ x: 0.2, y: 1 }}
        style={styles.inner}
      >

        <Text style={styles.title}>{title}</Text>

        {/* Tag */}
        <View style={styles.tag}>
          <MaterialCommunityIcons
            name="arm-flex"
            size={18}
            color={COLORS.green}
          />
          <Text style={styles.tagText}>{tag}</Text>
        </View>

        {/* Progress row */}
        <View style={styles.row}>
          <Text style={styles.progress}>{progress}</Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.description}>{description}</Text>

        {/* FIXED: label instead of title */}
        <PrimaryButton label="Activate Plan" />

      </LinearGradient>
    </View>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  card: {
     borderRadius: 22,
    padding: 1.5, // 👈 IMPORTANT for glow separation
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.10)',
  },
  inner: {
    borderRadius: 21,
    padding: 18,
    backgroundColor: 'rgba(18,18,18,0.75)',
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'rgba(100, 97, 97, 0.22)',
    marginBottom: 14,
  },
  tagText: {
    color: COLORS.textTag,
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  progress: {
    color: COLORS.white,
    fontWeight: '600',
  },
  duration: {
    color: COLORS.white,
  },
  divider: {
    height: 3,
    backgroundColor: '#7c7a7aff',
    marginVertical: 10,
    borderRadius:10,
  },
  description: {
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
});