import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Shirt, Sofa, Wrench, Car, Smartphone, Package, Dumbbell, Stethoscope, Baby, BookOpen, Gamepad, Building2, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Shirt, title: 'Apparel & Textiles',
    items: ['Clothing & garments', 'Fabric & textiles', 'Shoes & footwear', 'Bags & luggage', 'Accessories (hats, scarves, belts)'],
  },
  {
    icon: Sofa, title: 'Home & Furniture',
    items: ['Indoor & outdoor furniture', 'Home decor & lighting', 'Kitchenware & tableware', 'Bedding & linens', 'Bathroom accessories'],
  },
  {
    icon: Wrench, title: 'Industrial Equipment',
    items: ['Machinery & tools', 'Hardware & fasteners', 'Hydraulic & pneumatic components', 'Measuring instruments', 'Safety equipment'],
  },
  {
    icon: Car, title: 'Automotive Parts',
    items: ['Auto parts & components', 'Tires & wheels', 'Car accessories', 'Motorcycle parts', 'Battery & electrical'],
  },
  {
    icon: Smartphone, title: 'Consumer Electronics',
    items: ['Mobile accessories', 'Audio & headphones', 'Smart home devices', 'Computer peripherals', 'Wearable technology'],
  },
  {
    icon: Package, title: 'Packaging & Printing',
    items: ['Custom boxes & cartons', 'Labels & stickers', 'Plastic packaging', 'Gift packaging', 'Printing services'],
  },
  {
    icon: Dumbbell, title: 'Sports & Outdoor',
    items: ['Fitness equipment', 'Camping & hiking gear', 'Sports apparel', 'Cycling accessories', 'Water sports equipment'],
  },
  {
    icon: Stethoscope, title: 'Medical & Healthcare',
    items: ['Medical devices', 'PPE & protective gear', 'Healthcare equipment', 'Laboratory supplies', 'Personal care products'],
  },
  {
    icon: Baby, title: 'Baby & Kids Products',
    items: ['Baby gear & strollers', 'Toys & games', 'Children\'s furniture', 'Nursery products', 'Kids\' apparel'],
  },
  {
    icon: Gamepad, title: 'Toys & Hobbies',
    items: ['Educational toys', 'Electronic toys', 'Board games & puzzles', 'Model kits', 'Outdoor play equipment'],
  },
  {
    icon: BookOpen, title: 'Stationery & Office',
    items: ['Office supplies', 'Paper products', 'Writing instruments', 'Art & craft supplies', 'School supplies'],
  },
  {
    icon: Building2, title: 'Construction Materials',
    items: ['Building materials', 'Flooring & tiles', 'Pipes & fittings', 'Electrical supplies', 'Plumbing fixtures'],
  },
];

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              If it is manufactured in China, we can help you source it. We cover a wide range of 
              industries and product categories with deep supplier networks in each.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-semibold px-8 py-6 text-base">
                Tell Us What You Need
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Card key={cat.title} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <cat.icon className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Do Not See Your Product Category?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us anyway. Our supplier network spans thousands of factories across hundreds of categories. 
            We will find a solution for your product.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-semibold px-8 py-6 text-base">
              Submit Your Inquiry <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}