import React from "react";
import { View, Text } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.myDarkMode);
  const navigation = useNavigation();
  const { colors } = useTheme();
  const myColor = colors.iconColor;
  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        height: 45,
        backgroundColor: colors.headerColor,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 4,
      }}
    >
      <View style={{ flexDirection: "row", margin: 5 }}>
        <Entypo
          style={{ marginLeft: 20 }}
          name="youtube"
          size={32}
          color="red"
        />
        <Text
          style={{
            fontSize: 22,
            marginLeft: 5,
            fontWeight: "bold",
            color: myColor,
          }}
        >
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 150,
          margin: 5,
        }}
      >
        <Ionicons name="md-videocam" size={32} color={myColor} />
        <Ionicons
          name="md-search"
          size={32}
          color={myColor}
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons
          name="account-circle"
          size={32}
          color={myColor}
          onPress={() =>
            dispatch({ type: "changeTheme", payload: !currentTheme })
          }
        />
      </View>
    </View>
  );
}
