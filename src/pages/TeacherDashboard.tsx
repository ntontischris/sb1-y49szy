import React, { useState } from 'react';
import { Users, FileText, Calendar, Bell } from 'lucide-react';

const TeacherDashboard: React.FC = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: 'Μαθηματικά Α΄ Λυκείου', time: '15:00 - 16:30', students: 15 },
    { id: 2, name: 'Φυσική Β΄ Λυκείου', time: '17:00 - 18:30', students: 12 },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, description: 'Διόρθωση διαγωνισμάτων Μαθηματικών', deadline: '2024-03-18' },
    { id: 2, description: 'Προετοιμασία ύλης για το επόμενο μάθημα Φυσικής', deadline: '2024-03-17' },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Νέο μήνυμα από γονέα', date: '2024-03-15' },
    { id: 2, message: 'Υπενθύμιση: Συνάντηση καθηγητών αύριο', date: '2024-03-16' },
  ]);

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      description: 'Νέα εργασία',
      deadline: new Date().toISOString().split('T')[0],
    };
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Πίνακας Ελέγχου Καθηγητή</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="font-semibold text-lg">Τάξεις</h2>
          </div>
          <ul className="space-y-2">
            {classes.map((classItem) => (
              <li key={classItem.id} className="bg-white p-2 rounded shadow">
                <p className="font-semibold">{classItem.name}</p>
                <p className="text-sm text-gray-600">{classItem.time}</p>
                <p className="text-sm text-gray-500">Μαθητές: {classItem.students}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="font-semibold text-lg">Εργασίες</h2>
            </div>
            <button 
              onClick={handleAddTask}
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              + Νέα εργασία
            </button>
          </div>
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="bg-white p-2 rounded shadow flex justify-between items-center">
                <div>
                  <p className="font-semibold">{task.description}</p>
                  <p className="text-sm text-gray-600">Προθεσμία: {task.deadline}</p>
                </div>
                <button 
                  onClick={() => handleCompleteTask(task.id)}
                  className="text-sm text-green-600 hover:text-green-800"
                >
                  Ολοκλήρωση
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <Calendar className="h-8 w-8 text-yellow-600 mr-3" />
            <h2 className="font-semibold text-lg">Πρόγραμμα</h2>
          </div>
          <ul className="space-y-2">
            <li className="bg-white p-2 rounded shadow">
              <p className="font-semibold">Σήμερα</p>
              <p className="text-sm text-gray-600">3 μαθήματα</p>
            </li>
            <li className="bg-white p-2 rounded shadow">
              <p className="font-semibold">Αύριο</p>
              <p className="text-sm text-gray-600">2 μαθήματα</p>
            </li>
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
            <li key={notification.id} className="bg-white p-2 rounded shadow">
              <p className="font-semibold">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherDashboard;