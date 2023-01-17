import "./App.css";
import LandingPage from "./components/LandingPage";
import WhoIAmPage from "./components/WhoIAmPage";
import YellowSubmarine from "./components/YellowSubmarine";

export default function App() {
    return (
        <main>
            <LandingPage />
            <WhoIAmPage />
            <YellowSubmarine delay={20} />
        </main>
    );
}
