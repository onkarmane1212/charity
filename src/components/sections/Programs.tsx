import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { aosConfig, sectionAnimations } from '@/utils/aosUtils';

const programs = [
  {
    title: 'सर्वांसाठी शिक्षण',
    description:
      'समुदाय शाळा आणि डिजिटल शिक्षण केंद्रांच्या माध्यमातून वंचित मुलांना गुणवत्ताप्रधान शिक्षण आणि शैक्षणिक संसाधने पुरविणे.',
    icon: '📚',
    stats: '२,५००+ विद्यार्थ्यांना शिक्षण',
  },
  {
    title: 'आरोग्यसेवा प्रवेश',
    description:
      'वैद्यकीय शिबिरे, आरोग्य जागरूकता कार्यक्रम आयोजित करणे आणि दुर्गम भागातील लोकांना आवश्यक आरोग्यसेवा पुरविणे.',
    icon: '🏥',
    stats: '५०+ आरोग्य शिबिरे आयोजित',
  },
  {
    title: 'महिला सक्षमीकरण',
    description:
      'महिलांना आर्थिक स्वातंत्र्य मिळविण्यासाठी आवश्यक असलेली कौशल्ये आणि उद्योजकता प्रशिक्षण कार्यक्रम.',
    icon: '💪',
    stats: '१,२००+ महिलांना प्रशिक्षण',
  },
  {
    title: 'पर्यावरणीय शाश्वतता',
    description:
      'वृक्षारोपण मोहिमा, कचरा व्यवस्थापन उपक्रम आणि पर्यावरण संवर्धनासाठी जागरूकता मोहिमा.',
    icon: '🌳',
    stats: '१०,०००+ झाडे लावली',
  },
];

export default function Programs() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div {...sectionAnimations.sectionHeader.title}>
          <SectionTitle
            title="आमचे कार्यक्रम"
            subtitle="बदल घडवून आणणे"
            description="आम्ही शिक्षण, आरोग्यसेवा, महिला सक्षमीकरण आणि पर्यावरणीय शाश्वततेवर भर देऊन विविध उपक्रम राबवतो ज्यामुळे दीर्घकाळ टिकणारा परिणाम निर्माण होतो."
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              {...sectionAnimations.card.container(index)}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <p className="text-sm font-medium text-emerald-600">
                  {program.stats}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" {...aosConfig.fadeUp} data-aos-delay="400">
          <Button variant="outline" size="sm" className="mt-4">
                अधिक जाणा
              </Button>
        </div>
      </div>
    </div>
  );
}
