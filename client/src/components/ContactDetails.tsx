import { MapPin, Mail, Clock } from "lucide-react";

const ContactDetails = () => {
  return (
    <div>
      <div className="h-72 rounded-xl overflow-hidden shadow-lg mb-8">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Cascade Space Office" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mb-4">
            <MapPin className="w-5 h-5 text-[#3B82F6]" />
          </div>
          <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Our Location</h3>
          <p className="text-gray-600">
            1234 Tech Hub Drive<br />
            Suite 500<br />
            San Francisco, CA 94107
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mb-4">
            <Mail className="w-5 h-5 text-[#3B82F6]" />
          </div>
          <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Contact Info</h3>
          <p className="text-gray-600 mb-2">
            <a href="mailto:info@cascade.space" className="hover:text-[#3B82F6]">info@cascade.space</a>
          </p>
          <p className="text-gray-600">
            <a href="tel:+14155550123" className="hover:text-[#3B82F6]">+1 (415) 555-0123</a>
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md sm:col-span-2">
          <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mb-4">
            <Clock className="w-5 h-5 text-[#3B82F6]" />
          </div>
          <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Business Hours</h3>
          <div className="grid grid-cols-2 gap-2">
            <p className="text-gray-600">Monday - Friday:</p>
            <p className="text-gray-600">9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday:</p>
            <p className="text-gray-600">10:00 AM - 2:00 PM</p>
            <p className="text-gray-600">Sunday:</p>
            <p className="text-gray-600">Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
