import { illustration } from "../data/properties.js";

export default function Hero() {
  return (
    <section className="mt-10 bg-white/80 dark:bg-emerald-950/30 border border-emerald-200/30 dark:border-emerald-800/40 rounded-2xl shadow-lg p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-right">
      <div className="flex-1">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-emerald-700 dark:text-emerald-100">
          ابحث عن <span className="text-emerald-500 dark:text-emerald-300">منزلك المثالي</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-emerald-200 text-lg">
          اكتشف العقارات المميزة في أفضل المواقع بأسعار تناسبك. اجعل حلمك بالمنزل المثالي حقيقة.
        </p>

        <div className="mt-6 flex items-center bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300/40 dark:border-emerald-700/30 rounded-xl p-3 shadow-inner flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="ابحث عن عقار…"
            className="flex-1 bg-transparent outline-none text-lg px-2 text-gray-700 dark:text-emerald-50 placeholder-gray-400 dark:placeholder-emerald-300/70"
          />
          <button className="px-5 py-2 bg-emerald-600 dark:bg-emerald-400 text-white dark:text-emerald-950 rounded-xl text-lg hover:opacity-90 transition w-full sm:w-auto">
            بحث
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={illustration}
          alt="Real Estate Illustration"
          className="w-60 sm:w-72 md:w-96 drop-shadow-xl rounded-xl"
        />
      </div>
    </section>
  );
}
