import { Metadata } from 'next';
import { FaBalanceScale, FaBook, FaGavel, FaHandsHelping, FaTools } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'आमच्याबद्दल - पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था',
  description: 'आमचे ध्येय, दृष्टी आणि पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्थाच्या मागील संघाबद्दल अधिक जाणून घ्या.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">आमच्याबद्दल</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl  mb-4"><span className='font-semibold'>पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था, हिंगोली </span>ही महाराष्ट्रातील एक नोंदणीकृत व मान्यताप्राप्त सामाजिक संस्था आहे, जी  सामाजिक समरसता, शैक्षणिक प्रगती, आरोग्य सुविधा, महिला सक्षमीकरण, युवक विकास, पर्यावरण संवर्धन आणि अल्पसंख्यांक कल्याण यासाठी कटिबद्ध आहे. संस्थेची स्थापना सामाजिक बांधिलकी आणि सकारात्मक परिवर्तनाच्या उद्देशाने झाली.

संस्था विविध सामाजिक, शैक्षणिक आणि जनहिताच्या उपक्रमांमध्ये सक्रीय असून समाजातील दुर्बल, उपेक्षित आणि अल्पसंख्यांक घटकांपर्यंत पोहोचून त्यांचे जीवनमान उंचावण्यासाठी कार्य करते. आमचा विश्वास आहे की "समाज बदलायचा असेल तर प्रत्येक व्यक्तीला संधी मिळाली पाहिजे" — आणि ही संधी आम्ही विविध उपक्रमांद्वारे उपलब्ध करून देतो.
</h2>
          
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">आमची मुख्य कार्यक्षेत्रे </h2>
          <p className="text-lg">पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था, हिंगोली ही संस्था अल्पसंख्यांक, मागासवर्गीय, गरजू आणि समाजातील वंचित घटकांसाठी समर्पित असून, शिक्षण, आरोग्य, महिला सक्षमीकरण, युवा विकास, पर्यावरण व सामाजिक न्यायाच्या क्षेत्रात ठोस कार्य करीत आहे.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">१. शैक्षणिक मदत व प्रशिक्षण:</h2>
          <div className='flex justify-center gap-4'>
            <div className="flex flex-col items-center">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col items-center">
<p>
गरीब व गरजू विद्यार्थ्यांना शैक्षणिक मदत, शालेय साहित्य वाटप, मार्गदर्शन शिबिरे, आणि स्पर्धा परीक्षा तयारीसाठी सल्ला व मार्गदर्शन - </p>
<ol>
   <li>* गरीब व अल्पसंख्यांक विद्यार्थ्यांना शिष्यवृत्ती व शैक्षणिक साहित्याचे वाटप</li>
   <li>* कौशल्यविकास व डिजिटल लिटरसी कार्यशाळा</li>
   <li>* विद्यार्थ्यांसाठी मार्गदर्शन व स्पर्धा परीक्षा तयारी कार्यक्रम</li>
</ol>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">२. आरोग्य आणि स्वच्छता: </h2>
          <div className='flex justify-between gap-1'>
           
            <div className="flex flex-col items-center">
<p>
मोफत आरोग्य तपासणी शिबिरे, रक्तदान शिबिरे, व्यसनमुक्ती जनजागृती, महिलांसाठी आरोग्यविषयक सल्ला -  </p>
<ol>
   <li>* मोफत आरोग्य तपासणी व रक्तदान शिबिरे</li>
   <li>* स्वच्छता मोहिमा व हागणदारीमुक्त अभियान</li>
   
</ol>
            </div>
            <div className="flex flex-col items-center">
              <img src="/img2.jpg" className="w-full h-48 object-cover mb-4" alt="" />
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. * महिला सक्षमीकरण व बालविकास:</h2>
          <div className='flex justify-center gap-4'>
            <div className="flex flex-col items-center">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col items-center">
<p>
महिला बचत गट प्रशिक्षण, कौशल्य विकास वर्ग, बालसंगोपन व शिक्षण जनजागृती - </p>
<ol>
   <li>* स्वयंरोजगार प्रशिक्षण (शिवणकला, ब्युटी पार्लर, पाककला इ.)</li>
   <li>* महिलांसाठी आरोग्य तपासणी शिबिरे</li>
   <li>* घरगुती हिंसाचाराविरोधात जनजागृती</li>
