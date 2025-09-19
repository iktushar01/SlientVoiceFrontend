import { FaUserSecret, FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaShieldAlt, FaLock, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <FaUserSecret className="text-2xl text-indigo-400 mr-2" />
              <span className="text-xl font-bold">SilentVoices</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              A secure platform for anonymous civic reporting and raising awareness about important issues.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Report an Issue</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Browse Reports</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Community Guidelines</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Safety Tips</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Security Badge */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Your Privacy</h3>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <FaLock className="text-indigo-400 mr-2" />
                <span className="font-medium">Protected Reporting</span>
              </div>
              <p className="text-gray-400 text-xs">
                All reports are completely anonymous. We never store personal information or metadata.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            <FaShieldAlt className="mr-1 text-indigo-400" />
            <span>© {new Date().getFullYear()} SilentVoices. All rights reserved.</span>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span className="flex items-center">
              Made with <FaHeart className="text-red-400 mx-1" /> for a better society
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;