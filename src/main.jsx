import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.jsx";

createRoot(document.getElementById("root")).render(
  // joining react with redux by wrapping the app componenet with Provider tag
  // simple ani store pass gardine 

  <Provider store={store}>
    <App />
  </Provider>
  
);
