import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setCourseGoals={setCourseGoals} />
      <View style={styles.goalsContainer}>
        {/* 
          Previously Scrollview was used look at bottom
          Now, we are using flatlist because it used kinda lazy loading to better
          optimise the codebase
        */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                setCourseGoals={setCourseGoals}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});

{
  /* <ScrollView>
  {courseGoals.map((goal, index) => (

    You can add styling goal item in Text tag as well now but
      previously Text tag wont give same result in ios as
      some time tweaking is needed to make it work in both platform
      seamlessly
      P.S.: Ofc now it works in both. But small thing to keep in mind
     

    <View style={styles.goalItem} key={index}>
      
              Styles does not cascade in react native 
              i.e. text color define in parent element wont be passed into child
             
      <Text style={styles.goalText}>{goal}</Text>
    </View>
  ))}
</ScrollView>; */
}
