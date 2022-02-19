import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CButton from '../components/cButton';
import CInput from '../components/cInput';
import CText from '../components/cText';
import ScreenContainer from '../components/screenContainer';
import COLORS from '../utils/colors';

export interface registerProps {
  navigation: NativeStackNavigationProp<any, any>,
}

const Register: React.FC<registerProps> = ({ navigation }) => {
  return (
    <ImageBackground source={require("../assets/img/backGround.png")} style={styles.backgroundImage}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <Image source={require("../assets/img/logo.png")} style={styles.logo} />
          <View style={{ width: 250, alignItems: "center" }}>
            <CText style={{ fontSize: 40 }}>Create new</CText>
            <CText style={{ fontSize: 40 }}>Account</CText>
          </View>
          <View style={{ flexDirection: "row" }}>
            <CText style={{ fontSize: 20 }}>Alredy Registered?</CText>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <CText style={{ fontSize: 20, textDecorationLine: "underline" }}>Log in here</CText>
            </TouchableOpacity>
          </View>
          <CInput lable='REAL NAME' />
          <CInput lable='EMAIL / PHONE NUMBER' />
          <CInput lable='PASSWORD' password />
          <CInput lable='DATE OF BIRTH' />
          <CInput lable='USER NAME / PSEUDO' />
          <CButton lable='Sign Up'
            onPress={() => navigation.navigate("Login")}
          />
        </ScrollView>
      </SafeAreaView>


    </ImageBackground >

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,


  },
  logo: {
    width: 150,
    height: 150,
  }
})
export default Register;