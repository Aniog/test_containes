import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Shirt, Sofa, Wrench, Car, Smartphone, Package, Dumbbell, Stethoscope } from 'lucide-react';

const categories = [
  { icon: Shirt, title: 'Apparel & Textiles', count: 'Clothing, fabrics, accessories' },
  { icon: Sofa, title: 'Home & Furniture', count: 'Furniture, home decor, kitchenware' },
  { icon: Wrench, title: 'Industrial Equipment', count: 'Machinery, tools, hardware' },
  { icon: Car, title: 'Automotive Parts', count: 'Auto parts, accessories, tires' },
  { icon: Smartphone, title: 'Electronics', count: 'Consumer electronics, components' },
  { icon: Package, title: 'Packaging & Printing', count: 'Custom packaging, labels, boxes' },
  { icon: Dumbbell, title: 'Sports & Outdoor', count: 'Fitness equipment, camping gear' },
  { icon: Stethoscope, title: 'Medical Supplies', count: 'Medical devices, PPE, equipment' },
];

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We source across a wide range of industries. If it is manufactured in China, we can help you find it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Card key={cat.title} className="border-border hover:shadow-md hover:border-primary/30 transition-all cursor-pointer">
              <CardHeader>
                <cat.icon className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-base">{cat.title}</CardTitle>
                <CardDescription className="text-xs">{cat.count}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products">
            <Button variant="outline" size="lg" className="font-semibold">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}