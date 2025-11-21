import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import DealFeed from './pages/DealFeed';
import { AppRoute } from './types';
import { ICONS } from './constants';

// Placeholder for pages not fully implemented in this response to save space
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-center">
    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-gray-500 mb-6">
      {ICONS.Building}
    </div>
    <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
    <p className="text-gray-400 max-w-md">This module is currently being upgraded with Gemini 3 Pro capabilities. Check back soon.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={AppRoute.LANDING} element={<Landing />} />
          <Route path={AppRoute.LOGIN} element={<Navigate to={AppRoute.DASHBOARD} />} />
          <Route path={AppRoute.DASHBOARD} element={<Dashboard />} />
          <Route path={AppRoute.FEED} element={<DealFeed />} />
          <Route path={AppRoute.NETWORK} element={<PlaceholderPage title="My Network CRM" />} />
          <Route path={AppRoute.TOOLKIT} element={<PlaceholderPage title="Creative Finance Toolkit" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
