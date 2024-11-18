import { View, Image, Text } from "react-native"
import {styles} from './stylesMain'

export default function Main (){
    return (
    <> 
    <View style={styles.container}>
    <View style={styles.main}>
    <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/brenda.png")}
      style={styles.image}
      /><Text style={styles.text}> Projota </Text>  </View>  
    <View style={styles.Box1}></View>
    <View style={styles.Box1}></View>
    <View style={styles.Box1}></View>
    <View style={styles.Box1}></View>  
    <View style={styles.Box1}></View>
    <View style={styles.Box1}></View>
    <View style={styles.Box1}></View>
    </View>
    </View>
    </>
    )}
