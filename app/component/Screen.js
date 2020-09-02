import React from 'react';
import{StatusBar,Platform,SafeAreaView,StyleSheet,View} from 'react-native';


const styles=StyleSheet.create({
    screen:{
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight-15:0,
        flex:1,
    }
})

export default function Screen({children,style}){
    return(

        <SafeAreaView style={[styles.screen,style]}>
            <View >
                {children}
            </View>
        </SafeAreaView>

    )
}
