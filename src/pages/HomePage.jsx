import { useState } from "react";
import Navbar from "../components/Navbar";
import { propertiesData } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    maxPrice: 100000000,
    minArea: 0,
    rooms: "",
    type: "",
    city: "",
  });

  // ✅ فلترة العقارات
  const filtered = propertiesData.filter((p) => {
    const price = parseInt(
      typeof p.price === "string" ? p.price.replace(/[^0-9]/g, "") : p.price
    );
    const area = parseInt(
      typeof p.area === "string" ? p.area.replace(/[^0-9]/g, "") : p.area
    );

    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase());

    const matchesPrice = price <= filters.maxPrice;
    const matchesArea = area >= filters.minArea;
    const matchesRooms = !filters.rooms || p.rooms === Number(filters.rooms);
    const matchesType = !filters.type || p.title.includes(filters.type);
    const matchesCity = !filters.city || p.location.includes(filters.city);

    return (
      matchesQuery &&
      matchesPrice &&
      matchesArea &&
      matchesRooms &&
      matchesType &&
      matchesCity
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0F172A] text-gray-900 dark:text-gray-100 transition-all duration-300">
      {/* 🔝 شريط التنقل */}
      <Navbar onSearch={setQuery} />

      {/* 🏡 البانر الرئيسي */}
      <section className="relative w-full bg-emerald-700 dark:bg-emerald-800 text-white py-20 text-center shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            ابحث عن <span className="text-emerald-200">منزلك المثالي</span>
          </h1>
          <p className="text-emerald-100 text-lg">
            اكتشف آلاف العقارات والشقق والفيلات في جميع أنحاء مصر بأسعار تناسبك.
          </p>
        </div>
      </section>

      {/* 🎚️ فلتر متقدم */}
      <div className="max-w-6xl w-full mx-auto bg-white/80 dark:bg-emerald-950/40 backdrop-blur-md border border-emerald-100/20 dark:border-emerald-800/30 rounded-2xl p-6 -mt-10 relative z-10 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* السعر */}
          <div>
            <label className="block text-sm font-medium text-emerald-800 dark:text-emerald-200 mb-1">
              الحد الأقصى للسعر
            </label>
            <input
              type="number"
              placeholder="حتى..."
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: Number(e.target.value) })
              }
              className="input w-full"
            />
          </div>

          {/* المساحة */}
          <div>
            <label className="block text-sm font-medium text-emerald-800 dark:text-emerald-200 mb-1">
              المساحة (م²)
            </label>
            <input
              type="number"
              placeholder="من..."
              value={filters.minArea}
              onChange={(e) =>
                setFilters({ ...filters, minArea: Number(e.target.value) })
              }
              className="input w-full"
            />
          </div>

          {/* الغرف */}
          <div>
            <label className="block text-sm font-medium text-emerald-800 dark:text-emerald-200 mb-1">
              عدد الغرف
            </label>
            <select
              value={filters.rooms}
              onChange={(e) =>
                setFilters({ ...filters, rooms: e.target.value })
              }
              className="input w-full"
            >
              <option value="">الكل</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* النوع */}
          <div>
            <label className="block text-sm font-medium text-emerald-800 dark:text-emerald-200 mb-1">
              النوع
            </label>
            <select
              value={filters.type}
              onChange={(e) =>
                setFilters({ ...filters, type: e.target.value })
              }
              className="input w-full"
            >
              <option value="">الكل</option>
              <option value="شقة">شقة</option>
              <option value="فيلا">فيلا</option>
              <option value="منزل">منزل</option>
              <option value="أرض">أرض</option>
            </select>
          </div>

          {/* المدينة */}
          <div>
            <label className="block text-sm font-medium text-emerald-800 dark:text-emerald-200 mb-1">
              المدينة
            </label>
            <select
              value={filters.city}
              onChange={(e) =>
                setFilters({ ...filters, city: e.target.value })
              }
              className="input w-full"
            >
              <option value="">الكل</option>
              <option value="القاهرة">القاهرة</option>
              <option value="الاسكندرية">الإسكندرية</option>
              <option value="الجيزة">الجيزة</option>
              <option value="6 أكتوبر">6 أكتوبر</option>
              <option value="العاصمة الإدارية">العاصمة الإدارية</option>
            </select>
          </div>

          {/* زر التصفية */}
          <div className="flex items-end">
            <button
              onClick={() => setQuery("")}
              className="btn-primary w-full"
            >
              تصفية
            </button>
          </div>
        </div>
      </div>

      {/* 🏠 العقارات المعروضة */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center py-20 text-[#065F46] dark:text-emerald-300 text-xl">
            لا توجد عقارات مطابقة لبحثك 🔍
          </div>
        )}
      </main>
    </div>
  );
}
