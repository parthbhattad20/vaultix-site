import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                VAULTIX
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Next-Gen ITSM Platform for unified asset management, SBOM tracking, and intelligent ticket resolution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4 text-purple-500" />
                <span>contact@vaultix.in</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4 text-purple-500" />
                <span>+91 (123) 456-7890</span>
              </li>
              <li className="flex items-start space-x-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 text-purple-500 mt-1" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vaultix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
