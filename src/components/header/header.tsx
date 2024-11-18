import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export default function Header (){
    return (
      <>
      <View style={styles.container}>
      <View style={styles.header}>

      <View style={styles.Box0}><Image source={require("../../../../trabalhoIndividual/assets/brenda.png")}
      style={styles.image}
      />  </View>
      <View style={styles.Box1}><Text style={styles.text}> Tudo </Text> </View>
      <View style={styles.Box2}><Text style={styles.text2}> Músicas </Text> </View>
      <View style={styles.Box2}><Text style={styles.text2}> PodCast </Text> </View>
      
      </View>
      </View>
      </>
    );
}

