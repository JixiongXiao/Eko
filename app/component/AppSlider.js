import React from 'react';
import {StyleSheet,Platform} from 'react-native';
import Slider from '@react-native-community/slider';
import ElementWidth from "../config/ElementWidth";
import colors from "../config/colors";

export default function AppSlider({volume,onValueChange,style}){
    return(
            <Slider style={[styles.slider,style]}
                    minimumValue={Platform.OS==='android' ?0.01: 0}
                    maximumValue={1}
                    step={0.1}
                    value={volume}
                    onValueChange={onValueChange}
                    minimumTrackTintColor={colors.white}
                    thumbTintColor={colors.white}
            />

    )
}

const styles=StyleSheet.create({
    slider:{
        width:ElementWidth(300),
        height:40,


    }
})
