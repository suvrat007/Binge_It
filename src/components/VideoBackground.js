
import { useSelector} from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) =>{

    const trailerVideo = useSelector(store => store?.movies?.trailerVideo);
     // const [trailerId, setTrailerId] = useState(null);             // one way

    useMovieTrailer(movieId);

    return(
        // ALWAYS use camel case in JSX
        <div className="w-screen">
            <iframe className="w-screen aspect-video"
                    src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&controls=0&playlist="+trailerVideo?.key}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    referrerPolicy="strict-origin-when-cross-origin" >
            </iframe>
        </div>
    )
};
export default VideoBackground;