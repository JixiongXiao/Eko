import React from "react";
import { View, StyleSheet, Image,TouchableOpacity } from "react-native";
import ElementHeight from "../config/ElementHeight";
import ElementWidth from "../config/ElementWidth";
import AppText from "./AppText";

function Member({ name, source,style,onPress}) {
    return (
        <View style={[styles.container,style]}>
            <TouchableOpacity onPress={onPress}>
            <Image style={styles.img} source={source} />
            </TouchableOpacity>
            <AppText style={styles.name}>{name}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: 85,
        height: 85,
    },
    name: {
        fontSize: ElementWidth(16),
        color: "white",
        fontWeight: "600",
        marginTop:ElementHeight(2),
    },
});

export default Member;
