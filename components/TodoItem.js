import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function TodoItem({item, pressListItemHandler}) {

    return (
        <TouchableOpacity onPress={() => pressListItemHandler(item.key)}>
            <Text style={styles.listText}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listText: {
        color: '#fff',
        padding: 16,
        marginTop: 16,
        borderColor: '#35BC83',
        borderWidth: 1,
        borderRadius: 10
    }
})