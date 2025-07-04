'use client';

import { useState } from 'react';
import Image from 'next/image';

// Sample gallery images
const galleryImages = [
  { id: 1, src: '/gallary/img1.jpg', alt: 'Community event', category: 'events', type: 'image' },
  { id: 2, src: '/gallary/img2.jpg', alt: 'Education program', category: 'programs', type: 'image' },
  { id: 3, src: '/gallary/img3.jpg', alt: 'Volunteers at work', category: 'volunteers', type: 'image' },
  { id: 4, src: '/gallary/img4.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
  { id: 5, src: '/gallary/img5.jpg', alt: 'Fundraising event', category: 'events', type: 'image' },
  { id: 6, src: '/gallary/img6.jpg', alt: 'Community outreach', category: 'community', type: 'image' },
  { id: 7, src: '/gallary/img7.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
  { id: 8, src: '/gallary/img8.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
  { id: 9, src: '/gallary/img9.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
  { id: 10, src: '/gallary/img10.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
  { id: 11, src: '/gallary/img11.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
  { id: 12, src: '/gallary/img12.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
  { id: 13, src: '/gallary/img13.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
  { id: 14, src: '/gallary/img14.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
  { id: 15, src: '/gallary/img15.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
  { id: 16, src: '/gallary/img16.jpg', alt: 'Children learning', category: 'programs', type: 'image' },
];

// Sample videos
const galleryVideos = [
  { 
    id: 'v1', 
    title: 'Annual Charity Event 2023', 
    videoUrl: '/videos/video1.mp4',
    poster: '/img1.jpg',
    category: 'events',
    type: 'video'
  },
  { 
    id: 'v2', 
    title: 'Education Program Highlights', 
    videoUrl: '/videos/video2.mp4',
    poster: '/img2.jpg',
    category: 'programs',
    type: 'video'
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setSelectedImage(null);
  };

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">आमची गॅलरी</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          फरक करण्याच्या आमच्या प्रवासातील फोटो आणि व्हिडिओंचा संग्रह पहा
        </p>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'photos'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              फोटो
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'videos'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              व्हिडिओ
            </button>
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openImageModal(image.src, image.alt)}
              >
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <div className="w-full h-64 relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-lg font-medium px-4 py-2 bg-black bg-opacity-50 rounded text-center">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryVideos.map((video) => (
              <div 
                key={video.id} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openVideoModal(video.videoUrl)}
              >
                <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 relative overflow-hidden">
                  {video.poster ? (
                    <Image
                      src={video.poster}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-emerald-600 bg-opacity-80 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300">
                    <div className="w-16 h-16 bg-emerald-600 bg-opacity-80 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-1"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="w-full max-w-4xl">
                <video 
                  className="w-full max-h-[80vh]" 
                  controls 
                  autoPlay 
                  src={selectedVideo}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
              <button 
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-1"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain"
                  priority
                />
                {selectedImage.alt && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                    {selectedImage.alt}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">आमचे अधिक काम पाहू इच्छिता?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            सामील व्हा
          </a>
        </div>
      </div>
    </main>
  );
}
