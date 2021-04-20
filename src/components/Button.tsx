import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../../styles/colors';

interface ButtonProps {
    title: string;
}

export function Button({ title } : ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.8}
        >
            <Text style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 16,
        height: 56,
        paddingHorizontal: 10
    },
    buttonText: {
        color: colors.white,
        fontSize: 16
    }
})