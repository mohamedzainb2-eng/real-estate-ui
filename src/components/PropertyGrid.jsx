import PropertyCard from "./PropertyCard.jsx";

export default function PropertyGrid({ properties }) {
  return (
    <section className="mt-12 bg-white/80 dark:bg-emerald-900/30 border border-emerald-200/40 dark:border-emerald-800/40 rounded-2xl p-8 shadow-md backdrop-blur-sm transition">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-100">
          العقارات المتاحة
        </h3>
        <span className="text-emerald-600 dark:text-emerald-300 text-lg">
          ({properties.length}) عقار متاح
        </span>
      </div>

      {properties.length === 0 && (
        <div className="text-center py-20 text-emerald-600 dark:text-emerald-300 text-xl">
          لا توجد عقارات مطابقة لبحثك 🔍
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </section>
  );
}
