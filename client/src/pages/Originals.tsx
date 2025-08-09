import React from 'react';
import { FaStar, FaPlay, FaCrown } from 'react-icons/fa';

import TM from '../images/Mandalorian.jpg'
import soul from '../images/Soul.jpg'
import hamilton from '../images/hamilton__movie.jpg'

import luca from '../images/luca.webp'
import TR from '../images/turning-red.jpg'
import encanto from '../images/encanto.jpg'
import raya from '../images/raya-and-the-last-dragon.jpg'
import cruella from '../images/cruella.webp'
import boba from '../images/the-book-of-boba-fett.webp'

import WV from '../images/WandaVision.webp'
import TFAWS from '../images/TheFalcon.jpg'
import loki from '../images/Loki.jpg'
import hawkeye from '../images/hawkeye.webp'
import MK from '../images/moon-knight.webp'
import MM from '../images/ms-marvel.jpg'

const Originals: React.FC = () => {
  const featuredOriginals = [
    {
      id: 1,
      title: "The Mandalorian",
      description: "After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order.",
      image: TM,
      rating: 8.7,
      year: 2019,
      type: "Series",
      seasons: 3,
      genre: "Action, Adventure, Sci-Fi"
    },
    {
      id: 2,
      title: "Soul",
      description: "A musician who has lost his passion for music is transported out of his body and must find his way back with the help of an infant soul learning about herself.",
      image: soul,
      rating: 8.0,
      year: 2020,
      type: "Movie",
      duration: "100 min",
      genre: "Animation, Comedy, Drama"
    },
    {
      id: 3,
      title: "Hamilton",
      description: "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater.",
      image: hamilton,
      rating: 8.3,
      year: 2020,
      type: "Musical",
      duration: "160 min",
      genre: "Biography, Drama, History"
    }
  ];

  const disneyOriginals = [
    {
      id: 4,
      title: "Luca",
      image: luca,
      rating: 7.4,
      year: 2021,
      type: "Movie"
    },
    {
      id: 5,
      title: "Turning Red",
      image: TR,
      rating: 7.0,
      year: 2022,
      type: "Movie"
    },
    {
      id: 6,
      title: "Encanto",
      image: encanto,
      rating: 7.2,
      year: 2021,
      type: "Movie"
    },
    {
      id: 7,
      title: "Raya and the Last Dragon",
      image: raya,
      rating: 7.3,
      year: 2021,
      type: "Movie"
    },
    {
      id: 8,
      title: "Cruella",
      image: cruella,
      rating: 7.3,
      year: 2021,
      type: "Movie"
    },
    {
      id: 9,
      title: "The Book of Boba Fett",
      image: boba,
      rating: 7.2,
      year: 2021,
      type: "Series"
    }
  ];

  const marvelOriginals = [
    {
      id: 10,
      title: "WandaVision",
      image: WV,
      rating: 7.9,
      year: 2021,
      type: "Series"
    },
    {
      id: 11,
      title: "The Falcon and the Winter Soldier",
      image: TFAWS,
      rating: 7.2,
      year: 2021,
      type: "Series"
    },
    {
      id: 12,
      title: "Loki",
      image: loki,
      rating: 8.2,
      year: 2021,
      type: "Series"
    },
    {
      id: 13,
      title: "Hawkeye",
      image: hawkeye,
      rating: 7.5,
      year: 2021,
      type: "Series"
    },
    {
      id: 14,
      title: "Moon Knight",
      image: MK,
      rating: 7.3,
      year: 2022,
      type: "Series"
    },
    {
      id: 15,
      title: "Ms. Marvel",
      image: MM,
      rating: 6.2,
      year: 2022,
      type: "Series"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <div className="flex items-center space-x-3 mb-4">
            <FaCrown className="text-4xl text-yellow-400" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Originals
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
            Exclusive Disney+ Originals you can't find anywhere else
          </p>
        </div>
      </div>

      {/* Featured Originals */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center space-x-2">
          <FaCrown className="text-yellow-400" />
          <span>Featured Originals</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredOriginals.map((original) => (
            <div 
              key={original.id}
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800">
                <img 
                  src={original.image}
                  alt={original.title}
                  className="w-full h-64 object-fit group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold flex items-center space-x-1">
                  <FaCrown className="text-xs" />
                  <span>ORIGINAL</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm font-medium">{original.rating}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-300">{original.year}</span>
                    <span className="text-sm font-bold text-yellow-400 font-medium">{original.type}</span>
                  </div>
                  <h3 className="text-xl font-black mb-2">{original.title}</h3>
                  {/* <p className="text-sm text-gray-300 mb-3 line-clamp-3">{original.description}</p> */}
                  <p className="text-xs font-bold text-gray-400 mb-4">{original.genre}</p>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-black px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-2">
                    <FaPlay className="text-xs" />
                    <span>Watch Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disney+ Originals */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Disney+ Originals</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {disneyOriginals.map((original) => (
            <div 
              key={original.id}
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img 
                  src={original.image}
                  alt={original.title}
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="absolute top-2 left-2 bg-yellow-500 text-black px-1 py-0.5 rounded text-xs font-bold">
                  <FaCrown className="text-xs" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs font-medium">{original.rating}</span>
                    <span className="text-xs text-gray-300">{original.year}</span>
                  </div>
                  <h3 className="text-sm font-bold">{original.title}</h3>
                  <p className="text-xs text-yellow-400">{original.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marvel Originals */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Marvel Originals</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {marvelOriginals.map((original) => (
            <div 
              key={original.id}
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img 
                  src={original.image}
                  alt={original.title}
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="absolute top-2 left-2 bg-red-600 text-white px-1 py-0.5 rounded text-xs font-bold flex items-center space-x-1">
                  <FaCrown className="text-xs" />
                  <span>MARVEL</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs font-medium">{original.rating}</span>
                    <span className="text-xs text-gray-300">{original.year}</span>
                  </div>
                  <h3 className="text-sm font-bold">{original.title}</h3>
                  <p className="text-xs text-red-400">{original.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Ahsoka', 'Secret Invasion', 'Indiana Jones 5', 'The Little Mermaid'].map((title, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg p-6 text-center cursor-pointer hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
            >
              <FaCrown className="text-2xl mb-2 mx-auto" />
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm opacity-80">Coming 2024</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Originals;