import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import { nowShowing } from '../Utils/Data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const NowShowing = () => {
    const Nav = useNavigation();
    return (
        
            <View style={{ margin: 5, marginTop: 10 }}>
                <FlatList
                    numColumns={2}
                    data={nowShowing}
                    renderItem={({ item, index }) => (
                        <>
                            <TouchableOpacity style={{ flex: 1, margin: '1%', borderRadius: 10 }} onPress={() => {
                                Nav.navigate('Details', { item })
                            }}>
                                <Image source={{ uri: item.img }} style={{ height: 400, borderRadius: 10 }} />
                                <View style={{ position: 'absolute', bottom: 25, left: 15, gap: 5 }}>
                                    <Text style={{ color: 'white', fontSize: 20, margin: 10, fontWeight: '600' }}>{item.title}</Text>
                                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                        <MaterialIcons name="favorite" size={28} color='red' />
                                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 400 }}>{item.fav}%</Text>
                                    </View>
                                </View>


                            </TouchableOpacity>
                        </>
                    )


                    }
                />
            </View>
      
    )
}

export default NowShowing

const styles = StyleSheet.create({})