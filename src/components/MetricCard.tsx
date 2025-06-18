
interface MetricCardProps {
  number: string;
  label: string;
  description: string;
}

const MetricCard = ({ number, label, description }: MetricCardProps) => {
  return (
    <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{number}</div>
      <div className="text-green-100 font-semibold text-lg mb-2">{label}</div>
      <div className="text-green-200 text-sm">{description}</div>
    </div>
  );
};

export default MetricCard;
