import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput({
  setCourseGoals,
  toggleAddGoalHandler,
  setModalIsVisible,
}) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHander() {
    setCourseGoals((prevCourseGoals) => [
      ...prevCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    toggleAddGoalHandler((prevState) => !prevState);
  }

  function cancelAddGoal() {
    setModalIsVisible((prevState) => {
      console.log(prevState);
      return !prevState;
    });
  }
  return (
    <Modal animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button
              title="Add Goal!"
              onPress={addGoalHander}
              color={"#b180f0"}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" onPress={cancelAddGoal} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "80%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  buttonStyle: {
    width: "40%",
    marginHorizontal: 8,
  },
});
