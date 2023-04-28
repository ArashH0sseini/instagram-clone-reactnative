import React from 'react';
import { View, Text } from 'react-native';

const Comments = ({ comments }) => {
    return (
        <>
            {comments.map((comment, index) => (
                <View key={index} className="my-1">
                    <Text>
                        <Text className="font-bold text-black dark:text-white">{comment.user}</Text>
                        {" "}
                        <Text className="text-black dark:text-white">{comment.comment}</Text>
                    </Text>
                </View>
            ))}
        </>
    );
}

export default Comments;
