import React from 'react';
import {StyleSheet, StatusBar, View, } from 'react-native';
import AppBackground from "../component/AppBackground";
import background from "../config/background";
import AppText from "../component/AppText";
import Icon from "../component/Icon";
import ElementWidth from "../config/ElementWidth";
import ElementHeight from "../config/ElementHeight";
import stories from "../config/Story";
import StoryPicker from "../component/StoryPicker";
import device from "../config/device";


export default function RecommendScreen ({navigation,route}){
    const storyIndex = route.params.index;
    return(
        <AppBackground source={background.recommend}>
                    <StatusBar hidden={true}/>
                    <View style={styles.container}>
                        <View style={styles.iconContainer}>
                            <Icon style={{left:12,width:ElementWidth(30),height:ElementHeight(30)}}
                                  source={require('../assets/Image/Icons/16px/Arrow-Outline-Left.png')}
                                  onPress={()=>navigation.navigate("Time")}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <AppText>I would</AppText>
                            <AppText>recommend</AppText>
                            <AppText>this story!</AppText>
                        </View>
                        <View style={styles.pickerContainer}>
                            <StoryPicker
                                title={stories[storyIndex].title}
                                narrator={stories[storyIndex].narrator}
                                length={stories[storyIndex].length}
                                portrait={stories[storyIndex].portrait}
                                onPress={()=>navigation.navigate("Playing",{storyIndex})}
                            style={{marginLeft:0}}
                            />
                        </View>
                    </View>
        </AppBackground>

    )
}
const styles=StyleSheet.create({
    container:{
        alignItems: 'center',

    },
    iconContainer:{
        width:device.deviceWidth,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        top:ElementHeight(15),
    },
    textContainer:{
        alignItems:'center',
        marginTop:ElementHeight(30),
    },
    pickerContainer:{
        height:ElementHeight(220),
        marginTop:ElementHeight(40),
    },
    storyPicker:{
        height:ElementHeight(220),
    },
    button:{
        marginTop:ElementHeight(40),

    }

});
