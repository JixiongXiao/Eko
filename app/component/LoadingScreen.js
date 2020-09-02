
import React from 'react';
import {StyleSheet,StatusBar,Image,View,ActivityIndicator} from 'react-native';
import ElementHeight from "../config/ElementHeight";
import colors from "../config/colors";
import ElementWidth from "../config/ElementWidth";
import AppText from "./AppText";

export default function LoadingScreen( ){
    return(
        <View style={styles.background}>
            <StatusBar hidden={true}/>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/Image/EkoLogo.png")} style={styles.logo}/>
                <View style={{top:ElementHeight(40)}}>
                    <ActivityIndicator animating={true}
                                       color={colors.secondary}
                                       size='large'
                                       style={styles.activityIndicator}/>

                <View style={{alignItems:'center'}}>
                <AppText style={styles.text}>
                The best experience is only
            </AppText>
                <AppText style={styles.text}>
                    a pair of headphones away
                </AppText>
            </View>
                </View>
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    background: {
        alignItems:'center',
        color:colors.primary
    },
    logo:{
        width:100,
        height:150,
    },
    logoContainer:{
        position:'absolute',
        top:ElementHeight(79),
        alignItems:'center',
    },
    text:{
        fontSize:ElementHeight(17),
        marginVertical:ElementHeight(1),
        textAlign:'center',
    },
    activityIndicator:{
        height:ElementWidth(60),
    }
});

