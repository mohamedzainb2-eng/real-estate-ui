import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Filters from "../components/Filters.jsx";
import PropertyGrid from "../components/PropertyGrid.jsx";
import { propertiesData } from "../data/properties.js";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    maxPrice: 100_000_000,
    maxArea: 600,
    rooms: "",
    type: "",
  });

  const filtered = propertiesData.filter((p) => {
    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase());

    const matchesPrice = p.price <= filters.maxPrice;
    const matchesArea = p.area <= filters.maxArea;
    const matchesRooms = !filters.rooms || p.rooms === Number(filters.rooms);
    const matchesType = !filters.type || p.type === filters.type;

    return matchesQuery && matchesPrice && matchesArea && matchesRooms && matchesType;
  });

  return (
    <div className="space-y-8">
      <Navbar onSearch={setQuery} />
      <Hero />
      <Filters filters={filters} setFilters={setFilters} />
      <PropertyGrid properties={filtered} />
    </div>
  );
}
