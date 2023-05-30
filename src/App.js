import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./pages/landingpage/Landing";
import { Navbar } from "./pages/Navbar/Navbar";
import { Footer } from "./pages/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Landing />
			<Footer></Footer>
		</div>
	);
}

export default App;
