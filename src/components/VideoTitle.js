const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="my-4 md:m-0">
                <button className="text-black bg-white py-1  px-3 md:p-4 md:px-16 text-xl rounded-lg hover:bg-opacity-50">Play</button>
                <button className=" hidden md:inline-block mx-2 text-white bg-gray-500 p-4 px-16 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-50">More Info</button>
            </div>
        </div>
    )
};
export default VideoTitle;