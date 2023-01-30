// The yellow submarine it's a button to load and show the next sections of my portfolio.

import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface YellowSubmarineProps {
    delay?: number;
}

function appearInDomWhoIAmPage() {
    const whoIAmPage = document.getElementById("aboutme");
    if (whoIAmPage) {
        whoIAmPage.style.display = "flex";
    }
}

export default function YellowSubmarine(props: YellowSubmarineProps) {
    return (
        <motion.div
            className="fixed bottom-0 top-[90%] left-[50%] mt-[-100px] ml-[-100px] select-none text-center"
            style={{ width: "200px", height: "200px" }}
            initial={{ x: "-100vw", y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 120,
                delay: props.delay ?? 5.4,
            }}
        >
            <Link
                to="aboutme"
                spy={true}
                smooth={true}
                duration={2000}
                onClick={() => appearInDomWhoIAmPage()}
            >
                <img
                    id="yellowsubmarine"
                    className="transform hover:scale-110"
                    src="/yellowsubmarine.png"
                    alt="Yellow submarine"
                />
            </Link>
        </motion.div>
    );
}
