import React from 'react';
import {StyleSheet,StatusBar,Image,View,Text,Dimensions} from 'react-native';
import AppText from "../component/AppText";
import AppButton from "../component/AppButton";
import device from "../config/device"
import AppBackground from '../component/AppBackground';
import ElementHeight from "../config/ElementHeight";
import Icon from "../component/Icon";
import background from "../config/background";




export default function TimeScreen({navigation,route}){
    const index=route.params.index;
    return(
        <AppBackground
            source={background.time}>
            <StatusBar hidden={true}/>
            <View style={styles.iconContainer}>
                <Icon style={{left:12,}}
                      onPress={()=>navigation.navigate("Home")}
                      source={require('../assets/Image/Icons/16px/Arrow-Outline-Left.png')}/>
            </View>
            <View style={styles.textContainer}>
                <AppText style={styles.text}>How much</AppText>
                <AppText style={styles.text}>time do you</AppText>
                <AppText style={styles.text}>have?</AppText>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="A Lot"
                           onPress={()=>navigation.navigate("Recommend",{index:index})}
                />
                <AppButton title="Very Little"
                           onPress={()=>navigation.navigate("Recommend",{index:index})}
                />

            </View>

        </AppBackground>

    )

}

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
    },
    iconContainer:{
        width:device.deviceWidth,
        flexDirection:'row',
        alignItems:'center',
        top:ElementHeight(15),
    },
    textContainer:{
        alignItems:'center',
        marginTop:ElementHeight(30),
        flex:2,
    },
    buttonContainer:{
        flex:3,
        width:"100%",
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:ElementHeight(160),
    }
});
