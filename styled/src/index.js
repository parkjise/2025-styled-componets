import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyles from "./global-styles";
// import App from "./App";
// import Card from "./Card";
import Forms from "./Forms";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyles />
		{/* <Card /> */}
		<Forms />
	</React.StrictMode>
);
