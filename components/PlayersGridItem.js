import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors.js";

class PlayersGridItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            ...styles.titleContainer,
            ...{
              backgroundColor: this.props.color
            }
          }}
        >
          <View
            style={{
              marginRight: 10,
              width: "15%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.title}>{this.props.number}</Text>
          </View>
          <View>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    textAlign: "center"
  },
  titleContainer: {
    borderWidth: 1,
    padding: 10,
    paddingVertical: 5,
    flexDirection: "row"
  }
});

export default PlayersGridItem;
