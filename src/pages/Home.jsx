import { Component } from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCReel from '../components/home/UGCReel';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error('[ErrorBoundary] caught:', error, info);
  }
  render() {
    if (this.state.error) {
      return <div style={{color:'red', padding:20, fontFamily:'monospace'}}>
        <h2>Component Error: {this.props.name}</h2>
        <pre>{this.state.error?.stack || this.state.error?.message}</pre>
      </div>;
    }
    return this.props.children;
  }
}

function Section({ name, children }) {
  console.log('[Home] rendering section:', name);
  return <ErrorBoundary name={name}>{children}</ErrorBoundary>;
}

export default function Home() {
  console.log('[Home] rendering...');
  return (
    <main>
      <Section name="HeroSection"><HeroSection /></Section>
      <Section name="TrustBar"><TrustBar /></Section>
      <Section name="Bestsellers"><Bestsellers /></Section>
      <Section name="UGCReel"><UGCReel /></Section>
      <Section name="CategoryTiles"><CategoryTiles /></Section>
      <Section name="BrandStory"><BrandStory /></Section>
      <Section name="Testimonials"><Testimonials /></Section>
      <Section name="Newsletter"><Newsletter /></Section>
    </main>
  );
}