import React from 'react';

import WelcomeNavigator from "./app/Navigation/WelcomeNavigator";
import {NavigationContainer} from "@react-navigation/native";



export default function App() {
  return (
      <NavigationContainer>
        <WelcomeNavigator />
      </NavigationContainer>
  );
}

