import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Blog = () => {
    const blog = useLoaderData();

    const [tab, setTab] = useState(0);

    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:dark:bg-gray-800 dark:dark:text-gray-50">
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold md:tracking-tight md:text-5xl">{blog.title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:dark:text-gray-400">
                        <div className="flex items-center md:space-x-2">
                            <p className="text-sm">{blog.public_reactions_count} views • {new Date(blog.published_at).toLocaleDateString()}</p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{blog.reading_time_minutes} min read • {blog.comments_count} comments</p>
                    </div>
                </div>
                {/* tab options */}
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:dark:bg-gray-800 dark:dark:text-gray-100">
                    <Link onClick={()=>setTab(0)} rel="noopener noreferrer" to="" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab===0?'border border-b-0':'border-b'} rounded-t-lg dark:dark:border-gray-400 dark:dark:text-gray-50`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Content</span>
                    </Link>
                    <Link onClick={()=>setTab(1)} rel="noopener noreferrer" to={`author`} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab===1?'border border-b-0':'border-b'} rounded-t-lg dark:dark:border-gray-400 dark:dark:text-gray-50`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Author</span>
                    </Link>
                </div>
                <Outlet></Outlet>
            </article>
            <div>
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Related posts</h4>
                    <ul className="ml-4 space-y-1 list-disc">
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;