import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";

const defaultNavOptions = {
  headerTitleStyle: {
    fontSize: 30,
    fontFamily: "roboto-bold",
    fontWeight: "600"
  }
};

const QuizNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: "Quizz"
      }
    },
    Quiz: {
      screen: QuizScreen
    }
  },
  {
    // initialRouteName: "Quiz",
    defaultNavigationOptions: defaultNavOptions
  }
);

export default createAppContainer(QuizNavigator);
