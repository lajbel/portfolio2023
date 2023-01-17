import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LandingPage() {
    const GLOBAL_DELAY = 0.0;
    const NAME_DELAY = 0.0;
    const JOB_DELAY = 0.3;
    const ALL_INFO_UP_DELAY = 1.6;

    const TEXT_SENTENCES = [
        { write: "game developer" },
        { delete: "game developer" },
        { write: "web developer" },
        { delete: "I'm a web developer" },
        { write: "What I am?" },
    ];

    const [jobPosition, setJobPosition] = useState("I'm a");

    let jobPositionText = jobPosition + " ";

    function writeText(text: string) {
        let i = 0;
        let textLength = text.length;

        const writeInterval = setInterval(() => {
            if (i < textLength) {
                jobPositionText += text.charAt(i);
                setJobPosition(jobPositionText);
                i++;
            } else {
                clearInterval(writeInterval);
            }
        }, 50);
    }

    function deleteText(text: string) {
        let i = text.length;

        const deleteInterval = setInterval(() => {
            if (i > 0) {
                jobPositionText = jobPositionText.slice(0, -1);
                setJobPosition(jobPositionText);
                i--;
            } else {
                clearInterval(deleteInterval);
            }
        }, 50);
    }

    useEffect(() => {
        for (let i = 0; i < TEXT_SENTENCES.length; i++) {
            if (TEXT_SENTENCES[i].delete) {
                setTimeout(() => {
                    deleteText(TEXT_SENTENCES[i].delete!);
                }, 2700 + 2000 * i);
            } else if (TEXT_SENTENCES[i].write) {
                setTimeout(() => {
                    writeText(TEXT_SENTENCES[i].write!);
                }, 1700 + 2000 * i);
            }
        }
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-gray-900 bg-cover bg-center"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('background.webp')",
            }}
        >
            <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ y: "0" }}
                animate={{ y: -40 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    delay: GLOBAL_DELAY + ALL_INFO_UP_DELAY,
                }}
            >
                <motion.h1
                    className="text-4xl font-bold text-white"
                    initial={{ x: "-100vh" }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        delay: GLOBAL_DELAY + NAME_DELAY,
                    }}
                >
                    <span className="text-blue-500">@</span>lajbel
                </motion.h1>

                <motion.p
                    className="text-2xl text-gray-300 text-center text-write"
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        delay: GLOBAL_DELAY + JOB_DELAY,
                    }}
                    id="jobPosition"
                >
                    {jobPosition}
                </motion.p>
            </motion.div>

            <motion.div
                className="flex flex-row items-center justify-center"
                initial={{ y: "0", opacity: 0 }}
                animate={{ y: -30, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    delay: GLOBAL_DELAY + ALL_INFO_UP_DELAY,
                }}
            >
                <a
                    href="https://github.com/lajbel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                >
                    <FontAwesomeIcon
                        icon={["fab", "github"]}
                        size="2x"
                        color="white"
                    />
                </a>
                <a
                    href="https://twitter.com/lajbel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                >
                    <FontAwesomeIcon
                        icon={["fab", "twitter"]}
                        size="2x"
                        color="white"
                    />
                </a>
            </motion.div>
        </div>
    );
}

export default LandingPage;
