// src/components/PrimaryButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/color';

const PrimaryButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.9}>
      <Text style={styles.text}  allowFontScaling={false}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.buttonGreen, // light green
    paddingVertical: 14,
    borderRadius: 28,
    marginTop: 18,
    alignItems: 'center',

    elevation: 0,
    shadowColor: 'transparent',

    
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
   // color: '#000000', // BLACK text (now visible)
   color:'#000',
    opacity: 1, 
   
  },
  
});
