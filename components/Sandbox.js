import React from "react";
import {StyleSheet, Text, View} from "react-native";

export function Sandbox() {

    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: "#ddd",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    boxOne: {
        flex: 5,
        backgroundColor: '#7ae3ea',
        padding: 10
    },
    boxTwo: {
        flex: 1,
        backgroundColor: '#e1b766',
        padding: 20
    },
    boxThree: {
        flex: 1,
        backgroundColor: '#6ede74',
        padding: 30
    },
    boxFour: {
        flex: 1,
        backgroundColor: '#8c59e7',
        padding: 40
    }
})