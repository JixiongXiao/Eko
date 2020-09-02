import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from "../screen/WelcomeScreen";

import StoryListingScreen from "../screen/StoryListingScreen";
import HomeScreen from "../screen/HomeScreen";
import RecommendScreen from "../screen/RecommendScreen";
import PlayingScreen from "../screen/PlayingScreen";
import TimeScreen from "../screen/TimeScreen";
import AboutUsScreen from "../screen/AboutUsScreen";
import memberDetailScreen from "../screen/memberDetailScreen";

const Stack = createStackNavigator();

const WelcomeNavigator =()=>(
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Story' component={StoryListingScreen}/>
        <Stack.Screen name='About' component={AboutUsScreen}/>
        <Stack.Screen name='member' component={memberDetailScreen}/>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Time' component={TimeScreen} />
        <Stack.Screen name='Recommend' component={RecommendScreen}/>
        <Stack.Screen name='Playing' component={PlayingScreen} />
    </Stack.Navigator>
);


export default WelcomeNavigator;


