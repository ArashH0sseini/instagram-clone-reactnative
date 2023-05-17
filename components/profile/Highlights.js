import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Icon } from 'react-native-elements'
import { useColorScheme } from "nativewind";

const Highlights = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const [expanded, setExpanded] = useState(false)

    return (
        <View>
            <Pressable onPress={() => setExpanded(!expanded)} className="flex flex-row items-center space-x-2">
                <View className="flex-1">
                    <Text className="dark:text-white font-bold text-lg">Story Highlights</Text>
                </View>

                <View className="pr-2">
                    <Icon
                        name='chevron-down-outline'
                        type='ionicon'
                        size={18}
                        color={colorScheme === "dark" ? "white" : "black"}
                    />
                </View>
            </Pressable>

            {
                expanded ? (
                    <View>
                        <Text className="dark:text-white text-base mb-2">Keep your favorite stories on your profile</Text>
                        <View className="flex flex-row space-x-4">
                            <View className="flex items-center space-y-2">
                                <View className="rounded-full border-2  dark:border-white w-16 h-16 flex items-center justify-center">
                                    <Icon
                                        name='plus'
                                        type='entypo'
                                        size={32}
                                        color={colorScheme === "dark" ? "white" : "black"}
                                        onPress={() => console.log('hello')}
                                    />
                                </View>
                                <Text className="dark:text-white text-base">New</Text>
                            </View>
                            <View className="bg-black/10 dark:bg-white/20 p-1 h-16 w-16 rounded-full"></View>
                            <View className="bg-black/10 dark:bg-white/20 p-1 h-16 w-16 rounded-full"></View>
                            <View className="bg-black/10 dark:bg-white/20 p-1 h-16 w-16 rounded-full"></View>
                            <View className="bg-black/10 dark:bg-white/20 p-1 h-16 w-16 rounded-full"></View>
                        </View>
                    </View>
                ) : null
            }
        </View>
    );
}

export default Highlights;
