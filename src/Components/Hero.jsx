import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero -mt-32">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                <h1 className="text-5xl font-bold">Welcome to <span className="bg-300% text-5xl font-bold bg-gradient-to-r from-pink-500 via-blue-600 to-purple-500 text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut.</p>
                <div className="space-x-5">
                    <Link to="/blogs" className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary group-hover:bg-secondary group-hover:border-secondary"></span>
                    <span className="relative text-white group-hover:text-white">Read Blogs</span>
                    </Link>
                    <Link to="/bookmarks" className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary group-hover:bg-secondary group-hover:border-secondary"></span>
                    <span className="relative text-white group-hover:text-white">BookMarks</span>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;