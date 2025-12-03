import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';

export const InfoBox: React.FC = () => {
  return (
    <div className="bg-white/95 backdrop-blur-md w-full max-w-3xl mx-auto p-8 rounded-3xl shadow-xl border-t-8 border-[#FA8072] transform transition-all duration-200 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] cursor-default">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 border-b-2 border-orange-100 pb-4 select-none">
        معلومات التواصل
      </h2>

      <div className="space-y-6">
        {/* Phone Section */}
        <div className="flex items-start gap-4 text-gray-800 group cursor-pointer active:scale-95 transition-transform p-3 rounded-2xl hover:bg-orange-50 border border-transparent hover:border-orange-100">
          <div className="bg-orange-100 p-3 rounded-2xl group-hover:bg-[#FA8072] group-hover:text-white transition-colors shrink-0 mt-1 shadow-sm">
            <Phone className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col items-start w-full gap-1">
            <a 
              href="tel:+963957432958" 
              className="text-xl font-bold tracking-wide hover:text-[#FA8072] transition-colors"
              style={{ direction: 'ltr', unicodeBidi: 'plaintext', textAlign: 'right' }}
            >
              +963 957 432 958
            </a>
            <a 
              href="tel:+963993986953" 
              className="text-xl font-bold tracking-wide hover:text-[#FA8072] transition-colors"
              style={{ direction: 'ltr', unicodeBidi: 'plaintext', textAlign: 'right' }}
            >
              +963 993 986 953
            </a>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center gap-4 text-gray-800 group cursor-pointer active:scale-95 transition-transform p-3 rounded-2xl hover:bg-orange-50 border border-transparent hover:border-orange-100">
          <div className="bg-orange-100 p-3 rounded-2xl group-hover:bg-[#FA8072] group-hover:text-white transition-colors shrink-0 shadow-sm">
            <Mail className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <a 
            href="mailto:Cookies.hama@tuta.io" 
            className="text-lg md:text-xl font-bold break-all hover:text-[#FA8072] transition-colors"
          >
            Cookies.hama@tuta.io
          </a>
        </div>

        {/* Address Section */}
        <div className="flex items-center gap-4 text-gray-800 group cursor-pointer active:scale-95 transition-transform p-3 rounded-2xl hover:bg-orange-50 border border-transparent hover:border-orange-100">
          <div className="bg-orange-100 p-3 rounded-2xl group-hover:bg-[#FA8072] group-hover:text-white transition-colors shrink-0 shadow-sm">
            <MapPin className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <span className="text-lg md:text-xl font-bold leading-relaxed group-hover:text-[#FA8072] transition-colors">
            سوريا – حماة – شارع الزاغة
            <span className="block text-sm md:text-base font-semibold text-gray-500 mt-1">مقابل سنتر الجمان</span>
          </span>
        </div>
      </div>

      {/* Social & WhatsApp Section */}
      <div className="mt-10 pt-8 border-t-2 border-orange-100 flex flex-col md:flex-row gap-6 items-center justify-between">
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/963957432958"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-bold shadow-lg shadow-green-200 transition-all hover:-translate-y-1 active:scale-95 active:shadow-none"
        >
          <MessageCircle className="w-6 h-6 animate-pulse" strokeWidth={2.5} />
          <span className="text-lg">راسلنا عبر واتساب</span>
        </a>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 w-full md:w-auto">
            <a 
              href="https://www.facebook.com/share/1EVGzxvb3y/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 transition-transform active:scale-90"
            >
                <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-[#1877F2] transition-colors shadow-sm ring-1 ring-blue-100">
                    <Facebook className="w-7 h-7 text-[#1877F2] group-hover:text-white transition-colors" strokeWidth={2.5} />
                </div>
                <span className="text-xs text-gray-600 font-bold group-hover:text-[#1877F2]">فيسبوك</span>
            </a>
            
            <a 
              href="https://www.instagram.com/cookies.hama?igsh=bWx0YWIydjRiOGZn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 transition-transform active:scale-90"
            >
                <div className="p-4 bg-pink-50 rounded-2xl group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 transition-all shadow-sm ring-1 ring-pink-100">
                    <Instagram className="w-7 h-7 text-[#E4405F] group-hover:text-white transition-colors" strokeWidth={2.5} />
                </div>
                <span className="text-xs text-gray-600 font-bold group-hover:text-[#E4405F]">انستغرام</span>
            </a>
        </div>
      </div>
    </div>
  );
};