import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";

export function AddToDo({addTodoHandler}) {
    const [text, setText] = useState('')
    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={"New Todo..."}
                onChangeText={changeHandler}
                placeholderTextColor={'rgba(255,255,255,0.3)'}
            />
            <Button onPress={() => addTodoHandler(text)} title={'Add Todo'} color={'#35BC83'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#35BC83',
        color: '#fff'
    },
})