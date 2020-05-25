import React, { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { View } from "react-native";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const handleAdd = (text: string) => {
    setTodoList([...todoList, text]);
  };
  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((el, idx) => idx !== id));
  };
  return (
    <View>
      <TodoInput onPressButton={handleAdd} />
      <TodoList list={todoList} onDelete={handleDelete} />
    </View>
  );
};

export default TodoContainer;
