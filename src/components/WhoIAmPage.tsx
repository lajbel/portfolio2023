import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WhoIAmPage() {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-gray-900 bg-cover bg-center"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/background2.jpg')",
            }}
            id="aboutme"
        >
            <p>hi</p>
        </div>
    );
}
