import React, { useState } from 'react';
import { Dimensions, FlatList, Image, View } from 'react-native';

import post from '../../data/post';
import Bio from './Bio';

const Posts = () => {
    const [category, setCategory] = useState(0)
    const { width, height } = Dimensions.get('window');
    const itemWidth = (width) / 3;
    const itemHeight = (height) / 6;
    return (
        <FlatList
            numColumns={3}
            data={post}
            ListHeaderComponent={<Bio category={category} setCategory={setCategory} />}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
                <View>
                    {
                        category === 0 ? (<Image source={{ uri: item.image }} style={{ resizeMode: "cover", width: itemWidth, height: itemHeight }} />) : null
                    }
                </View>
            )}
        />
    );
}

export default Posts;
