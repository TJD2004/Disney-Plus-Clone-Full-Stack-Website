import React from 'react';

import endgame from '../images/Endgame.jpg'
import TLk from '../images/the-lion-king.jpg'
import F2 from '../images/Frozen2.jpg'

import BP from '../images/BP.webp'
import moana from '../images/moana.jpg'
import TS4 from '../images/TS4.webp'
import I2 from '../images/I2.jpg'
import coco from '../images/coco.avif'
import FD from '../images/Finding-Dory.jpg'

import { FaStar, FaPlay, FaClock } from 'react-icons/fa';


const Movies: React.FC = () => {
  const featuredMovies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      image: endgame,
      rating: 8.4,
      year: 2019,
      duration: "181 min",
      genre: "Action, Adventure, Drama"
    },
    {
      id: 2,
      title: "The Lion King",
      description: "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days.",
      image: TLk,
      rating: 6.8,
      year: 2019,
      duration: "118 min",
      genre: "Animation, Adventure, Drama"
    },
    {
      id: 3,
      title: "Frozen II",
      description: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
      image: F2,
      rating: 6.8,
      year: 2019,
      duration: "103 min",
      genre: "Animation, Adventure, Comedy"
    }
  ];

  const popularMovies = [
    {
      id: 4,
      title: "Black Panther",
      image: BP,
      rating: 7.3,
      year: 2018
    },
    {
      id: 5,
      title: "Moana",
      image: moana,
      rating: 7.6,
      year: 2016
    },
    {
      id: 6,
      title: "Toy Story 4",
      image: TS4,
      rating: 7.7,
      year: 2019
    },
    {
      id: 7,
      title: "Incredibles 2",
      image: I2,
      rating: 7.6,
      year: 2018
    },
    {
      id: 8,
      title: "Coco",
      image: coco,
      rating: 8.4,
      year: 2017
    },
    {
      id: 9,
      title: "Finding Dory",
      image: FD,
      rating: 7.3,
      year: 2016
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Movies
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
            Discover blockbuster hits, animated classics, and exclusive Disney movies
          </p>
        </div>
      </div>

      {/* Featured Movies */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Movies</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredMovies.map((movie) => (
            <div 
              key={movie.id}
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800">
                <img 
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-64 object-fit group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm font-medium">{movie.rating}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-300">{movie.year}</span>
                    <div className="flex items-center space-x-1">
                      <FaClock className="text-gray-400 text-sm" />
                      <span className="text-sm font-bold text-gray-300">{movie.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-2">{movie.title}</h3>
                  {/* <p className="text-sm text-gray-300 mb-3 line-clamp-3">{movie.description}</p> */}
                  <p className="text-xs font-bold text-gray-400 mb-4">{movie.genre}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-2">
                    <FaPlay className="text-xs" />
                    <span>Watch Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Movies Grid */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Popular Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {popularMovies.map((movie) => (
            <div 
              key={movie.id}
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img 
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs font-medium">{movie.rating}</span>
                    <span className="text-xs text-gray-300">{movie.year}</span>
                  </div>
                  <h3 className="text-sm font-bold">{movie.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Browse by Genre</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Action & Adventure', 'Animation', 'Comedy', 'Drama', 'Family', 'Fantasy', 'Horror', 'Sci-Fi'].map((genre, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-center cursor-pointer hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              <h3 className="text-lg font-bold">{genre}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;