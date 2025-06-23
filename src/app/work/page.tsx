'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { aosConfig, sectionAnimations } from '@/utils/aosUtils';

// Sample program data
const programs = [
  {
    id: 1,
    title: '1 पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्थेतर्फे पशुप्रेमाचे दर्शन – गाईंना चारा वाटप व पिण्याच्या पाण्याची व्यवस्था',
    description: `
हिंगोली :पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था हिंगोली यांच्यातर्फे वाढत्या उष्णतेच्या पार्श्वभूमीवर जनावरांच्या कल्याणासाठी एक स्तुत्य उपक्रम राबवण्यात आला. शहरातील तसेच ग्रामीण भागातील जनावरांसाठी पिण्याच्या पाण्याची विशेष व्यवस्था करण्यात आली. यासोबतच गाईंना चारा वाटप देखील करण्यात आले.
या उपक्रमामध्ये संस्थेचे पदाधिकारी, स्वयंसेवक व ग्रामस्थांनी सहभाग घेत गाईंना सकस चारा व स्वच्छ पाणी पुरवण्याचे कार्य केले. विशेषतः उन्हाळ्यात जनावरांना होणाऱ्या त्रासाची जाणीव ठेवून हा उपक्रम हाती घेण्यात आला असल्याचे संस्थेचे पदाधिकारी यांनी सांगितले.
संस्था यापुढेही अशा उपयुक्त व सेवा भावनेने भरलेल्या उपक्रमांचे आयोजन करणार असल्याचे यावेळी सांगण्यात आले `,
    icon: '🌾🐄',
    stats: '१५,०००+ मुले शिक्षित',
  },
  {
    id: 2,
    title: '2. गरजू व अनाथ मुलांसाठी अन्नदान कार्यक्रम " पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था, हिंगोली " ',
    description: `पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था हिंगोली यांच्या वतीने सामाजिक बांधिलकी अंतर्गत गरजू, अनाथ आणि शहाणात (विशेष बालक) मुलांसाठी अन्नदान कार्यक्रमाचे आयोजन करण्यात आले.या उपक्रमांतर्गत अशा मुलांना जे सामाजिक आधाराशिवाय जीवन जगत आहेत व ज्यांची देखरेख करणारे कोणीही नाही, त्यांच्यासाठी सकस आणि पौष्टिक जेवणाची व्यवस्था करण्यात आली. संस्थेचे स्वयंसेवक आणि पदाधिकारी यांनी स्वहस्ते या मुलांना प्रेमपूर्वक जेवण वाढले.
या उपक्रमामध्ये पोषणयुक्त जेवण, फळे, तसेच पाण्याची सुविधा पुरवण्यात आली. अन्नदान हे श्रेष्ठ दान मानले जाते, आणि अशा बालकांच्या चेहऱ्यावर हास्य फुलवणे हे संस्थेचे प्रमुख ध्येय राहिले आहे.संस्थेचे अध्यक्ष/संस्थापक श्री. यांच्या मार्गदर्शनाखाली हा कार्यक्रम यशस्वीरित्या पार पडला. भविष्यातही अशा गरजू बालकांसाठी शिक्षण, आरोग्य, आणि पोषण यामध्ये विविध उपक्रम राबवण्याचा निर्धार संस्थेने व्यक्त केला आहे.`
,
    icon: '🍽️',
    stats: 'जेवण देणे म्हणजे केवळ अन्न देणे नाही, तर आशा आणि आधार देणे आहे.',
  },
  {
    id: 3,
    title: '3. वृक्षारोपण उपक्रम – पार्श्वनाथ संस्था, हिंगोली',
    description: 'पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था, हिंगोली यांच्या वतीने आज शहरातील विविध ठिकाणी वृक्षारोपण करण्यात आले. संस्थेचे पदाधिकारी, सदस्य व स्वयंसेवक यांनी उत्साहाने सहभाग घेत पर्यावरण रक्षणाचा संदेश दिला. वृक्षांची निगा राखण्याची जबाबदारीही संस्थेने स्वीकारली असून भविष्यात अशा उपक्रमांची मालिका राबविण्याचा संकल्प करण्यात आला आहे.',
    icon: '🌱',
    stats: '१००+ जलप्रकल्प पूर्ण',
  },
  {
    id: 4,
    title: '4. स्वच्छता कार्यक्रम – हिंगोली',
    description: 'पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था, हिंगोली पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था, हिंगोली तर्फे आज शहरातील विविध भागात स्वच्छता अभियान राबविण्यात आले. या उपक्रमामध्ये संस्थेचे सर्व सदस्य, स्वयंसेवक, नागरिक आणि विद्यार्थी यांनी उत्स्फूर्तपणे सहभाग घेतला. सार्वजनिक ठिकाणे, रस्ते, चौक आणि शासकीय कार्यालयांच्या परिसरात साफसफाई करण्यात आली.या उपक्रमाचा उद्देश नागरिकांमध्ये स्वच्छतेबाबत जनजागृती निर्माण करणे आणि " स्वच्छ भारत, सुंदर भारत " या मोहिमेस हातभार लावणे हा होता. कार्यक्रमाच्या शेवटी सहभागी सदस्यांना संस्थेच्या वतीने प्रमाणपत्रे देखील देण्यात आली.संस्थेचे पदाधिकारी आणि कार्यकर्त्यांनी पुढील काळात नियमित स्वच्छता उपक्रम राबविण्याचा निर्धार व्यक्त केला.',
    icon: '🧹',
    stats: '५,०००+ महिला सक्षम',
  },
  {
    id: 5,
    title: '5.पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था तर्फे "हर घर तिरंगा" कार्यक्रम',
    description: 'पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था, हिंगोली यांच्या वतीने देशभक्ती आणि राष्ट्रीय एकात्मतेच्या भावनेने प्रेरित होऊन "हर घर तिरंगा" अभियानाचे आयोजन करण्यात आले. या उपक्रमांतर्गत संस्थेच्या सदस्यांनी नागरिकांमध्ये जनजागृती करून प्रत्येक घरावर तिरंगा फडकवण्याचे आवाहन केले. विविध भागांमध्ये तिरंगा ध्वजांचे वाटप करण्यात आले तसेच देशभक्तिपर घोषवाक्यांसह रॅली देखील काढण्यात आली.या कार्यक्रमाच्या माध्यमातून देशप्रेम, एकता आणि स्वाभिमानाचा संदेश देण्याचा प्रयत्न करण्यात आला. संस्थेचे पदाधिकारी, सदस्य व स्थानिक नागरिक यांचा उत्स्फूर्त सहभाग लाभला.',
    icon: '🇮📢',
    stats: '२०+ आपत्ती प्रतिसाद',
  },
  {
    id: 6,
    title: '6. निबंध स्पर्धा पारितोषिक वितरण कार्यक्रम – हिंगोली',
    description: 'भगवान महावीर निर्माण 2550 समिती महाराष्ट्र शासन व पार्श्वनाथ अल्पसंख्यांक बहुउद्देश सेवाभावी संस्था यांच्या संयुक्त मार्गदर्शनाने हिंगोली येथे विद्यार्थ्यांसाठी निबंध स्पर्धेचे आयोजन करण्यात आले. या उपक्रमास विद्यार्थ्यांकडून उत्स्फूर्त प्रतिसाद मिळाला. या निबंध स्पर्धेतील गुणवंत विद्यार्थ्यांचा सन्मान करण्यासाठी पारितोषिक वितरण समारंभ आयोजित करण्यात आला. या प्रसंगी संस्थेचे मुख्य सदस्य श्री. विकी गोरे, हिंगोलीचे **शिक्षणाधिकारी व उपशिक्षणाधिकारी मान्यवरांच्या उपस्थितीत विद्यार्थ्यांना पारितोषिक म्हणून धनादेश (चेक्स) प्रदान करण्यात आले.कार्यक्रमामध्ये विद्यार्थ्यांनी आपल्या भावना व्यक्त करत आनंद व्यक्त केला आणि अशा उपक्रमांमुळे लेखनकौशल्याला प्रेरणा मिळत असल्याचे सांगितले.संस्थेच्या वतीने अशा शैक्षणिक व बौद्धिक उपक्रमांचे आयोजन भविष्यातही करण्यात येणार असल्याची माहिती यावेळी देण्यात आली',
    icon: '🏆',
    stats: '५०,०००+ झाडे लावली',
  },
  {
    id: 7,
    title: '7. पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था यांच्या पुढाकाराने योग दिन जनजागृती रॅली संपन्न',
    description: 'हिंगोली (ता. 20 जून) – पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था, हिंगोली यांच्या पुढाकाराने आणि सौजन्याने आज हिंगोली शहरात *अंतरराष्ट्रीय योग दिना*च्या पूर्वसंध्येला भव्य जनजागृती रॅलीचे आयोजन करण्यात आले. या उपक्रमात शहरातील विविध शाळांमधील शेकडो विद्यार्थ्यांनी उत्स्फूर्त सहभाग घेतला.या रॅलीस *अप्पर जिल्हाधिकारी मा. श्रीमान यांच्या विशेष उपस्थिती*ने मान मिळाला. योगाचे महत्त्व जनतेपर्यंत पोहोचवण्यासाठी ही रॅली शहरातील प्रमुख रस्त्यांवरून काढण्यात आली, ज्यामध्ये हातात फलक, घोषवाक्य आणि शिस्तबद्ध संचलनाचे दर्शन झाले.या उपक्रमात संस्थेचे प्रमुख सदस्य श्री. विकी गोरे जैन यांनी महत्त्वाची भूमिका बजावली. त्यांनी सांगितले की, "योग ही भारतीय संस्कृतीची अमूल्य देणगी असून, तरुण पिढीमध्ये त्याविषयी जागरूकता वाढवणे ही काळाची गरज आहे."या रॅलीचे यशस्वी आयोजन हिंगोली जिल्हा प्रशासनातील क्रीडा विभाग, **पतंजली योग समिती, आणि **जॉइंटस ग्रुप, हिंगोली यांच्या सौजन्याने पार पडले.',
    icon: '🧘‍♂️',
    stats: '५०,०००+ झाडे लावली',
  },
];

