import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PrimaryButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.wrapper}
    >
      <LinearGradient
        colors={['#B6FF5C', '#8DFF5A']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        <Text style={styles.text}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 18,
    marginHorizontal: 8, // ✅ spacing from card edges
  },

  button: {
    height: 52, // ✅ slimmer like reference
    borderRadius: 26, // perfect pill
    alignItems: 'center',
    justifyContent: 'center',

    // kill ALL glow/shadow
    elevation: 0,
    shadowColor: 'transparent',
  },

  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000', // black text
  },
});
