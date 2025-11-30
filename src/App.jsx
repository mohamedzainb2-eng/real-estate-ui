import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-[#111827]">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>

        {/* Footer ثابت من جوه React */}
        <footer className="w-full border-t bg-white/80 py-4 mt-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} EstateFinder — Built by{" "}
            <strong>Mohamed EL Hussainy</strong>
          </div>
        </footer>
      </div>
    </Router>
  );
}
