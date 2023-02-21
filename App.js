import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  // const [edit, setEdit] = useState(false);

  const addTask = () => {
    if (inputText === "") {
      Alert.alert("Error", "Please enter Todo");
    } else {
      // Keyboard.dismiss();
      setTaskItems([...taskItems, inputText]);
      setInputText("");
    }
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const handleEdit = (index) => {
    const copyOfArray = [...taskItems];
    copyOfArray[index] = inputText;
    setTaskItems(copyOfArray);
    setInputText('');
  };
  // const handleEdit = id => {
  //   let expense = expenses.find(item => item.id === id);
  //   let { charge, amount } = expense;
  //   setCharge(charge);
  //   setAmount(amount);
  //   setEdit(true);
  //   setId(id);
  // };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#C6FACB" }}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>WYLA GOALS</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.button} onPress={()=> addTask()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder={"Add Todo"}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          ></TextInput>
        </View>
        <FlatList
          data={taskItems}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} index={index} handleEdit={handleEdit} />
            </TouchableOpacity>
          )}
        />
        {/* <ScrollView>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView> */}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#1F145C",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#C6FACB",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#eee",
    alignItems: "center",
    // borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  input: {
    width: 250,
    height: 100,
    color: "#000",
    marginLeft: 20,
    fontSize: 24,
    textAlign: "left",
  },
  button: {
    backgroundColor: "#1F145C",
    borderRadius: 100,
    padding: 10,
    marginLeft: 16,
    height: 50,
    width: 50,
    // marginTop: 25,
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#eee",
    marginTop: -5,
  },
});
// const addTask = () => {
//   Keyboard.dismiss();
//   setTaskItems([...taskItems, inputText]);
//   setInputText(null);
// };