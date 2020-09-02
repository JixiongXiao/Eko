import React from 'react';
import {StyleSheet,Image,View,Text} from 'react-native';
import ElementHeight from "../config/ElementHeight";
import ElementWidth from "../config/ElementWidth";
import colors from "../config/colors";
import AppText from "./AppText";
import AppButton from "./AppButton";





export default function StoryPicker({title,narrator,portrait,length,onPress,style}){
    return(
            <View style={[styles.container,style]}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.narratorContainer}>
                        <Text style={styles.narratorText}>Narrated by</Text>
                        <View style={styles.narrator}>
                            <Image style={styles.image} source={portrait}/>
                            <Text style={styles.name}>{narrator}</Text>
                        </View>
                    </View>
                    <View style={styles.length}>
                        <Text style={styles.lengthText}>Length</Text>
                        <Text style={styles.lengthText}>{length}</Text>
                    </View>
                </View>
                <AppButton title='Begin'
                           onPress={onPress}
                style={{marginTop:ElementHeight(31),
                        width:ElementWidth(192)}}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:ElementWidth(250),
        height:ElementHeight(220),
        backgroundColor:colors.white,
        borderRadius:15,
        alignItems:'center',
        marginLeft:ElementWidth(46),
    },
    textContainer:{
      alignItems:'center',
        top:ElementHeight(7),
    },
    title:{
        color:colors.black,
        fontSize:ElementHeight(18),
        fontWeight:"bold",
    },
    narratorContainer:{
        flexDirection:'row',
        width:ElementWidth(150),
        justifyContent:'space-between',
        marginTop:ElementHeight(10),
        alignItems:'center',
    },
    narratorText:{
        fontSize: ElementHeight(14),
        color:colors.black,
        fontWeight:"bold",
    },
    narrator:{
        alignItems: 'center',
    },
    image:{
        width:ElementWidth(34),
        height:ElementHeight(34),
    },
    name:{
        fontSize: ElementHeight(10),
        color:colors.black,
        fontWeight:"bold",
    },
    length:{
        flexDirection: 'row',
        width:ElementWidth(150),
        justifyContent:'space-between',
        marginTop:ElementHeight(19),
    },
    lengthText:{
        fontSize: ElementHeight(14),
        color:colors.black,
        fontWeight:"bold",
    }
})
