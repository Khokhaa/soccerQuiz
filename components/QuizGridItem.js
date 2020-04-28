import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";

class QuizGridItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          margin: 15,
          height: 155,
          borderRadius: 10,
          overflow: "hidden"
        }}
      >
        <TouchableOpacity onPress={this.props.onSelect} style={{ flex: 1 }}>
          <View style={styles.container}>
            <ImageBackground
              source={{
                uri: this.props.image
              }}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "flex-end"
              }}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={2}>
                  {this.props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    overflow: "hidden"
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    color: "white",
    fontFamily: "roboto-regular"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5
  }
});

export default QuizGridItem;
