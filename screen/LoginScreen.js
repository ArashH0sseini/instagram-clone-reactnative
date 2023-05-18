import Logo from '../assets/logo.png'
import Meta from '../assets/meta.png'
import LoginBackground from '../assets/login-bg3.jpg'
import { Image, View, Text, Pressable, ImageBackground } from 'react-native';
import LoginForm from '../components/login/LoginForm';

const LoginScreen = () => {
    return (
        <ImageBackground source={LoginBackground} resizeMode="cover" className="flex-1 w-[null] h-[null]" imageStyle={{ opacity: 0.1 }}>
            <View className="flex-1 justify-between items-center p-6">
                <Text className="text-xs text-gray-600">English (US)</Text>
                <Image source={Logo} className="w-14 h-14" style={{ resizeMode: "contain" }} />
                <LoginForm />
                <View className="flex items-center w-full">
                    <Pressable className="flex w-full flex-row items-center justify-center space-x-2 mt-10 border-2 border-blue-400/50 py-3 rounded-md">
                        <Text className="text-blue-400 text-base font-bold">Create new account</Text>
                    </Pressable>
                    <Image source={Meta} className="w-16 h-16" style={{ resizeMode: "contain" }} />
                </View>
            </View>
        </ImageBackground>
    );
}


export default LoginScreen;
