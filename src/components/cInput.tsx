import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import COLORS from '../utils/colors';
import CText from './cText';

export interface cInputProps {
    lable: string,
    placeholder?: string,
    password?: boolean
}

const CInput: React.FC<cInputProps> = ({ lable, placeholder, password }) => {
    return (
        <View style={styles.container}>
            <CText>{lable}</CText>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder={placeholder} secureTextEntry={password} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    inputContainer: {
        width: 310,
        padding: 4,
        borderColor: COLORS.yellow,
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: COLORS.dark,

    },
    textInput: {
        color: COLORS.white,
        fontSize: 18,
    }
})
export default CInput;