import React from "react";
import {
  StyleSheet,
  StatusBar,
  FlatList,
  Alert,
  Text,
  View
} from "react-native";
import QuizGridItem from "../components/QuizGridItem";
import { QUIZZES } from "../data/dummydata";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    StatusBar.setBarStyle("default");
  }

  renderQuiz = itemData => {
    return (
      <QuizGridItem
        title={itemData.item.quizName}
        image={itemData.item.image}
        onSelect={() => {
          this.props.navigation.navigate({
            routeName: "Quiz",
            params: {
              quizTitle: itemData.item.quizName,
              quizContent: itemData.item.playerNames,
              quizStatus: itemData.item.isFinished
            }
          });
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 15 }}>
        <View>
          <Text style={styles.title}>Pick a Team</Text>
        </View>
        <FlatList
          data={QUIZZES}
          renderItem={this.renderQuiz}
          numColumns={2}
          keyExtractor={item => item.quizId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontFamily: "roboto-regular"
  }
});

export default HomeScreen;
