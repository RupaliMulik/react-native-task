// src/components/ProgramCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    <View style={styles.cardWrapper}>
      <View style={styles.card}>

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

        {/* Progress */}
        <View style={styles.row}>
          <Text style={styles.progress}>{progress}</Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>

        {/* Divider */}
        <View style={styles.dividerRow}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <View key={index} style={styles.dividerSegment} />
          ))}
        </View>

        <Text style={styles.description}>{description}</Text>

        <PrimaryButton label="Activate Plan" />

      </View>
    </View>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  /* Outer glass border */
  cardWrapper: {
    marginTop: 20,
    borderRadius: 24,
    padding: 1.2,
    backgroundColor: 'rgba(255,255,255,0.18)', // subtle glass edge
  },

  /* Glass surface */
  card: {
    borderRadius: 24,
    padding: 18,
    paddingBottom: 20,
    // backgroundColor: 'rgba(20,20,20,0.38)', // ✅ REAL SEE-THROUGH GLASS
    backgroundColor: 'rgba(12, 11, 11, 0.38)',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    // elevation: 10,
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
    backgroundColor: 'rgba(255,255,255,0.12)', // frosted chip
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

  dividerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 14,
  },

  dividerSegment: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderRadius: 2,
    marginHorizontal: 3,
  },

  description: {
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
});
