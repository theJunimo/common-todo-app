import React from "react";
import { Text, View } from "react-native";
import { getDateString } from "../util/mics";

const DateTitle = () => {
  return (
    <View>
      <Text>{getDateString()}</Text>
    </View>
  );
};

export default DateTitle;
