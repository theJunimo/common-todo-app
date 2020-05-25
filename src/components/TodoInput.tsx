import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInput, Button, ViewPagerAndroid } from "react-native";

const TodoInputBlock = styled.View`
  flex-direction: row;
`;

type TodoInputProps = {
  onPressButton: (text: string) => void;
};
const TodoInput = ({ onPressButton }: TodoInputProps) => {
  const [todoText, setTodoText] = useState<string>("");
  return (
    <TodoInputBlock>
      <TextInput
        onChangeText={(text) => setTodoText(text)}
        placeholder="WHAT TO DO TODAY"
      />
      <Button title="ADD" onPress={() => onPressButton(todoText)} />
    </TodoInputBlock>
  );
};

export default TodoInput;
