import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./screens/Login"
import Home from "./screens/Home"

const AppNav = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
        Login: {
            screen: Login,
        },
    }
);

const RootNavigator = createAppContainer(AppNav);

export default RootNavigator;