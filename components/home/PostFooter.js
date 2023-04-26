import { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { useColorScheme } from "nativewind";
import DirectIcon from '../../assets/direct.png'
import DirectIconLight from '../../assets/direct-light.png'

const PostFooter = () => {
    const [addToCollection, setAddToCollection] = useState(false)
    const [like, setLike] = useState(false)
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <View className="py-2 px-4">
            <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center justify-center space-x-4">
                    <View>
                        {
                            like ? (
                                <Icon
                                    name='heart'
                                    type='antdesign'
                                    size={28}
                                    color="#EF4444"
                                    onPress={() => setLike(false)} />
                            ) : (
                                <Icon
                                    name='hearto'
                                    type='antdesign'
                                    size={28}
                                    color={colorScheme === "dark" ? "#fff" : "#000"}
                                    onPress={() => setLike(true)} />
                            )
                        }
                    </View>
                    <View>
                        <Icon
                            name='chatbubble-outline'
                            type='ionicon'
                            size={28}
                            color={colorScheme === "dark" ? "#fff" : "#000"}
                            onPress={() => setLike(true)} />
                    </View>
                    <TouchableOpacity>
                        {
                            colorScheme === "dark" ? (
                                <Image source={DirectIconLight} className="w-7 h-7" style={{ resizeMode: "contain" }} />
                            ) : (
                                <Image source={DirectIcon} className="w-7 h-7" style={{ resizeMode: "contain" }} />
                            )
                        }
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        addToCollection ? (
                            <Icon
                                name='bookmark'
                                type='font-awesome'
                                size={30}
                                color={colorScheme === "dark" ? "#fff" : "#000"}
                                onPress={() => setAddToCollection(false)} />
                        ) : (
                            <Icon
                                name='bookmark-o'
                                type='font-awesome'
                                size={30}
                                color={colorScheme === "dark" ? "#fff" : "#000"}
                                onPress={() => setAddToCollection(true)} />
                        )
                    }
                </View>
            </View>
        </View>
    );
}

export default PostFooter;
