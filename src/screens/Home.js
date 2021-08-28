import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { useSelector } from "react-redux";

import Card from "../components/Card";
import Header from "../components/Header";

export default function HomeScreen() {
  const cardData = useSelector((state) => state.cardData);
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({ item }) => (
          <Card
            videoId={item?.id?.videoId}
            title={item?.snippet?.title}
            channel={item?.snippet?.channelTitle}
          />
        )}
        keyExtractor={(item) => item?.id?.videoId}
      />
    </View>
  );
}
