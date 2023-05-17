import { View, Text, Pressable, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useColorScheme } from "nativewind";
import { Icon } from 'react-native-elements'
import Logo from '../../assets/Instagram_logo.png'
import DirectIcon from '../../assets/direct.png'
import DirectIconLight from '../../assets/direct-light.png'
import DarkLogo from '../../assets/dark_Instagram_logo.png'


const Header = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <View className="flex flex-row flex-1 justify-between items-center px-4 py-6 bg-white dark:bg-black">
            <View className="flex flex-row items-center">
                {
                    colorScheme === "dark" ?
                        (
                            <Image source={DarkLogo} className="w-36 h-14" style={{ resizeMode: "contain" }} />
                        ) : (
                            <Image source={Logo} className="w-36 h-14" style={{ resizeMode: "contain" }} />
                        )
                }
                <Icon
                    name='chevron-down-outline'
                    type='ionicon'
                    size={18}
                    color={colorScheme === "dark" ? "white" : "black"}
                    onPress={() => console.log('hello')} />
            </View>
            <View className="flex flex-row items-center space-x-6">
                <Pressable
                    onPress={toggleColorScheme}
                    className="items-center justify-center"
                >
                    <Text
                        selectable={false}
                        className="text-lg"
                    >
                        {`${colorScheme === "dark" ? "🌙" : "🌞"}`}
                    </Text>
                </Pressable>
                <TouchableOpacity>
                    <View className="relative">
                        {
                            colorScheme === "dark" ? (
                                <Image source={DirectIconLight} className="w-7 h-7" style={{ resizeMode: "contain" }} />
                            ) : (
                                <Image source={DirectIcon} className="w-7 h-7" style={{ resizeMode: "contain" }} />
                            )
                        }
                    </View>
                    <View className="absolute -right-2 -top-2 w-5 h-5 bg-red-500 rounded-full justify-center items-center z-50">
                        <Text className="text-white font-bold">6</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header