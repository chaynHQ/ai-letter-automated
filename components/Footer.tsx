import Image from 'next/image';
import logo from '/public/branding.png';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_1fr_1fr_1fr] gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" className="h-8 w-8" />
            </Link>
          </div>
          
          <div className="space-y-4">
            <Link href="/about" className="block text-gray-700 hover:text-gray-900">
              Chayn.org
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-gray-900">
              How to contact us
            </Link>
            <Link href="/projects" className="block text-gray-700 hover:text-gray-900">
              Our projects
            </Link>
            <Link href="/donate" className="block text-gray-700 hover:text-gray-900">
              Donate to Chayn
            </Link>
          </div>
          
          <div className="space-y-4">
            <Link href="/privacy" className="block text-gray-700 hover:text-gray-900">
              Privacy Policies
            </Link>
            <Link href="/terms" className="block text-gray-700 hover:text-gray-900">
              Terms of service
            </Link>
            <Link href="/policies" className="block text-gray-700 hover:text-gray-900">
              Other link policies
            </Link>
            <Link href="/accessibility" className="block text-gray-700 hover:text-gray-900">
              Accessibility
            </Link>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">id number 3949003</p>
            <p className="text-gray-600">Series of other info necessary</p>
            <p className="text-gray-600">Realized by Lorem Ipsum using Webflow</p>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-gray-700">Follow us on social media:</p>
            <div className="space-y-1">
              <Link href="#" className="block text-gray-600 hover:text-gray-900">Facebook</Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">Instagram</Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">Twitter</Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">YouTube</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}