export default function WorkPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-center mb-16"
          {...sectionAnimations.sectionHeader.title}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">आमचे कार्य</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            जगभरातील समुदायांमधील महत्त्वपूर्ण गरजा पूर्ण करणाऱ्या केंद्रित उपक्रमांद्वारे शाश्वत बदल घडवून आणण्यासाठी आम्ही वचनबद्ध आहोत.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              {...sectionAnimations.card.container(index)}
            >
              <div className="p-8">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h2>
                <p className="text-gray-600 mb-4">{program.description.split(' ').slice(0, 25).join(' ')}...</p>
                {/* <p className="text-emerald-600 font-medium">{program.stats}</p> */}
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <a
                  href={`/programs/${program.id}`}
                  className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                >
                  अधिक जाणा
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white"
          {...aosConfig.fadeUp}
          data-aos-delay="100"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">संख्या मध्ये आमचा प्रभाव</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold">५०+</div>
                <div className="text-emerald-100">देशांमध्ये पोहोच</div>
              </div>
              <div>
                <div className="text-4xl font-bold">१० लाख+</div>
                <div className="text-emerald-100">जीवनांवर परिणाम</div>
              </div>
              <div>
                <div className="text-4xl font-bold">५००+</div>
                <div className="text-emerald-100">प्रकल्प पूर्ण</div>
              </div>
              <div>
                <div className="text-4xl font-bold">१०,०००+</div>
                <div className="text-emerald-100">स्वयंसेवक</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 
            className="text-3xl font-bold text-center mb-12"
            {...aosConfig.fadeUp}
            data-aos-delay="50"
          >
            यशोगाथा
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-emerald-100 flex items-center justify-center">
                <span className="text-6xl">📚</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">शिक्षणाने जीवन बदलते</h3>
                <p className="text-gray-600 mb-4">
                  आमच्या शैक्षणिक कार्यक्रमांनी मरियाला तिच्या कुटुंबातील पहिली कॉलेज पदवीधर होण्यात आणि शिक्षिका म्हणून तिच्या समुदायात परत येण्यात कशी मदत केली.
                </p>
                <a href="/stories/education-transforms-lives" className="text-emerald-600 hover:underline font-medium">
                  संपूर्ण कथा वाचा →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-emerald-100 flex items-center justify-center">
                <span className="text-6xl">💧</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">स्वच्छ पाणी, चांगले आरोग्य</h3>
                <p className="text-gray-600 mb-4">
                  स्वच्छ पाण्याच्या प्रवेशाने एका गावाचे परिवर्तन कसे घडले आणि जलजनित आजारांमध्ये ८०% घट कशी आली याची गोष्ट.
                </p>
                <a href="/stories/clean-water-better-health" className="text-emerald-600 hover:underline font-medium">
                  संपूर्ण कथा वाचा →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="mt-16 bg-emerald-50 rounded-2xl p-8 text-center"
          {...aosConfig.fadeUp}
          data-aos-delay="100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">फरक घडवून आणण्यासाठी आमच्यासोबत सामील व्हा</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            तुमचे पाठबळ जगभरातील समुदायांमध्ये आमचे महत्त्वपूर्ण कार्य सुरू ठेवण्यास मदत करते.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/donate"
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              आता दान करा
            </a>
            <a
              href="/involve"
              className="px-6 py-3 border border-emerald-600 text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
सहभागी व्हा
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
