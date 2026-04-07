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
        {
          name: "Shop",          id: "products"},
        {
          name: "Story",          id: "story"},
        {
          name: "Drop List",          id: "newsletter"},
      ]}
      brandName="Everthread Vintage"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "sparkles-gradient"}}
      title="Timeless Pieces. Curated for You."
      description="Handpicked vintage that never goes out of style."
      buttons={[
        {
          text: "Shop the Drop",          href: "#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-woman-posing-with-old-phone_23-2150908624.jpg"
      imageAlt="Curated rack of vintage clothing"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "https://img.b2bpic.net/free-photo/young-man-wearing-black-hoodie-studio_23-2148281116.jpg",          alt: "Customer 1"},
        {
          src: "https://img.b2bpic.net/free-photo/stylish-woman-posing-with-hat_23-2148301736.jpg",          alt: "Customer 2"},
        {
          src: "https://img.b2bpic.net/free-photo/handsome-man-portrait_23-2148281116.jpg",          alt: "Customer 3"},
        {
          src: "https://img.b2bpic.net/free-photo/woman-smiling-outdoors_23-2148301736.jpg",          alt: "Customer 4"},
        {
          src: "https://img.b2bpic.net/free-photo/young-man-with-vintage-style_23-2148301736.jpg",          alt: "Customer 5"},
      ]}
      avatarText="Trusted by 1000+ fashion enthusiasts."
      marqueeItems={[
        {
          type: "text",          text: "One-of-one pieces"},
        {
          type: "text-icon",          text: "Sustainable",          icon: Leaf,
        },
        {
          type: "text",          text: "Curated quality"},
        {
          type: "text-icon",          text: "Worldwide shipping",          icon: Globe,
        },
        {
          type: "text",          text: "Verified authentic"},
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Curated vintage.",        "No fast fashion.",        "Every piece is one-of-one.",        "Sustainably sourced.",        "Trusted by 1000+ lovers"]}
      title="Built on Values"
      description="We are rethinking vintage."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Vintage Washed Carhartt Hoodie",          price: "$120",          imageSrc: "http://img.b2bpic.net/free-photo/view-hipster-male-man-looking-camera_197531-33424.jpg"},
        {
          id: "2",          name: "Distressed Denim Jacket",          price: "$180",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-asian-woman-autumn-clothes_23-2149071329.jpg"},
        {
          id: "3",          name: "90s Graphic Band Tee",          price: "$65",          imageSrc: "http://img.b2bpic.net/free-photo/spring-wardrobe-switch-still-life_23-2150176758.jpg?_wi=1"},
        {
          id: "4",          name: "Plaid Earth-Tone Flannel",          price: "$85",          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-long-legs-brunette-model-long-black-cloak-posed-outdoor-winter-day-against-old-grunge-wall_627829-14032.jpg"},
        {
          id: "5",          name: "Heavy Canvas Utility Bag",          price: "$45",          imageSrc: "http://img.b2bpic.net/free-photo/spring-wardrobe-switch-still-life_23-2150176758.jpg?_wi=2"},
        {
          id: "6",          name: "Faded Black Worker Jacket",          price: "$140",          imageSrc: "http://img.b2bpic.net/free-photo/mid-section-mechanic-with-wrench-tool-his-pocket_1170-1317.jpg"},
      ]}
      title="Featured Drop"
      description="Limited pieces, hand-selected."
    />
  </div>

  <div id="story" data-section="story">
      <TextAbout
      useInvertedBackground={false}
      title="The Everthread Philosophy"
      buttons={[
        {
          text: "Our Mission",          href: "#"},
      ]}
    />
  </div>

  <div id="closing" data-section="closing">
      <TextAbout
      useInvertedBackground={false}
      title="Don't miss the next drop."
      buttons={[
        {
          text: "Shop Now",          href: "#products"},
      ]}
    />
  </div>

  <div id="newsletter" data-section="newsletter">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Stay Connected"
      title="Get Early Access to Every Drop"
      description="Limited pieces. Once they’re gone, they’re gone."
      inputPlaceholder="Enter your email"
      buttonText="Join Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",          items: [
            {
              label: "All Drops",              href: "#products"},
            {
              label: "Best Sellers",              href: "#"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "Story",              href: "#story"},
            {
              label: "About",              href: "#"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact",              href: "#newsletter"},
            {
              label: "Shipping",              href: "#"},
          ],
        },
      ]}
      logoText="Everthread Vintage"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
