import React from 'react';
import { View, Text } from 'react-native';
import { useColorScheme } from "nativewind";
import { Icon } from 'react-native-elements'

const Header = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <View className="flex flex-row justify-between items-center p-4">
            <View className="flex flex-row items-center space-x-6">
                <Icon
                    name='lock'
                    type='octicon'
                    size={22}
                    color={colorScheme === "dark" ? "white" : "black"}
                    onPress={() => console.log('hello')}
                />
                <Text className="dark:text-white font-bold text-2xl mx-2">arash.h0sseini</Text>
                <Icon
                    name='chevron-down-outline'
                    type='ionicon'
                    size={18}
                    color={colorScheme === "dark" ? "white" : "black"}
                    onPress={() => console.log('hello')}
                />
            </View>
            <View className="flex flex-row items-center space-x-6 space-x-reverse">
                <View className="rounded-lg border-2 dark:border-white">
                    <Icon
                        name='plus'
                        type='entypo'
                        size={20}
                        color={colorScheme === "dark" ? "white" : "black"}
                        onPress={() => console.log('hello')}
                    />
                </View>
                <View>
                    <Icon
                        name='menu'
                        type='simple-line-icon'
                        size={24}
                        color={colorScheme === "dark" ? "white" : "black"}
                        onPress={() => console.log('hello')}
                    />
                </View>
            </View>
        </View>
    );
}

export default Header;
