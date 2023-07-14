import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { btn1, colors, hr80, title } from '../globals/styles'
import { AntDesign, Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Login = ({navigation}) => {
    const [emailFocus, setEmailfocus] = useState(false);
    const [passFocus, setpassfocus] = useState(false);
    const [showpassFocus, setshowfocus] = useState(false);


    return (
        <View style={styles.container}>
            <Text style={styles.head1}>
                Sign In
            </Text>

            <View style={styles.inputout}>
                <AntDesign name="user" size={24} color={emailFocus ? colors.text1 : colors.text2} />
                <TextInput style={styles.input}
                    placeholder='Email' onFocus={() => {
                        setEmailfocus(true);
                        setpassfocus(false);
                        setshowfocus(false);
                    }}>
                </TextInput>
            </View>


            <View style={styles.inputout}>
                <AntDesign name="lock" size={24} color={passFocus ? colors.text1 : colors.text2} />
                <TextInput style={styles.input}
                    placeholder='Password' onFocus={() => {
                        setEmailfocus(false)
                        setpassfocus(true);
                    }}
                    secureTextEntry={!showpassFocus ? true : false}
                >
                </TextInput>

                <Octicons name={showpassFocus === false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => {
                    setshowfocus(!showpassFocus);
                }} />
            </View>

            <TouchableOpacity style={btn1}>
                <Text>
                    <Text style={{ color: colors.col1, fontSize: title.btntxt, fontWeight: "bold" }}>Sign In</Text>
                </Text>
            </TouchableOpacity>

            <Text style={styles.forgot}>Forgot Password</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.other}>Sign In With</Text>

            <View style={styles.gf}>
                <TouchableOpacity>
                    <View style={styles.gficons}>
                        <AntDesign name="google" size={24} color="#EA4335" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.gficons}>
                        <Entypo name="facebook" size={24} color="#4267B2" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={hr80}></View>

            <Text>Don't have an account?
                <Text style={{ color: colors.text1 }} onPress={() => navigation.navigate('SignUpPage')}>  Sign Up</Text>
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    head1: {
        fontSize: title.title1,
        color: colors.text1,
        textAlign: 'center',
    },
    inputout: {
        flexDirection: "row",
        width: "80%",
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 20


    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%'
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10
    },
    or: {
        color: colors.text1,
        marginVertical: 10,
        fontWeight: "bold"
    },
    other: {
        color: colors.text2,
        marginVertical: 10,
        fontSize: 25
    },
    gf: {

        flexDirection: "row",
    },
    gficons: {
        backgroundColor: "white",
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        elevation: 20,
    }


})
export default Login
