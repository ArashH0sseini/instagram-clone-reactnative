import React from 'react';
import { Image, Pressable, useColorScheme, View } from 'react-native';
import { Icon } from 'react-native-elements'
import Reels from '../../assets/reels.png'
import ReelsLight from '../../assets/reels-light.png'

const PostsCategory = ({ category, setCategory }) => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <View>
            <View className="flex flex-row items-center justify-between">
                <Pressable onPress={() => setCategory(0)} className={`flex flex-1 items-center justify-center py-4 ${category === 0 ? 'border-b-[1px] dark:border-white' : ''}`}>
                    <Icon
                        name='grid'
                        type='material-community'
                        size={28}
                        color={colorScheme === "dark" ? "white" : "black"}
                    />
                </Pressable>
                <Pressable onPress={() => setCategory(1)} className={`flex flex-1 items-center justify-center py-4 ${category === 1 ? 'border-b-[1px] dark:border-white' : ''}`}>
                    {colorScheme === "dark" ? (
                        <Image source={ReelsLight} className="w-7 h-7" />
                    ) : (
                        <Image source={Reels} className="w-7 h-7" />
                    )}
                </Pressable>
                <Pressable onPress={() => setCategory(2)} className={`flex flex-1 items-center justify-center py-4 ${category === 2 ? 'border-b-[1px] dark:border-white' : ''}`}>
                    <Icon
                        name='clipboard-account-outline'
                        type='material-community'
                        size={30}
                        color={colorScheme === "dark" ? "white" : "black"}
                    />
                </Pressable>
            </View>
        </View>
    );
}


export default PostsCategory;
