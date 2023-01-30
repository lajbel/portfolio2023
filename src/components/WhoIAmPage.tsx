import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhoIAmPage() {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    const nameVariants = {
        visible: {
            opacity: 1,
            x: 150,
            y: 30,
            transition: { duration: 2 },
        },
        hidden: {
            opacity: 0,
            x: 30,
            y: 30,
        },
    };

    const pfpVariants = {
        visible: {
            opacity: 1,
            x: 180,
            y: 30,
            scale: 1.1,
            transition: { duration: 2 },
        },
        hidden: {
            opacity: 0,
            x: 30,
            y: 30,
            scale: 1,
        },
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div
            className="flex p-4 flex-col h-screen bg-gray-900 bg-cover bg-center"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/background2.jpg')",
            }}
            id="aboutme"
        >
            <div className="inline-flex flex-col items-center lg:w-1/2">
                <motion.h1
                    ref={ref}
                    className="text-6xl font-bold text-white"
                    // animate={controls}
                    // initial="hidden"
                    // variants={nameVariants}
                >
                    <span className="text-blue-300">Dani</span>el{" "}
                    <span className="text-blue-300">Báez</span>
                </motion.h1>

                <motion.img
                    ref={ref}
                    className="w-64 h-64 rounded-full mt-6"
                    src="/pfp.jpg"
                    alt="pfp"
                    // animate={controls}
                    // initial="hidden"
                    // variants={pfpVariants}
                />

                <motion.p
                    ref={ref}
                    className="text-2xl text-gray-300 text-left text-write max-w-2xl mt-6"
                    // animate={controls}
                    // initial="hidden"
                    // variants={nameVariants}
                >
                    I'm an Argentinian sixteen years old developer. I enjoy of
                    video games and music. I'm focused in web sites, video games
                    and bots.
                </motion.p>
            </div>
        </div>
    );
}
