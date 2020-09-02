import React from 'react';
import {StyleSheet,StatusBar,View,FlatList} from 'react-native';
import AppBackground from '../component/AppBackground';
import StoryPicker from "../component/StoryPicker";
import AppText from "../component/AppText";
import AppButton from "../component/AppButton";
import ElementHeight from "../config/ElementHeight";
import Icon from "../component/Icon";
import ElementWidth from "../config/ElementWidth";
import device from "../config/device";
import stories from "../config/Story";
import background from "../config/background";
import Screen from "../component/Screen";


export default function StoryListingScreen ({navigation}){
    return(
        <AppBackground source={background.story} >
            <StatusBar hidden={true}/>
            <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon style={{left:12,width:ElementWidth(30),height:ElementHeight(30)}}
                    source={require('../assets/Image/Icons/16px/Arrow-Outline-Left.png')}
                    onPress={()=>navigation.navigate("Welcome")}
                />
                <Icon style={{right:12,}}
                    source={require('../assets/Image/Icons/16px/Info.png')}
                      onPress={()=>navigation.navigate("About")}
                />
            </View>
            <View style={styles.textContainer}>
            <AppText>What story</AppText>
            <AppText>would you like</AppText>
            <AppText>to listen to?</AppText>
            </View>
                <View style={styles.pickerContainer}>
                        <FlatList
                            horizontal={true}
                            data={stories}
                            keyExtractor={story=>story.id.toString()}
                            renderItem={({item})=>
                            <StoryPicker
                            title={item.title}
                            narrator={item.narrator}
                            length={item.length}
                            portrait={item.portrait}
                            onPress={()=>navigation.navigate("Playing",{storyIndex:item.id})}
                             /> } />
                </View>
            <AppButton
                onPress={()=>navigation.navigate("Home")}
                title="Recommend me a story"
                style={styles.button}/>
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
        width:ElementWidth(256),

    }

});
