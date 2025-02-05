import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <nav className="flex justify-between items-center py-4 px-8 max-w-screen-xl mx-auto">
        {/* App Name */}
        <NavLink to="/" className="text-gray-800 text-3xl font-semibold tracking-wide">
          EmpTrack
        </NavLink>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/create"
            className="text-gray-800 text-md font-medium py-2 px-6 rounded-md border-2 border-gray-300 hover:bg-gray-100 transition-colors duration-300"
          >
            Create Employee
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
