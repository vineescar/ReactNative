import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AddShoppingItem } from "./components/AddShoppingItem";
import { Header } from "./components/Header";
import { ShoppingList } from "./components/ShoppingList";

export default function App() {
  const [shoppingList, setShoppingList] = useState([
    {
      todo: "Buy News Paper",
      id: "1",
    },
    {
      todo: "Buy Vegetables",
      id: "2",
    },
    {
      todo: "Buy Fruits",
      id: "3",
    },
    {
      todo: "Buy Rice",
      id: "4",
    },
  ]);

  const deleteItem = (item) => {
    setShoppingList((prevShoppingList) => {
      return prevShoppingList.filter((listItem) => {
        return listItem.id !== item.id;
      });
    });
  };

  const addItem = (item) => {
    if (item.length === 0) {
      Alert.alert("Alert!", "Please enter an item");
      return;
    }
    setShoppingList([
      ...shoppingList,
      { todo: item, id: Math.random().toString() },
    ]);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <AddShoppingItem addItem={addItem} />
        <ShoppingList list={shoppingList} deleteItem={deleteItem} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});