import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import foodmitho from '../../assets/foodmitho.jpg';
import { colors, hr80 } from '../globals/styles';
const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to HunGerr..
            </Text>
            <View style={styles.logout}>
                <Image style={styles.logo} source={foodmitho} />
            </View>
            <View style={hr80} />
            <Text style={styles.txt}>
                Find the best food around you at lowest price
            </Text>
            <View style={hr80} />

            <View style={styles.btnout}>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUpPage')}>
                    <Text style={styles.btn}>
                        Sign up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('loginPage')}>
                    <Text style={styles.btn}>
                        Log in
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff4242",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 50,
        color: "white",
        textAlign: "center",
        marginVertical: 10,
        fontWeight: "200"

    }, logout: {
        width: "80%",
        height: "30%",
        alignItems: "center",

    }, logo: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    }
    , txt: {
        color: colors.col1,
        fontSize: 18,
        width: "80%",
        textAlign: 'center'
    },
    btnout: {
        flexDirection: "row"
    },
    btn: {
        color: colors.text1,
        textAlign: "center",
        marginVertical: 30,
        marginHorizontal: 10,
        fontWeight: "700",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20
    }

});
export default Welcome
