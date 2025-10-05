import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-purple-500 group-hover:text-purple-400 transition-colors" />
              <div className="absolute inset-0 bg-purple-500/20 blur-xl group-hover:bg-purple-400/30 transition-all" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              VAULTIX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
              Features
            </Link>
            <Link to="/solutions" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
              Solutions
            </Link>
            <Link to="/security" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
              Security
            </Link>
            <Link to="/industries" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
              Industries
            </Link>
            <Link to="/pricing" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-purple-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-purple-500/20">
            <Link
              to="/features"
              className="block text-slate-300 hover:text-purple-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/solutions"
              className="block text-slate-300 hover:text-purple-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/security"
              className="block text-slate-300 hover:text-purple-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Security
            </Link>
            <Link
              to="/industries"
              className="block text-slate-300 hover:text-purple-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>
            <Link
              to="/pricing"
              className="block text-slate-300 hover:text-purple-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block text-slate-300 hover:text-purple-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

