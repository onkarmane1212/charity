import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'दान करा - आमच्या कारणासाठी सहभागी व्हा',
  description: 'तुमचे उदार दान आम्हाला समुदायांना सक्षम करण्याच्या आणि टिकाऊ बदल घडवून आणण्याच्या आमच्या मोहिमेला पुढे नेण्यास मदत करते.',
};

export default function DonatePage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">दान करा</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            तुमचा पाठिंबा जगभरातील समुदायांमध्ये सकारात्मक बदल घडवून आणण्यासाठी आम्हाला मदत करतो.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">एकवेळ दान</h2>
            <p className="text-gray-600 mb-6">
              आमच्या चालू असलेल्या कार्यक्रमांना आणि उपक्रमांना समर्थन देण्यासाठी एकवेळ दान करा.
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {[25, 50, 100, 250, 500, 'Other'].map((amount) => (
                  <button
                    key={amount}
                    className="px-4 py-3 border border-gray-300 rounded-md text-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    {typeof amount === 'number' ? `$${amount}` : amount}
                  </button>
                ))}
              </div>
              
              <div>
                <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                  इच्छित रक्कम (₹)
                </label>
                <input
                  type="number"
                  id="custom-amount"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="रक्कम प्रविष्ट करा"
                />
              </div>
              
              <button
                type="button"
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                आता दान करा
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">मासिक देणगी</h2>
            <p className="text-gray-600 mb-6">
              मासिक दाता बना आणि आमच्या मोहिमेला सातत्यपूर्ण पाठिंबा द्या.
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="monthly-amount" className="block text-sm font-medium text-gray-700 mb-1">
                  मासिक रक्कम (₹)
                </label>
                <input
                  type="number"
                  id="monthly-amount"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="मासिक रक्कम प्रविष्ट करा"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="dedication"
                  name="dedication"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor="dedication" className="ml-2 block text-sm text-gray-700">
                  एखाद्याच्या सन्मानार्थ किंवा स्मरणार्थ हे दान करा
                </label>
              </div>
              
              <button
                type="button"
                className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                मासिक दाता बना
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">देणगी देण्याचे इतर मार्ग</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-900">बँक हस्तांतरण</h3>
              <p className="mt-1 text-sm text-gray-600">
                खातेदाराचे नाव: चॅरिफिट फाउंडेशन<br />
                बँक: उदाहरण बँक<br />
                खाते क्रमांक: १२३४५६७८९०<br />
                SWIFT/BIC: EXMPLUS33
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">चेक</h3>
              <p className="mt-1 text-sm text-gray-600">
                चेक पेबल करा यांच्या नावे:<br />
                चॅरिफिट फाउंडेशन<br />
                १२३ दानशूर वाट<br />
                मुंबई, महाराष्ट्र ४००००१
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">कॉर्पोरेट देणगी</h3>
              <p className="mt-1 text-sm text-gray-600">
                कॉर्पोरेट प्रायोजकत्व किंवा जुळवून देणगीमध्ये रस आहे? आमच्याशी संपर्क साधा <a href="mailto:partnerships@charifit.org" className="text-emerald-600 hover:underline">partnerships@charifit.org</a> यावर
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
