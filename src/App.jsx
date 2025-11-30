import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import "./styles/global.css";

export default function App() {
  return (
    <Router basename="/real-estate-ui">
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-emerald-50 to-emerald-100 dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-900 text-slate-900 dark:text-emerald-50">
        <main className="max-w-6xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>

        <footer className="mt-8 py-6 text-center text-sm text-emerald-700 dark:text-emerald-200 border-t border-emerald-100/60 dark:border-emerald-800/60">
          Created by <strong>Mohamed EL Hussainy</strong>
        </footer>
      </div>
    </Router>
  );
}
