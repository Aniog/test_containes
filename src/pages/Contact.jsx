import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function Contact() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <ContactInfo />
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
