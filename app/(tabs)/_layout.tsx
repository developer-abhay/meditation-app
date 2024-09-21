import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.primary,
        }}
      >
        <Tabs.Screen
          name="nature-meditate"
          options={{
            tabBarLabel: "Meditate",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="flower-tulip"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="affirmations"
          options={{
            tabBarLabel: "Affirmations",
            tabBarIcon: ({ color }) => (
              <Entypo name="open-book" size={24} color="black" />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
