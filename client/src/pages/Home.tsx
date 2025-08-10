import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import img1 from '../images/Mandalorian.jpg';
import img2 from '../images/Loki.jpg';
import img3 from '../images/Frozen2.jpg';
import img4 from '../images/MarvelStudio.jpg';
import img5 from '../images/Soul.jpg';

import marvel from '../images/Marvel.jpg';
import disney from '../images/disney.jpg';
import NG from '../images/NG.jpg';
import pixar from '../images/Pixar.jpg';
import SW from '../images/StarWar.jpg'

import endgame from '../images/Endgame.jpg';
import BP from '../images/BP.webp';
import Thor from '../images/Thor.jpeg';
import IM from '../images/IM.jpg';
import CA from '../images/CA.jpg';
import DS from '../images/DoctorStrange.jpg';
import SM from '../images/SM.jpg';
import GOG from '../images/GOG.jpg'

import f2 from '../images/F2.webp';
import moana from '../images/moana.jpg';
import cocc from '../images/coco.avif';
import TS4 from '../images/TS4.webp';
import I2 from '../images/I2.jpg';
import FD from '../images/Finding-Dory.jpg';
import Zoo from '../images/zootopia.jpg';
import BH6 from '../images/BigHero6.jpg';

import TPB from '../images/ThePrincessBride.webp';
import JC from '../images/jungle-cruise.jpg';
import FG from '../images/FreeGuy.jpeg';
import TSC from '../images/the-santa-clause.jpg';
import HA from '../images/HomeAlone.webp';
import TM from '../images/TheMuppets.webp';
import MInc from '../images/monsterInc.webp';
import ABL from '../images/BugsLife.jpg'



