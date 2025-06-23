import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import AOSProvider from '@/components/AOSProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#10B981',
};

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Charifit - Empowering Communities Through Compassion',
  description: 'Join us in making a difference through our charitable initiatives and community programs.',
  keywords: ['charity', 'donation', 'ngo', 'non-profit', 'community service'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://charifit.org',
    title: 'पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था - Empowering Communities Through Compassion',
    description: 'Join us in making a difference through our charitable initiatives and community programs.',
    siteName: 'Charifit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charifit - Empowering Communities',
    description: 'Making a difference through charitable initiatives and community programs.',
    creator: '@charifit',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr" dir="ltr" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-gray-50 text-gray-800`}>
        <div className="flex flex-col min-h-screen">
          <AOSProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </AOSProvider>
        </div>
      </body>
    </html>
  );
}
