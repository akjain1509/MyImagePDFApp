import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ImageCaptureScreen from "../screens/imageCaptureScreen";
import PDFCreationScreen from "../screens/pdfCreationScreen";

const RootNavigation = createStackNavigator(
  {
    ImageCapture: ImageCaptureScreen,
    PDFCreation: PDFCreationScreen,
  },
  {
    initialRouteName: "ImageCapture",
  }
);

export default createAppContainer(RootNavigation);
