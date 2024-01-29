import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../Utils/Colors';
import { cities } from '../Utils/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';




const SelectCity = ({ navigation }) => {
    const [isSelected, setIsSelected] = useState()
    const [isClicked, setIsClicked] = useState(true)
    const [loc, setLoc] = useState("")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.white }}>
            <View style={{ padding: 30 }}>
                <Text style={{ color: myColors.secondary, fontSize: 20, fontWeight: 'bold' }}>Select City</Text>
                <View>
                    <FlatList style={{ marginTop: 30 }}
                        numColumns={3}
                        data={cities}
                        renderItem={({ item, index }) => (
                            <>
                                <TouchableOpacity onPress={() => {
                                    setIsSelected(index)
                                    setIsClicked(false)
                                    setLoc(item)
                                }}>
                                    <Text style={{ borderWidth: isSelected == index ? 2 : 1, borderColor: isSelected == index ? myColors.primary : '#E3E3E3', marginLeft: 20, marginBottom: 30, paddingHorizontal: 18, paddingVertical: 9, borderRadius: 20, fontWeight: '400', color: isSelected == index ? myColors.primary : myColors.grey, fontSize: 15 }}>{item}</Text>
                                </TouchableOpacity>


                            </>
                        )



                        } />
                </View>
                <TouchableOpacity style={{ alignItems: 'center', marginTop: 450, borderWidth: 1, borderRadius: 20, backgroundColor: isClicked == false ? myColors.primary : myColors.grey, padding: 15 }} onPress={() => {

                    navigation.navigate('Home',{city:loc})
                }} disabled={isClicked}>
                    <Text style={{ color: isClicked == false ? myColors.white : '#E3E3E3', fontSize: 18 }}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default SelectCity

const styles = StyleSheet.create({})