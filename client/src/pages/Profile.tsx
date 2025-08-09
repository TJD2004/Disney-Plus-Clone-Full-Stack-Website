import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FaUser, FaEnvelope, FaCrown, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user?.name || '');

  const handleSave = async () => {
    // In a real app, you would call an API to update the user profile
    console.log('Saving profile changes:', editedName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(user?.name || '');
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white border-opacity-20">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">My Profile</h1>
            <div className="flex items-center space-x-2">
              <FaCrown className="text-yellow-400" />
              <span className="text-yellow-400 font-medium capitalize">
                {user.subscription} Member
              </span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <FaUser className="text-4xl text-white" />
                )}
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                Change Avatar
              </button>
            </div>

            {/* Profile Details */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  {isEditing ? (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={handleSave}
                        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors duration-200"
                      >
                        <FaSave />
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors duration-200"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 bg-opacity-30 text-white">
                        {user.name}
                      </div>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200"
                      >
                        <FaEdit />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-gray-400" />
                  <div className="flex-1 px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 bg-opacity-30 text-white">
                    {user.email}
                  </div>
                </div>
              </div>

              {/* Subscription */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Subscription Plan
                </label>
                <div className="flex items-center justify-between px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 bg-opacity-30">
                  <div className="flex items-center space-x-3">
                    <FaCrown className="text-yellow-400" />
                    <span className="text-white capitalize">{user.subscription} Plan</span>
                  </div>
                  {user.subscription === 'free' && (
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm transition-colors duration-200">
                      Upgrade
                    </button>
                  )}
                </div>
              </div>

              {/* Account Actions */}
              <div className="pt-6 space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                  Change Password
                </button>
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                  Download My Data
                </button>
                <button 
                  onClick={logout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Account Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-600 bg-opacity-20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-400">47</div>
              <div className="text-gray-300 text-sm">Hours Watched</div>
            </div>
            <div className="bg-purple-600 bg-opacity-20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-purple-400">12</div>
              <div className="text-gray-300 text-sm">Favorites</div>
            </div>
            <div className="bg-green-600 bg-opacity-20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-green-400">8</div>
              <div className="text-gray-300 text-sm">Watchlist Items</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;