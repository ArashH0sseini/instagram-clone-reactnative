import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../components/profile/Header';
import Posts from '../components/profile/Posts';
import GlobalStyles from '../utils/GlobalStyles';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={GlobalStyles.androidSafeArea} className="flex-1 bg-white dark:bg-black">
            <Header />
            <Posts />
        </SafeAreaView>
    );
}

export default ProfileScreen;
