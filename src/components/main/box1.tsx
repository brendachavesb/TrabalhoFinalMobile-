import { View, Image, Text } from "react-native"
import {styles} from './stylesMain'


export default function Box1 (){
    return (
    <> 
    <View style={styles.container}>
 <View style={styles.main}>
    <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/projota.png")}
      style={styles.image}
      /><Text style={styles.text}> A Saída Está Dentro </Text>  </View>  
    <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/rosa2.jpg")}
      style={styles.image}
      /><Text style={styles.text}> This is Rosa de Saron </Text>  </View> 
    <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/rosa1.jpg")}
      style={styles.image}
      /><Text style={styles.text}> Baile das Mascaras </Text>  </View> 
    <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/sola.jpg")}
      style={styles.image}
      /><Text style={styles.text}> Projeto Sola - Todas {"\n"} as músicas </Text>  </View> 
    <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/joao.jpg")}
      style={styles.image}
      /><Text style={styles.text}> Todas do Mano João </Text>  </View>  
    <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/melim.jpg")}
      style={styles.image}
      /><Text style={styles.text}> This is Melim </Text>  </View>
    <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/nxzero.jpg")}
      style={styles.image}
      /><Text style={styles.text}> This is Nx Zero </Text>  </View>
    <View style={styles.Box1}><Image source={require("../../../../trabalhoIndividual/assets/good.jpg")}
      style={styles.image}
      /><Text style={styles.text}> Good Vibes Brasil </Text>

      </View>
      </View>
      </View>
    </>
    
    )}
