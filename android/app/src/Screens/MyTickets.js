import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const MyTickets = () => {
    const nav = useNavigation();
    return (
        <View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <TouchableOpacity onPress={() => nav.goBack()}>
                        <AntDesign name="left" size={30} color="red" style={{ fontWeight: 'bold', padding: 10 }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>Adipurush</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 10, borderWidth: 2, borderRadius: 10, borderColor: 'grey', marginTop: 10, margin: 10 }}>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Adipurush_poster.jpeg' }} style={{ height: 150, width: 120, resizeMode: 'contain', borderRadius: 10 }} />
                <View style={{ gap: 5 }}>
                    <Text style={{ fontSize: 15, fontWeight: '600', color: '#000' }}>Adipurush</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'grey' }}>Trendset Mall</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'grey' }}>29th Jul , 9:30 AM</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>A1, A2 , A3</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="qrcode" size={40} color="black" />
                        <Text style={{ fontSize: 18, padding: 10, color: '#000' }}>G1,G2 SHIVA</Text>
                    </View>
                </View>


            </View>
            <View style={{ alignItems: 'center', marginTop: 500 }}>
                <TouchableOpacity style={{ backgroundColor: 'red', padding: 15, borderRadius: 10, width: 300, alignItems: 'center' }} onPress={() => nav.navigate('SelectCity')}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Continue to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyTickets

const styles = StyleSheet.create({})