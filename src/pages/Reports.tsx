import React from 'react';
import { BarChart, PieChart, TrendingUp } from 'lucide-react';

const Reports: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Αναφορές και Στατιστικά</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-purple-100 p-4 rounded-lg flex items-center">
          <BarChart className="h-8 w-8 text-purple-600 mr-3" />
          <div>
            <h2 className="font-semibold">Στατιστικά Μαθητών</h2>
            <p className="text-sm">Βαθμολογίες και απουσίες</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
          <PieChart className="h-8 w-8 text-yellow-600 mr-3" />
          <div>
            <h2 className="font-semibold">Οικονομικές Αναφορές</h2>
            <p className="text-sm">Έσοδα και έξοδα</p>
          </div>
        </div>
        <div className="bg-teal-100 p-4 rounded-lg flex items-center">
          <TrendingUp className="h-8 w-8 text-teal-600 mr-3" />
          <div>
            <h2 className="font-semibold">Τάσεις</h2>
            <p className="text-sm">Ανάλυση τάσεων</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;