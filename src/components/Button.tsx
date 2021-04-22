import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps {
    title: string;
}

export function Button({ title, ...rest } : ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.container} 
            { ...rest }
            activeOpacity={0.8}
        >
            <Text style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }
})