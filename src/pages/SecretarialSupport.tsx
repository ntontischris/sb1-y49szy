import React, { useState } from 'react';
import { FileText, Users, Calendar, MessageCircle, DollarSign, Book, Printer, Archive, Search, HelpCircle } from 'lucide-react';

const SecretarialSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState('documents');

  const tabs = [
    { id: 'documents', icon: FileText, title: 'Έγγραφα' },
    { id: 'enrollment', icon: Users, title: 'Εγγραφές' },
    { id: 'scheduling', icon: Calendar, title: 'Προγραμματισμός' },
    { id: 'communication', icon: MessageCircle, title: 'Επικοινωνία' },
    { id: 'payments', icon: DollarSign, title: 'Πληρωμές' },
    { id: 'courses', icon: Book, title: 'Μαθήματα' },
    { id: 'printing', icon: Printer, title: 'Εκτυπώσεις' },
    { id: 'archiving', icon: Archive, title: 'Αρχειοθέτηση' },
    { id: 'search', icon: Search, title: 'Αναζήτηση' },
    { id: 'support', icon: HelpCircle, title: 'Υποστήριξη' },
  ];

  const renderTabContent = (tabId: string) => {
    switch (tabId) {
      case 'documents':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Διαχείριση Εγγράφων</h3>
            <ul className="list-disc pl-5">
              <li>Δημιουργία νέων εγγράφων</li>
              <li>Επεξεργασία υπαρχόντων εγγράφων</li>
              <li>Οργάνωση εγγράφων σε φακέλους</li>
              <li>Αποστολή εγγράφων μέσω email</li>
            </ul>
          </div>
        );
      case 'enrollment':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Διαχείριση Εγγραφών</h3>
            <ul className="list-disc pl-5">
              <li>Καταχώρηση νέων μαθητών</li>
              <li>Ανανέωση εγγραφών</li>
              <li>Διαχείριση αιτήσεων εγγραφής</li>
              <li>Έκδοση βεβαιώσεων εγγραφής</li>
            </ul>
          </div>
        );
      // Προσθέστε περιεχόμενο για τις υπόλοιπες καρτέλες εδώ
      default:
        return <p>Επιλέξτε μια λειτουργία για να δείτε περισσότερες πληροφορίες.</p>;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Γραμματειακή Υποστήριξη</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-3 py-2 rounded-md ${
              activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <tab.icon className="h-5 w-5 mr-2" />
            {tab.title}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        {renderTabContent(activeTab)}
      </div>
    </div>
  );
};

export default SecretarialSupport;