import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 shadow-md">
      <nav className="flex justify-between items-center py-4 px-6 max-w-screen-xl mx-auto">
        {/* App Logo or Name */}
        <NavLink to="/" className="text-white text-2xl font-semibold tracking-wide">
          MyApp
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <NavLink
            to="/create"
            className="text-white text-md font-medium py-2 px-4 rounded-md hover:bg-white hover:text-gray-800 transition-colors duration-300"
          >
            Create Employee
          </NavLink>
          {/* You can add more NavLink buttons here if needed */}
        </div>
      </nav>
    </div>
  );
}
