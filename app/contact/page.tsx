import Navbar from "@/components/layout/navbar";
import Footer from "@/components/home/footer";
import ContactHero from "@/components/contact/contact-hero";
import ContactFormSection from "@/components/contact/contact-form-section";
import ContactInfo from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <ContactInfo />
      <Footer />
    </div>
  );
}

