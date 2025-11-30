import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PropertyDetails from "./pages/PropertyDetails";
import "./styles/global.css";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0F172A] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>

        {/* 🌍 Footer ثابت أسفل الصفحة */}
        <footer className="w-full bg-white/70 dark:bg-emerald-950/30 border-t border-emerald-100/20 dark:border-emerald-800/40 text-center py-5 mt-auto backdrop-blur-md">
          <p className="text-sm text-gray-700 dark:text-emerald-200">
            © {new Date().getFullYear()} EstateFinder — جميع الحقوق محفوظة
          </p>
          <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">
            Created by <strong>Mohamed EL Hussainy</strong>
          </p>
        </footer>
      </Router>
    </div>
  );
}
