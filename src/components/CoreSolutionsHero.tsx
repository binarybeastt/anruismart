import Image from "next/image";
import Header from "@/components/Header";

export default function CoreSolutionsHero() {
  return (
    <div className="relative bg-gradient-to-b from-[#0f386c] to-[#1c559d] overflow-hidden">
      <Header />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
        <Image
          src="/images/core-solutions-bg-pattern.png"
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-48 pb-32 px-6 md:px-[70px] text-center flex flex-col items-center justify-center">
        <h1 className="font-display font-bold text-[40px] md:text-[56px] text-[#8ed955] leading-[1.1] tracking-[-1.12px]">
          Core Solutions
        </h1>
        <p className="font-sans font-medium text-[18px] md:text-[21px] text-white mt-6 max-w-[900px] leading-[32px]">
          We transform classrooms, campuses, and institutions into connected, intelligent environments
        </p>
      </div>
    </div>
  );
}
