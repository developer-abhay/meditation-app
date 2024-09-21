import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) => {
  return (
    <LinearGradient className="flex-1" colors={colors}>
      <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
