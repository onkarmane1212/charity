'use client';

import { useState } from 'react';
import Image from 'next/image';

// Sample newspaper clippings
const newspaperClips = [
  {
    id: 1,
    title: 'चॅरिफिटने नवीन शैक्षणिक उपक्रम सुरू केला',
    image: '/images/newspaper/education-initiative.jpg'
  },
  {
    id: 2,
    title: 'वार्षिक निधी उभारणीसाठी समुदाय एकत्र आला',
    image: '/images/newspaper/fundraiser.jpg'
  },
  {
    id: 3,
    title: 'स्वच्छ पाणी पुरवठा कार्यक्रमाचा विस्तार',
    image: '/images/newspaper/water-program.jpg'
  },
  {
    id: 4,
    title: 'स्वयंसेवकांनी केली स्थानिक समुदायातील बदलाची सुरुवात',
    image: '/images/newspaper/volunteers.jpg'
  },
  {
    id: 5,
    title: 'चॅरिफिटला उत्कृष्टतेसाठी सन्मान',
    image: '/images/newspaper/award.jpg'
  },
  {
    id: 6,
    title: 'ग्रामीण भागात नवीन आरोग्य केंद्राचे उद्घाटन',
    image: '/images/newspaper/clinic.jpg'
  },
];

export default function NewspaperPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const openModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">वृत्तपत्र कतरा</h1>
          <p className="text-xl text-gray-600">
            आमच्या कार्य आणि परिणामावरील माध्यम व्याप्ती
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newspaperClips.map((clip) => (
            <div 
              key={clip.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openModal(clip.image, clip.title)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={clip.image}
                  alt={clip.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold text-center px-4">{clip.title}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col">
              <div className="flex justify-between items-center bg-black bg-opacity-80 text-white p-4 rounded-t-lg">
                <h2 className="text-lg font-medium">{selectedTitle}</h2>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  className="text-white hover:text-gray-300 focus:outline-none"
                  aria-label="Close modal"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage}
                    alt={selectedTitle}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}