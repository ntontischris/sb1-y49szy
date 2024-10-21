import React from 'react';
import { Calendar, Clock, Edit } from 'lucide-react';

const Schedule: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Πρόγραμμα</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-100 p-4 rounded-lg flex items-center">
          <Calendar className="h-8 w-8 text-indigo-600 mr-3" />
          <div>
            <h2 className="font-semibold">Εβδομαδιαίο Πρόγραμμα</h2>
            <p className="text-sm">Δείτε το πρόγραμμα της εβδομάδας</p>
          </div>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg flex items-center">
          <Clock className="h-8 w-8 text-pink-600 mr-3" />
          <div>
            <h2 className="font-semibold">Ωρολόγιο Πρόγραμμα</h2>
            <p className="text-sm">Προβολή ωρολογίου προγράμματος</p>
          </div>
        </div>
        <div className="bg-orange-100 p-4 rounded-lg flex items-center">
          <Edit className="h-8 w-8 text-orange-600 mr-3" />
          <div>
            <h2 className="font-semibold">Επεξεργασία</h2>
            <p className="text-sm">Τροποποιήστε το πρόγραμμα</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;