import React, { useState } from 'react';
import { Bot, MessageSquare } from 'lucide-react';

interface AIEducator {
  id: number;
  name: string;
  specialty: string;
  description: string;
}

const AIEducators: React.FC = () => {
  const [educators] = useState<AIEducator[]>([
    { id: 1, name: "MathMaster", specialty: "Μαθηματικά", description: "Εξειδικευμένος στην ανάλυση και άλγεβρα" },
    { id: 2, name: "PhysicsPhenom", specialty: "Φυσική", description: "Ειδικός στη μηχανική και θερμοδυναμική" },
    { id: 3, name: "ChemGenius", specialty: "Χημεία", description: "Εξπέρ στην οργανική και ανόργανη χημεία" },
    { id: 4, name: "LitPro", specialty: "Λογοτεχνία", description: "Βαθιά γνώση ελληνικής και παγκόσμιας λογοτεχνίας" },
    { id: 5, name: "HistoryHero", specialty: "Ιστορία", description: "Ειδικός σε παγκόσμια και ελληνική ιστορία" },
    { id: 6, name: "BioBrainiac", specialty: "Βιολογία", description: "Ειδικός σε μοριακή βιολογία και γενετική" },
    { id: 7, name: "GeoGuru", specialty: "Γεωγραφία", description: "Εξπέρ σε φυσική και ανθρώπινη γεωγραφία" },
    { id: 8, name: "EconExpert", specialty: "Οικονομικά", description: "Ειδικός σε μικρο και μακροοικονομία" },
    { id: 9, name: "ArtAce", specialty: "Τέχνη", description: "Γνώστης ιστορίας τέχνης και καλλιτεχνικών τεχνικών" },
    { id: 10, name: "MusicMaestro", specialty: "Μουσική", description: "Ειδικός σε θεωρία μουσικής και ιστορία" },
    { id: 11, name: "CodeCrafter", specialty: "Πληροφορική", description: "Εξπέρ σε προγραμματισμό και αλγόριθμους" },
    { id: 12, name: "PhiloSage", specialty: "Φιλοσοφία", description: "Βαθιά γνώση αρχαίας και σύγχρονης φιλοσοφίας" },
    { id: 13, name: "LangLearner", specialty: "Ξένες Γλώσσες", description: "Πολύγλωσσος ειδικός σε γλωσσική εκμάθηση" },
    { id: 14, name: "PsychPro", specialty: "Ψυχολογία", description: "Ειδικός σε γνωστική και κλινική ψυχολογία" },
    { id: 15, name: "SocioStar", specialty: "Κοινωνιολογία", description: "Εξπέρ σε κοινωνικές θεωρίες και έρευνα" },
    { id: 16, name: "EnviroExpert", specialty: "Περιβαλλοντικές Επιστήμες", description: "Ειδικός σε οικολογία και βιωσιμότητα" },
    { id: 17, name: "StatSavvy", specialty: "Στατιστική", description: "Εξπέρ σε στατιστική ανάλυση και πιθανότητες" },
    { id: 18, name: "ArchAce", specialty: "Αρχιτεκτονική", description: "Γνώστης αρχιτεκτονικών στυλ και σχεδιασμού" },
    { id: 19, name: "DebateMaster", specialty: "Ρητορική", description: "Ειδικός σε τεχνικές επιχειρηματολογίας και δημόσιου λόγου" },
    { id: 20, name: "EthicsExpert", specialty: "Ηθική", description: "Εξπέρ σε ηθική φιλοσοφία και εφαρμοσμένη ηθική" }
  ]);

  const [selectedEducator, setSelectedEducator] = useState<AIEducator | null>(null);
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState<{role: string, content: string}[]>([]);

  const handleSelectEducator = (educator: AIEducator) => {
    setSelectedEducator(educator);
    setConversation([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    const newMessage = { role: 'user', content: userInput };
    setConversation([...conversation, newMessage]);

    // Εδώ θα προσθέταμε τη λογική για την απάντηση του AI
    const aiResponse = { role: 'ai', content: `Απάντηση από ${selectedEducator?.name}: ...` };
    setConversation([...conversation, newMessage, aiResponse]);

    setUserInput('');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">AI Εκπαιδευτικοί Βοηθοί</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg overflow-y-auto" style={{maxHeight: '70vh'}}>
          <h2 className="text-xl font-semibold mb-4">Διαθέσιμοι AI Εκπαιδευτικοί</h2>
          <ul className="space-y-2">
            {educators.map((educator) => (
              <li 
                key={educator.id} 
                className={`bg-white p-2 rounded shadow flex items-center cursor-pointer hover:bg-gray-50 ${selectedEducator?.id === educator.id ? 'border-2 border-blue-500' : ''}`}
                onClick={() => handleSelectEducator(educator)}
              >
                <Bot className="h-6 w-6 text-blue-600 mr-2" />
                <div>
                  <p className="font-semibold">{educator.name}</p>
                  <p className="text-sm text-gray-600">{educator.specialty}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex flex-col" style={{height: '70vh'}}>
          <h2 className="text-xl font-semibold mb-4">Συνομιλία με AI Εκπαιδευτικό</h2>
          {selectedEducator ? (
            <>
              <div className="bg-white p-4 rounded-lg mb-4">
                <h3 className="font-bold">{selectedEducator.name}</h3>
                <p className="text-sm text-gray-600">{selectedEducator.specialty}</p>
                <p className="mt-2">{selectedEducator.description}</p>
              </div>
              <div className="flex-grow overflow-y-auto mb-4 bg-white p-4 rounded-lg">
                {conversation.map((message, index) => (
                  <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
                      {message.content}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <input 
                  type="text" 
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder="Κάντε μια ερώτηση..." 
                  className="flex-grow p-2 border rounded-l-lg"
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-600"
                >
                  <MessageSquare className="h-6 w-6" />
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600">Επιλέξτε έναν AI εκπαιδευτικό για να ξεκινήσετε τη συνομιλία</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIEducators;