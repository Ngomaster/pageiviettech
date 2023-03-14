import "./head.css";
import { useState, useEffect } from "react";

function Head() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};
	return (
		<div>
			<div className="h-screen bg-white dark:bg-black flex justify-end place-items-start">
				<button
					className="bg-green-200 p-4 rounded-3xl"
					onClick={handleSwitch}
				>
					Dark Mode
				</button>
			</div>
		</div>
	);
}

export default Head;
