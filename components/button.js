import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Button() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer} >
        <Text style={styles.title}> Realizar pedido</Text>
        </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
        justifyContent: 'center',
    },
    btnContainer:{
        
        width: '90%',
        height: 50,
        borderRadius:5,
        marginLeft: "5%",
        backgroundColor: '#17181a',
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
     
    },
    title:{
        fontSize: 17,
        color: '#fff'
    }
});