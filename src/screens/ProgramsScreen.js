import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProgramBackground from '../components/ProgramBackground';


import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import ProgramCard from '../components/ProgramCard';

const ProgramsScreen = () => {
  return (
    <View style={styles.root}>

 {/* ✅ Exact background */}
      <ProgramBackground />


      {/* CONTENT */}
      <SafeAreaView style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <Header
            title="Omar, here are your personalized programs to help you reach your goal."
            subtitle="Please select one to get started."
          />

          <InfoCard text="You can update your program anytime from your profile. Can only select one at a time." />

          <ProgramCard
            title="Weekly Muscle Gain Workout Split (Push/Pull/Legs + Isolation)"
            tag="Muscle Gain"
            progress="0/10 Complete workout"
            duration="4 Weeks"
            description="This fitness program includes tailored exercises for all the preferences you’ve selected whether it's Home, Hotel Gym, Gym, or Outdoor."
          />
        </ScrollView>
      </SafeAreaView>

    </View>
  );
};

export default ProgramsScreen;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },

  

  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

