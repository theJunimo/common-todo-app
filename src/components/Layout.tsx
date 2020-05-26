import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import Header from "./Header";
import TodoContainer from "../containers/TodoContainer";
import DateTitle from "./DateTitle";

const LayoutBlock = styled.View``;

const Layout = () => {
  return (
    <View>
      <Header></Header>
      <DateTitle />
      <View>
        <TodoContainer />
      </View>
    </View>
  );
};

export default Layout;