</ol>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">४.युवा सशक्तीकरण </h2>
          <div className='flex justify-center gap-4'>
           
            <div className="flex flex-col items-center">
<p>
करिअर मार्गदर्शन, व्यक्तिमत्त्व विकास, स्वयंरोजगार प्रशिक्षण व उद्योजकतेला प्रोत्साहन -  </p>
<ol>
   <li>* युवा नेतृत्व विकास शिबिरे</li>
   <li>* क्रीडा, सांस्कृतिक आणि सामाजिक स्पर्धांचे आयोजन</li>
   
</ol>
            </div>
            <div className="flex flex-col items-center">
              <img src="" alt="" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">५. पर्यावरण संवर्धन:</h2>
          <div className='flex justify-center gap-4'>
            <div className="flex flex-col items-center">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col items-center">
<p>
वृक्षारोपण, स्वच्छता अभियान, प्लास्टिकमुक्त मोहिमा आणि जनजागृती रॅली - </p>
<ol>
   <li>* वृक्षारोपण उपक्रम </li>
   <li>  * जलसंवर्धन व प्लास्टिकमुक्त मोहिमा   </li>
   
</ol>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">६. अल्पसंख्यांक सेवा, सामाजिक न्याय आणि मदतीचे कार्य: </h2>
          <div className='flex justify-center gap-4'>
           
            <div className="flex flex-col items-center">
<p>
शासनाच्या योजनांची माहिती व लाभ मिळवून देणे, अधिकार जनजागृती, ओळख प्रमाणपत्र व मदतीसाठी सहाय्य
</p>
<ol>
   <li> * अनाथ, विधवा, अपंग व वृद्धांसाठी मदत
   </li>
   <li>   * नैसर्गिक आपत्तीग्रस्तांना अन्नधान्य व आर्थिक मदत
   </li>
   
</ol>
            </div>
            <div className="flex flex-col items-center">
              <img src="" alt="" />
            </div>
          </div>
        </section>
        <div className="flex justify-center">
<p className="text-lg mt-10 text-center">संस्था शासकीय व अशासकीय यंत्रणांशी समन्वय साधून गरजूंना योजना, सुविधा व मदतीसाठी पूल म्हणून काम करते. आमच्या कार्यामध्ये पारदर्शकता, सेवाभाव आणि समर्पण हे मूळ तत्त्व आहेत.</p>
        </div>
        
        
          <h2 className='text-center font-semibold text-3xl mt-10'>आमचे ध्येय</h2>
        <div className="flex justify-center mt-5  text-xl  ">
          <p className='text-center w-1/2 bg-orange-200  rounded-2xl p-4'>
        "समाजासाठी, समाजाबरोबर" या तत्त्वावर काम करत, आम्ही एक सशक्त, आत्मनिर्भर व समता निष्ठ समाज निर्माण करण्याचे स्वप्न पाहतो.
        पार्श्वनाथ संस्था ही केवळ एक संस्था नाही, तर एक चळवळ आहे — गरजूंना न्याय, शिक्षण, आरोग्य व संधी मिळवून देण्यासाठी अविरत कार्य करणारी
        </p>
        </div>

          <h2 className='text-center font-semibold text-3xl mt-10'>📜 स्थापनेचा इतिहास:</h2>
        <div className="flex justify-center mt-5  text-xl  ">
          <p className='text-center  bg-orange-300  rounded-2xl p-4'>
          
पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्थेची स्थापना हिंगोली जिल्ह्यात सामाजिक, शैक्षणिक व अल्पसंख्यांक समुदायाच्या सर्वांगीण विकासाच्या उद्देशाने काही तरुण सेवाभावी कार्यकर्त्यांच्या पुढाकाराने करण्यात आली. समाजातील उपेक्षित घटकांपर्यंत मूलभूत सेवा पोहोचविणे, शिक्षणाची गंगा घराघरात नेणे व अल्पसंख्यांक समाजाचा हक्काचा आवाज शासनदरबारी पोहोचवणे या उद्देशाने संस्था कार्यरत झाली.

