import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Availability = ({colors,name}) => {
  return (
    <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
     <View style={{backgroundColor:colors,height:40,width:40,borderTopRightRadius:10,borderTopLeftRadius:10}}>

     </View>
     <Text>{name}</Text>
    </View>
  )
}

export default Availability

const styles = StyleSheet.create({})