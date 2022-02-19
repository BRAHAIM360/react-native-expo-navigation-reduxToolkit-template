import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../utils/colors';
import CText from './cText';

export interface cButtonProps {
    lable: string,
    onPress?: any
}

const CButton: React.FC<cButtonProps> = ({ lable, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} >
            <View style={styles.container}>
                <CText style={{ color: COLORS.dark }}>{lable}</CText>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.yellow,
        borderWidth: 3,
        borderRadius: 10,
        padding: 15,
        paddingHorizontal: 25,
        marginTop: 10,
    }
})
export default CButton;