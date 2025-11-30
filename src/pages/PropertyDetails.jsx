import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { propertiesData } from "../data/properties";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// إصلاح أيقونة الـ Marker الافتراضية في Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function PropertyDetails() {
  const { id } = useParams();
  const property = propertiesData.find((p) => String(p.id) === id);

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!property || !mapContainerRef.current) return;

    // لو في ماب قديمة امسحها
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    // إنشاء الماب
    const map = L.map(mapContainerRef.current).setView(property.coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker(property.coords).addTo(map).bindPopup(property.title);

    mapInstanceRef.current = map;

    // تنظيف عند مغادرة الصفحة
    return () => {
      map.remove();
    };
  }, [property]);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-emerald-50 text-emerald-800">
        <h1 className="text-3xl font-bold mb-4">⚠️ العقار غير موجود</h1>
        <Link
          to="/"
          className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAF9] dark:bg-emerald-950 text-emerald-900 dark:text-emerald-50">
      {/* الهيدر العلوي */}
      <div className="w-full bg-emerald-700 dark:bg-emerald-800 text-white py-10 px-6 text-center shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold">{property.title}</h1>
        <p className="text-emerald-100 text-lg mt-2">{property.location}</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-10">
        {/* صور العقار (أول صورة رئيسية + ثumbnails بسيطة) */}
        <section className="bg-white/80 dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-800 rounded-2xl shadow-md overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
          />

          {property.images.length > 1 && (
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 p-3 bg-emerald-50/60 dark:bg-emerald-950/40">
              {property.images.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${property.title} - ${index + 2}`}
                  className="w-full h-20 md:h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
        </section>

        {/* تفاصيل + خريطة */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          {/* تفاصيل العقار */}
          <div className="bg-white/80 dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-800 rounded-2xl shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-100">
              تفاصيل العقار
            </h2>

            <p className="text-gray-700 dark:text-emerald-200 leading-relaxed">
              {property.description}
            </p>

            <ul className="space-y-2 text-emerald-800 dark:text-emerald-100 font-medium">
              <li>📏 المساحة: {property.area}</li>
              <li>🛏️ الغرف: {property.rooms}</li>
              <li>🛁 الحمامات: {property.baths}</li>
              <li>🏢 الطابق: {property.floor}</li>
              <li>📦 الحالة: {property.status}</li>
              <li>🏷️ النوع: {property.type}</li>
            </ul>

            <p className="text-emerald-700 dark:text-emerald-300 font-bold text-3xl mt-4">
              💰 {property.price.toLocaleString()} جنيه
            </p>

            <Link
              to="/"
              className="inline-block mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl text-lg transition"
            >
              ← العودة إلى الصفحة الرئيسية
            </Link>
          </div>

          {/* الخريطة */}
          <div className="bg-white/80 dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-800 rounded-2xl shadow-md p-4">
            <h3 className="text-xl font-bold mb-3 text-emerald-800 dark:text-emerald-100">
              📍 موقع العقار على الخريطة
            </h3>
            <div
              ref={mapContainerRef}
              className="w-full h-72 md:h-80 rounded-2xl overflow-hidden"
            />
          </div>
        </section>

        {/* فورم تواصل بسيط */}
        <section className="bg-white/80 dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-800 rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-emerald-800 dark:text-emerald-100">
            تواصل بخصوص هذا العقار
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="الاسم الكامل"
              className="p-3 rounded-lg border border-emerald-200 dark:border-emerald-700 bg-white/80 dark:bg-emerald-950/40 outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="tel"
              placeholder="رقم الهاتف"
              className="p-3 rounded-lg border border-emerald-200 dark:border-emerald-700 bg-white/80 dark:bg-emerald-950/40 outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="p-3 rounded-lg border border-emerald-200 dark:border-emerald-700 bg-white/80 dark:bg-emerald-950/40 outline-none focus:ring-2 focus:ring-emerald-400 md:col-span-2"
            />
            <textarea
              placeholder="رسالتك..."
              className="p-3 rounded-lg border border-emerald-200 dark:border-emerald-700 bg-white/80 dark:bg-emerald-950/40 outline-none focus:ring-2 focus:ring-emerald-400 md:col-span-2 h-28"
            />
            <button
              type="submit"
              className="mt-2 md:col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg text-lg font-semibold transition"
            >
              إرسال الطلب
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
