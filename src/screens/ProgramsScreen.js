// src/screens/ProgramsScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import ProgramCard from '../components/ProgramCard';

const ProgramsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* ===== BASE FULL SCREEN GRADIENT (MISSING BEFORE) ===== */}
      <LinearGradient
        colors={[
          '#0B0B0B',
          '#0E130C',
          '#0B0B0B',
        ]}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />

      {/* ===== LARGE GREEN SPOTLIGHT ===== */}
      <LinearGradient
        colors={[
          'rgba(167,255,79,0.28)',
          'rgba(167,255,79,0.14)',
          'rgba(0,0,0,0)',
        ]}
        start={{ x: 0.9, y: 0.2 }}
        end={{ x: 0.2, y: 1 }}
        style={styles.greenGlow}
      />

      {/* ===== SECONDARY YELLOW DIFFUSION ===== */}
      <LinearGradient
        colors={[
          'rgba(255,230,120,0.18)',
          'rgba(255,230,120,0.08)',
          'rgba(0,0,0,0)',
        ]}
        start={{ x: 0.8, y: 0.3 }}
        end={{ x: 0.3, y: 1 }}
        style={styles.yellowGlow}
      />

      {/* ===== CONTENT ===== */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Header
          title="Omar, here are your personalized programs to help you reach your goal."
          subtitle="Please select one to get started."
        />

        <InfoCard
          text="You can update your program anytime from your profile. Can only select one at a time."
        />

        <ProgramCard
          title="Weekly Muscle Gain Workout Split (Push/Pull/Legs + Isolation)"
          tag="Muscle Gain"
          progress="0/10 Complete workout"
          duration="4 Weeks"
          description="This fitness program includes tailored exercises for all the preferences you’ve selected whether it's Home, Hotel Gym, Gym, or Outdoor."
        />
      </ScrollView>

    </SafeAreaView>
  );
};

export default ProgramsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 48,
  },

  greenGlow: {
    position: 'absolute',
    width: 520,       // BIGGER than before (important)
    height: 520,
    right: -180,
    top: 220,
    borderRadius: 260,
    
  },

  yellowGlow: {
    position: 'absolute',
    width: 360,
    height: 360,
    right: -120,
    top: 320,
    borderRadius: 180,
  },
});
