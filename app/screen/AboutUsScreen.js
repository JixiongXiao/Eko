import React,{useCallback} from 'react';
import {StyleSheet, StatusBar, View,  Linking, FlatList} from 'react-native';
import AppText from "../component/AppText";
import AppButton from "../component/AppButton";
import device from "../config/device"
import AppBackground from '../component/AppBackground';
import ElementHeight from "../config/ElementHeight";
import ElementWidth from "../config/ElementWidth";
import Icon from "../component/Icon";
import background from "../config/background";
import Member from "../component/Member";
import membersInfo from "../config/membersInfo";




export default function AboutUsScreen({navigation}){

    const supportedURL =
        "https://www.scss.tcd.ie/~kearnsdo/EkoWebsite/index.html";
    const OpenURLButton = ({ url, title }) => {
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
        return <AppButton title={title} onPress={handlePress} />;
    };

    return(
        <AppBackground
            source={background.time}>
            <StatusBar hidden={true}/>
            <View style={styles.iconContainer}>
            <Icon style={{left:12,}}
                  onPress={()=>navigation.navigate("Story")}
                  source={require('../assets/Image/Icons/16px/Arrow-Outline-Left.png')}/>
        </View>
            <View style={styles.textContainer}>
                <AppText style={styles.title}>About</AppText>
                <AppText style={styles.text}>
                    Eko is an interactive story meditative app that allows you to
                    listen to calm and relaxing stories, carefully narrated by
                    soothing voices.
                </AppText>
                <AppText style={styles.memberTitle}>Group Members</AppText>
            </View>
            <View style={styles.memberContainer}>
                <FlatList
                    contentContainerStyle={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    horizontal={false}
                    numColumns={3}
                    data={membersInfo}
                    keyExtractor={(membersInfo) => membersInfo.id.toString()}
                    renderItem={({ item }) => (
                        <Member
                            style={styles.member}
                            name={item.name}
                            source={item.image}
                            onPress={() => navigation.navigate("member", item)}
                        />
                    )}
                />
            </View>
            <View style={styles.buttonContainer}>
                <OpenURLButton title="Visit our website"
                               url={supportedURL}/>

            </View>

        </AppBackground>

    )

}

const styles = StyleSheet.create({
    iconContainer: {
        width: device.deviceWidth,
        flexDirection: "row",
        alignItems: "center",
        top: ElementHeight(15),
    },
    textContainer: {
        alignItems: "center",
        marginTop:
            device.deviceHeight < 700 ? ElementHeight(10) : ElementHeight(15),
        marginBottom:
            device.deviceHeight < 700 ? ElementHeight(10) : ElementHeight(15),
        width: ElementWidth(270),
        textAlign: "center",
    },
    title: {
        marginBottom:
            device.deviceHeight < 700 ? ElementHeight(10) : ElementHeight(20),
        marginTop: device.deviceHeight < 700 ? ElementHeight(0) : ElementHeight(10),
    },
    text: {
        fontSize: ElementWidth(19),
        fontWeight: "600",
        textAlign: "center",
        lineHeight: ElementHeight(23),
    },
    memberTitle: {
        fontSize: ElementWidth(30),
        marginTop:
            device.deviceHeight < 700 ? ElementHeight(20) : ElementHeight(30),
    },
    memberContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    member: {
        marginVertical: ElementWidth(5),
        marginHorizontal: ElementWidth(16),
    },
    buttonContainer: {
        // flex: 3,
        width: "100%",
        alignItems: "center",
        //  marginBottom: ElementHeight(100),
    },
});
