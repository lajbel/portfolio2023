import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LandingPage = () => {
    const GLOBAL_DELAY = 0.0;
    const NAME_DELAY = 0.0;
    const JOB_DELAY = 0.3;
    const ALL_INFO_UP_DELAY = 1.6;
    const [jobPosition, setJobPosition] = useState("I'm a");

    function writeText(text: string) {
        let i = 0;
        let textLength = text.length;
        let tJobPosition = jobPosition + " ";

        const writeInterval = setInterval(() => {
            console.log("p")
            if (i < textLength) {
                tJobPosition += text.charAt(i);
                setJobPosition(tJobPosition);
                i++;
            }
            else {
                clearInterval(writeInterval);
            }
        }, 50);
    }

    function deleteText(text: string) {
        let i = 0;
        let textLength = text.length;
        let tJobPosition = jobPosition + " ";

        setInterval(() => {
            if (i < textLength) {
                tJobPosition += tJobPosition.substring(0, tJobPosition.length - 1);;
                setJobPosition(tJobPosition);
                i++;
            }
        }, 50)
    }

    useEffect(() => {
        setTimeout(() => {
            writeText("web developer");
        }, 1700);
    }, []);


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('background.webp')" }}>
            <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ y: '0' }}
                animate={{ y: -40 }}
                transition={{
                    type: 'spring',
                    stiffness: 120,
                    delay: GLOBAL_DELAY + ALL_INFO_UP_DELAY,
                }}
            >
                <motion.h1
                    className="text-4xl font-bold text-white"
                    initial={{ x: '-100vh' }}
                    animate={{ x: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 120,
                        delay: GLOBAL_DELAY + NAME_DELAY,
                    }}
                >
                    <span className="text-blue-500">@</span>lajbel
                </motion.h1>

                <motion.p
                    className="text-2xl text-gray-300 text-center text-write"
                    initial={{ y: '100vh' }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring',
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
                initial={{ y: '0', opacity: 0, }}
                animate={{ y: -30, opacity: 1, }}
                transition={{
                    type: 'spring',
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
                        icon={['fab', 'github']}
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
                        icon={['fab', 'twitter']}
                        size="2x"
                        color="white"
                    />
                </a>
            </motion.div>

        </div>
    );
};

export default LandingPage;
