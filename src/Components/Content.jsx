import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const Content = () => {
    const blog = useLoaderData();
    const { title, body_html, cover_image, tags } = blog;

    return (
        <div rel="noopener noreferrer" className="max-w-full mx-auto border-2 p-2 border-opacity-30 border-primary  rounded-md group transition duration-300 hover:no-underline focus:no-underline dark:bg-gray-900">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image} />
            <div className="flex flex-wrap py-4 gap-2 border-b border-dashed dark:dark:border-gray-400">
                {
                    tags.map((tag, idx) => <a rel="noopener noreferrer" key={idx} href="#" className="px-3 py-1 rounded-sm hover:underline dark:dark:bg-violet-400 dark:dark:text-gray-900">#{tag}</a>)
                }
            </div>
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;