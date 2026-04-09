import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinLogo, TwitterLogo, GithubLogo, EnvelopeSimple } from '@phosphor-icons/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold">NexaTech</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. Building the future, one innovation at a time.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-500 transition-colors"
                data-testid="footer-linkedin-link"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-500 transition-colors"
                data-testid="footer-twitter-link"
                aria-label="Twitter"
              >
                <TwitterLogo size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-500 transition-colors"
                data-testid="footer-github-link"
                aria-label="GitHub"
              >
                <GithubLogo size={24} />
              </a>
              <a
                href="mailto:hello@nexatech.com"
                className="text-zinc-400 hover:text-blue-500 transition-colors"
                data-testid="footer-email-link"
                aria-label="Email"
              >
                <EnvelopeSimple size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-zinc-50 font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-zinc-50 text-sm transition-colors" data-testid="footer-home-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-zinc-50 text-sm transition-colors" data-testid="footer-about-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-400 hover:text-zinc-50 text-sm transition-colors" data-testid="footer-services-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-zinc-400 hover:text-zinc-50 text-sm transition-colors" data-testid="footer-portfolio-link">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-zinc-50 font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-zinc-400">San Francisco, CA</li>
              <li className="text-zinc-400">hello@nexatech.com</li>
              <li className="text-zinc-400">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-zinc-500 text-sm">
              © {currentYear} NexaTech. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;