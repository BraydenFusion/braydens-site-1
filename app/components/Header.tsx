import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="px-6 py-2">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-800 hover:text-black transition-colors"
          >
          <Image src="/logo/site-logo-braydensautomations1.png" alt="Logo" width={100} height={100} style={{ width: "auto", height: "auto" }} />
          </Link>
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link 
                href="#home" 
                className="text-gray-800 hover:text-black transition-colors text-base font-normal"
              >
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#experience" 
                className="text-gray-800 hover:text-black transition-colors text-base font-normal"
              >
                My Work
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#contact" 
                className="text-gray-800 hover:text-black transition-colors text-base font-normal"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

