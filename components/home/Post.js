import { FlatList, Image, View, Text, TextInput } from 'react-native';
import PostHeader from './PostHeader';
import post from '../../data/post'
import PostFooter from './PostFooter';
import Comments from './Comments';
import Avatar from '../../assets/avatar.jpg'
import { useState } from 'react';

const Post = () => {
    const [like, setLike] = useState(false)

    return (
        <FlatList
            data={post}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
                <View>
                    <PostHeader name={item.user} image={item.profile_img} />
                    <View className="w-full" style={{ height: 450 }}>
                        <Image source={{ uri: item.image }} className="h-full" style={{ resizeMode: "cover" }} />
                    </View>
                    <PostFooter like={like} setLike={setLike} />
                    <View className="px-4 space-y-1">
                        <Text className="font-bold">{item.likes} likes</Text>
                        <View>
                            <Text numberOfLines={2} className="dark:text-white">
                                <Text className=" font-bold dark:text-white">{item.user}</Text>
                                {" "}
                                <Text>{item.caption}</Text>
                            </Text>
                        </View>
                        {
                            item.comments.length === 1 ? (
                                <Text className="text-gray-600 dark:text-gray-300">View {item.comments.length} comment</Text>
                            ) : item.comments.length >= 2 ? (
                                <Text className="text-gray-600 dark:text-gray-300">View all {item.comments.length} comments</Text>
                            ) : null
                        }
                        <Comments comments={item.comments} />
                        <View className="flex flex-row space-x-2">
                            <Image source={Avatar} className="w-8 h-8 rounded-full" />
                            <TextInput placeholder='Add a comment...' />
                        </View>
                        <Text className="text-xs text-gray-500 dark:text-gray-400">3 days ago</Text>
                    </View>
                </View>
            )}
        />
    );
}

export default Post;
