import { View, Text, StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import Bolos from './bolos'


export default function Footer() {
  return (
    <View>
        <Text style={styles.title}>footer</Text>
       <View style ={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal: 10}}>
                    <Bolos img={require('../screens/assets/1.png')} cost="110,90">
                        Bolo fofo
                    </Bolos>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Bolos img={require('../screens/assets/2.png')} cost="680,90">
                        Bolo de fuba
                    </Bolos>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Bolos img={require('../screens/assets/3.png')} cost="510,90">
                        Bolo formigueiro
                    </Bolos>
                </View>
        </ScrollView>
       </View>
      
    </View>
  )
};

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        marginVertical: '2%',
        paddingHorizontal:'2%',
    }
})