import DealsSection from '../components/DealsSection';

export default function Deals({ activePlatform, searchQuery }) {
  return (
    <div>
      <DealsSection activePlatform={activePlatform} searchQuery={searchQuery} />
    </div>
  );
}
