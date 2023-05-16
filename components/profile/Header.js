import React from 'react';
import { View, Text } from 'react-native';
import { useColorScheme } from "nativewind";
import { Icon } from 'react-native-elements'

const Header = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center">
                <Icon
                    name='lock'
                    type='octicon'
                    size={18}
                    color={colorScheme === "dark" ? "white" : "black"}
                    onPress={() => console.log('hello')}
                />
                <Text className="text-white">arash.h0sseini</Text>
                <Icon
                    name='chevron-down-outline'
                    type='ionicon'
                    size={18}
                    color={colorScheme === "dark" ? "white" : "black"}
                    onPress={() => console.log('hello')}
                />
            </View>
            <View className="flex flex-row items-center">
                <Icon
                    name='plus'
                    type='entypo'
                    size={18}
                    color={colorScheme === "dark" ? "white" : "black"}
                    onPress={() => console.log('hello')}
                />
                <Icon
                    name='menu'
                    type='entypo'
                    size={18}
                    color={colorScheme === "dark" ? "white" : "black"}
                    onPress={() => console.log('hello')}
                />
            </View>
        </View>
    );
}

export default Header;
