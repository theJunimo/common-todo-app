import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import Header from "./Header";
import TodoContainer from "../containers/TodoContainer";

const LayoutBlock = styled.View``;

const Layout = () => {
  return (
    <View>
      <Header></Header>
      <View>
        <TodoContainer />
      </View>
    </View>
  );
};

export default Layout;
