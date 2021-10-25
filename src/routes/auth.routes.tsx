import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { SingnIn } from "../screens/SingnIn";


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SingIn" component={SingnIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}