import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";

const affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50  font-bold text-3xl ">
            Change your beliefs with affirmations
          </Text>
          <View></View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default affirmations;
