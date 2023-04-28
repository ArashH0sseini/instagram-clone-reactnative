import React from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import Avatar from '../../assets/avatar.jpg'
import Users from '../../data/users'
import { Icon } from 'react-native-elements'


const StoryBox = () => {
    return (
        <View className="mt-4 pb-2 border-b-[1px] border-gray-300 dark:border-gray-800">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="justify-center items-center mx-4">
                    <View className="relative w-16">
                        <Image source={Avatar} className="w-[73px] h-[73px] rounded-full" />
                        <View className="absolute bottom-0 right-0 w-5 h-5 items-center justify-center bg-blue-600 rounded-full border-[1px] border-white">
                            <Icon
                                name='add-outline'
                                type='ionicon'
                                size={17}
                                color="white"
                                onPress={() => console.log('hello')} />
                        </View>
                    </View>
                    <Text className="text-xs font-semibold mt-1 ml-3 dark:text-white">Your story</Text>
                </View>

                {Users.map((item, index) => (
                    <View key={index} className="justify-center items-center">
                        <View key={index} className="items-center justify-center w-[75px] h-[75px] mx-1 border-2 border-red-500 rounded-full">
                            <Image source={{ uri: item.image }} className="w-16 h-16 rounded-full " />

                        </View>
                        <Text className="text-xs font-semibold mt-1 dark:text-white">{item.username}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}


export default StoryBox;
