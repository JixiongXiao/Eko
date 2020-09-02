import React from 'react';
import {StyleSheet,Text,TouchableOpacity,Dimensions} from 'react-native';
import colors from "../config/colors";
import ElementWidth from "../config/ElementWidth";
import ElementHeight from "../config/ElementHeight";


export default function AppButton ({title,onPress,style}){

    return(
        <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>

    )
}

const styles=StyleSheet.create({
    button:{
        backgroundColor:colors.secondary,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        width:ElementWidth(230),
        height:ElementHeight(48),
        marginVertical:ElementHeight(20),
        elevation:10,
        // shadowColor: colors.lightgray,
        // shadowOpacity: 0.5,
        // shadowOffset: {
        //     width: 3,
        //     height: 2,
        // },
    },
    text:{
        color:colors.white,
        fontSize:ElementWidth(20),
        fontWeight:'bold',
    }
})
