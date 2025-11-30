import { useParams, Link } from "react-router-dom";
import { propertiesData } from "../data/properties";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = propertiesData.find((p) => String(p.id) === id);

  if (!property)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-100">
        <h1 className="text-3xl font-bold mb-4">⚠️ العقار غير موجود</h1>
        <Link
          to="/"
          className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-100 transition">
      {/* Header */}
      <div className="w-full bg-emerald-700 text-white py-10 text-center shadow-md">
        <h1 className="text-4xl font-bold">{property.title}</h1>
        <p className="text-emerald-100 text-lg mt-2">{property.location}</p>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto mt-8 px-6">
        <Swiper spaceBetween={20} slidesPerView={1} className="rounded-2xl shadow-lg overflow-hidden">
          {property.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`صورة ${i + 1}`}
                className="w-full h-[420px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Details */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-12 p-6">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-emerald-800 dark:text-emerald-100">
            تفاصيل العقار
          </h2>
          <p className="text-emerald-800/80 dark:text-emerald-200 mb-4">{property.description}</p>

          <ul className="space-y-2 text-emerald-700 dark:text-emerald-300 font-medium">
            <li>📏 المساحة: {property.area}</li>
            <li>🛏️ الغرف: {property.rooms}</li>
            <li>🛁 الحمامات: {property.baths}</li>
            <li>🏢 الطابق: {property.floor}</li>
            <li>📦 الحالة: {property.status}</li>
          </ul>

          <p className="text-emerald-700 dark:text-emerald-300 font-bold text-3xl mt-6">
            💰 {property.price.toLocaleString()} جنيه
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl text-lg transition"
          >
            ← العودة
          </Link>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-md h-[380px] border border-emerald-200 dark:border-emerald-800">
          <MapContainer
            center={property.coords}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={property.coords}>
              <Popup>{property.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
