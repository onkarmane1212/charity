import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { aosConfig, sectionAnimations } from '@/utils/aosUtils';

const features = [
  {
    name: 'आमचे ध्येय',
    description:
      'शिक्षण, आरोग्यसेवा आणि जीविकेच्या क्षेत्रातील शाश्वत विकास कार्यक्रमांद्वारे वंचित समुदायांना सक्षम करणे.',
    icon: '🌱',
  },
  {
    name: 'आमचे ध्येय',
    description:
      'एक असे जग जिथे प्रत्येक व्यक्तीला त्यांची संपूर्ण क्षमता जाणून घेण्यासाठी आणि सन्मानाने जगण्यासाठी संधी मिळेल.',
    icon: '✨',
  },
  {
    name: 'आमची मूल्ये',
    description:
      'करुणा, प्रामाणिकपणा, जबाबदारी, समावेशकता आणि शाश्वतता ही आमच्या प्रत्येक कार्याची मार्गदर्शक तत्त्वे आहेत.',
    icon: '❤️',
  },
];

export default function About() {
  return (
    <div className="py-16 bg-white sm:py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center" {...sectionAnimations.sectionHeader.title}>
          <SectionTitle
            title="पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था बद्दल"
            subtitle="आम्ही कोण आहोत"
            description="पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था ही एक ना-नफा संस्था आहे जी शाश्वत विकास उपक्रमांद्वारे समुदायातील टिकावू बदल घडवून आणण्यासाठी समर्पित आहे."
          />
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div
              className="relative h-64 sm:h-96 lg:h-full"
              {...aosConfig.fadeLeft}
            >
              <div className="absolute inset-0 bg-emerald-50 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <span className="text-6xl">📷</span>
                </div>
              </div>
            </div>

            <div className="lg:py-8">
              <div className="space-y-12">
                {features.map((feature, index) => (
                  <div
                    key={`${feature.name}-${index}`}
                    className="flex"
                    {...sectionAnimations.feature.container(index)}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white text-2xl">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12" {...aosConfig.fadeUp} data-aos-delay="300">
                <Button variant="outline" className="mt-8">आमच्याबद्दल अधिक जाणा</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
