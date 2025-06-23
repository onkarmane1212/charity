import Button from '../ui/Button';
import { aosConfig } from '@/utils/aosUtils';

export default function CallToAction() {
  return (
    <div className="bg-emerald-700" id="cta">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div
          className="lg:w-2/3"
          {...aosConfig.fadeRight}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">बदल घडवून आणण्यासाठी तयार आहात?</span>
            <span className="block text-emerald-100">आजच आमच्या मोहिमेत सामील व्हा.</span>
          </h2>
          <p className="mt-3 text-lg text-emerald-50">
            तुमच्या पाठिंब्यामुळे जीवन बदलू शकतात आणि समुदायात टिकावू बदल घडवून आणता येऊ शकतात.
            दान, स्वयंसेवा किंवा जागरूकता पसरविणे यातील प्रत्येक योगदान महत्त्वाचे आहे.
          </p>
        </div>
        <div 
          className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          {...aosConfig.fadeUp}
          data-aos-delay="200"
        >
          <div className="inline-flex rounded-md shadow">
            <Button 
              as="a"
              href="/donate"
              size="lg"
              className="bg-white text-emerald-700 hover:bg-gray-100"
            >
              आता दान करा
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button 
              as="a"
              href="/involve"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-emerald-600"
            >
              सहभागी व्हा
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
