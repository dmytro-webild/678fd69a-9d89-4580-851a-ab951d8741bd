"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function FaqPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <NavbarLayoutFloatingOverlay
        navItems={[
          { name: "Shop", id: "/products" },
          { name: "Story", id: "/story" },
          { name: "FAQ", id: "/faq" },
          { name: "Contact", id: "/contact" },
          { name: "Drop List", id: "/newsletter" },
        ]}
        brandName="Everthread Vintage"
      />
      <FaqDouble 
        title="Frequently Asked Questions" 
        description="Everything you need to know about our curation and shipping process."
        faqsAnimation="slide-up"
        textboxLayout="default"
        useInvertedBackground={false}
        faqs={[
          { id: "1", title: "How do you source your vintage?", content: "We source pieces through curated collections and verified archives to ensure quality and authenticity." },
          { id: "2", title: "What is your shipping policy?", content: "We offer worldwide shipping with tracking information provided for every order." }
        ]}
      />
      <FooterBase
        columns={[
          { title: "Shop", items: [{ label: "All Drops", href: "/products" }, { label: "Best Sellers", href: "#" }] },
          { title: "Company", items: [{ label: "Our Story", href: "/story" }, { label: "Sustainability", href: "#" }] },
          { title: "Support", items: [{ label: "Contact", href: "/contact" }, { label: "FAQ", href: "/faq" }, { label: "Shipping", href: "#" }] },
        ]}
        logoText="Everthread Vintage"
      />
    </ThemeProvider>
  );
}