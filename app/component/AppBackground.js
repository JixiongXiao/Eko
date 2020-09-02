import React from 'react';
import {ImageBackground,View,StyleSheet} from 'react-native';
import device from "../config/device";


export default function AppBackground({source,children,style}){
    return(
            <ImageBackground source={source} style={[styles.background,style]}>

                    {children}

            </ImageBackground>
        )
}

const styles =StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center',
        width:device.deviceWidth,
    }
});
