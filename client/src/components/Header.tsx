import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import cascadeLogo from "@assets/IMG_20250326_154818-removebg-preview.png";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const [location] = useLocation();
  const isActive = location === href;
  
  return (
    <Link href={href}>
      <a className={`text-sm font-medium ${isActive ? "text-[#3B82F6]" : "text-[#475569] hover:text-[#3B82F6]"} transition-colors`}>
        {children}
      </a>
    </Link>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center space-x-2">
                <img src={cascadeLogo} alt="Cascade Space Logo" className="h-10" />
                <span className="text-xl font-bold text-[#0F172A]">Cascade Space</span>
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Link href="/contact">
              <Button className="ml-2 px-4 py-2 text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#1E40AF] rounded-md transition-colors">
                Get Started
              </Button>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3 px-2 space-y-1">
            <Link href="/">
              <a className="block py-2 px-3 text-sm font-medium text-[#475569] rounded-md hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="block py-2 px-3 text-sm font-medium text-[#475569] rounded-md hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
            </Link>
            <Link href="/services">
              <a className="block py-2 px-3 text-sm font-medium text-[#475569] rounded-md hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
            </Link>
            <Link href="/contact">
              <a className="block py-2 px-3 text-sm font-medium text-[#475569] rounded-md hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </Link>
            <Link href="/contact">
              <a className="block py-2 px-3 mt-2 text-sm font-medium text-white bg-[#3B82F6] rounded-md hover:bg-[#1E40AF]" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
