"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function ContactPage() {
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
      <ContactSplit
        tag="Get in Touch"
        title="How can we help?"
        description="Our team is dedicated to supporting your vintage journey. Send us a message and we'll be in touch shortly."
        background={{ variant: "plain" }}
        useInvertedBackground={false}
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