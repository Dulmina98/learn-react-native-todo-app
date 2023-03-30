import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import {AddToDo} from "./components/AddToDo";

export default function App() {

    const [todos, setTodos] = useState([
        {text: 'Buy coffee', key: '1'},
        {text: 'Create an app', key: '2'},
        {text: 'Play on the switch', key: '3'},
    ])

    const pressListItemHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)
        })
    }

    const addTodoHandler = (text) => {
        setTodos((prevTodos) => {
            return [
                {text: text, key: Math.random().toString()},
                ...prevTodos
            ]
        })
    }

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <AddToDo addTodoHandler={addTodoHandler}/>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <TodoItem item={item} pressListItemHandler={pressListItemHandler}/>
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
});
