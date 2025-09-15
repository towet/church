import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import collegeLogo from '@/assets/logo.jpg';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'About', href: '/about' },
    { label: 'College President', href: '/president' },
    { label: 'Staff', href: '/staff' },
    { label: 'Programs', href: '/programs' },
    { label: 'Class Schedule', href: '/schedule' },
    { label: 'Registration', href: '/registration' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-lg border-b border-border professional-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={collegeLogo} 
              alt="The Way Bible College Logo"
              className="h-12 w-12 rounded-full animate-float"
            />
            <div className="block">
              <h1 className="text-lg sm:text-xl font-playfair font-bold text-primary">
                The Way Bible College
              </h1>
              <p className="text-xs text-muted-foreground">Established 2015</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-gold transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/registration">
              <Button variant="default" className="bg-gradient-gold text-primary font-semibold hover:shadow-gold">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Apply Button */}
          <div className="md:hidden">
            <Link to="/registration">
              <Button size="sm" variant="default" className="bg-gradient-gold text-primary font-semibold hover:shadow-gold mr-2">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border professional-shadow animate-fade-in-up">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-3 text-foreground hover:text-gold transition-colors border-b border-border/50 last:border-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};