import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Ingredientes from "../components/ingredientes";
import Footer from "../components/footer";
import Dot from "../components/dot";
import Button from "../components/button";

export default function Detail3({ navigation }) {
  navigation.setOptions({
    headerTitle: "Revisao Automotiva",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("./assets/detail4.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>
            Pintura automotiva
          </Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Tempo estimado de 5 a 10 dias uteis.
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Ingredientes bgColor="#17181a" color="#FFF">
              Pintura automotiva
            </Ingredientes>
            <Ingredientes>Troca de pneus</Ingredientes>
            <Ingredientes>Revisão veicular</Ingredientes>
            <Ingredientes>Reparo automotivo</Ingredientes>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Pintura automotiva</Text>
          <Text style={styles.textContent}>
            Você já pensou em contratar uma pintura automotiva para o seu carro?
            Dar um trato no visual do veículo, deixá-lo mais bonito e com a sua
            cara? Para muitos motoristas, isso é algo supérfluo; já para outros,
            é importante. A cor do carro é um fator que tem muita influência no
            veículo, mesmo que não notemos na maior parte das vezes. Por isso,
            pode ser que uma pintura automotiva seja uma alternativa
            interessante para o seu veículo.
          </Text>
          <Text style={styles.textList}>
            Uma das vantagens de fazer um trabalho de pintura automotiva no seu
            veículo é que ele fica mais bonito dessa forma. Especialmente depois
            de alguns anos de uso constante na cidade. É normal que, com o
            tempo, a pintura do carro vá se desgastando, perdendo o brilho e a
            beleza. Para devolver o automóvel ao seu período de glórias, o mais
            indicado é cuidar dele para recuperar a sua beleza e brilho.
            Atualmente, o sistema de pintura automotiva conta com várias
            técnicas que ajudam a recuperar o brilho e a beleza da pintura
            automotiva. Técnicas como a cristalização ou espelhamento ajudam o
            carro a ficar mais bonito e recuperam o brilho que o automóvel
            perdeu com o seu uso, contato com a chuva ou exposição ao sol.
          </Text>
          <Text style={styles.textList}>
          </Text>
        </View>

        <Button />

        <View style={styles.line} />

        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
  },
  title: {
    paddingHorizontal: "2%",
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%",
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textTitle: {
    fontSize: 22,
    marginVertical: "2%",
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: "#DDD",
    marginVertical: "2%",
  },
});
