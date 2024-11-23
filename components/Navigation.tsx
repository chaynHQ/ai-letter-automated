import Image from 'next/image';
import logo from '/public/branding.png';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" className="h-8 w-8" />
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About Chayn
            </Link>
            <Link href="/get-involved" className="text-gray-700 hover:text-gray-900">
              Get involved
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-gray-900">
              All resources
            </Link>
            <Link href="/help" className="text-gray-700 hover:text-gray-900">
              Get help
            </Link>
            <Link href="/relax" className="text-gray-700 hover:text-gray-900">
              Relax
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}