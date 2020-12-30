import React from "react";
import {
  StatusBar,
  FlatList,
  TextInput,
  View,
  StyleSheet,
  Button,
  AsyncStorage,
  Text,
  Alert,
} from "react-native";
import PlayersGridItem from "../components/PlayersGridItem.js";
import Colors from "../constants/Colors.js";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton.js";

class QuizScreen extends React.Component {
  state = {
    playerName: "",
    Players: [],
    playerVisibility: [],
    playersRead: false,
    correctGuess: false,
    guessing: false,
    restart: false,
  };

  static navigationOptions = (navData) => {
    const title = navData.navigation.getParam("quizTitle");

    const restart = () => {
      navData.navigation.state.restart = true;
    };

    return {
      headerTitle: title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Restart"
            iconName="ios-refresh"
            onPress={() => {
              Alert.alert(
                "Restart Quiz",
                "Are you sure you want to restart this quiz?",
                [
                  {
                    text: "Restart",
                    style: "destructive",
                    onPress: () => {
                      restart();
                    },
                  },
                  { text: "Cancel", style: "default" },
                ]
              );
            }}
          />
        </HeaderButtons>
      ),
    };
  };

  componentDidMount() {
    StatusBar.setBarStyle("default");

    const p = this.props.navigation.getParam("quizContent");
    const name = this.props.navigation.getParam("quizTitle");
    const pVisible = [];

    for (const player in p) {
      pVisible.push(p[player].visible);
    }
    this.setState({ Players: p });
    this.setState({ playerVisibility: pVisible });
    this.setState({ playersRead: true });

    AsyncStorage.getItem("@Players:" + name, (err, data) => {
      if (err) {
        console.error("Error loading guessed players", err);
      } else {
        const a = JSON.parse(data);
        if (a !== null) {
          this.setState({ Players: a });
          this.setState({ playersRead: true });
        }
      }
    });
  }

  shouldComponentUpdate(props, state) {
    return (
      state.playersRead || state.correctGuess || state.guessing || state.restart
    );
  }

  componentDidUpdate() {
    this.setState({ playersRead: false });
    this.setState({ guessing: false });
    let data = [];
    data = this.state.Players;
    for (const item in data) {
      item.visible = this.state.playerVisibility[item];
    }

    const name = this.props.navigation.getParam("quizTitle");

    if (this.state.correctGuess) {
      this.setState({ correctGuess: false });
      AsyncStorage.setItem("@Players:" + name, JSON.stringify(data));
    }
  }

  playerGuessHandler = (guess) => {
    const list = [];
    for (const player in this.state.Players) {
      if (
        guess.toLowerCase() ===
        this.state.Players[player].playerName.toLowerCase()
      ) {
        this.state.Players[player].visible = true;
        this.setState({ correctGuess: true });
      }
      list.push(this.state.Players[player].visible);
    }
    this.setState({ playerVisibility: list });
  };

  renderPlayer(itemData) {
    return itemData.item.visible ? (
      <PlayersGridItem
        title={itemData.item.playerName}
        number={itemData.item.playerNumber}
        color={Colors.correctAnswer}
      />
    ) : (
      <PlayersGridItem title="" number={itemData.item.playerNumber} />
    );
  }

  render() {
    const title = this.props.navigation.getParam("quizTitle");
    return (
      <View style={{ flex: 1, marginTop: 15 }}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            Can you guess the full 2019/20 squad of {title}?
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <TextInput
            placeholder="Enter player name..."
            value={this.state.playerName}
            style={styles.inputContainer}
            onChangeText={(text) => {
              this.setState({ guessing: true });
              this.setState({ playerName: text });
            }}
            autoCorrect={false}
            onSubmitEditing={() => {
              this.setState({ guessing: true });
              this.playerGuessHandler(this.state.playerName);
              this.setState({ playerName: "" });
            }}
          />
          <Button
            fontFamily="roboto-bold"
            title="Submit"
            onPress={() => {
              this.setState({ guessing: true });
              this.setState({ playerName: "" });
              this.playerGuessHandler(this.state.playerName);
            }}
          />
        </View>
        <FlatList
          data={this.state.Players}
          keyExtractor={(item) => item.playerNumber}
          renderItem={this.renderPlayer}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: "70%",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "roboto-regular",
  },
});

export default QuizScreen;
