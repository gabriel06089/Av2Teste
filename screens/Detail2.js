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

export default function Detail2({ navigation }) {
  navigation.setOptions({
    headerTitle: "Revisao Automotiva em motocicletas",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("./assets/detail3.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>
            Revisão em motocicletas
          </Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Tempo estimado de 1 a 3 dias uteis.
          </Text>
        </View>

        <View style={styles.dotContainer}>
        <Dot color="#ddd" />
          <Dot color="#000" />
          <Dot color="#ddd" />
          <Dot color="#000" />
          <Dot color="#ddd" />
          <Dot color="#000" />
          <Dot color="#ddd" />
          <Dot color="#000" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Ingredientes bgColor="#17181a" color="#FFF">
              Revisão em motocicletas
            </Ingredientes>
            <Ingredientes>Troca de pneus</Ingredientes>
            <Ingredientes>Pintura</Ingredientes>
            <Ingredientes>Reparo automotivo</Ingredientes>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}> Revisão em motocicletas </Text>
          <Text style={styles.textContent}>
            É recomendável fazer alinhamento e balanceamento a cada 10 mil km e
            substituir os pneus entre 35 mil km e 45 mil km. Para isso, muitos
            recorrem a lojas especializadas. O problema é que algumas costumam
            "empurrar" também a troca de peças da suspensão e outros serviços
            que podem ser desnecessários, fazendo o motorista gastar muito mais
            do que gostaria.
          </Text>
          <Text style={styles.textList}>
            Quais procedimentos sao realizados?
          </Text>
          <Text style={styles.textList}>
            Na revisão completa da moto, é preciso analisar: Óleo: recomenda-se
            a verificação do óleo a cada cinco mil ou dez mil quilômetros
            rodados, dependendo do modelo (no verão, o consumo é maior que no
            inverno); Pneus: verificar o desgaste, a presença de furos ou
            rachaduras; Pastilhas de travão: verificação a cada dez ou quinze
            mil quilômetros dependendo do trajeto e do modelo (com dois
            milímetros ou menos de espessura, as pastilhas dever ser
            substituídas); Óleo de suspensão: importante para a lubrificação das
            peças; Líquido de refrigeração: trocar a cada dois meses; Corrente:
            deve ser trocada depois de 30.000 km; Bateria; Velas de ignição:
            verificação a cada 6.000 km e 12.000 km.
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
