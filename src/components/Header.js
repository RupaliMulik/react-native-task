import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import{COLORS} from '../theme/color';

const Header=({title,subtitle,image})=>{
    return(
        <View Style={styles.container}>
            <Image source={image} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            
        </View>
    );
};

export default Header;

const styles=StyleSheet.create({
    container:{
        marginBottom:20,
    },
    title:{
        fontSize:26,
        fontWeight:'700',
        color:COLORS.textPrimary,
        marginBottom:8,
        
    },
    subtitle:{
        fontSize:15,
        color:'#aaae93ff',
        marginTop:10,
    },
});