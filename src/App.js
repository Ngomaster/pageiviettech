import "./App.css";
import Head from "./components/Header/head";
import Sidebar from "./components/sidebar/sidebar";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Sidebar />} />
				<Route path="/b" element={<Head />} />
			</Routes>
		</>
	);
}

export default App;
