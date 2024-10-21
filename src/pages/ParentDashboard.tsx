import React, { useState } from 'react';
import { Users, CreditCard, MessageCircle, Book } from 'lucide-react';

const ParentDashboard: React.FC = () => {
  const [children, setChildren] = useState([
    { id: 1, name: 'Μαρία Παπαδοπούλου', grade: 'Β΄ Λυκείου', averageGrade: 17.5 },
    { id: 2, name: 'Γιώργος Παπαδόπουλος', grade: 'Γ΄ Γυμνασίου', averageGrade: 16.8 },
  ]);

  const [payments, setPayments] = useState([
    { id: 1, description: 'Δίδακτρα Μαρτίου', amount: 250, dueDate: '2024-03-31' },
    { id: 2, description: 'Δίδακτρα Απριλίου', amount: 250, dueDate: '2024-04-30' },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, from: 'κ. Γεωργίου', subject: 'Πρόοδος Μαρίας', date: '2024-03-14' },
    { id: 2, from: 'Γραμματεία', subject: 'Ενημέρωση για εκδρομή', date: '2024-03-15' },
  ]);

  const handlePayment = (id: number) => {
    console.log(`Processing payment for id: ${id}`);
    // Εδώ θα προσθέσουμε τη λογική για την πληρωμή
  };

  const handleViewGrades = (childId: number) => {
    console.log(`Viewing grades for child id: ${childId}`);
    // Εδώ θα προσθέσουμε τη λογική για την προβολή αναλυτικής βαθμολογίας
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Πίνακας Ελέγχου Γονέα</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-purple-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="font-semibold text-lg">Πρόοδος Μαθητών</h2>
          </div>
          <ul className="space-y-2">
            {children.map((child) => (
              <li key={child.id} className="bg-white p-2 rounded shadow">
                <p className="font-semibold">{child.name}</p>
                <p className="text-sm text-gray-600">{child.grade}</p>
                <p className="text-sm text-gray-600">Μέσος όρος: {child.averageGrade}</p>
                <button 
                  onClick={() => handleViewGrades(child.id)}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  Προβολή αναλυτικής βαθμολογίας
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <CreditCard className="h-8 w-8 text-pink-600 mr-3" />
            <h2 className="font-semibold text-lg">Οικονομικά</h2>
          </div>
          <ul className="space-y-2">
            {payments.map((payment) => (
              <li key={payment.id} className="bg-white p-2 rounded shadow flex justify-between items-center">
                <div>
                  <p className="font-semibold">{payment.description}</p>
                  <p className="text-sm text-gray-600">Ποσό: {payment.amount}€</p>
                  <p className="text-sm text-gray-600">Προθεσμία: {payment.dueDate}</p>
                </div>
                <button 
                  onClick={() => handlePayment(payment.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  Πληρωμή
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <MessageCircle className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="font-semibold text-lg">Επικοινωνία</h2>
          </div>
          <ul className="space-y-2">
            {messages.map((message) => (
              <li key={message.id} className="bg-white p-2 rounded shadow">
                <p className="font-semibold">Από: {message.from}</p>
                <p className="text-sm text-gray-600">Θέμα: {message.subject}</p>
                <p className="text-sm text-gray-500">Ημερομηνία: {message.date}</p>
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
              <p className="text-sm text-gray-600">Επόμενο μάθημα: Δευτέρα, 15:00</p>
            </li>
            <li className="bg-white p-2 rounded shadow">
              <p className="font-semibold">Φυσική</p>
              <p className="text-sm text-gray-600">Επόμενο μάθημα: Τρίτη, 17:00</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;