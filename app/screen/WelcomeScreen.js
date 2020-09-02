import React from 'react';
import {StyleSheet,StatusBar,Image,View} from 'react-native';
import AppText from "../component/AppText";
import AppButton from "../component/AppButton";
import AppBackground from "../component/AppBackground";
import device from "../config/device";
import ElementHeight from "../config/ElementHeight";
import background from "../config/background";
import ElementWidth from "../config/ElementWidth";



export default function WelcomeScreen( {navigation}){
    return(
        <AppBackground style={styles.background}
                       source={background.welcome}>
            <StatusBar hidden={true}/>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/Image/EkoLogo.png")} style={styles.logo}/>
                <View style={styles.textContainer}>
                <AppText style={styles.text}>An interactive story</AppText>
                <AppText style={styles.text}>meditative app</AppText>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Let's Go!" onPress={()=>navigation.navigate("Story")}/>
            </View>
        </AppBackground>
    )

}

const styles = StyleSheet.create({
    background: {
        justifyContent:'flex-end',
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
        fontSize:ElementWidth(22),
    },
    textContainer:{
        alignItems:'center',
        top:ElementHeight(75),
    },
    buttonContainer:{
        width:"100%",
        alignItems:'center',
        paddingBottom:ElementHeight(34),
    }
});

