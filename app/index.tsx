import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const handlePress = (index: number) => {
    if (selectedBox === index) {
      setSelectedBox(null);
    } else {
      setSelectedBox(index);
    }
  };

  const cards = ["Tarjeta 1", "Tarjeta 2", "Tarjeta 3"];

  return (
    <View style={styles.container}>

      {cards.map((label, index) => {
        const isSelected = selectedBox === index;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.box, isSelected && styles.selectedBox]}
            onPress={() => handlePress(index)}
          >
            <Text
              style={[styles.boxText, isSelected && styles.selectedBoxText]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#f5f5f5",
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: "black",
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  selectedBox: {
    backgroundColor: "purple",
  },
  boxText: {
    fontSize: 20,
    color: "black",
  },
  selectedBoxText: {
    color: "white",
    fontWeight: "bold",
  },
});
