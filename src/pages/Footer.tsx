import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black font-display mb-12">
          LET'S CREATE SOMETHING <br />
          <span className="text-[#a8ff35]">POWERFUL</span> TOGETHER
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-4xl mx-auto">
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4">
              Email
            </h4>
            <a
              href="mailto:hello@visualmind.com"
              className="text-xl md:text-2xl font-bold hover:text-[#a8ff35] transition-colors"
            >
              vcts.official@outlook.com
            </a>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4">
              Phone
            </h4>
            <a
              href="tel:+201125711638"
              className="text-xl md:text-2xl font-bold hover:text-[#a8ff35] transition-colors"
            >
              +94 74 320 3091
            </a>
          </div>
          {/* <div>
            <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4">
              Social
            </h4>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-[#a8ff35] transition-colors">
                Behance
              </a>
              <a href="#" className="hover:text-[#a8ff35] transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-[#a8ff35] transition-colors">
                Instagram
              </a>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-gray-500 text-sm">
          <p>© 2026 Vision Creative Tech Solutions. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
