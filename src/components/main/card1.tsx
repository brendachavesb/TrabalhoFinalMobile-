import { Image, Text, View } from "react-native";
import { styles } from "./card1Style"

export default function Card1 (){
    return (
    <> 
    <View style={styles.container}>
    <Text style={styles.text1} > Suas músicas estão com saudade </Text>
    <View style={styles.card1}>
        <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/projota.png")}
        style={styles.image}/>
        <Text style={styles.text2} >This is Projota</Text>
        <Text style={styles.text3} >This is Projota. Todos os maiores hits em uma só playlist.</Text>
        </View>
        <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/good.jpg")}
        style={styles.image}/>
        <Text style={styles.text2} >Good Vibes Brasil 2024 - Nac...</Text>
        <Text style={styles.text3} >Playlist Good Vibes Brasil {"\n"}2024 nacionais e internacionais </Text>
    </View>
    </View>
    </View>
    </>
      )}