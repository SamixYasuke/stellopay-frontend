import { KeyFeatures } from "@/components/landing/key-features";
import Hero from "./hero";
import Footer from "@/components/common/footer";
// import DashBoard from "@/components/dashboard/dashboard-page"
import LandingPageNavBar from "@/components/landing/navbar";
import BenefitsSection from "@/components/landing/benefits";
import ValuePropositions from "@/components/landing/value-propositions";
import GetStartedCTA from "@/components/landing/get-started-cta";
import { FeaturesIntro } from "@/components/landing/features-intro";

export default function LandingPage() {
  return (
    <div>
      {<LandingPageNavBar />}
      {/* Removed: <DashBoard /> - this shouldn't be on the landing page */}
      <Hero />
      <FeaturesIntro id="features" />
      <KeyFeatures />
      <ValuePropositions />
      <BenefitsSection />
      <GetStartedCTA />
      <Footer />
    </div>
  );
}
