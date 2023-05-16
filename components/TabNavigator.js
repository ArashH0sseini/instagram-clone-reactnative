import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { useColorScheme } from "nativewind";
import HomeScreen from '../screen/HomeScreen';
import Avatar from '../assets/avatar.jpg'
import Reels from '../assets/reels.png'
import ReelsLight from '../assets/reels-light.png'
import ProfileScreen from '../screen/ProfileScreen';
import NotificationsScreen from '../screen/NotificationsScreen';
import ReelsScreen from '../screen/ReelsScreen';
import SearchScreen from '../screen/SearchScreen';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator()
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <Tab.Navigator initialRouteName="HomeScreen">
            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: colorScheme === "dark" ? "#000" : "#fff" },
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                            <Icon
                                name='home'
                                type='foundation'
                                size={32}
                                color={colorScheme === "dark" ? "#fff" : "#000"}
                            />
                        ) : (
                            <Icon
                                name='home'
                                type='octicon'
                                size={28}
                                color={colorScheme === "dark" ? "#fff" : "#000"}
                            />
                        )
                    ),
                }} />
            <Tab.Screen name="SearchScreen" component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: colorScheme === "dark" ? "#000" : "#fff" },
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                            <Icon
                                name='search'
                                type='font-awesome'
                                size={28}
                                color={colorScheme === "dark" ? "#fff" : "#000"}
                            />
                        ) : (
                            <Icon
                                name='search1'
                                type='antdesign'
                                size={28}
                                color={colorScheme === "dark" ? "#fff" : "#000"}
                            />
                        )
                    ),
                }} />
            <Tab.Screen name="Reels" component={ReelsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: colorScheme === "dark" ? "#000" : "#fff" },
                    tabBarIcon: () => (
                        colorScheme === "dark" ? (
                            <Image source={ReelsLight} className="w-6 h-6" />
                        ) : (
                            <Image source={Reels} className="w-6 h-6" />
                        )
                    ),
                }} />
            <Tab.Screen name="Notifications" component={NotificationsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: colorScheme === "dark" ? "#000" : "#fff" },
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                            <Icon
                                name='heart'
                                type='antdesign'
                                size={28}
                                color={colorScheme === "dark" ? "#fff" : "#000"}
                            />
                        ) : (
                            <Icon
                                name='hearto'
                                type='antdesign'
                                size={28}
                                color={colorScheme === "dark" ? "#fff" : "#000"}
                            />
                        )
                    ),
                }} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: colorScheme === "dark" ? "#000" : "#fff" },
                    tabBarIcon: ({ focused }) => (
                        <View className={focused && colorScheme === "dark" ? "border-2 border-white rounded-full" : focused && colorScheme === "light" ? "border-2 rounded-full" : "border-0 rounded-full"}>
                            <Image source={Avatar} className="w-8 h-8 rounded-full" />
                        </View>
                    ),
                }} />
        </Tab.Navigator>
    );
}


export default TabNavigator;
