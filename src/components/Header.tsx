import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { scrollToCalculator, scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';
import valentinLogo from '@/assets/valentin-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderClick = () => {
    if (isHomePage) {
      scrollToCalculator();
    } else {
      scrollToCalculatorFromOtherPage();
    }
  };

  const navItems = [
    { to: '/', label: 'Startseite' },
    { to: '/produkte', label: 'Produkte' },
    { to: '/services', label: 'Services' },
    { to: '/ueber-uns', label: 'Über uns' }
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 hidden lg:block transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/60" 
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src={valentinLogo} 
                alt="Valentin Heizöl" 
                className="h-9"
              />
            </Link>

            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg",
                    location.pathname === item.to 
                      ? "text-primary-600" 
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              
              <Button 
                onClick={handleOrderClick}
                className="ml-4 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-200"
              >
                Jetzt bestellen
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-200/60">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center h-14">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <img 
                src={valentinLogo} 
                alt="Valentin Heizöl" 
                className="h-7"
              />
            </Link>
          </div>

          <div className={cn(
            "overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-80 pb-4 opacity-100" : "max-h-0 opacity-0"
          )}>
            <nav className="space-y-1 pt-2">
              {navItems.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className={cn(
                    "block py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200",
                    location.pathname === item.to 
                      ? "bg-primary-50 text-primary-600" 
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
