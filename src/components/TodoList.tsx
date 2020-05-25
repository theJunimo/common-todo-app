import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList, View, Text, Button } from "react-native";

const TodoListBlock = styled.View``;

const ItemContainer = styled.View`
  flex-direction: row;
`;

const ItemBlock = styled.Text`
  text-decoration: ${(props: { decoration: string }) => props.decoration};
`;

const Item = ({
  id,
  title,
  onDelete,
}: {
  id: number;
  title: string;
  onDelete: (id: number) => void;
}) => {
  const [done, setDone] = useState<boolean>(false);
  return (
    <ItemContainer>
      <ItemBlock
        decoration={done ? "line-through" : "none"}
        onPress={() => setDone(!done)}
      >
        {title}
      </ItemBlock>
      <Button title="Delete" onPress={() => onDelete(id)}></Button>
    </ItemContainer>
  );
};

const TodoList = ({
  list,
  onDelete,
}: {
  list: string[];
  onDelete: (id: number) => void;
}) => {
  return (
    <TodoListBlock>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <Item id={index} title={item} onDelete={onDelete} />
        )}
      />
    </TodoListBlock>
  );
};

export default TodoList;
