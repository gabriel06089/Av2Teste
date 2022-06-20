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

export default function Detail1({ navigation }) {
  navigation.setOptions({
    headerTitle: "Revisao Automotiva",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("./assets/detail2.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>
            Troca de pneus e calibragem
          </Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Tempo estimado de 1 a 3 horas.
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
              Troca de pneus
            </Ingredientes>
            <Ingredientes>Revisão completa</Ingredientes>
            <Ingredientes>Pintura</Ingredientes>
            <Ingredientes>Reparo automotivo</Ingredientes>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}></Text>
          <Text style={styles.textContent}>
            É recomendável fazer alinhamento e balanceamento a cada 10 mil km e
            substituir os pneus entre 35 mil km e 45 mil km. Para isso, muitos
            recorrem a lojas especializadas. O problema é que algumas costumam
            "empurrar" também a troca de peças da suspensão e outros serviços
            que podem ser desnecessários, fazendo o motorista gastar muito mais
            do que gostaria.{" "}
          </Text>
          <Text style={styles.textList}>
            Aqui garantimos seriedade e transparencia no serviço, passamos somente o necessário.
          </Text>
          <Text style={styles.textList}>
            Sem cobrar nenhum vaor adicional, checamos todo o sistema de suspensão.
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
