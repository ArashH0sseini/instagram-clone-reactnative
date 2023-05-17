import { withExpoSnack } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './components/StackNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default withExpoSnack(App)