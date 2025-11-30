import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <Link
      to={`/property/${property.id}`}
      className="block bg-white/80 dark:bg-emerald-900/30 border border-emerald-200/40 dark:border-emerald-800/40 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
    >
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-52 object-cover rounded-t-2xl"
      />
      <div className="p-5">
        <h4 className="text-xl font-bold text-emerald-800 dark:text-emerald-100">{property.title}</h4>
        <p className="text-emerald-700/80 dark:text-emerald-300 mt-1">{property.location}</p>
        <p className="text-emerald-600 dark:text-emerald-400 font-bold text-lg mt-2">
          {property.price.toLocaleString()} جنيه
        </p>
      </div>
    </Link>
  );
}
