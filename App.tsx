
import Principal from './src/components/principal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from './src/components/type';


const{ Navigator, Screen} = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
    <NavigationContainer> 
    <Navigator>
    <Screen name="Principal" component={Principal} options={{ headerShown: false }} />
    </Navigator>
    </NavigationContainer>
    </>
  );
}
