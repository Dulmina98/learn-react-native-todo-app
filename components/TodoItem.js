import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({item, pressListItemHandler}) {

    return (
        <TouchableOpacity>
            <View style={styles.list}>
                <Text style={styles.listText}>{item.text}</Text>
                <MaterialIcons name="delete" size={24} color="#35BC83" onPress={() => pressListItemHandler(item.key)}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 16,
        marginTop: 16,
        borderColor: '#35BC83',
        borderWidth: 1,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    listText: {
        color: '#fff',
    }
})