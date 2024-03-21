import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BlogCard = ({card}) => {
    const { id, title, description, published_at, cover_image } = card;
    const date = new Date(published_at).toLocaleDateString();
    return (
        <Link rel="noopener noreferrer" to={`/blog/${id}`} className="max-w-sm mx-auto border-2 border-opacity-30 border-primary hover:border-secondary rounded-md group transition duration-300 hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-900">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs dark:text-gray-400">{date}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

BlogCard.propTypes = {
    card: PropTypes.object.isRequired
};

export default BlogCard;