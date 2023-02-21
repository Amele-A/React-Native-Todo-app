import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Task = ({ text, handleEdit, index }) => {
  // console.log(index);
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{text}</Text>
      <TouchableOpacity
        style={styles.editItem}
        onPress={(e) => {
          e.preventDefault();
          handleEdit(index);
        }}
      >
        <AntDesign
          style={{
            marginTop: 7,
            backgroundColor: "#C6FACB",
            borderRadius: 50,
          }}
          name="edit"
          size={24}
          color="#08c"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  editItem: {
    // display: "flex",
    backgroundColor: "#C6FACB",

    borderRadius: 50,
    marginTop: 10,
    marginLeft: 20,
    flexDirection: "row",
    position: "absolute",
    alignSelf: "flex-end",
    alignContent: "center",
    // textAlign: "center",
    justifyContent: "center",

    height: 40,
    width: 40,
    // backgroundColor: "#fff",
  },
  listItem: {
    height: 60,
    width: 320,
    backgroundColor: "#ead7d7",
    marginTop: 30,
    borderRadius: 10,
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  listText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 15,
  },
});
export default Task;