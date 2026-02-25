import { Mail, MapPin, Clock, Sparkles, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import valentinLogo from '@/assets/valentin-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/produkte', label: 'Produkte' },
    { to: '/services', label: 'Services' },
    { to: '/ueber-uns', label: 'Über uns' }
  ];

  const legalLinks = [
    { to: '/impressum', label: 'Impressum' },
    { to: '/datenschutz', label: 'Datenschutz' },
    { to: '/agb', label: 'AGB' },
    { to: '/widerrufsrecht', label: 'Widerrufsrecht' }
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-20 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <img src={valentinLogo} alt="Valentin Heizöl" className="h-10" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Ihr zuverlässiger Partner für Heizöl in Deutschland mit über 20 Jahren Erfahrung. 
              Qualität, Service und faire Preise.
            </p>
            <div>
              <div className="font-medium text-white text-sm">Valentin GmbH</div>
              <div className="text-xs text-gray-500">Deutschlands Heizöl-Experte</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-gray-500 flex-shrink-0" />
                <a href="tel:+4961316365855" className="hover:text-white transition-colors">06131-6365855</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-gray-500 flex-shrink-0" />
                <span>info@valentin-heizoel.de</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Rheinallee 187</div>
                  <div>55120 Mainz</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Öffnungszeiten</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock size={16} className="text-gray-500 flex-shrink-0" />
              <span>Service-Hotline</span>
            </div>
            <div className="space-y-1.5 text-xs text-gray-500">
              <div>Mo - Fr: 08:00 - 18:00</div>
              <div>Sa: 09:00 - 14:00</div>
              <div>So: Notfall-Hotline</div>
            </div>
            
            <div className="rounded-xl p-4 bg-gray-800/50 border border-gray-800">
              <div className="flex items-center gap-1.5 text-primary-400 text-xs font-semibold mb-1.5">
                <Sparkles size={12} />
                <span>24/7 Notfall-Service</span>
              </div>
              <div className="text-xs text-gray-500">
                Bei Heizungsausfällen erreichen Sie uns rund um die Uhr
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-xs">
              © {currentYear} Valentin GmbH. Alle Rechte vorbehalten.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              {legalLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
