import React from 'react';
import { Book, Plus, List } from 'lucide-react';

const CourseManagement: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Διαχείριση Μαθημάτων</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <Plus className="h-8 w-8 text-green-600 mr-3" />
          <div>
            <h2 className="font-semibold">Νέο Μάθημα</h2>
            <p className="text-sm">Δημιουργήστε νέο μάθημα</p>
          </div>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <List className="h-8 w-8 text-blue-600 mr-3" />
          <div>
            <h2 className="font-semibold">Λίστα Μαθημάτων</h2>
            <p className="text-sm">Δείτε όλα τα μαθήματα</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
          <Book className="h-8 w-8 text-yellow-600 mr-3" />
          <div>
            <h2 className="font-semibold">Ανάθεση Καθηγητών</h2>
            <p className="text-sm">Αναθέστε καθηγητές σε μαθήματα</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseManagement;