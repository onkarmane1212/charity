import SectionTitle from '../ui/SectionTitle';
import { aosConfig, sectionAnimations } from '@/utils/aosUtils';

const testimonials = [
  {
    id: 1,
    quote: 'पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्थाच्या शिक्षण कार्यक्रमामुळे माझ्या मुलांना आता गुणवत्ताप्रधान शिक्षण आणि एक उज्ज्वल भवितव्य मिळाले आहे.',
    author: 'राजेश कुमार',
    role: 'पालक आणि समुदाय सदस्य',
    avatar: '👨',
  },
  {
    id: 2,
    quote: 'महिला सक्षमीकरण कार्यक्रमामुळे मला स्वतःचे शिवणकामाचे व्यवसाय सुरू करण्यासाठी कौशल्ये आणि आत्मविश्वास मिळाला. आता मी आर्थिकदृष्ट्या स्वतंत्र आहे.',
    author: 'सुनीता देवी',
    role: 'उद्योजक',
    avatar: '👩',
  },
  {
    id: 3,
    quote: 'स्वयंसेवक म्हणून, मी पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्थाचा समुदायावर होणाऱ्या विलक्षण परिणामाला प्रत्यक्ष पाहिले आहे. त्यांचे कार्य खरोखरच परिवर्तनात्मक आहे.',
    author: 'अमित पटेल',
    role: 'स्वयंसेवक',
    avatar: '🧑',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-16 sm:py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div {...sectionAnimations.sectionHeader.title}>
          <SectionTitle
            title="परिणामांच्या गोष्टी"
            subtitle="प्रतिसाद"
            description="आमच्या कामाने ज्यांचे जीवन स्पर्शले आहेत अशा लोकांचे अनुभव ऐका."
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              {...sectionAnimations.card.container(index)}
            >
              <div className="text-5xl mb-4">{testimonial.avatar}</div>
              <blockquote className="mt-4">
                <p className="text-lg text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <div className="mt-6">
                <p className="text-base font-medium text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" {...aosConfig.fadeUp} data-aos-delay="300">
          <a
            href="#"
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            अधिक कथा वाचा <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
