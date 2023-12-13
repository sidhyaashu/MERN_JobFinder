import { createChatBotMessage } from "react-chatbot-kit";
import GotitButton from "../components/GotitButton.jsx";
import UserInput from "../components/UserInput.jsx";
import AgeSelector from "../components/AgeSelector.jsx";

const botMessage = "Student Info System";
const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to ${botMessage}`, {
      widget: "gotItButton",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "gotItButton",
      widgetFunc: (props) => <GotitButton {...props} />,
    },
    {
      widgetName: "userNameInput",
      widgetFunc: (props) => <UserInput {...props} />,
    },
    {
      widgetName: "userAgeSelector",
      widgetFunc: (props) => <AgeSelector {...props} />,
    },
  ],
};

export default config;
