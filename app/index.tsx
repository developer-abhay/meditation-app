import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <View>
            <Text className="text-center font-bold text-4xl text-white">
              App
            </Text>
            <Text className="text-center text-white text-regular text-2xl mt-3">
              Simplifying meditation for you
            </Text>
          </View>
          <View>
            <CustomButton
              title="Get Started"
              onPress={() => {
                router.push("./nature-meditate");
              }}
            />
          </View>
          <StatusBar style="light" />
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
