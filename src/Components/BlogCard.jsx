import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { MdDeleteOutline } from "react-icons/md";
import { deleteBlog } from "../utilities";

const BlogCard = ({ card, deleteable }) => {

    const { id, title, description, published_at, cover_image } = card;
    const date = new Date(published_at).toLocaleDateString();

    const handleDelete = (id) => {
        deleteBlog(id);
    }

    return (
        <div className="relative">
            <Link rel="noopener noreferrer" to={`/blog/${id}`} className=" border-opacity-30 border-primary hover:border-secondary rounded-md group transition duration-300 hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-900 relative">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-400">{date}</span>
                    <p>{description}</p>
                </div>
            </Link>
                {
                    deleteable && <div className="absolute -right-7 cursor-pointer -top-7 z-10 p-2">
                        <MdDeleteOutline onClick={()=>handleDelete(id)} className="rounded-full p-2 bg-primary size-10 text-secondary" />
                    </div>
                }
        </div>
    );
};

BlogCard.propTypes = {
    card: PropTypes.object.isRequired
};

export default BlogCard;