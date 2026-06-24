import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Badge } from "@/components/ui/Badge.jsx";
import { Button } from "@/components/ui/Button.jsx";

const machines = [
  {
    id: "df-500",
    title: "EcoFolder DF-500",
    category: "Double Folding Machine",
    description: "Compact yet powerful double folder designed for small to medium sheet metal workshops.",
    spec: "Capacity: 2.0mm Steel | Width: 3000mm"
  },
  {
    id: "sf-1000",
    title: "UltraBender SF-1000",
    category: "Sheet Metal Folding Machine",
    description: "High-speed precision folding with automatic material gauging and CNC control.",
    spec: "Capacity: 3.5mm Steel | Width: 4000mm"
  },
  {
    id: "mf-pro",
    title: "Titan MF-PRO",
    category: "Metal Folder Machine",
    description: "Heavy-duty industrial folding solution for high-volume architectural panel production.",
    spec: "Capacity: 4.0mm Aluminum | Width: 6000mm"
  },
  {
    id: "df-max",
    title: "DoubleMax 800",
    category: "Double Folder",
    description: "Dual-wing folding capability allows for complex profiles without flipping the sheet.",
    spec: "Capacity: 3.0mm Steel | Width: 3200mm"
  }
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="py-20 bg-muted/30" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl mb-16">
          <Badge className="mb-4">Our Hardware</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-6">
            Industrial <span className="text-primary">Folding</span> Solutions
          </h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive range of high-performance machinery designed to meet the demands of modern sheet metal fabrication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {machines.map((machine) => (
            <div key={machine.id} className="bg-background border rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                <img
                  data-strk-img-id={`machine-${machine.id}-img`}
                  data-strk-img={`[machine-${machine.id}-title] [machine-${machine.id}-cat]`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={machine.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" id={`machine-${machine.id}-cat`}>{machine.category}</Badge>
                </div>
              </div>
              <div className="p-8">
                <h3 id={`machine-${machine.id}-title`} className="text-2xl font-bold mb-2 uppercase tracking-tight">{machine.title}</h3>
                <p className="text-sm font-mono text-primary mb-4">{machine.spec}</p>
                <p className="text-muted-foreground mb-8 leading-relaxed italic">{machine.description}</p>
                <Button className="w-full group-hover:bg-primary/90" asChild>
                  <Link to="/contact">Request Specifications</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
