import { View, Text, StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import Bolos from './bolos'


export default function Footer() {
  return (
    <View>
        <Text style={styles.title}>Outros serviços</Text>
       <View style ={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal: 10}}>
                    <Bolos img={require('../screens/assets/1.1.png')} cost="De uma a 3 horas">
                        Troca de pneus
                    </Bolos>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Bolos img={require('../screens/assets/2.png')} cost="De um a 5 dias">
                        Revisão completa
                    </Bolos>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Bolos img={require('../screens/assets/3.png')} cost="De um a 3 dias">
                        Revisão em motos
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