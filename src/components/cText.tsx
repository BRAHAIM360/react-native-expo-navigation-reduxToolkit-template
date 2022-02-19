import * as React from 'react';
import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import COLORS from '../utils/colors';

export interface cTextProps {
  style?: StyleProp<TextStyle>
}

const CText: React.FC<cTextProps> = ({ children, style }) => {
  return (
    <Text style={[styles.Text, style]}>{children} </Text>
  );
}
const styles = StyleSheet.create({
  Text: {
    color: COLORS.white,

  }
})
export default CText;