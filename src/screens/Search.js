import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";

import MiniCard from "../components/MiniCard";

const SearchScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const { colors } = useTheme();
  const myColor = colors.iconColor;
  // const [miniCardData, setMiniCardData] = useState([]);
  const dispatch = useDispatch();
  const miniCardData = useSelector((state) => state.cardData);
  const [loading, setLoading] = useState(false);
  // define your youtube API key here
  const API_KEY = ''
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=${API_KEY}`;

  const fetchData = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // setMiniCardData(data.items);
        dispatch({ type: "add", payload: data.items });
        setLoading(false);
      });
  };
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 10,
          backgroundColor: colors.headerColor,
        }}
      >
        <Ionicons
          name="md-arrow-back"
          size={32}
          onPress={() => navigation.goBack()}
          style={{ color: myColor }}
        />
        <TextInput
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          name="md-send"
          size={32}
          onPress={() => fetchData()}
          style={{ color: myColor }}
        />
      </View>
      {loading && (
        <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" />
      )}
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item?.id.videoId}
              title={item?.snippet.title}
              channel={item?.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item?.id?.videoId}
      />
    </View>
  );
};

export default SearchScreen;
