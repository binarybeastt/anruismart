import CoreSolutionsHero from "@/components/CoreSolutionsHero";
import CoreSolutionsList from "@/components/CoreSolutionsList";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Solutions - AnruiStar Smart Technologies",
  description: "Transforming classrooms, campuses, and institutions into connected, intelligent environments.",
};

export default function CoreSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <CoreSolutionsHero />
      <CoreSolutionsList />
      <Footer />
    </main>
  );
}