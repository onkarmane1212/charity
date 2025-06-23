import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'आमच्याशी संपर्क साधा - चॅरिफिट',
  description: 'चौकशी, भागीदारी किंवा आमच्या उपक्रमांबद्दल अधिक जाणून घेण्यासाठी आमच्या संघाशी संपर्क साधा.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">आमच्याशी संपर्क साधा</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">संपर्क साधा</h2>
              <p className="text-gray-600 mb-6">
                तुम्हाला प्रश्न आहेत किंवा आमच्या कार्यक्रमांबद्दल अधिक जाणून घ्यायचे आहे? खालील संपर्क फॉर्म किंवा 
                संपर्क माहिती वापरून आमच्याशी संपर्क साधा.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">ईमेल</h3>
                  <p className="text-gray-600">info@charifit.org</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">फोन</h3>
                  <p className="text-gray-600">+९१ ९८७६५ ४३२१०</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">पत्ता</h3>
                  <p className="text-gray-600">
                    १२३ दानशूर वाट<br />
                    मुंबई, महाराष्ट्र ४००००१<br />
                    भारत
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">नाव</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">ईमेल</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">विषय</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">संदेश</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    संदेश पाठवा
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
