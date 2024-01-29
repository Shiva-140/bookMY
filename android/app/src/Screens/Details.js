import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveHeight } from "react-native-responsive-dimensions";
import { dates, Theaters } from '../Utils/Data';
import { useNavigation } from '@react-navigation/native';

const Details = ({ route }) => {
    const { title } = route.params.item
    const Nav = useNavigation();
    const [isSelected, setIsSelected] = useState()
    const [date,setDate] = useState()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#E3E3E3', padding: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Nav.goBack()}>
                        <AntDesign name="left" size={30} color="red" />
                    </TouchableOpacity>
                    <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>{title}</Text>
                </View>
                <Feather name="search" size={30} color="red" />



            </View>
            <View style={{ height: responsiveHeight(10) }}>
                <FlatList
                    horizontal
                    data={dates}
                    renderItem={({ item, index }) => (
                        <>
                            <TouchableOpacity activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'space-evenly', paddingHorizontal: 10, marginHorizontal: 10, backgroundColor: isSelected == index ? "red" : null }} onPress={() => {
                                setIsSelected(index)
                                setDate(item)

                            }}>
                                <Text style={{ color: isSelected == index ? 'white' : 'red', fontWeight: '400', fontSize: 15 }}>{item.day}</Text>
                                <Text style={{ color: isSelected == index ? 'white' : '#000', fontWeight: '700', fontSize: 20 }}>{item.dat}</Text>
                                <Text style={{ color: isSelected == index ? 'white' : '#000', fontWeight: '400', fontSize: 15 }}>{item.mon}</Text>
                            </TouchableOpacity>
                        </>
                    )}
                />

            </View>
            <FlatList style={{ marginHorizontal: 20, marginTop: 10 }}
                data={Theaters}
                renderItem={({ item, index }) => (
                    <>
                        <View style={{
                            height: responsiveHeight(20), backgroundColor: '#fff', marginBottom: 10, marginTop: 5, borderRadius: 14, borderColor: 'grey', borderWidth: 2, paddingHorizontal: 20,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="favorite" size={30} color="red" />
                                <Text style={{ color: 'black', fontSize: 20, paddingHorizontal: 10 }}>{item.name}</Text>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>Non-Cancellable</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 15, gap: 10 }} >
                                {
                                    item.timings.map((value, index) => (
                                        <TouchableOpacity key={index} onPress={() => Nav.navigate('Theater', {
                                            item,
                                            mall: item.name,
                                            date,
                                            Time:value,
                                            title,
                                        })}>
                                            <Text style={{ paddingHorizontal: 10, borderWidth: 2, borderColor: 'green', marginRight: 5, borderRadius: 10, marginBottom: 10, color: '#000' }} key={index}>{value}</Text>
                                        </TouchableOpacity>

                                    ))
                                }
                            </View>

                        </View>

                    </>
                )} showsVerticalScrollIndicator={false} />
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({})