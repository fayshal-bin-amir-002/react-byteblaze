import Hero from "../Components/Hero";
import WaveBG from "../assets/wave.svg"

const Home = () => {
    return (
        <div  className="min-h-[calc(100vh-116px)] flex flex-col justify-center items-center relative">
            <Hero></Hero>
            <div className="absolute bottom-0 w-full">
                <img src={WaveBG} className="w-full"/>
            </div>
        </div>
    );
};

export default Home;