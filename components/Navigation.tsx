import Image from "next/image";
import logo from "/public/branding.png";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="bg-peach-150 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 gap-1">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center h-[32px] w-[32px]">
              <Image src={logo} alt="logo"/>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 text-xs sm:text-base">
              About Chayn
            </Link>
            <Link
              href="/get-involved"
              className="text-gray-700 hover:text-gray-900 text-xs sm:text-base"
            >
              Get involved
            </Link>
            </div>
            <div className="flex items-center space-x-6">
            <Link
              href="/resources"
              className="text-gray-700 hover:text-gray-900 text-xs sm:text-base"
            >
              All resources
            </Link>
            <Link href="/help" className="text-gray-700 hover:text-gray-900 text-xs sm:text-base">
              Get help
            </Link>
            <Link href="/relax" className="text-gray-700 hover:text-gray-900 text-xs sm:text-base">
              Relax
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
