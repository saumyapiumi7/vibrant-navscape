import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Bell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Technology", path: "/technology" },
    { name: "About", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <Mail className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">
                Smart Letter Box
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-white border-b-2 border-white"
                    : "text-blue-100 hover:text-white hover:border-b-2 hover:border-blue-200"
                } transition-all duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 animate-fade-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-white bg-blue-800"
                    : "text-blue-100 hover:text-white hover:bg-blue-800"
                } block px-3 py-2 rounded-md text-base transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;