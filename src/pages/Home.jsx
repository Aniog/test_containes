import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Products from '@/components/home/Products';
import ContactForm from '@/components/home/ContactForm';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Products />
      <ContactForm />
    </Layout>
  );
}
