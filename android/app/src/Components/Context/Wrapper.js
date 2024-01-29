import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'
export const Store = createContext();
export const MallSeats = createContext();

const Wrapper = ({ children }) => {
    const [data, setData] = useState()
    const [seatsArray,setSeatsArray] = useState([]);
    return (
        <Store.Provider value={{ data, setData }}>
            <MallSeats.Provider value={{seatsArray,setSeatsArray}}>
                {children}
            </MallSeats.Provider>


        </Store.Provider>
    )
}

export default Wrapper

const styles = StyleSheet.create({})