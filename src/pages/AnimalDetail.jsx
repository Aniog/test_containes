import { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { animals } from '@/data/animals';
import { ArrowLeft, MapPin, Clock, Weight, Utensils, Lightbulb, AlertTriangle } from 'lucide-react';

const statusColor = (status) => {
  if (status === 'Endangered') return 'bg-red-100 text-red-700 border border-red-200';
  if (status === 'Vulnerable') return 'bg-orange-100 text-orange-700 border border-orange-200';
  if (status === 'Near Threatened') return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
  return 'bg-green-100 text-green-700 border border-green-200';
};

const AnimalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const animal = animals.find((a) => a.id === id);

  useEffect(() => {
    if (pageRef.current) ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, [id]);

  if (!animal) {
    return (
      <div className="min-h-screen bg-[#f8f5f0] flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-bold text-gray-700">Animal not found</p>
        <Link to="/animals" className="text-[#2d6a4f] font-semibold hover:underline">
          Back to Animals
        </Link>
      </div>
    );
  }

  const related = animals.filter((a) => a.habitat === animal.habitat && a.id !== animal.id).slice(0, 3);

  return (
    <div ref={pageRef} className="bg-[#f8f5f0] min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={animal.name}
          className="w-full h-full object-cover"
          data-strk-img-id={`detail-hero-${animal.id}-img-j1k2l3`}
          data-strk-img={`[detail-animal-name] [detail-animal-habitat] wildlife portrait`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="absolute bottom-6 left-6 right-6">
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${statusColor(animal.status)}`}>
            <AlertTriangle className="w-3 h-3 inline mr-1" />
            {animal.status}
          </span>
          <h1 id="detail-animal-name" className="text-4xl md:text-5xl font-bold font-serif text-white">
            {animal.name}
          </h1>
          <p className="text-gray-300 italic mt-1">{animal.scientificName}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-serif text-[#1a1a1a] mb-3">About</h2>
              <p className="text-gray-600 leading-relaxed text-base">{animal.description}</p>
            </div>

            {/* Fun Fact */}
            <div className="bg-[#e9c46a]/20 border border-[#e9c46a] rounded-2xl p-6 flex gap-4">
              <Lightbulb className="w-6 h-6 text-[#6b4226] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#6b4226] mb-1">Fun Fact</h3>
                <p className="text-[#6b4226] text-sm leading-relaxed">{animal.funFact}</p>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-5 h-fit">
            <h3 className="font-bold font-serif text-[#1a1a1a] text-lg border-b border-gray-100 pb-3">Quick Facts</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Region</p>
                <p className="text-gray-700 font-medium text-sm">{animal.region}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span id="detail-animal-habitat" className="hidden">{animal.habitat}</span>
              <MapPin className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Habitat</p>
                <p className="text-gray-700 font-medium text-sm">{animal.habitat}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Utensils className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Diet</p>
                <p className="text-gray-700 font-medium text-sm">{animal.diet}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Lifespan</p>
                <p className="text-gray-700 font-medium text-sm">{animal.lifespan}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Weight className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Weight</p>
                <p className="text-gray-700 font-medium text-sm">{animal.weight}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Animals */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold font-serif text-[#1a1a1a] mb-6">
              More from the {animal.habitat}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/animals/${rel.id}`}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rel.name}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`detail-related-${rel.id}-img-m4n5o6`}
                    data-strk-img={`[detail-related-${rel.id}-name] ${rel.habitat} wildlife`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                  />
                  <div className="p-4">
                    <p id={`detail-related-${rel.id}-name`} className="font-bold font-serif text-[#1a1a1a]">{rel.name}</p>
                    <p className="text-xs text-gray-400 italic">{rel.scientificName}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimalDetail;
