import React from 'react';
import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700/50 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Disney+
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link 
              to="/" 
              className="relative text-white hover:text-blue-300 transition-all duration-300 font-medium group text-sm lg:text-base"
            >
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/movies" 
              className="relative text-white hover:text-blue-300 transition-all duration-300 font-medium group text-sm lg:text-base"
            >
              <span>Movies</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/series" 
              className="relative text-white hover:text-blue-300 transition-all duration-300 font-medium group text-sm lg:text-base"
            >
              <span>Series</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/originals" 
              className="relative text-white hover:text-blue-300 transition-all duration-300 font-medium group text-sm lg:text-base"
            >
              <span>Originals</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-blue-300 transition-colors duration-300 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {user ? (
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Link 
                  to="/profile"
                  className="flex items-center space-x-2 text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
                >
                  <FaUser className="text-sm" />
                  <span className="hidden lg:inline font-medium text-sm">{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 lg:space-x-2 bg-red-600 hover:bg-red-700 text-white px-2 lg:px-3 py-1.5 rounded-md transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  <FaSignOutAlt className="text-sm" />
                  <span className="hidden lg:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Link 
                  to="/login"
                  className="text-white hover:text-blue-300 transition-all duration-300 font-medium transform hover:scale-105 text-sm lg:text-base"
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 lg:px-4 py-2 rounded-md transition-all duration-300 font-medium transform hover:scale-105 text-sm lg:text-base"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-gray-800/50 rounded-md transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/movies" 
                className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-gray-800/50 rounded-md transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Movies
              </Link>
              <Link 
                to="/series" 
                className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-gray-800/50 rounded-md transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Series
              </Link>
              <Link 
                to="/originals" 
                className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-gray-800/50 rounded-md transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Originals
              </Link>
              
              {/* Mobile User Menu */}
              <div className="border-t border-gray-700/50 pt-2 mt-2">
                {user ? (
                  <>
                    <Link 
                      to="/profile"
                      className="flex items-center space-x-2 px-3 py-2 text-white hover:text-blue-300 hover:bg-gray-800/50 rounded-md transition-all duration-300 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FaUser className="text-sm" />
                      <span>{user.name}</span>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full px-3 py-2 text-white hover:text-red-300 hover:bg-gray-800/50 rounded-md transition-all duration-300 font-medium"
                    >
                      <FaSignOutAlt className="text-sm" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login"
                      className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-gray-800/50 rounded-md transition-all duration-300 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/register"
                      className="block px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300 font-medium text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;