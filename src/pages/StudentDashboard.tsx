import React, { useState } from 'react';
import { Book, Calendar, FileText, Bell, Download } from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Νέα εργασία στα Μαθηματικά', date: '2024-03-15' },
    { id: 2, message: 'Υπενθύμιση: Διαγώνισμα Φυσικής αύριο', date: '2024-03-16' },
  ]);

  const [upcomingClasses, setUpcomingClasses] = useState([
    { id: 1, subject: 'Μαθηματικά', time: '15:00 - 16:30', teacher: 'κ. Παπαδόπουλος' },
    { id: 2, subject: 'Φυσική', time: '17:00 - 18:30', teacher: 'κα. Γεωργίου' },
  ]);

  const [grades, setGrades] = useState([
    { id: 1, subject: 'Μαθηματικά', grade: 18 },
    { id: 2, subject: 'Φυσική', grade: 16 },
  ]);

  const handleDownloadMaterial = (subject: string) => {
    console.log(`Downloading material for ${subject}`);
    // Εδώ θα προσθέσουμε τη λογική για το κατέβασμα του υλικού
  };

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Πίνακας Ελέγχου Μαθητή</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <Calendar className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="font-semibold text-lg">Πρόγραμμα</h2>
          </div>
          <ul className="space-y-2">
            {upcomingClasses.map((classItem) => (
              <li key={classItem.id} className="bg-white p-2 rounded shadow">
                <p className="font-semibold">{classItem.subject}</p>
                <p className="text-sm text-gray-600">{classItem.time}</p>
                <p className="text-sm text-gray-500">{classItem.teacher}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <Book className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="font-semibold text-lg">Μαθήματα</h2>
          </div>
          <ul className="space-y-2">
            <li className="bg-white p-2 rounded shadow">
              <p className="font-semibold">Μαθηματικά</p>
              <p className="text-sm text-gray-600">Κεφάλαιο 5: Τριγωνομετρία</p>
              <button 
                onClick={() => handleDownloadMaterial('Μαθηματικά')}
                className="mt-2 flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <Download className="h-4 w-4 mr-1" /> Κατέβασμα υλικού
              </button>
            </li>
            <li className="bg-white p-2 rounded shadow">
              <p className="font-semibold">Φυσική</p>
              <p className="text-sm text-gray-600">Ενότητα 3: Δυνάμεις</p>
              <button 
                onClick={() => handleDownloadMaterial('Φυσική')}
                className="mt-2 flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <Download className="h-4 w-4 mr-1" /> Κατέβασμα υλικού
              </button>
            </li>
          </ul>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-yellow-600 mr-3" />
            <h2 className="font-semibold text-lg">Βαθμολογίες</h2>
          </div>
          <ul className="space-y-2">
            {grades.map((grade) => (
              <li key={grade.id} className="bg-white p-2 rounded shadow flex justify-between items-center">
                <span>{grade.subject}</span>
                <span className={`font-bold ${grade.grade >= 17 ? 'text-green-600' : 'text-blue-600'}`}>
                  {grade.grade}/20
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 bg-red-100 p-4 rounded-lg">
        <div className="flex items-center mb-4">
          <Bell className="h-8 w-8 text-red-600 mr-3" />
          <h2 className="font-semibold text-lg">Ειδοποιήσεις</h2>
        </div>
        <ul className="space-y-2">
          {notifications.map((notification) => (
            <li key={notification.id} className="bg-white p-2 rounded shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.date}</p>
              </div>
              <button 
                onClick={() => handleMarkAsRead(notification.id)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Σημείωση ως αναγνωσμένο
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;