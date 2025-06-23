'use client';

import { useState } from 'react';

// Sample newspaper clippings in Marathi
const newspaperClips = [
  {
    id: 1,
    title: 'चॅरिफिटने नवीन शैक्षणिक उपक्रम सुरू केला',
    date: '2023-06-15',
    source: 'दैनिक महाराष्ट्र टाइम्स',
    image: '/images/newspaper/education-initiative.jpg',
    excerpt: 'चॅरिफिटने ग्रामीण भागातील गरजू मुलांसाठी गुणवत्तापूर्ण शिक्षण पुरविण्यासाठी नवीन शैक्षणिक उपक्रम सुरू केला आहे.'
  },
  {
    id: 2,
    title: 'वार्षिक निधी उभारणीसाठी समुदाय एकत्र आला',
    date: '2023-05-22',
    source: 'मेट्रो वार्ता',
    image: '/images/newspaper/fundraiser.jpg',
    excerpt: 'चॅरिफिटच्या वार्षिक निधी उभारणीतून समुदाय विकास प्रकल्पांसाठी २ कोटी रुपयांहून अधिक गोळा झाले.'
  },
  {
    id: 3,
    title: 'स्वच्छ पाणी पुरवठा कार्यक्रमाचा विस्तार',
    date: '2023-04-10',
    source: 'जागतिक प्रभाव बातम्या',
    image: '/images/newspaper/water-program.jpg',
    excerpt: 'चॅरिफिटने आपला स्वच्छ पाणी पुरवठा कार्यक्रम पाच नवीन भागात वाढवल्याची घोषणा केली आहे.'
  },
  {
    id: 4,
    title: 'स्वयंसेवकांनी केली स्थानिक समुदायातील बदलाची सुरुवात',
    date: '2023-03-28',
    source: 'समुदाय दर्पण',
    image: '/images/newspaper/volunteers.jpg',
    excerpt: 'चॅरिफिटचे २०० हून अधिक स्वयंसेवकांनी मागील आठवड्यात समुदाय स्वच्छता कार्यक्रमात सहभाग घेतला.'
  },
  {
    id: 5,
    title: 'चॅरिफिटला उत्कृष्टतेसाठी सन्मान',
    date: '2023-02-15',
    source: 'लोकोपकार आज',
    image: '/images/newspaper/award.jpg',
    excerpt: 'समुदाय विकासातील उत्कृष्ट योगदानाबद्दल चॅरिफिटला सन्मानित करण्यात आले आहे.'
  },
  {
    id: 6,
    title: 'ग्रामीण भागात नवीन आरोग्य केंद्राचे उद्घाटन',
    date: '2023-01-30',
    source: 'आरोग्य आणि कल्याण',
    image: '/images/newspaper/clinic.jpg',
    excerpt: 'चॅरिफिटने गरिबांसाठी नवीन आरोग्य केंद्र सुरू केले आहे.'
  },
];

export default function NewspaperPage() {
  const [selectedClip, setSelectedClip] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedClip(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedClip(null);
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newspaperClips.map((clip) => (
            <div 
              key={clip.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(clip.id)}
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{clip.title}</h3>
                  <p className="text-sm opacity-80">{clip.source} • {new Date(clip.date).toLocaleDateString('mr-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 line-clamp-3">{clip.excerpt}</p>
                <button className="mt-3 text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                  अधिक वाचा →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedClip !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {newspaperClips[selectedClip - 1].title}
                    </h2>
                    <p className="text-gray-500 mt-1">
                      {newspaperClips[selectedClip - 1].source} • 
                      {new Date(newspaperClips[selectedClip - 1].date).toLocaleDateString('mr-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mt-6">
                  <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 mb-4">
                      {newspaperClips[selectedClip - 1].excerpt}
                    </p>
                    <p className="text-gray-700 mb-4">
                      चॅरिफिट संस्थेने गेल्या काही वर्षांत समाजातील विविध क्षेत्रांत महत्त्वपूर्ण काम केले आहे. विशेषतः शिक्षण, आरोग्य आणि समुदाय विकास या क्षेत्रातील त्यांचे योगदान उल्लेखनीय आहे.
                    </p>
                    <p className="text-gray-700">
                      संस्थेच्या विविध उपक्रमांमुळे हजारो कुटुंबांना मदत मिळाली आहे. त्यांच्या प्रयत्नांमुळे अनेक मुलांना शिक्षणाची संधी मिळाली आहे आणि ग्रामीण भागातील लोकांना चांगल्या आरोग्यसेवा उपलब्ध होत आहेत.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">संबंधित लेख</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {newspaperClips
                      .filter(clip => clip.id !== selectedClip)
                      .slice(0, 2)
                      .map(clip => (
                        <div key={clip.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                          <div className="flex-shrink-0 h-16 w-16 bg-gray-300 rounded"></div>
                          <div>
                            <h4 className="font-medium text-gray-900">{clip.title}</h4>
                            <p className="text-sm text-gray-500">{clip.source}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 rounded-b-lg">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    प्रकाशित दिनांक: {new Date(newspaperClips[selectedClip - 1].date).toLocaleDateString('mr-IN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
पूर्ण लेख वाचा
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">अधिक अद्यतने शोधत आहात?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Contact Us for Media Inquiries
          </a>
        </div>
      </div>
    </main>
  );
}
