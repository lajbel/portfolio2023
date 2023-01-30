import "./App.css";
import LandingPage from "./components/LandingPage";
import WhoIAmPage from "./components/WhoIAmPage";
import YellowSubmarine from "./components/YellowSubmarine";
import Player from "./components/Player";

export default function App() {
    return (
        <main>
            <LandingPage />
            <WhoIAmPage />
            <YellowSubmarine delay={11} />
        </main>
    );
}
