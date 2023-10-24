import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingHero from "@/components/hero/DigitalMarketingHero";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import ModernAgencyHero from "@/components/hero/ModernAgencyHero";
import DigitalAgencyRoll from "@/components/roll/DigitalAgencyRoll";
import CreativeAgencyTeam from "@/components/team/CreativeAgencyTeam";


import DigitalMarketingService from "@/components/service/DigitalMarketingService";
import DigitalMarketingTestimonial from "@/components/testimonial/DigitalMarketingTestimonial";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingBlog from "@/components/blog/DigitalMarketingBlog";

export default function home() {
  return (
    <div>
      <Head>
        <title>Ekdant - IT Solutions</title>
        <meta name="description" content="Digital Marketing Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1" defaultMode="dark">
          <DigitalMarketingHero />
          <DigitalMarketingAbout />
          <ModernAgencyHero />
          <DigitalAgencyRoll />

          <DigitalMarketingService />
          <CreativeAgencyTeam />

          <DigitalMarketingTestimonial />
          <DigitalMarketingWorkflow />
        </RootLayout>
      </main>
    </div>
  );
}
