"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TimelinePhoneView from '@/components/cardStack/layouts/timelines/TimelinePhoneView';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function HowItWorksPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Shop", id: "/#products" },
              { name: "How It Works", id: "/how-it-works" },
              { name: "Subscription Plans", id: "/subscription-plans" },
              { name: "Story", id: "/#story" },
              { name: "Drop List", id: "/#newsletter" },
            ]}
            brandName="Everthread Vintage"
        />

        <div className="pt-32 pb-20">
            <TimelinePhoneView
                title="The Vintage Curation Process"
                description="From sourcing rare finds to restoring quality, here is how we bring you the ultimate vintage experience."
                textboxLayout="split-description"
                animationType="opacity"
                items={[
                    {
                        trigger: "1. Sourcing",                        content: "Our team travels globally to handpick one-of-a-kind vintage items, focusing on high-quality fabrics and timeless streetwear silhouettes.",                        imageOne: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C374B1YD0AKUmGNpzIynXP84Ag/uploaded-1775602334039-leqsugjz.png?_wi=2"
                    },
                    {
                        trigger: "2. Restoration",                        content: "Every piece undergoes a careful cleaning and restoration process to ensure it meets modern quality standards without losing its history.",                        imageOne: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C374B1YD0AKUmGNpzIynXP84Ag/uploaded-1775602334039-leqsugjz.png?_wi=3"
                    },
                    {
                        trigger: "3. Curation",                        content: "The final collection is dropped exclusively to our community, ensuring you get first access to our rarest, most unique pieces.",                        imageOne: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C374B1YD0AKUmGNpzIynXP84Ag/uploaded-1775602334039-leqsugjz.png?_wi=4"
                    }
                ]}
            />
        </div>

        <FooterBase
            columns={[
                { title: "Shop", items: [{ label: "All Drops", href: "/#products" }, { label: "Best Sellers", href: "#" }] },
                { title: "Company", items: [{ label: "Our Story", href: "/#story" }, { label: "Sustainability", href: "#" }] },
                { title: "Support", items: [{ label: "Contact", href: "/#newsletter" }, { label: "Shipping", href: "#" }] },
            ]}
            logoText="Everthread Vintage"
            className="bg-[#1a1a1a] text-[#fcfaf7]"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}