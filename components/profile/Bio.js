import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useColorScheme } from "nativewind";
import Avatar from '../../assets/avatar.jpg'
import { Icon } from 'react-native-elements'
import Highlights from './Highlights';
import PostsCategory from './PostsCategory';


const Bio = ({ category, setCategory }) => {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (
        <View>
            <View className="p-4">
                <View className="flex flex-row justify-between items-center">
                    <View>
                        <Image source={Avatar} className="w-20 h-20 rounded-full" style={{ resizeMode: "cover" }} />
                    </View>
                    <View className="flex flex-row items-center space-x-6 space-x-reverse">
                        <View className="flex flex-col items-center">
                            <Text className="dark:text-white font-bold text-xl">9</Text>
                            <Text className="dark:text-white text-lg">Posts</Text>
                        </View>
                        <View className="flex flex-col items-center">
                            <Text className="dark:text-white font-bold text-xl">298</Text>
                            <Text className="dark:text-white text-lg">Followers</Text>
                        </View>
                        <View className="flex flex-col items-center">
                            <Text className="dark:text-white font-bold text-xl">661</Text>
                            <Text className="dark:text-white text-lg">Following</Text>
                        </View>
                    </View>
                </View>

                <View className="flex">
                    <Text className="dark:text-white text-lg">Arash Hosseini</Text>
                    <Text className="dark:text-white text-lg">in search of incredible...</Text>
                </View>

                <View className="flex flex-row items-center space-x-2 my-2">
                    <View className="flex-1">
                        <Pressable className="bg-black/10 dark:bg-white/20 p-2 rounded-md">
                            <Text className="dark:text-white text-center">Edit Profile</Text>
                        </Pressable>
                    </View>

                    <View className="bg-black/10 dark:bg-white/20 p-2 rounded-lg">
                        <Icon
                            name='adduser'
                            type='antdesign'
                            size={22}
                            color={colorScheme === "dark" ? "white" : "black"}
                            onPress={() => console.log('hello')}
                        />
                    </View>
                </View>

                <Highlights />
            </View>
            <PostsCategory category={category} setCategory={setCategory} />
        </View>

    );
}

export default Bio;