import { FaStar, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Home: React.FC = () => {
  const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 1,
      title: "The Mandalorian",
      description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      image: img1,
      rating: 8.7,
      year: 2019,
      genre: "Action, Adventure, Sci-Fi"
    },
    {
      id: 2,
      title: "Frozen II",
      description: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land.",
      image: img3,
      rating: 6.8,
      year: 2019,
      genre: "Animation, Adventure, Comedy"
    },
    {
      id: 3,
      title: "Marvel Studios",
      description: "Experience the Marvel Cinematic Universe in a whole new way with exclusive content and behind-the-scenes footage.",
      image: img4,
      rating: 9.2,
      year: 2023,
      genre: "Action, Adventure, Superhero"
    },
    {
      id: 4,
      title: "Soul",
      description: "A musician who has lost his passion for music is transported out of his body and must find his way back.",
      image: img5,
      rating: 8.0,
      year: 2020,
      genre: "Animation, Comedy, Drama"
    },
    {
      id: 5,
      title: "Loki",
      description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after Avengers: Endgame.",
      image: img2,
      rating: 8.2,
      year: 2021,
      genre: "Action, Adventure, Fantasy"
    }
  ];

  const categories = [
    {
      name: "Disney",
      image: disney
    },
    {
      name: "Pixar",
      image: pixar
    },
    {
      name: "Marvel",
      image: marvel
    },
    {
      name: "Star Wars",
      image: SW
    },
    {
      name: "National Geographic",
      image: NG
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-14 sm:pt-16">
      {/* Hero Slider Section */}
      <div className="relative h-[60vh] sm:h-[80vh] lg:h-screen overflow-hidden">
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className="min-w-full h-full relative flex-shrink-0"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-no-repeat bg-top bg-cover"
                  style={{
                        backgroundImage: `url(${content.image})`,
                        backgroundSize: '100% 100%',  // stretch to fill both width and height exactly
                      }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center h-full">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-xs sm:max-w-lg lg:max-w-2xl">
                    {/* Animated Content */}
                    <div 
                      className={`transform transition-all duration-1000 delay-300 ${
                        index === currentSlide 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-0'
                      }`}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <FaStar className="text-yellow-400" />
                          <span className="text-sm sm:text-lg font-medium">{content.rating}</span>
                        </div>
                        <span className="text-xs sm:text-base text-gray-300">{content.year}</span>
                        <span className="text-xs sm:text-base text-blue-400 hidden sm:inline">{content.genre}</span>
                      </div>

                      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                        {content.title}
                      </h1>

                      <p className="text-sm sm:text-lg md:text-xl mb-4 sm:mb-8 text-gray-200 leading-relaxed max-w-xs sm:max-w-xl">
                        {content.description}
                      </p>

                      {user ? (
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                          <button className="group bg-white hover:bg-gray-200 text-black px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <FaPlay className="group-hover:scale-110 transition-transform duration-200" />
                            <span>Play Now</span>
                          </button>
                          <button className="group bg-gray-600/80 hover:bg-gray-600 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 transform hover:scale-105 backdrop-blur-sm">

                            <span>My List</span>
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-sm sm:text-lg text-gray-300">Join millions of viewers streaming their favorites</p>
                          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            <Link
                              to="/register"
                              className="group bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 text-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                              Start Free Trial
                            </Link>
                            <Link 
                              to="/login"
                              className="group bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 text-center transform hover:scale-105"
                            >
                              Sign In
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20"
        >
          <FaChevronLeft className="text-sm sm:text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20"
        >
          <FaChevronRight className="text-sm sm:text-xl" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / featuredContent.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-8 sm:py-16 px-3 sm:px-4 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center">Explore by Brand</h2>
        <div className="flex space-x-3 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-900 w-32 sm:w-48 lg:w-56">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                  <h3 className="text-xs sm:text-sm font-bold group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movies by Genre */}
      <div className="py-8 sm:py-16 px-3 sm:px-4 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8">Action & Adventure</h2>
        <div className="flex space-x-3 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { title: "Avengers: Endgame", image: endgame, rating: 8.4 },
            { title: "Black Panther", image: BP, rating: 7.3 },
            { title: "Thor: Ragnarok", image: Thor, rating: 7.9 },
            { title: "Iron Man", image: IM, rating: 7.9 },
            { title: "Captain America", image: CA, rating: 6.9 },
            { title: "Doctor Strange", image: DS, rating: 7.5 },
            { title: "Spider-Man", image: SM, rating: 8.1 },
            { title: "Guardians of Galaxy", image: GOG, rating: 8.0 }
          ].map((movie, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-900 w-32 sm:w-48 lg:w-56">
                <img 
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs sm:text-sm font-medium">{movie.rating}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {movie.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Movies */}
      <div className="py-8 sm:py-16 px-3 sm:px-4 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8">Animation</h2>
        <div className="flex space-x-3 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { title: "Frozen II", image: f2, rating: 6.8 },
            { title: "Moana", image: moana, rating: 7.6 },
            { title: "Coco", image: cocc, rating: 8.4 },
            { title: "Toy Story 4", image: TS4, rating: 7.7 },
            { title: "Incredibles 2", image: I2, rating: 7.6 },
            { title: "Finding Dory", image: FD, rating: 7.3 },
            { title: "Zootopia", image: Zoo, rating: 8.0 },
            { title: "Big Hero 6", image: BH6, rating: 7.8 }
          ].map((movie, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-900 w-32 sm:w-48 lg:w-56">
                <img 
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs sm:text-sm font-medium">{movie.rating}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                    {movie.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comedy Movies */}
      <div className="py-8 sm:py-16 px-3 sm:px-4 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8">Comedy</h2>
        <div className="flex space-x-3 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { title: "The Princess Bride", image: TPB, rating: 8.1 },
            { title: "Jungle Cruise", image: JC, rating: 6.6 },
            { title: "Free Guy", image: FG, rating: 7.1 },
            { title: "The Santa Clause", image: TSC, rating: 6.5 },
            { title: "Home Alone", image: HA, rating: 7.7 },
            { title: "The Muppets", image: TM, rating: 7.1 },
            { title: "Monsters Inc", image: MInc, rating: 8.1 },
            { title: "A Bug's Life", image: ABL, rating: 7.2 }
          ].map((movie, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-900 w-32 sm:w-48 lg:w-56">
                <img 
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs sm:text-sm font-medium">{movie.rating}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
                    {movie.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Trending Content */}
      <div className="py-8 sm:py-16 px-3 sm:px-4 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8">Trending Now</h2>
        <div className="flex space-x-3 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {featuredContent.slice(0, 4).map((content, index) => (
            <div 
              key={content.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 flex-shrink-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-900 w-48 sm:w-64 lg:w-72">
                <img 
                  src={content.image}
                  alt={content.title}
                  className="w-full h-32 sm:h-48 object-fit group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                    <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                    <span className="text-xs sm:text-sm font-medium">{content.rating}</span>
                    <span className="text-xs sm:text-xs text-gray-300">{content.year}</span>
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {content.title}
                  </h3>
                  <p className="text-xs sm:text-xs text-gray-400 hidden sm:block">{content.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;