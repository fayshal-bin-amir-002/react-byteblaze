import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <NavLink>Home</NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;