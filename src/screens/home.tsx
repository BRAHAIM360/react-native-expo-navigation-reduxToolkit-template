import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { changeText } from '../redux/store/testRedux';



export function Home() {
    const [Name, setName] = useState("")
    const value = useAppSelector(state => state.testReduxSlice.value);
    const dispatch = useAppDispatch()
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TextInput style={{ borderWidth: 2, borderRadius: 25, width: 200, padding: 10, marginBottom: 10 }} onChangeText={setName} placeholder='type your name is'></TextInput>
            <TouchableOpacity style={{ marginBottom: 40, backgroundColor: "gray", padding: 5, borderRadius: 25 }}
                onPress={() => dispatch(changeText(Name))}
            ><Text style={{ color: "blue" }}>change Name</Text></TouchableOpacity>
            <Text>my name Is {value}</Text>
        </View>
    );
}

/* <TouchableOpacity><Text>Click Me</Text></TouchableOpacity> */ 