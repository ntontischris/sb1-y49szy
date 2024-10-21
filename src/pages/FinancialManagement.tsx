import React from 'react';
import { DollarSign, CreditCard, PieChart } from 'lucide-react';

const FinancialManagement: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Οικονομική Διαχείριση</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <DollarSign className="h-8 w-8 text-green-600 mr-3" />
          <div>
            <h2 className="font-semibold">Έσοδα</h2>
            <p className="text-sm">Παρακολούθηση εσόδων</p>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg flex items-center">
          <CreditCard className="h-8 w-8 text-red-600 mr-3" />
          <div>
            <h2 className="font-semibold">Πληρωμές</h2>
            <p className="text-sm">Διαχείριση πληρωμών</p>
          </div>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <PieChart className="h-8 w-8 text-blue-600 mr-3" />
          <div>
            <h2 className="font-semibold">Αναφορές</h2>
            <p className="text-sm">Οικονομικές αναφορές</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialManagement;