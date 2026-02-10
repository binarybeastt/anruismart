import Image from "next/image";
import Link from "next/link";

export default function WhoWeServeAndWhy() {
  const whoWeServeItems = [
    "Public and private educational institutions",
    "Corporate training centres",
    "Government agencies",
    "Individual educators",
  ];

  const whyChooseUsItems = [
    {
      title: "Global Technology, Local Insight",
      description: "We combine world-class engineering and global technology partnerships with deep local market understanding—ensuring solutions are both innovative and practical.",
      image: "/images/why-choose-us-1.png",
    },
    {
      title: "Scalable & Future-Ready Solutions",
      description: "Our modular platforms scale from single classrooms to campus-wide deployments and are designed to evolve with your institution’s growth and digital ambitions",
      image: "/images/why-choose-us-2.png",
    },
    {
      title: "Data-Driven Impact",
      description: "Integrated analytics and AI tools provide actionable insights into usage, engagement, and performance—helping institutions make smarter, evidence-based decisions.",
      image: "/images/why-choose-us-3.png",
    },
    {
      title: "Local Support & Capacity Building",
      description: "We combine world-class engineering and global technology partnerships with deep local market understanding—ensuring solutions are both innovative and practical.",
      image: "/images/why-choose-us-4.png",
    },
  ];

  return (
    <section className="bg-[#fcfcfc] py-[108px] px-6 md:px-[70px]">
      <div className="mx-auto flex flex-col gap-[108px]">
        
        {/* Who We Serve Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[108px] items-center justify-center">
          {/* Content */}
          <div className="flex-1 space-y-8 max-w-[565px]">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-[#1c559d] text-[32px] md:text-[42px] tracking-[-0.84px] leading-tight">
                Who We Serve
              </h2>
              <p className="font-sans font-normal text-[#48464c] text-lg tracking-[-0.36px] leading-relaxed">
                Our consultative approach allows us assess needs, design fit-for-purpose solutions, and deliver outcomes that matter. We work seamlessly with
              </p>
            </div>

            <div className="bg-[#2f95ec] border-b-2 border-[#001c3f] rounded-lg p-8 space-y-6">
              {whoWeServeItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                   <div className="bg-[#99ea5c] p-[3px] rounded-[11px] rotate-180 flex-none">
                     <div className="rotate-180 w-[18px] h-[18px] relative">
                        <Image src="/images/checkmark-icon.svg" alt="check" fill className="object-contain brightness-0 invert" />
                     </div>
                   </div>
                   <p className="font-display font-medium text-white text-xl tracking-[-0.42px] leading-6">
                     {item}
                   </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-block bg-[#8ed955] text-white font-bold text-lg py-[17px] px-8 rounded-[12px] border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-[633px] h-[400px] md:h-[583px] rounded-[30px] border-b-[50px] border-[#1c559d] overflow-hidden shrink-0">
             <div className="absolute inset-0 bg-[#8ed955]" />
             <Image
              src="/images/who-we-serve-bg.jpg"
              alt="Who We Serve"
              fill
              className="object-cover relative z-10"
             />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col gap-12 items-center">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-[1068px]">
            <h2 className="font-display font-bold text-[#1c559d] text-[32px] md:text-[42px] tracking-[-0.84px] leading-tight">
              Why choose us
            </h2>
            <p className="font-sans font-semibold text-[#1d1a22] text-lg tracking-[-0.36px]">
              We don’t just deploy technology; <span className="font-medium">we design, localise, and support smart solutions that deliver real impact in classrooms, campuses, and organisations.</span>
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {whyChooseUsItems.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-white to-[#e4f3ff] border border-[#2f95ec] border-b-[3px] rounded-[16px] p-9 flex flex-col gap-4 items-center md:items-start text-center md:text-left transition-transform hover:-translate-y-1"
              >
                <div className="flex flex-col gap-4 items-center md:items-start">
                   <div className="relative w-12 h-12 shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-contain" 
                      />
                   </div>
                   <h3 className="font-display font-bold text-[#022b69] text-[27px] tracking-[-0.15px] leading-9">
                     {item.title}
                   </h3>
                </div>
                <p className="font-sans font-normal text-[#1d1a22] text-lg tracking-[-0.15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
