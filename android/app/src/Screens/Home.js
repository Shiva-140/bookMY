import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../Components/Header';
import { myColors } from '../Utils/Colors';
import NowShowing from '../Components/NowShowing';
import ComingSoon from '../Components/ComingSoon';

const Home = ({route}) => {
    const [option, setOption] = useState(0)
    return (
        <View style={{}}>
            <View style={{ gap: 15 }}>
                <Header city={route.params.city} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => {
                        setOption(0)
                    }}>
                        <Text style={{ color: option == 0 ? myColors.primary : 'grey', fontSize: 15, fontWeight: 'bold' }}>
                            Now Showing
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setOption(1)
                    }}>
                        <Text style={{ color: option == 1 ? myColors.primary : 'grey', fontSize: 15, fontWeight: 'bold' }}>Coming Soon</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {option == 0 ? <NowShowing /> : <ComingSoon />}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})