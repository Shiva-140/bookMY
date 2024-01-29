import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColors } from '../Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {

            navigation.navigate('SelectCity')
        }, 3000)
    }, [])
    return (

        <View style={{ flex: 1, backgroundColor: myColors.primary }}>
            <Image source={{ uri: 'https://mir-s3-cdn-cf.behance.net/projects/404/4fabff156214799.Y3JvcCw5ODEsNzY4LDIxLDA.png' }} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
        </View>

    )
}

export default Splash

const styles = StyleSheet.create({})