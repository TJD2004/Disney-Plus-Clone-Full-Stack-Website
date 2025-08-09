import React from 'react';
import { FaStar, FaPlay, FaTv } from 'react-icons/fa';

import TM from '../images/Mandalorian.jpg'
import WV from '../images/WandaVision.webp'
import loki from '../images/Loki.jpg'

import TFAWS from '../images/TheFalcon.jpg'
import hawkeye from '../images/hawkeye.webp'
import MK from '../images/moon-knight.webp'
import MM from '../images/ms-marvel.jpg'
import SH from '../images/she-hulk.png'
import WIF from '../images/wha-if.png'

import DT from '../images/duck-tales.webp'
import TS from '../images/the-simpsons.jpg'
import GF from '../images/gravity-falls.webp'

const Series: React.FC = () => {
  const featuredSeries = [
    {
      id: 1,
      title: "The Mandalorian",
      description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic. Set after the fall of the Empire and before the emergence of the First Order.",
      image: TM,
      rating: 8.7,
      year: 2019,
      seasons: 3,
      episodes: 24,
      genre: "Action, Adventure, Sci-Fi"
    },
    {
      id: 2,
      title: "WandaVision",
      description: "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.",
      image: WV,
      rating: 7.9,
      year: 2021,
      seasons: 1,
      episodes: 9,
      genre: "Action, Comedy, Drama"
    },
    {
      id: 3,
      title: "Loki",
      description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame. Tom Hiddleston returns as the title character.",
      image: loki,
      rating: 8.2,
      year: 2021,
      seasons: 2,
      episodes: 12,
      genre: "Action, Adventure, Fantasy"
    }
  ];

  const popularSeries = [
    {
      id: 4,
      title: "The Falcon and the Winter Soldier",
      image: TFAWS,
      rating: 7.2,
      year: 2021,
      seasons: 1
    },
    {
      id: 5,
      title: "Moon Knight",
      image: MK,
      rating: 7.3,
      year: 2022,
      seasons: 1
    },
    {
      id: 6,
      title: "Ms. Marvel",
      image: MM,
      rating: 6.2,
      year: 2022,
      seasons: 1
    },
    {
      id: 7,
      title: "Hawkeye",
      image: hawkeye,
      rating: 7.5,
      year: 2021,
      seasons: 1
    },
    {
      id: 8,
      title: "She-Hulk",
      image: SH,
      rating: 5.2,
      year: 2022,
      seasons: 1
    },
    {
      id: 9,
      title: "What If...?",
      image: WIF,
      rating: 7.4,
      year: 2021,
      seasons: 2
    }
  ];

  const disneyClassics = [
    {
      id: 10,
      title: "DuckTales",
      image: DT,
      rating: 8.2,
      year: 2017,
      seasons: 3
    },
    {
      id: 11,
      title: "The Simpsons",
      image: TS,
      rating: 8.7,
      year: 1989,
      seasons: 34
    },
    {
      id: 12,
      title: "Gravity Falls",
      image: GF,
      rating: 8.9,
      year: 2012,
      seasons: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Series
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
            Binge-watch your favorite shows and discover new series to love
          </p>
        </div>
      </div>

      {/* Featured Series */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Series</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredSeries.map((series) => (
            <div 
              key={series.id}
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800">
                <img 
                  src={series.image}
                  alt={series.title}
                  className="w-full h-64 object-fit group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm font-medium">{series.rating}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-300">{series.year}</span>
                    <div className="flex items-center space-x-1">
                      <FaTv className="text-gray-400 text-sm" />
                      <span className="text-sm font-bold text-gray-300">{series.seasons} Season{series.seasons > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-2">{series.title}</h3>
                  {/* <p className="text-sm text-gray-300 mb-3 line-clamp-3">{series.description}</p> */}
                  <p className="text-xs font-bold text-gray-400 mb-4">{series.genre} • {series.episodes} Episodes</p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-2">
                    <FaPlay className="text-xs" />
                    <span>Watch Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marvel Series */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Marvel Series</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {popularSeries.map((series) => (
            <div 
              key={series.id}
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img 
                  src={series.image}
                  alt={series.title}
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs font-medium">{series.rating}</span>
                    <span className="text-xs text-gray-300">{series.year}</span>
                  </div>
                  <h3 className="text-sm font-bold">{series.title}</h3>
                  <p className="text-xs text-gray-400">{series.seasons} Season{series.seasons > 1 ? 's' : ''}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disney Classics */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Disney Classics</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {disneyClassics.map((series) => (
            <div 
              key={series.id}
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img 
                  src={series.image}
                  alt={series.title}
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs font-medium">{series.rating}</span>
                    <span className="text-xs text-gray-300">{series.year}</span>
                  </div>
                  <h3 className="text-sm font-bold">{series.title}</h3>
                  <p className="text-xs text-gray-400">{series.seasons} Season{series.seasons > 1 ? 's' : ''}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Marvel', 'Star Wars', 'Disney Animation', 'Pixar', 'National Geographic', 'Comedy', 'Drama', 'Documentary'].map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6 text-center cursor-pointer hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              <h3 className="text-lg font-bold">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;