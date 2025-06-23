'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { aosConfig } from '@/utils/aosUtils';

interface Program {
  id: number;
  title: string;
  description: string;
  icon: string;
  stats: string;
  fullDescription: string;
}

interface ProgramParams {
  id: string;
  [key: string]: string | string[] | undefined;
}

// Sample program data - should be moved to a shared file in a real app
const programs: Program[] = [
    
        {
          "id": 1,
          "title": "1. पार्श्वनाथ संस्थेतर्फे गाईंना चारा वाटप व पाण्याची व्यवस्था",
          "description": "उन्हाळ्यात जनावरांसाठी चारा वाटप आणि पिण्याच्या पाण्याची व्यवस्था.",
          "icon": "🌾🐄",
          "stats": "१५,०००+ जनावरे लाभार्थी",
          "fullDescription": "हिंगोली : वाढत्या उष्णतेच्या पार्श्वभूमीवर पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था हिंगोलीने जनावरांसाठी पिण्याच्या पाण्याची विशेष व्यवस्था आणि गाईंना चारा वाटप उपक्रम राबवला. पदाधिकारी, स्वयंसेवक आणि ग्रामस्थांनी सहभाग घेऊन जनावरांना सकस चारा व स्वच्छ पाणी पुरवले. उन्हाळ्यातील त्रास लक्षात घेऊन हाच उपक्रम हाती घेतल्याचे सांगण्यात आले. संस्थेने भविष्यातही अशा सेवा उपक्रमांचे आयोजन करण्याचा निर्धार केला आहे."
        },
        {
          "id": 2,
          "title": "2. गरजू व अनाथ मुलांसाठी अन्नदान कार्यक्रम",
          "description": "गरजू व अनाथ मुलांसाठी पोषणयुक्त अन्नदान.",
          "icon": "🍽️",
          "stats": "जेवण देणे म्हणजे आशा व आधार देणे.",
          "fullDescription": "पार्श्वनाथ संस्था, हिंगोलीने सामाजिक बांधिलकी अंतर्गत गरजू, अनाथ आणि विशेष मुलांसाठी अन्नदान कार्यक्रम राबवला. अशा मुलांना पौष्टिक जेवण, फळे व पाण्याची सुविधा पुरवली गेली. स्वयंसेवकांनी स्वहस्ते जेवण वाढून प्रेमपूर्वक सेवा दिली. अन्नदान हे श्रेष्ठ दान मानले गेले असून अशा बालकांच्या चेहऱ्यावर हास्य फुलवणे हे संस्थेचे प्रमुख ध्येय आहे. भविष्यातही अशा मुलांसाठी विविध उपक्रम राबवले जाणार आहेत."
        },
        {
          "id": 3,
          "title": "3. वृक्षारोपण उपक्रम – हिंगोली",
          "description": "विविध ठिकाणी वृक्षारोपण करून पर्यावरण रक्षणाचा संदेश.",
          "icon": "🌱",
          "stats": "१००+ वृक्ष लावले",
          "fullDescription": "पार्श्वनाथ संस्थेच्या वतीने शहरातील विविध ठिकाणी वृक्षारोपण करण्यात आले. पदाधिकारी, सदस्य आणि स्वयंसेवकांनी सहभाग घेऊन पर्यावरण रक्षणाचा संदेश दिला. वृक्षांची निगा राखण्याची जबाबदारी संस्थेने स्वीकारली असून, भविष्यातही असे उपक्रम सातत्याने राबवले जातील."
        },
        {
          "id": 4,
          "title": "4. स्वच्छता अभियान – हिंगोली",
          "description": "शहरात स्वच्छता अभियान राबवून जनजागृती.",
          "icon": "🧹",
          "stats": "५,०००+ नागरिक सहभागी",
          "fullDescription": "पार्श्वनाथ संस्थेच्या वतीने शहरातील विविध भागात स्वच्छता मोहीम राबविण्यात आली. नागरिक, स्वयंसेवक आणि विद्यार्थी यांनी सहभाग घेतला. सार्वजनिक ठिकाणी सफाई करत 'स्वच्छ भारत, सुंदर भारत' मोहिमेस हातभार लावला. कार्यक्रमाच्या शेवटी प्रमाणपत्रे वितरित करण्यात आली. संस्था पुढील काळात नियमित उपक्रम राबविणार आहे."
        },
        {
          "id": 5,
          "title": "5. 'हर घर तिरंगा' उपक्रम",
          "description": "देशप्रेम व राष्ट्रीय एकात्मतेचा प्रचार.",
          "icon": "🇮📢",
          "stats": "१०००+ तिरंगा वितरण",
          "fullDescription": "पार्श्वनाथ संस्थेच्या वतीने 'हर घर तिरंगा' उपक्रम राबवून प्रत्येक घरावर ध्वज फडकवण्याचे आवाहन करण्यात आले. तिरंगा वाटप व घोषवाक्यांसह रॅली काढण्यात आली. या उपक्रमाने देशप्रेम, एकता व स्वाभिमानाचा संदेश दिला. नागरिकांचा उत्स्फूर्त सहभाग लाभला."
        },
        {
          "id": 6,
          "title": "6. निबंध स्पर्धा पारितोषिक वितरण",
          "description": "विद्यार्थ्यांसाठी निबंध स्पर्धा व बक्षीस वितरण.",
          "icon": "🏆",
          "stats": "५०+ विद्यार्थी सन्मानित",
          "fullDescription": "पार्श्वनाथ संस्था व महावीर निर्माण समिती यांच्या संयुक्त मार्गदर्शनाने हिंगोलीत निबंध स्पर्धा घेण्यात आली. विद्यार्थ्यांनी उत्साहाने सहभाग घेतला. गुणवंत विद्यार्थ्यांना धनादेश रूपाने पारितोषिके देण्यात आली. संस्थेने भविष्यातही शैक्षणिक उपक्रम राबविण्याची घोषणा केली."
        },
        {
          "id": 7,
          "title": "7. योग दिन जनजागृती रॅली",
          "description": "योग दिनाच्या निमित्ताने भव्य जनजागृती रॅली.",
          "icon": "🧘‍♂️",
          "stats": "शेकडो विद्यार्थी सहभागी",
          "fullDescription": "पार्श्वनाथ संस्थेच्या पुढाकाराने हिंगोलीत योग दिनाच्या पूर्वसंध्येला रॅलीचे आयोजन झाले. विविध शाळांतील विद्यार्थी, अप्पर जिल्हाधिकारी व मान्यवरांच्या उपस्थितीत रॅली काढण्यात आली. योगाचे महत्त्व पटवून देण्यासाठी फलक व घोषवाक्य घेऊन संचलन झाले. क्रीडा विभाग, पतंजली योग समिती आणि अन्य संस्थांचा सहकार्य लाभला."
        }
      
      
];

export default function ProgramDetailPage() {
  const params = useParams() as ProgramParams;
  const programId = parseInt(Array.isArray(params.id) ? params.id[0] : params.id || '', 10);
  const program = programs.find((p: Program) => p.id === programId);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">कार्यक्रम सापडला नाही</h1>
          <Link href="/work" className="text-emerald-600 hover:underline">
            मागे जा
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/work" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
            {...aosConfig.fadeUp}
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            मागे जा
          </Link>
          
          <div 
            className="text-6xl mb-6"
            {...aosConfig.fadeUp}
          >
            {program.icon}
          </div>
          
          <h1 
            className="text-4xl font-bold text-gray-900 mb-4"
            {...aosConfig.fadeUp}
          >
            {program.title}
          </h1>
          
          <p 
            className="text-xl text-gray-600 mb-6"
            {...aosConfig.fadeUp}
          >
            {program.stats}
          </p>
          
          <div 
            className="bg-white rounded-xl shadow-md p-8"
            {...aosConfig.fadeUp}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">माहिती</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {program.fullDescription}
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">आमच्या कार्यक्रमाची वैशिष्ट्ये:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>गुणवत्तापूर्ण सेवा</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>अनुभवी टीम</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>पारदर्शकता</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                संपर्क साधा
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
