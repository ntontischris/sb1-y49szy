import React from 'react';
import { Link } from 'react-router-dom';
import { School, Bot, Users, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <School className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Φροντιστήριο Online</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/student" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Μαθητές</Link>
            <Link to="/parent" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Γονείς</Link>
            <Link to="/teacher" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Καθηγητές</Link>
            <Link to="/admin" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Διαχείριση</Link>
            <Link to="/ai-educators" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out">
              <Bot className="h-4 w-4 mr-1" />
              AI Εκπαιδευτικοί
            </Link>
            <Link to="/secretarial" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out">
              <FileText className="h-4 w-4 mr-1" />
              Γραμματεία
            </Link>
            <Link to="/support" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Υποστήριξη</Link>
          </div>
          <div className="md:hidden">
            {/* Εδώ θα μπορούσαμε να προσθέσουμε ένα μενού για κινητές συσκευές */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;