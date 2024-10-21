import React from 'react';
import { Users, Settings, FileText, BarChart2, Calendar, MessageCircle, Book, DollarSign, Shield, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const modules = [
    { icon: Users, title: 'Χρήστες', description: 'Διαχείριση χρηστών', link: '/users' },
    { icon: Settings, title: 'Ρυθμίσεις', description: 'Ρυθμίσεις συστήματος', link: '/settings' },
    { icon: FileText, title: 'Αναφορές', description: 'Δημιουργία αναφορών', link: '/reports' },
    { icon: BarChart2, title: 'Στατιστικά', description: 'Ανάλυση δεδομένων', link: '/statistics' },
    { icon: Calendar, title: 'Πρόγραμμα', description: 'Διαχείριση προγράμματος', link: '/schedule' },
    { icon: MessageCircle, title: 'Επικοινωνία', description: 'Μηνύματα και ειδοποιήσεις', link: '/communication' },
    { icon: Book, title: 'Μαθήματα', description: 'Διαχείριση μαθημάτων', link: '/courses' },
    { icon: DollarSign, title: 'Οικονομικά', description: 'Οικονομική διαχείριση', link: '/finance' },
    { icon: Shield, title: 'Ασφάλεια', description: 'Ρυθμίσεις ασφαλείας', link: '/security' },
    { icon: HelpCircle, title: 'Υποστήριξη', description: 'Βοήθεια και υποστήριξη', link: '/support' },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Πίνακας Ελέγχου Διαχείρισης</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((module, index) => (
          <Link key={index} to={module.link} className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-md">
            <module.icon className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <h2 className="font-semibold text-lg">{module.title}</h2>
              <p className="text-sm text-gray-600">{module.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;