import { FlatList, Image, View, Text } from 'react-native';
import PostHeader from './PostHeader';
import post from '../../data/post'
import PostFooter from './PostFooter';

const Post = () => {
    return (
        <FlatList
            data={post}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
                <View>
                    <PostHeader name={item.user} image={item.profile_img} />
                    <Image source={{ uri: item.image }} className="h-[500px] w-full" style={{ resizeMode: "cover" }} />
                    <PostFooter />
                    <View className="px-4 space-y-1">
                        <Text className=" font-bold">{item.likes} likes</Text>
                        <View className="flex flex-row">
                            <Text numberOfLines={2} className="dark:text-white">
                                <Text className=" font-bold dark:text-white">{item.user}</Text>
                                {" "}
                                {item.caption}
                            </Text>
                        </View>
                        <Text className="text-gray-600 dark:text-gray-300">View all {item.comments.length} comments</Text>
                        <Text className="text-xs text-gray-600 dark:text-gray-300">3 days ago</Text>
                    </View>
                </View>
            )}
        />
    );
}

export default Post;
