import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import ParentDashboard from './pages/ParentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CourseManagement from './pages/CourseManagement';
import Schedule from './pages/Schedule';
import FinancialManagement from './pages/FinancialManagement';
import Reports from './pages/Reports';
import Support from './pages/Support';
import AIEducators from './pages/AIEducators';
import SecretarialSupport from './pages/SecretarialSupport';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/parent" element={<ParentDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/courses" element={<CourseManagement />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/finance" element={<FinancialManagement />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/support" element={<Support />} />
            <Route path="/ai-educators" element={<AIEducators />} />
            <Route path="/secretarial" element={<SecretarialSupport />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;