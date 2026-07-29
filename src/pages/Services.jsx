import SectionHeading from '@/components/site/SectionHeading'
import PageHero from '@/components/site/PageHero'
import ServiceGrid from '@/components/site/ServiceGrid'
import ImagePanel from '@/components/site/ImagePanel'
import { services } from '@/content/siteContent'

const Services = () => {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="China sourcing services for qualified buying projects"
        description="Choose focused support for supplier search, verification, inspections, production follow-up, and shipment coordination based on what your project actually needs."
      />

      <section className="py-16 md:py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Support scope"
            title="Flexible sourcing coverage for one task or the full order cycle"
            description="Some buyers need a supplier shortlist. Others need local execution across factory checks, inspections, and shipment readiness. We adapt the scope to the project stage."
          />
          <ServiceGrid items={services} />
        </div>
      </section>

      <section className="bg-brand-surface py-16 md:py-20">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          <ImagePanel
            bgId="services-factory-visual-31ca12"
            query="[services-title] [services-lead]"
            title="Factory-side verification"
            description="Check whether the supplier behind the quotation is a genuine fit for your product, scale, and export expectations."
          />
          <ImagePanel
            bgId="services-qc-visual-82bd44"
            query="[services-qc-caption] [services-title]"
            title="Inspection and quality control"
            description="Use inspection checkpoints to identify quality or packing issues before the shipment stage."
          />
          <ImagePanel
            bgId="services-shipping-visual-4d91ce"
            query="[services-shipping-caption] [services-title]"
            title="Production and shipment coordination"
            description="Keep communication, deadlines, and shipment readiness aligned with the agreed order plan."
          />
        </div>
        <div className="container-shell sr-only">
          <p id="services-title">China sourcing services</p>
          <p id="services-lead">Supplier verification production follow-up shipping coordination</p>
          <p id="services-qc-caption">Quality inspection in factory for export orders</p>
          <p id="services-shipping-caption">Shipment preparation and export logistics coordination</p>
        </div>
      </section>
    </div>
  )
}

export default Services
