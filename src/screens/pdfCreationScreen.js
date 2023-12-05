import React from "react";
import { View, Text, Button } from "react-native";

const PDFCreationScreen = ({ navigation }) => {
  return (
    <View>
      <Text>PDF Creation Screen</Text>
      {/* Implement PDF creation functionality here */}
      <Button
        title="Go to Image Capture Screen"
        onPress={() => navigation.navigate("ImageCapture")}
      />
    </View>
  );
};

export default PDFCreationScreen;

// import React, { useState, useEffect } from "react";
// import { View, Text, Button, Image } from "react-native";
// import * as FileSystem from "expo-file-system";
// import PDFDocument from "react-native-pdf";

// const PDFCreationScreen = ({ route }) => {
//   const { imageUri } = route.params;
//   const [pdfUri, setPdfUri] = useState(null);

//   const convertToPDF = async () => {
//     if (imageUri) {
//       try {
//         const pdfUri = FileSystem.documentDirectory + "converted_image.pdf";

//         const pdfData = [
//           {
//             uri: imageUri,
//             width: 300,
//             height: 400,
//           },
//         ];

//         // Create the PDF document
//         await PDFDocument.create(pdfData, pdfUri);

//         // Set the PDF URI to render in the component
//         setPdfUri(pdfUri);
//       } catch (error) {
//         console.error("Error converting to PDF:", error);
//       }
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       {imageUri && (
//         <Image
//           source={{ uri: imageUri }}
//           style={{ width: 200, height: 200, marginVertical: 10 }}
//         />
//       )}
//       {pdfUri && (
//         <PDFDocument
//           source={{ uri: pdfUri, cache: true }}
//           style={{ flex: 1, width: "100%", height: 300 }}
//         />
//       )}
//       <Button title="Convert to PDF" onPress={convertToPDF} />
//     </View>
//   );
// };

// export default PDFCreationScreen;
