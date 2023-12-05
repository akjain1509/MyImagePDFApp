import React, { useState, useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const ImageCaptureScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Camera permission is required to capture images!");
      }
    })();
  }, []);

  const handleCaptureImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const { assets } = result;

      if (assets && assets.length > 0) {
        const selectedAsset = assets[0];
        const { uri } = selectedAsset;

        setImage(uri);
        saveImage(uri);
      }
    }
  };

  const saveImage = async (uri) => {
    const fileName = uri.split("/").pop();
    const newUri = FileSystem.documentDirectory + fileName;

    await FileSystem.copyAsync({
      from: uri,
      to: newUri,
    });
  };

  return (
    <View>
      <Text>Image Capture Screen</Text>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Capture Image" onPress={handleCaptureImage} />
      <Button
        title="Go to PDF Screen"
        onPress={() => navigation.navigate("PDFCreation", { imageUri: image })}
      />
    </View>
  );
};

export default ImageCaptureScreen;
