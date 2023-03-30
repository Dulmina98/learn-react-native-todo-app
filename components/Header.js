import {StyleSheet, Text, View} from "react-native";

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}> My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 50,
        backgroundColor: '#1B1B1D'
    },
    title: {
        textAlign: "center",
        color: "#BA55EA",
        fontWeight: 800,
        fontSize: 20
    }
})