import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between space-x-20 my-6">
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <Link to="/" className="tracking-widest hover:text-softRed">
            Home
          </Link>
          <Link to="/projects" className="tracking-widest hover:text-softRed">
            Projects
          </Link>
          <Link to="/contact" className="tracking-widest hover:text-softRed">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
