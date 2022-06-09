// @flow strict-local

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';

export const CardItem =  function ({text, img, price}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => Alert.alert("You chose", text)}>
                <Image source={{ uri: img }} style={ styles.image } />
                <Text style={styles.dscrText}>{text} {'\n'} Price: {price}</Text>
            </TouchableOpacity>
        </View> 
        
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 170,
        height: 200,
        alignContent: 'center',
    },
    image: {
        marginTop: 15,
        width: "100%",
        height: 160,
        resizeMode: 'center',
        borderTopLeftRadius: 20,        
        borderTopRightRadius: 20,  
    },
    dscrText: {
        textAlign: 'center',
        color: '#F7F3F5',
        backgroundColor: '#FF96BD',
        borderBottomLeftRadius: 20,        
        borderBottomRightRadius: 20,  
    },
    container: {
        marginBottom: 20,
    }
});