import { useYoutube } from "react-youtube-music-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Player() {
    const { playerDetails, actions } = useYoutube({
        id: "PLVTAJGHfbSuEbDxN45NrqSXWzFU-VYmm0",
        type: "playlist",
        options: {
            autoplay: true,
        },
    });

    return (
        <div className="flex flex-row">
            <button onClick={() => actions.previousVideo()}>
                <p>o</p>
                <FontAwesomeIcon
                    icon={["fas", "backward"]}
                    size="2x"
                    color="white"
                />
            </button>
        </div>
    );
}
