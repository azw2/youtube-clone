import React from "react";
import { View, Text, Dimensions } from "react-native";
import Constant from "expo-constants";
import { Video } from "expo-av";

const VideoPlayer = ({ route }) => {
  const { videoId, title } = route.params;
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View style={{ width: "100%", height: 200 }}>
        <Video
          source={{
            uri: `https://www.youtube.com/embed/${videoId}`,
          }}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          isLooping={false}
          useNativeControls
          style={{ width: "100%", height: 320 }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          width: Dimensions.get("screen").width - 50,
          margin: 9,
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <View style={{ borderBottomWidth: 1 }} />
    </View>
  );
};

export default VideoPlayer;
