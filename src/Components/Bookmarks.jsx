import { useEffect, useState } from "react";
import { getBlogs } from "../utilities";
import BlogCard from "./BlogCard";

const Bookmarks = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    },[blogs])

    return (
        <div className="grid px-5 lg:px-24 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
            {
                blogs.map((card) => <BlogCard 
                key={card.id} card={card} deleteable={true}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;