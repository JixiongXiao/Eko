import React from 'react';
import {Text,StyleSheet,Platform} from 'react-native';
import colors from "../config/colors";
import ElementWidth from "../config/ElementWidth";

export default function AppText({children,style}) {
    return(
        <Text style={[styles.text,style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        // fontSize:40,
        fontSize:ElementWidth(37),
        color:colors.white,
        fontWeight:'bold',
        fontFamily: Platform.OS === "android" ? null : "Avenir",

    }
})
