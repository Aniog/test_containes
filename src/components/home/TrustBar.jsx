import { Truck, RotateCcw, Award, Heart } from 'lucide-react';
import './TrustBar.css';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Award, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' }
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar__container">
        {trustItems.map((item, index) => (
          <div key={index} className="trust-bar__item">
            <item.icon size={18} strokeWidth={1.5} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}