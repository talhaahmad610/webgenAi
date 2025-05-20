import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AIGenerator } from './pages/AIGenerator';
import { AdminDashboard } from './pages/AdminDashboard';
import { AuthForm } from './components/AuthForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AIGenerator />} />
          <Route path="/login" element={<AuthForm type="login" />} />
          <Route path="/register" element={<AuthForm type="register" />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;