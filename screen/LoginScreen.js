import Logo from '../assets/Instagram_logo.png'
import { Image, View, Text, Pressable } from 'react-native';
import { Icon } from 'react-native-elements'
import LoginForm from '../components/login/LoginForm';

const LoginScreen = () => {
    return (
        <View className="flex-1 bg-white justify-center items-center p-6">
            <Image source={Logo} className="w-56 h-40" style={{ resizeMode: "contain" }} />
            <LoginForm />
            <View className="flex flex-row items-center gap-6">
                <View className="h-[2px] w-[40%] bg-gray-200" />
                <Text className="text-center text-gray-500">OR</Text>
                <View className="h-[2px] w-[40%] bg-gray-200" />
            </View>
            <Pressable className="flex flex-row items-center justify-center space-x-2 mt-10">
                <Icon
                    name='logo-facebook'
                    type='ionicon'
                    color='#3B82F6'
                    size={22}
                    onPress={() => console.log('hello')} />
                <Text className="text-blue-500 font-semibold text-base">Continue as Arash Hosseini</Text>
            </Pressable>
        </View>
    );
}


export default LoginScreen;
