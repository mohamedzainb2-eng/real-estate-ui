export default function Filters({ filters, setFilters }) {
  return (
    <section className="mt-12 bg-white/70 dark:bg-emerald-950/30 border border-emerald-200/40 dark:border-emerald-800/40 p-8 rounded-2xl shadow-md backdrop-blur-sm transition">
      <h3 className="text-2xl font-bold mb-6 text-emerald-700 dark:text-emerald-100">
        فلترة النتائج
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <label className="font-semibold text-emerald-600 dark:text-emerald-200">
            السعر (حتى)
          </label>
          <input
            type="range"
            min="1000000"
            max="100000000"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
            className="w-full mt-2 accent-emerald-500"
          />
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            {filters.maxPrice.toLocaleString()} جنيه
          </p>
        </div>

        <div>
          <label className="font-semibold text-emerald-600 dark:text-emerald-200">
            المساحة (حتى)
          </label>
          <input
            type="range"
            min="50"
            max="600"
            value={filters.maxArea}
            onChange={(e) => setFilters({ ...filters, maxArea: Number(e.target.value) })}
            className="w-full mt-2 accent-emerald-500"
          />
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            {filters.maxArea} م²
          </p>
        </div>

        <div>
          <label className="font-semibold text-emerald-600 dark:text-emerald-200">
            عدد الغرف
          </label>
          <select
            value={filters.rooms}
            onChange={(e) => setFilters({ ...filters, rooms: e.target.value })}
            className="w-full mt-2 p-2 border rounded-lg border-emerald-300/40 dark:border-emerald-700/40 bg-emerald-50/70 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-100 focus:ring-emerald-400"
          >
            <option value="">الكل</option>
            <option value="1">1 غرفة</option>
            <option value="2">2 غرف</option>
            <option value="3">3 غرف</option>
            <option value="4">4 غرف</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-emerald-600 dark:text-emerald-200">
            نوع العقار
          </label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full mt-2 p-2 border rounded-lg border-emerald-300/40 dark:border-emerald-700/40 bg-emerald-50/70 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-100 focus:ring-emerald-400"
          >
            <option value="">الكل</option>
            <option value="شقة">شقة</option>
            <option value="فيلا">فيلا</option>
            <option value="منزل">منزل</option>
            <option value="أرض">أرض</option>
          </select>
        </div>
      </div>
    </section>
  );
}
