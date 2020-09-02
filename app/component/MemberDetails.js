import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppText from "./AppText";
import ElementHeight from "../config/ElementHeight";
import ElementWidth from "../config/ElementWidth";

function MemberDetails({ image, title, text, subtitle, }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.avatar} />
            <View>
                <AppText style={styles.name}>{title}</AppText>
                <AppText style={styles.title}>{subtitle}</AppText>
                <AppText style={styles.text}>{text}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        height: 100,
        width: 100,
        marginTop:ElementHeight(1),

    },
    container: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize:ElementWidth(19),
        fontWeight: "600",
        textAlign: "center",
        marginVertical:ElementHeight(13),
        lineHeight: ElementHeight(23),
    },
    name: {
        // fontSize: 36,
        marginTop: ElementHeight(15),

        textAlign: "center",
        fontSize:ElementWidth(36),

    },
    title: {
        // marginTop: ElementHeight(15),
        paddingTop:ElementHeight(15),
        textAlign: "center",
        lineHeight: ElementHeight(25),
        fontSize:ElementWidth(26),
    },
});

export default MemberDetails;
