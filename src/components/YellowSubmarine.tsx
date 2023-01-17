import { motion } from "framer-motion";

interface YellowSubmarineProps {
    delay?: number;
}

function scrollToYellowSubmarine() {
    const element = document.getElementById("yellowsubmarine");
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

export default function YellowSubmarine(props: YellowSubmarineProps) {
    return (
        <motion.div
            className="fixed bottom-0 left-0 select-none"
            style={{ width: "200px", height: "200px" }}
            initial={{ x: -200, y: 0 }}
            animate={{ x: "45vw", y: 0 }}
            transition={{
                type: "spring",
                stiffness: 120,
                delay: props.delay ?? 5.4,
            }}
            onClick={() => scrollToYellowSubmarine()}
        >
            <img
                id="yellowsubmarine"
                className="origin-center"
                src="/yellowsubmarine.png"
                alt="Yellow submarine"
            />
        </motion.div>
    );
}
