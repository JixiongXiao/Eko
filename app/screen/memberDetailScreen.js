import React, { useCallback } from "react";
import {
    Linking,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Screen from "../component/Screen";
import AppBackground from "../component/AppBackground";
import AppButton from "../component/AppButton";
import background from "../config/background";
import MemberDetails from "../component/MemberDetails";
import ElementHeight from "../config/ElementHeight";
import ElementWidth from "../config/ElementWidth";
import Icon from "../component/Icon";
import device from "../config/device";

export default function memberDetailScreen({ navigation, route }) {
    const member = route.params;

    //LinkedIn URL Setup
    const supportedURL = member.linkedIn;
    const supportedURL2 = member.portfolio;
    const OpenURLButton = ({ url, children }) => {
        const handlePress = useCallback(async () => {
            // Checking if the link is supported for links with custom URL scheme.
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                // by some browser in the mobile
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, [url]);

        return <AppButton title={children} onPress={handlePress} />;
    };


    return (
        <AppBackground source={background.story}>
            <View style={styles.iconContainer}>
                <Icon style={{left:12,}}
                      onPress={()=>navigation.navigate("About")}
                      source={require('../assets/Image/Icons/16px/Arrow-Outline-Left.png')}/>
            </View>
                <View style={styles.container}>
                    <MemberDetails
                        image={member.image}
                        title={member.name}
                        subtitle={member.role}
                        text={member.quote}
                    />
                    <OpenURLButton url={supportedURL}>LinkedIn</OpenURLButton>
                    {supportedURL2 != null ? (
                        <OpenURLButton url={supportedURL2}>Portfolio</OpenURLButton>
                    ) : null}
                </View>

        </AppBackground>
    );
}

// const styles = StyleSheet.create({
//     iconContainer:{
//         width:device.deviceWidth,
//         flexDirection:'row',
//         alignItems:'center',
//         top:ElementHeight(15),
//     },
//     container: {
//         marginTop:ElementHeight(50),
//         alignItems: "center",
//         justifyContent: "center",
//     },
//
// });
const styles = StyleSheet.create({
    iconContainer: {
        width: device.deviceWidth,
        flexDirection: "row",
        alignItems: "center",
        top: ElementHeight(15),
    },
    container: {
        marginTop:
            device.deviceHeight < 700 ? ElementHeight(30) : ElementHeight(50),
        alignItems: "center",
        justifyContent: "center",
    },
});
