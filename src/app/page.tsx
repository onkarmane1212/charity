'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Import components with SSR disabled
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/sections/About'), { ssr: false });
const Programs = dynamic(() => import('@/components/sections/Programs'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { ssr: false });
const CallToAction = dynamic(() => import('@/components/sections/CallToAction'), { ssr: false });

// Slides data
const slides = [
  {
    id: 1,
    title: 'समुदाय सक्षमीकरण',
    description: 'शिक्षण आणि शाश्वत विकासाद्वारे बदल घडवून आणण्यासाठी आमच्यासोब� सामील व्हा.',
    image: '/images/hero/community.jpg',
    cta: 'अधिक जाणा',
    ctaLink: '/about',
    bgColor: 'bg-emerald-600',
  },
  {
    id: 2,
    title: 'प्रत्येकासाठी शिक्षण',
    description: 'मुलांना गुणवत्ताप्रधान शिक्षण मिळून त्यांना चांगल्या भविष्याची निर्मिती करण्यास मदत करणे.',
    image: '/images/hero/education.jpg',
    cta: 'आम्हाला पाठिंबा द्या',
    ctaLink: '/donate',
    bgColor: 'bg-blue-600',
  },
  {
    id: 3,
    title: 'आमच्या उद्दिष्टात सामील व्हा',
    description: 'टिकावू बदल घडवून आणण्यासाठी आपला वेळ आणि कौशल्ये योगदान द्या.',
    image: '/images/hero/volunteer.jpg',
    cta: 'सहभागी व्हा',
    ctaLink: '/involve',
    bgColor: 'bg-purple-600',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen">
      
      {/* Carousel/Slider */}
      <div className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id}
              className="w-full flex-shrink-0 relative h-[80vh] min-h-[500px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gray-900">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div className="w-full h-full bg-gray-200">
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center text-white">
                    <span className="text-2xl">{slide.title} Image</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24 text-white max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
                  {slide.description}
                </p>
                <div className="animate-fade-in animation-delay-400">
                  <a
                    href={slide.ctaLink}
                    className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30 transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30 transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Rest of the page content */}
      <div className="relative z-10">
      <Hero />
        <About />
        <Programs />
        <Testimonials />
        <CallToAction />
      </div>
    </div>
  );
}