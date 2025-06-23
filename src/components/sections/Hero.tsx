import Button from '@/components/ui/Button';
import Link from 'next/link';
import { aosConfig, sectionAnimations } from '@/utils/aosUtils';

const stats = [
  { label: 'जीवांवर परिणाम', value: '१०,०००+' },
  { label: 'समुदाय सेवा केले', value: '५०+' },
  { label: 'स्वयंसेवक', value: '५००+' },
  { label: 'सेवेचे वर्षे', value: '५+' },
];

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden" {...aosConfig.fadeUp}>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div
              className="sm:text-center lg:text-left"
              {...aosConfig.fadeUp}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block" {...aosConfig.fadeUp} data-aos-delay="100">समुदाय सक्षमीकरण</span>
                <span className="block text-emerald-600" {...aosConfig.fadeUp} data-aos-delay="200">करुणेच्या सोबत</span>
              </h1>
              <p 
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                {...aosConfig.fadeUp}
                data-aos-delay="300"
              >
                शिक्षण, आरोग्यसेवा आणि समुदाय विकास याद्वारे टिकावू बदल घडवून आणण्याच्या आमच्या मोहिमेत सामील व्हा. व्यक्तींना सक्षम करण्यासाठी आणि जीवन बदलण्यासाठी आमच्यासोबीत सामील व्हा.
              </p>
              <div 
                className="mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                {...aosConfig.fadeUp}
                data-aos-delay="400"
              >
                <Link href="/donate" passHref>
                  <Button size="lg" className="w-full sm:w-auto">
                    आता दान करा
                  </Button>
                </Link>
                <Link href="/involve" passHref>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    सहभागी व्हा
                  </Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-emerald-50" {...aosConfig.fadeUp} data-aos-delay="100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                {...sectionAnimations.card.container(index)}
              >
                <div className="text-4xl font-extrabold text-emerald-600">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
