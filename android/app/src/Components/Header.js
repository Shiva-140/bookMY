import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { myColors } from '../Utils/Colors';

const Header = ({city}) => {
  return (
    <View style={{paddingHorizontal:18,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:15}}>
     <View style={{flexDirection:'row',alignItems:'center',gap:15}}>
     <Ionicons name="location-sharp" size={30} color={myColors.primary} />
     <Text style={{fontSize:18,fontWeight:'bold',color:myColors.primary}}>{city}</Text>
     </View>
     <FontAwesome name="search" size={28} color={myColors.primary} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})