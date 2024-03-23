import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const EmptyState = ({ message, address, label }) => {
    return (
        <div className="min-h-[calc(100vh-116px)] gap-5 flex flex-col justify-center items-center pb-16">
            <p className="text-3xl font-semibold">{message}</p>
            <Link to={address} className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary group-hover:bg-secondary group-hover:border-secondary"></span>
                <span className="relative text-white group-hover:text-white">{label}</span>
            </Link>
        </div>
    );
};


EmptyState.propTypes = {
    message: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default EmptyState;