"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TextAbout from '@/components/sections/about/TextAbout';
import { Globe, Leaf } from "lucide-react";

export default function LandingPage() {
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
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Shop", id: "products" },
        { name: "Story", id: "story" },
        { name: "Drop List", id: "newsletter" },
      ]}
      brandName="Everthread Vintage"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "sparkles-gradient" }}
      title="Timeless Pieces. Curated for You."
      description="Handpicked vintage that never goes out of style. Discover one-of-one gems from eras past, carefully restored for your modern wardrobe."
      buttons={[{ text: "Shop the Drop", href: "#products" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C374B1YD0AKUmGNpzIynXP84Ag/uploaded-1775602334039-leqsugjz.png?_wi=1"
      imageAlt="Everthread Vintage collection hero"
      mediaAnimation="blur-reveal"
      marqueeItems={[
        { type: "text", text: "One-of-one pieces" },
        { type: "text-icon", text: "Sustainable", icon: Leaf },
        { type: "text", text: "Curated quality" },
        { type: "text-icon", text: "Worldwide shipping", icon: Globe },
        { type: "text", text: "Verified authentic" },
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <SocialProofOne
      textboxLayout="split-description"
      title="Trusted by Fashion Enthusiasts"
      description="We partner with eco-conscious creators to bring you the best in vintage streetwear."
      names={["Vogue Vintage", "Urban Outfitters Archive", "Sustainable Threads", "Retro Revival", "Street Style Mag"]}
      useInvertedBackground={false}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Vintage Washed Carhartt Hoodie", price: "$120", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C374B1YD0AKUmGNpzIynXP84Ag/uploaded-1775602334039-leqsugjz.png?_wi=2" },
        { id: "2", name: "Distressed Denim Jacket", price: "$180", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C374B1YD0AKUmGNpzIynXP84Ag/uploaded-1775602334039-leqsugjz.png?_wi=3" },
        { id: "3", name: "90s Graphic Band Tee", price: "$65", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C374B1YD0AKUmGNpzIynXP84Ag/uploaded-1775602334039-leqsugjz.png?_wi=4" },
        { id: "4", name: "Plaid Earth-Tone Flannel", price: "$85", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C374B1YD0AKUmGNpzIynXP84Ag/uploaded-1775602334039-leqsugjz.png?_wi=5" },
      ]}
      title="Featured Collection"
      description="Limited drops. Once they're gone, they're gone forever."
    />
  </div>

  <div id="story" data-section="story">
      <TextAbout
      useInvertedBackground={true}
      title="Every piece tells a story of craftsmanship and character."
      buttons={[{ text: "Read Our Brand Story", href: "#" }]}
    />
  </div>

  <div id="newsletter" data-section="newsletter">
      <ContactCenter
      tag="Drop List"
      title="Join the Circle"
      description="Get notified before every new vintage collection drops. Members get early access."
      background={{ variant: "gradient-bars" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="closing" data-section="closing">
      <TextAbout
      useInvertedBackground={false}
      title="Ready to refine your style?"
      buttons={[{ text: "Shop All Pieces", href: "#products" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Shop", items: [{ label: "All Drops", href: "#products" }, { label: "Best Sellers", href: "#" }] },
        { title: "Company", items: [{ label: "Our Story", href: "#story" }, { label: "Sustainability", href: "#" }] },
        { title: "Support", items: [{ label: "Contact", href: "#newsletter" }, { label: "Shipping", href: "#" }] },
      ]}
      logoText="Everthread Vintage"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
