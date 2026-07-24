import React from "react"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: "t1",
    name: "Sophia M.",
    text: "The finish is beautiful — I've worn my huggies every day for three months and they still look brand new.",
  },
  {
    id: "t2",
    name: "Emily R.",
    text: "Bought the Royal Heirloom Set as a gift and ended up ordering one for myself. The packaging feels so premium.",
  },
  {
    id: "t3",
    name: "Chloe L.",
    text: "Quiet luxury exactly as described. Subtle, elegant, and I've received so many compliments.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-primary">
            Loved by You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Card
              key={item.id}
              className="bg-surface border-hairline rounded-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-primary mb-6">
                  "{item.text}"
                </p>
                <p className="text-sm font-medium text-secondary">{item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
