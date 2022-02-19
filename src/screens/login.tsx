import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CButton from '../components/cButton';
import CInput from '../components/cInput';
import CText from '../components/cText';
import COLORS from '../utils/colors';

export interface loginProps {
    navigation: NativeStackNavigationProp<any, any>,

}

const Login: React.FC<loginProps> = ({ navigation }) => {
    const [username, setUsername] = React.useState("")
    const [password, setuPassword] = React.useState("")

    return (
        <ImageBackground source={require("../assets/img/backGround.png")} style={styles.backgroundImage}>
            <SafeAreaView>
                <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                    <Image source={require("../assets/img/logotext.png")} style={styles.logo} />
                    <View style={{ width: 250, alignItems: "center" }}>
                        <CText style={{ fontSize: 40 }}>Login</CText>
                        <CText style={{ fontSize: 20 }}>Sign in to continue?</CText>

                    </View>

                    <CInput lable='REAL NAME' />
                    <CInput lable='PASSWORD' password />
                    {/* <CText style={{ fontSize: 20 }}>you dont have account?</CText> */}

                    <View style={{ flexDirection: "row" }}>
                        {/* <TouchableOpacity>
                            <CText style={{ fontSize: 15, color: COLORS.blue, textDecorationLine: "underline" }}>Register here</CText>
                        </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <CText style={{ fontSize: 15, textDecorationLine: "underline", marginVertical: 10 }}>Forget password?</CText>
                        </TouchableOpacity>
                    </View>
                    <CButton lable='Log In' onPress={() => navigation.navigate("Register")} />
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
        width: 250,
        height: 250,
        marginBottom: 20
    }
})
export default Login;