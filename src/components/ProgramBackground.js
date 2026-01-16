// src/components/ProgramBackground.js
import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Defs, Rect, RadialGradient, Stop } from 'react-native-svg';

const ProgramBackground = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      style={StyleSheet.absoluteFill}
      viewBox="0 0 390 844"
    >
      <Defs>
        {/* Main right-side ambient glow */}
        <RadialGradient
          id="mainGlow"
          gradientUnits="userSpaceOnUse"   // 🔥 CRITICAL
          cx={280}                         // right side
          cy={290}                         // vertically aligned with card
          r={200}                          // true circle radius

        >
          <Stop offset="0%" stopColor="#DFFF8C" stopOpacity="0.45" />
          <Stop offset="35%" stopColor="#B6E46A" stopOpacity="0.30" />
          <Stop offset="60%" stopColor="#6E8F3A" stopOpacity="0.18" />
          <Stop offset="80%" stopColor="#2B3A12" stopOpacity="0.08" />
          <Stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </RadialGradient>

        {/* Soft vignette to darken edges */}
        <RadialGradient
          id="vignette"
          gradientUnits="userSpaceOnUse"
          cx={195}
          cy={422}
          r={500}


        >
          <Stop offset="60%" stopColor="#000000" stopOpacity="0" />
          <Stop offset="100%" stopColor="#000000" stopOpacity="0.45" />
        </RadialGradient>
      </Defs>

      {/* Base black */}
      <Rect width="100%" height="100%" fill="#000000" />

      {/* Ambient glow */}
      <Rect width="100%" height="100%" fill="url(#mainGlow)" />

      {/* Edge vignette */}
      <Rect width="100%" height="100%" fill="url(#vignette)" />
    </Svg>
  );
};

export default ProgramBackground;
