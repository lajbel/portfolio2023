import { delay, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialMediaProps {
    delay?: number;
}

export default function SocialMedia(props: SocialMediaProps) {
    return (
        <motion.div
            className="flex flex-row items-center justify-center"
            initial={{ y: "0", opacity: 0 }}
            animate={{ y: -30, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 120,
                delay: props.delay,
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
                    size="3x"
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
                    size="3x"
                    color="white"
                />
            </a>
        </motion.div>
    );
}
