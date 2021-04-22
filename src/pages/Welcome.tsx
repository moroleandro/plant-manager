import React from 'react';
import { useNavigation } from "@react-navigation/core";
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions 
} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import wateringImg from '../assets/watering.png';

export function Welcome(){
    const navigation = useNavigation();

    function handleStart() {
      navigation.navigate("UserIam");
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas {'\n'} 
                    de forma fácil
                </Text>
                <Image 
                    source={wateringImg} 
                    style={styles.image} 
                    resizeMode="contain"
                />
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>
                <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.8}
                onPress={handleStart}
                >
        
                <Entypo name="chevron-right" style={styles.iconRight}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        lineHeight: 34
    },
    image:{
        height: Dimensions.get('window').width * 0.7
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonText: {
        color: colors.white,
        fontSize: 16
    },
    iconRight: {
        fontSize: 30,
        color: 'white'
    }
})