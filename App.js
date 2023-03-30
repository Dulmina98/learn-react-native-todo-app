import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import Header from "./components/Header";

export default function App() {

    const [todos, setTodos] = useState([
        {text: 'Buy coffee', key: '1'},
        {text: 'Create an app', key: '2'},
        {text: 'Play on the switch', key: '3'},
    ])

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                {/* to do form */}
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <Text style={styles.listText}>{item.text}</Text>
                        )}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1B1D',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20
    },
    listText: {
        color: '#fff'
    }
});
