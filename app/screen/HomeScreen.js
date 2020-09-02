import React from 'react';
import {StyleSheet,StatusBar,View,} from 'react-native';
import AppText from "../component/AppText";
import AppButton from "../component/AppButton";
import device from "../config/device"
import AppBackground from '../component/AppBackground';
import ElementHeight from "../config/ElementHeight";
import Icon from "../component/Icon";
import background from "../config/background";




export default function HomeScreen({navigation}){
    return(
        <AppBackground
            source={background.home}>
            <StatusBar hidden={true}/>
            <View style={styles.iconContainer}>
                <Icon style={{right:12,}}
                      onPress={()=>navigation.navigate("Story")}
                      source={require('../assets/Image/Icons/24px/Home.png')}/>
            </View>
                <View style={styles.textContainer}>
                    <AppText style={styles.text}>What do you</AppText>
                    <AppText style={styles.text}>want to work</AppText>
                    <AppText style={styles.text}>on today?</AppText>
                </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Presence"
                           onPress={()=>navigation.navigate("Time",{index:1})}
                />
                <AppButton title="Happiness"
                           onPress={()=>navigation.navigate("Time",{index:3})}
                />
                <AppButton title="Acceptance"
                           onPress={()=>navigation.navigate("Time",{index:0})}
                />
                <AppButton title="Wisdom"
                           onPress={()=>navigation.navigate("Time",{index:2})}
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
        justifyContent:'flex-end',
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
        marginBottom:30,
    }
});
