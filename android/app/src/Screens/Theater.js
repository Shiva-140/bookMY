import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Seats } from '../Utils/Data';
import Availability from '../Components/Availability';
import { MallSeats } from '../Components/Context/Wrapper';

const Theater = ({ route }) => {
  const { title, mall, date, Time } = route.params
  const { seatsArray, setSeatsArray } = useContext(MallSeats);
  let Amount =0;
  if(seatsArray.length>0){
    Amount=100*seatsArray.length
  }

  const Nav = useNavigation()
  return (
    <View>
      <SafeAreaView style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: 'grey', bgc: '#FFF' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => Nav.goBack()}>
            <AntDesign name="left" size={30} color="red" style={{ fontWeight: 'bold' }} />
          </TouchableOpacity>
          <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>{title}</Text>
        </View>

      </SafeAreaView>
      <Text style={{ padding: 10, fontSize: 15, fontWeight: '400', color: 'grey', backgroundColor: '#FFF' }}>{mall} | {date.dat}th Date | {Time}</Text>
      <View>
        <FlatList
          numColumns={6}
          data={Seats}
          renderItem={({ item, index }) =>
            seatsArray.includes(item) ? (

              <>

                <View style={{ padding: 15, alignItems: 'center', flex: 1, backgroundColor: '#FFF' }}>

                  <TouchableOpacity onPress={() => {
                    setSeatsArray(seatsArray.filter((remove) => remove != item))
                  }}>

                    <Text style={{ width: 40, height: 40, backgroundColor: 'green', borderTopLeftRadius: 10, borderTopRightRadius: 10, color: 'green' }}>{item}</Text>
                  </TouchableOpacity>
                </View>


              </>) : (<>

                <View style={{ padding: 15, alignItems: 'center', flex: 1, backgroundColor: '#FFF' }}>

                  <TouchableOpacity onPress={() => {
                    setSeatsArray([...seatsArray, item])
                  }}>
                    <Text style={{ width: 40, height: 40, backgroundColor: '#e3e3e3', borderTopLeftRadius: 10, borderTopRightRadius: 10, color: '#e3e3e3' }}>{item}</Text>
                  </TouchableOpacity>
                </View>


              </>)

          } />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, marginTop: 20 }}>
        <Availability colors={'red'} name={'UnAvailable'} />
        <Availability colors={'#e3e3e3'} name={'Available'} />
        <Availability colors={'green'} name={'Selected'} />
      </View>
      <View style={{ marginTop: 100, alignItems: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, borderRadius: 15, margin: 10, height: 45, width: 350 }} onPress={() => Nav.navigate('MyTickets')}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Pay Now</Text>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}> ₹ {Amount}</Text>
          </View>
        </TouchableOpacity>
      </View>


    </View>


  )
}

export default Theater

const styles = StyleSheet.create({})