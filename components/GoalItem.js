import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ text, setCourseGoals, id }) {
  function deleteGoalHandler(id) {
    setCourseGoals((previousCourseGoals) => {
      return previousCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItems}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressedItems: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
