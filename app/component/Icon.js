import React from 'react';
import {StyleSheet,Image,View,TouchableWithoutFeedback} from 'react-native';
import ElementHeight from "../config/ElementHeight";
import ElementWidth from "../config/ElementWidth";

export default function Icon ({source,onPress,style}){

    return(
            <TouchableWithoutFeedback onPress={onPress} >
                <Image source={source} style={[styles.icon,style]}/>
            </TouchableWithoutFeedback>
    )
}

const styles =StyleSheet.create({
    icon:{
        width:ElementWidth(35),
        height:ElementHeight(35),
    }
})
