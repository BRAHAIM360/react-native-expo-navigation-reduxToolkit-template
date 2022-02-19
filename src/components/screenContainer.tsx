import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface screenContainerProps {

}

const ScreenContainer: React.FC<screenContainerProps> = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default ScreenContainer;