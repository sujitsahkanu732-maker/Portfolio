const COLORS = {
  blue:   'bg-blue-500/10   text-blue-300   border-blue-500/25',
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/25',
  teal:   'bg-teal-500/10   text-teal-300   border-teal-500/25',
  orange: 'bg-orange-500/10 text-orange-300 border-orange-500/25',
  pink:   'bg-pink-500/10   text-pink-300   border-pink-500/25',
};

export default function Badge({ label, color = 'blue' }) {
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-md border ${COLORS[color]}`}>
      {label}
    </span>
  );
}
