import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { useColorScheme } from "nativewind";


const PostHeader = ({ name, image }) => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <View className="flex flex-row items-center justify-between p-2">
            <View className="flex flex-row items-center space-x-2">
                <View className="w-11 h-11 border-2 border-red-500 rounded-full p-[2px]">
                    <Image source={{ uri: image }} className="w-9 h-9 rounded-full" />
                </View>
                <Text className="text-base font-semibold text-black dark:text-white">{name}</Text>
            </View>
            <View>
                <Icon
                    name='ellipsis-vertical'
                    type='ionicon'
                    color={colorScheme === "dark" ? "#fff" : "#000"}
                    size={22}
                    onPress={() => console.log('hello')} />
            </View>
        </View>
    );
}


export default PostHeader;
