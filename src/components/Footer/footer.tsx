import { Image, Text, View } from 'react-native';
import { styles } from './footerStyle';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Footer (){
    return (
      <>
      <View style={styles.container}>
        <View style={styles.Component}>
      <Foundation name="home" size={37} color="white" />
      <Text style={styles.text}>Inicio</Text>
      </View>
      <View style={styles.Component}>
      <FontAwesome6 name="magnifying-glass" size={37} color="white" />
      <Text style={styles.text}>Buscar</Text>
      </View>
      <View style={styles.Component}>
      <Ionicons name="library-outline" size={37} color="white" />
      <Text style={styles.text}>Sua biblioteca</Text>
       </View>
       
      </View>
      
            </>
    );
}

