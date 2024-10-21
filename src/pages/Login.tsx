import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Εδώ θα προσθέσουμε τη λογική για τον έλεγχο των διαπιστευτηρίων
    console.log('Login attempt', { username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center text-blue-600">Σύνδεση στο Φροντιστήριο</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <User className="h-5 w-5 text-gray-400" />
              <input 
                className="pl-2 outline-none border-none flex-1"
                type="text" 
                name="username" 
                placeholder="Όνομα Χρήστη"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <Lock className="h-5 w-5 text-gray-400" />
              <input 
                className="pl-2 outline-none border-none flex-1"
                type="password" 
                name="password" 
                placeholder="Κωδικός"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none">Σύνδεση</button>
              <a href="#" className="text-sm text-blue-600 hover:underline">Ξεχάσατε τον κωδικό;</a>
            </div>
          </div>
        </form>
        <div className="mt-6 text-grey-dark">
          Δεν έχετε λογαριασμό;
          <a className="text-blue-600 hover:underline" href="#"> Εγγραφείτε</a>
        </div>
      </div>
    </div>
  );
};

export default Login;