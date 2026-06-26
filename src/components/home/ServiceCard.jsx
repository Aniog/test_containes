import React from "react";
import Icon from "@/components/ui/Icon";

const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-white border border-line rounded-lg p-6 hover:border-ink-700 hover:shadow-card transition-all">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-ink-100 text-ink-900 mb-4 group-hover:bg-ink-900 group-hover:text-white transition-colors">
        <Icon name={service.icon} className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-bold text-ink-900">{service.title}</h3>
      <p className="mt-2 text-sm text-ink-700 leading-relaxed">{service.short}</p>
      <ul className="mt-4 space-y-2">
        {service.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
              aria-hidden="true"
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;