संस्थेचा आधार भगवान पार्श्वनाथांच्या अहिंसा, करूणा व समभावाच्या तत्त्वांवर आधारित आहे. या तत्त्वांच्या प्रेरणेने संस्था समाजसेवेचे कार्य सातत्याने करत आहे.

        </p>
        </div>
          <h2 className='text-center font-semibold text-3xl mt-10'>🌟 मूलतत्त्वे  </h2>
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 flex items-center justify-center ">
      <div className="relative w-[500px] h-[500px]">
        
        {/* Center Core */}
        <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-yellow-300 rounded-full shadow-2xl flex flex-col items-center justify-center text-center font-bold text-gray-800 text-lg animate-pulse z-10">
          🌟<br />मूलतत्त्वे<br />
        </div>

        {/* Point 1 - Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-40">
          <FaBalanceScale className="text-yellow-500 text-2xl mb-1" />
          <div className="bg-white rounded-lg p-2 shadow-md">
            <h3 className="font-semibold text-sm">अहिंसा व समभाव</h3>
            <p className="text-xs">सर्व धर्म व जातींमध्ये समता व बंधुभाव.</p>
          </div>
        </div>

        {/* Point 2 - Top Left */}
        <div className="absolute top-[20%] left-[5%] flex flex-col items-center text-center w-40">
          <FaBook className="text-blue-500 text-2xl mb-1" />
          <div className="bg-white rounded-lg p-2 shadow-md">
            <h3 className="font-semibold text-sm">शैक्षणिक प्रगती</h3>
            <p className="text-xs">शिक्षण हेच खरे साधन.</p>
          </div>
        </div>

        {/* Point 3 - Bottom Left */}
        <div className="absolute bottom-[10%] left-[10%] flex flex-col items-center text-center w-40">
          <FaGavel className="text-red-500 text-2xl mb-1" />
          <div className="bg-white rounded-lg p-2 shadow-md">
            <h3 className="font-semibold text-sm">न्याय व हक्क</h3>
            <p className="text-xs">दुर्बल घटकांच्या हक्कासाठी प्रयत्न.</p>
          </div>
        </div>

        {/* Point 4 - Bottom Right */}
        <div className="absolute bottom-[10%] right-[10%] flex flex-col items-center text-center w-40">
          <FaHandsHelping className="text-green-500 text-2xl mb-1" />
          <div className="bg-white rounded-lg p-2 shadow-md">
            <h3 className="font-semibold text-sm">सेवा हीच साधना</h3>
            <p className="text-xs">कोणतीही जात, धर्म न पाहता सेवा.</p>
          </div>
        </div>

        {/* Point 5 - Top Right */}
        <div className="absolute top-[20%] right-[5%] flex flex-col items-center text-center w-40">
          <FaTools className="text-purple-500 text-2xl mb-1" />
          <div className="bg-white rounded-lg p-2 shadow-md">
            <h3 className="font-semibold text-sm">स्वावलंबन</h3>
            <p className="text-xs">युवकांना कौशल्ये देणे.</p>
          </div>
        </div>

      </div>
    </div>

<h2 className='text-center font-semibold text-3xl mt-10 '>🎯 उद्दिष्टे</h2>
    <div className='grid grid-cols-2 gap-4 mt-5 '>
<div className='flex flex-col items-center rounded-3xl p-4 bg-orange-200'>अल्पसंख्यांक समाजासाठी शैक्षणिक संस्था, वसतिगृहे, वाचनालये स्थापन करणे.</div>
<div className='flex flex-col items-center rounded-3xl p-4 bg-orange-200'>महिलांसाठी बचत गट, प्रशिक्षण केंद्रे व सक्षमीकरण प्रकल्प राबवणे.
</div>
<div className='flex flex-col items-center rounded-3xl p-4 bg-orange-200'>गरीब, अनाथ, अपंग व मानसिक रुग्णांसाठी सेवा प्रकल्प उभारणे.
</div>
<div className='flex flex-col items-center rounded-3xl p-4 bg-orange-200'>आरोग्य शिबिरे, रक्तदान शिबिरे व सामाजिक जनजागृती उपक्रम राबवणे.</div>
<div className='flex flex-col items-center rounded-3xl p-4 bg-orange-200'>पर्यावरण पूरक उपक्रम जसे की वृक्षारोपण, स्वच्छता अभियान राबवणे.
</div>
<div className='flex flex-col items-center rounded-3xl p-4 bg-orange-200'>शासनाच्या योजनांचा लाभ गरजूंपर्यंत पोहोचवण
.</div>
    </div>
      </div>
    </main>
  );
}
