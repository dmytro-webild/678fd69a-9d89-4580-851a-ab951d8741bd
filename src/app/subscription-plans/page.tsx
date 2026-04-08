"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Star, Sparkles, Gem } from "lucide-react";

export default function SubscriptionPlansPage() {
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
            <PricingCardOne
                title="Premium Membership Tiers"
                description="Choose the plan that fits your style. Unlock exclusive drops, early access, and curated vintage selections."
                animationType="depth-3d"
                textboxLayout="split-description"
                useInvertedBackground={false}
                plans={[
                    {
                        id: "essential",                        badge: "Starter",                        badgeIcon: Star,
                        price: "$29/mo",                        subtitle: "For the casual collector",                        features: ["Monthly curated selection", "Early access to drops", "10% member discount"]
                    },
                    {
                        id: "premium",                        badge: "Pro Collector",                        badgeIcon: Sparkles,
                        price: "$59/mo",                        subtitle: "For the true enthusiast",                        features: ["Unlimited curated selections", "Priority access to rare drops", "Free shipping on all items", "25% member discount"]
                    },
                    {
                        id: "elite",                        badge: "Elite Member",                        badgeIcon: Gem,
                        price: "$99/mo",                        subtitle: "For the ultimate curator",                        features: ["Handpicked monthly haul", "VIP drop invites", "Complimentary restoration services", "40% member discount", "Exclusive event access"]
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