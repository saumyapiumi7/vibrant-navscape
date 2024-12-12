import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Mail className="h-5 w-5" />
              SmartBox
            </h3>
            <p className="text-blue-200">
              Intelligent letterbox solutions for the modern world
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="/technology" className="text-blue-200 hover:text-white transition-colors">Technology</a></li>
              <li><a href="/about" className="text-blue-200 hover:text-white transition-colors">About</a></li>
              <li><a href="/dashboard" className="text-blue-200 hover:text-white transition-colors">Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-blue-200">
                <Mail size={16} />
                info@smartbox.com
              </li>
              <li className="flex items-center gap-2 text-blue-200">
                <Phone size={16} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-blue-200">
                <MapPin size={16} />
                123 Smart Street
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} SmartBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;