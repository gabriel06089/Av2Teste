import React from 'react';
import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native';
export default function Bolos(props){
    
    return(
       <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <Image style={styles.image} source={props.img}/>
      <Text style={styles.BoloText}>
        {props.children}
      </Text>
      <View opacity={0.4}>
      <Text style={styles.BoloText}>
        {props.cost}
      </Text>
      </View>
       </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: 175,
        height: 175,
    },
    BoloText:{
        fontSize: 16,
    }
});