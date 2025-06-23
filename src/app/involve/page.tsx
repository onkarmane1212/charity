import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'सहभागी व्हा - चॅरिफिट',
  description: 'आमच्या मोहिमेला समर्थन देण्यासाठी तुमचा वेळ, कौशल्ये आणि साधने योगदान देण्याचे अर्थपूर्ण मार्ग शोधा.',
};

const involvementOptions = [
  {
    title: 'स्वयंसेवक',
    description: 'समर्पित स्वयंसेवकांच्या आमच्या संघात सामील व्हा आणि तुमच्या समुदायात थेट प्रभाव टाका.',
    icon: '👥',
    link: '/volunteer',
    cta: 'स्वयंसेवक व्हा',
  },
  {
    title: 'आमच्यासोबत भागीदारी करा',
    description: 'व्यवसाय आणि संस्थांसाठी आमच्यासोबत सहकार्य करण्याच्या भागीदारीच्या संधी अन्वेषा करा.',
    icon: '🤝',
    link: '/partnerships',
    cta: 'भागीदारीबद्दल जाणून घ्या',
  },
  {
    title: 'निधी उभारा',
    description: 'तुमचे स्वत:चे निधी उभारणी कार्यक्रम सुरू करा आणि आमच्या कारणाला समर्थन देण्यासाठी तुमच्या नेटवर्कला एकत्र करा.',
    icon: '🎗️',
    link: '/fundraise',
    cta: 'निधी उभारणी सुरू करा',
  },
  {
    title: 'हितसंबंधी',
    description: 'हितसंबंधी बना आणि आमच्या मोहिमेबद्दल आणि उपक्रमांबद्दल जागरूकता वाढवण्यास मदत करा.',
    icon: '📢',
    link: '/advocacy',
    cta: 'हितसंबंधी व्हा',
  },
  {
    title: 'करिअर',
    description: 'आमच्या संघात सामील व्हा आणि तुमच्या आवडीला हेतुपूर्ण करिअरमध्ये रूपांतरित करा.',
    icon: '💼',
    link: '/careers',
    cta: 'रिक्त जागा पहा',
  },
  {
    title: 'कॉर्पोरेट देणगी',
    description: 'कॉर्पोरेट सामाजिक जबाबदारी कार्यक्रमांद्वारे तुमची कंपनी आमच्या कामास कशी मदत करू शकते ते जाणून घ्या.',
    icon: '🏢',
    link: '/corporate-giving',
    cta: 'कॉर्पोरेट संधी',
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">सहभागी व्हा</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            आमच्या मोहिमेत सामील होण्यासाठी आणि ज्यांच्यासाठी आम्ही काम करतो त्यांच्या जीवनात बदल घडवून आणण्यासाठी अनेक मार्ग आहेत.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {involvementOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h2>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <a
                  href={option.link}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  {option.cta}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">आमच्यासोबत स्वयंसेवक म्हणून सहभागी व्हा</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              समर्पित स्वयंसेवकांच्या आमच्या समुदायात सामील व्हा आणि अर्थपूर्ण प्रभाव टाकण्यासाठी तुमचा वेळ आणि कौशल्ये योगदान द्या.
              आमच्याकडे व्यक्ती, गट आणि कॉर्पोरेट संघांसाठी संधी उपलब्ध आहेत.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/volunteer/apply"
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                स्वयंसेवक होण्यासाठी अर्ज करा
              </a>
              <a
                href="/volunteer/opportunities"
                className="px-6 py-3 border border-emerald-600 text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                संधी पहा
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">कनेक्टेड रहा</h2>
            <p className="text-lg text-gray-600 mb-6">
              आमच्या नवीनतम उपक्रमांबद्दल, कार्यक्रमांबद्दल आणि सहभागी होण्याच्या संधींबद्दल अद्ययावत राहण्यासाठी आमच्या न्यूझलेटरसाठी साइन अप करा.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">ईमेल पत्ता</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="तुमचा ईमेल टाका"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                सदस्यता घ्या
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              आम्ही तुमची गोपनीयता पाळतो. कोणत्याही वेळी सदस्यता रद्द करू शकता.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">📬</div>
            <h3 className="text-xl font-semibold mb-2">आमचे अनुसरण करा</h3>
            <p className="text-gray-600 mb-6">नवीनतम अद्यतने आणि कथासाठी सोशल मीडियावर आमच्याशी जोडले रहा.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
