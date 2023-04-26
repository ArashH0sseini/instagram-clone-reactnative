import HomeScreen from './screen/HomeScreen';
import { withExpoSnack } from 'nativewind';

const App = () => {
  return (
    <HomeScreen />
  );
}

export default withExpoSnack(App)
