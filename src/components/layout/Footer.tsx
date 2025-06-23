import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'आमच्याबद्दल', href: '/about' },
    { name: 'आमचे कार्य', href: '/work' },
    { name: 'गॅलरी', href: '/gallery' },
    { name: 'कार्यक्रम', href: '/events' },
    { name: 'ब्लॉग', href: '/blog' },
    { name: 'संपर्क', href: '/contact' },
    { name: 'सामान्य प्रश्न', href: '/faq' },
    { name: 'गोपनीयता धोरण', href: '/privacy' },
    { name: 'अटी', href: '/terms' },
  ],
  social: [
    {
      name: 'फेसबुक',
      href: 'https://facebook.com/charifit',
      icon: FaFacebook,
    },
    {
      name: 'इन्स्टाग्राम',
      href: 'https://instagram.com/charifit',
      icon: FaInstagram,
    },
    {
      name: 'ट्विटर',
      href: 'https://twitter.com/charifit',
      icon: FaTwitter,
    },
    {
      name: 'युट्युब',
      href: 'https://youtube.com/charifit',
      icon: FaYoutube,
    },
    {
      name: 'लिंक्डइन',
      href: 'https://linkedin.com/company/charifit',
      icon: FaLinkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Charifit</h3>
            <p className="text-gray-300 text-sm">
              Empowering communities through compassion and sustainable development initiatives since 2020.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.main.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.main.slice(4, 7).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/volunteer"
                  className="text-sm text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  Volunteer Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="mt-4 text-sm text-gray-300 not-italic">
              <p>123 Charity Street</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p className="mt-2">
                <a href="tel:+911234567890" className="hover:text-white">
                  +91 12345 67890
                </a>
              </p>
              <p>
                <a href="mailto:info@charifit.org" className="hover:text-white">
                  info@charifit.org
                </a>
              </p>
              <div className="mt-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  Donate Now
                </Link>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm mt-8">
          &copy; {new Date().getFullYear()} चॅरिफिट. सर्व हक्क राखीव.
        </p>
          <p className="mt-2 text-center text-xs text-gray-500">
            Registered as a 501(c)(3) non-profit organization. Donations are tax-deductible.
          </p>
        </div>
      </div>
    </footer>
  );
}
