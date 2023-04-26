
import { SafeAreaView, StatusBar } from 'react-native'
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import StoryBox from '../components/home/StoryBox';
import GlobalStyles from '../utils/GlobalStyles'

function HomeScreen() {
    return (
        <SafeAreaView style={GlobalStyles.androidSafeArea} className="flex-1 bg-white dark:bg-black">
            <Header />
            <StoryBox />
            <Post />
        </SafeAreaView>
    );
}


export default HomeScreen