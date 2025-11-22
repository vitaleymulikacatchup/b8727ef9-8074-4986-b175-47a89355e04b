"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Crown, Waves, Flower, Zap, Utensils, Home, Heart, Users, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="animatedAurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840395146-248stwp6.jpg"
          logoAlt="Luxury Hotel Logo"
          brandName="Serenity Hotels"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Now", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Experience Luxury Hospitality"
          description="Discover world-class accommodations and unforgettable service at our premier hotel"
          tag="Welcome to Serenity"
          tagIcon={Sparkles}
          buttons={[
            { text: "Explore Rooms", href: "rooms" },
            { text: "Book Your Stay", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840395848-iqi507a6.jpg",
              imageAlt: "Luxury hotel exterior view"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840396826-o2lcfasf.jpg",
              imageAlt: "Elegant hotel lobby interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840397450-t2pj27la.jpg",
              imageAlt: "Premium hotel suite room"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840398111-04hwupno.jpg",
              imageAlt: "Resort pool and landscape"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840399102-30hcqcux.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840399804-g424mzlb.jpg",
              imageAlt: "Spa and wellness center"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Serenity Hotels, we believe that travel should be more than just a destination. It's about creating lasting memories, finding comfort in excellence, and experiencing genuine hospitality that exceeds expectations. For over two decades, we've dedicated ourselves to providing world-class service, elegant accommodations, and unforgettable experiences that transform ordinary trips into extraordinary journeys."
        />
      </div>
      
      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="Premier Amenities"
          description="Discover our world-class facilities designed for your comfort and relaxation"
          tag="Luxury Facilities"
          tagIcon={Crown}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          features={[
            {
              title: "Infinity Pool",
              description: "Stunning rooftop pool with panoramic city views and heated water year-round",
              icon: Waves
            },
            {
              title: "Spa Wellness",
              description: "Full-service spa offering massages, treatments, and rejuvenation services",
              icon: Flower
            },
            {
              title: "Fitness Center",
              description: "State-of-the-art gym with personal trainers and modern exercise equipment",
              icon: Zap
            },
            {
              title: "Fine Dining",
              description: "Award-winning restaurant featuring international cuisine and local specialties",
              icon: Utensils
            }
          ]}
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Room Types"
          description="Choose from our carefully curated selection of luxurious accommodations"
          tag="Book Your Room"
          tagIcon={Home}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Standard Room",
              price: "$149/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840397450-t2pj27la.jpg",
              imageAlt: "Standard hotel room"
            },
            {
              id: "2",
              name: "Deluxe Suite",
              price: "$249/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840397450-t2pj27la.jpg",
              imageAlt: "Deluxe suite with premium amenities"
            },
            {
              id: "3",
              name: "Presidential Suite",
              price: "$499/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840397450-t2pj27la.jpg",
              imageAlt: "Luxury presidential suite"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Guest Reviews"
          description="Hear from our delighted guests about their unforgettable experiences"
          tag="Guest Stories"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Margaret Johnson",
              handle: "@margaret_travels",
              testimonial: "Absolutely stunning property with impeccable service. The staff made our anniversary celebration truly memorable. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840403758-k8sgo8t1.png",
              imageAlt: "Margaret Johnson"
            },
            {
              id: "2",
              name: "David Chen",
              handle: "@wanderer_david",
              testimonial: "The rooms are elegantly designed, the food is exceptional, and the hospitality is genuine. This is luxury done right.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840404560-zl8a1mk2.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "3",
              name: "Sarah Mitchell",
              handle: "@sarah_explorer",
              testimonial: "Every detail was perfect. From the moment we arrived until we left, we felt completely pampered and valued.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840405361-rijrzb3y.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "4",
              name: "James Rodriguez",
              handle: "@james_on_tour",
              testimonial: "Best hotel experience ever. The spa treatments were divine and the restaurant food was out of this world. Worth every penny!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840406262-o7fi4ckt.jpg",
              imageAlt: "James Rodriguez"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Our dedicated professionals are committed to making your stay exceptional"
          tag="Our Staff"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Victoria Laurent",
              role: "General Manager",
              description: "With 20 years of hospitality experience, Victoria ensures every guest receives exceptional service and care.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840406779-wat7mbpt.jpg",
              imageAlt: "Victoria Laurent, General Manager",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Facebook, url: "https://example.com" }
              ]
            },
            {
              id: "2",
              name: "Marco Benedetti",
              role: "Concierge Manager",
              description: "Marco's passion for hospitality and local knowledge helps guests discover the best experiences in the city.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840407449-8tekgktn.jpg",
              imageAlt: "Marco Benedetti, Concierge Manager",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://example.com" }
              ]
            },
            {
              id: "3",
              name: "Chef Antoine Moreau",
              role: "Executive Chef",
              description: "Our award-winning chef creates culinary masterpieces using the finest local and international ingredients.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840408564-o19btzfl.jpg",
              imageAlt: "Chef Antoine Moreau, Executive Chef",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://example.com" }
              ]
            },
            {
              id: "4",
              name: "Amara Okonkwo",
              role: "Spa Director",
              description: "Amara leads our wellness team with expertise in holistic therapies and rejuvenation treatments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840409601-73kl09qw.jpg",
              imageAlt: "Amara Okonkwo, Spa Director",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://example.com" }
              ]
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Plan Your Perfect Stay"
          description="Have questions about our rooms, amenities, or special packages? Our team is ready to help you plan an unforgettable experience. Contact us today."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763840396826-o2lcfasf.jpg"
          imageAlt="Hotel lobby interior"
          mediaPosition="right"
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. You can unsubscribe at any time."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Serenity Hotels"
          copyrightText="© Serenity Hotels, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Dining", href: "amenities" },
                { label: "Spa & Wellness", href: "amenities" },
                { label: "Events", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQs", href: "#" },
                { label: "Booking Help", href: "#" },
                { label: "Guest Portal", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Accessibility", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Visit our Facebook page" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Follow us on Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "Connect with us on LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}