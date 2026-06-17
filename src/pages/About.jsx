import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">About ARTITECT</h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Decades of experience in engineering high-performance folding solutions for the global architectural industry.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 id="history-title" className="text-3xl font-bold text-primary">Our Journey</h2>
              <p id="history-desc" className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Founded with a vision to revolutionize sheet metal fabrication, Artitect Machinery has grown from a small engineering workshop to a global leader in folding technology. Our commitment to precision and durability has made us the trusted partner for architects and builders worldwide.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We believe that every machine we build is a testament to our craftsmanship and engineering prowess.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  data-strk-img-id="history-image"
                  data-strk-img="[history-desc] [history-title] historical industrial engineering workshop"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt="Our History"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-secondary/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We measure success in microns. Our machines are built to deliver perfect folds every single time.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Industrial uptime is critical. Our robust construction ensures years of trouble-free operation.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We constantly integrate the latest CNC and sensor technologies to keep our customers ahead.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
