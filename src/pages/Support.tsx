import React from 'react';
import { HelpCircle, MessageCircle, FileText } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Υποστήριξη</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
          <div>
            <h2 className="font-semibold">Συχνές Ερωτήσεις</h2>
            <p className="text-sm">Βρείτε απαντήσεις σε συχνές ερωτήσεις</p>
          </div>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
          <div>
            <h2 className="font-semibold">Επικοινωνία</h2>
            <p className="text-sm">Επικοινωνήστε με την υποστήριξη</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
          <FileText className="h-8 w-8 text-yellow-600 mr-3" />
          <div>
            <h2 className="font-semibold">Οδηγίες Χρήσης</h2>
            <p className="text-sm">Δείτε οδηγίες χρήσης της πλατφόρμας</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;