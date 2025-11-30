import { useParams, Link } from "react-router-dom";
import { propertiesData } from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = propertiesData.find((p) => String(p.id) === String(id));

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-50 text-emerald-900">
        <h1 className="text-3xl font-bold mb-4">⚠️ العقار غير موجود</h1>
        <Link
          to="/real-estate-ui/"
          className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    );
  }

  // صور إضافية لو موجودة في البيانات، وإلا نخليها مصفوفة فاضية
  const gallery = property.images && property.images.length > 0
    ? property.images
    : [property.image];

  return (
    <div className="min-h-screen bg-[#F9FAF9] text-[#1E293B]">
      {/* شريط علوي بسيط */}
      <header className="w-full bg-emerald-700 text-white py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
          <span className="hidden md:inline-block text-emerald-100">
            {property.location}
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* جاليري بسيط بدون Swiper */}
        <section className="grid md:grid-cols-3 gap-4">
          {/* الصورة الرئيسية */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-md">
            <img
              src={gallery[0]}
              alt={property.title}
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </div>

          {/* ثامبنيلز جانبية لو فيه أكتر من صورة */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="min-w-[120px] md:w-full rounded-xl overflow-hidden shadow-sm border border-emerald-100"
              >
                <img
                  src={img}
                  alt={`صورة رقم ${idx + 1}`}
                  className="w-full h-28 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* تفاصيل العقار */}
        <section className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-3">
              تفاصيل العقار
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {property.description}
            </p>

            <ul className="space-y-2 text-emerald-800 font-medium">
              <li>📍 الموقع: {property.location}</li>
              <li>📏 المساحة: {property.area}</li>
              <li>🛏️ الغرف: {property.rooms}</li>
              <li>🛁 الحمامات: {property.baths}</li>
              <li>🏢 الطابق: {property.floor}</li>
              <li>📦 الحالة: {property.status}</li>
            </ul>

            <p className="text-emerald-700 font-bold text-3xl mt-6">
              💰 {property.price.toLocaleString()} جنيه
            </p>
          </div>

          {/* صندوق تواصل بدل خريطة / Leaflet */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 md:p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">
              تواصل حول هذا العقار
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              اترك بياناتك وسيتم التواصل معك من أقرب مستشار عقاري لتقديم مزيد من التفاصيل
              وترتيب زيارة ميدانية.
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="w-full border border-emerald-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full border border-emerald-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <textarea
                placeholder="رسالتك..."
                className="w-full border border-emerald-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 min-h-[90px]"
              />
              <button
                type="button"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg transition"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </section>

        {/* زر العودة */}
        <div className="mt-4">
          <Link
            to="/real-estate-ui/"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-semibold"
          >
            ← العودة إلى قائمة العقارات
          </Link>
        </div>
      </main>
    </div>
  );
}
