import Image from "next/image";
import Link from "next/link";

export default function TrainingSupport() {
  return (
    <section className="bg-gradient-to-t from-[#2e6107] to-[#8ed955] py-24 px-6 md:px-[70px] relative overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row gap-16 items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 text-white space-y-8 max-w-[603px]">
          <div className="space-y-6">
            <h2 className="flex items-center gap-4 text-3xl md:text-[32px] font-bold font-display tracking-[-0.64px] drop-shadow-md">
              <span className="text-4xl md:text-[32px]">6.</span>
              Training & Support Services
            </h2>
            <p className="text-lg font-medium font-sans tracking-[-0.36px] leading-relaxed opacity-90">
              Our consultative approach allows us assess needs, design fit-for-purpose solutions, and deliver outcomes that matter. We work seamlessly with
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "AnruiStar Academy™",
                description: "Instructor-led and self-paced training for educators, IT staff, and administrators."
              },
              {
                title: "Onsite Deployment & Maintenance",
                description: "End-to-end installation, configuration, and technical support"
              },
              {
                title: "Warranty & After-Sales Support",
                description: "Comprehensive service plans with local support teams and spare-parts availability."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#142f00]/40 backdrop-blur-sm rounded-lg p-4 space-y-2 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#8ed955] shrink-0 border-2 border-white/20" />
                  <h3 className="text-xl font-medium font-display tracking-[-0.42px]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base font-normal font-sans tracking-[-0.32px] leading-relaxed pl-[34px] opacity-90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-lg font-semibold font-sans tracking-[-0.36px] leading-relaxed">
            From deployment to daily use, we support institutions at every stage of their digital transformation journey.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-[#265900] font-bold text-lg py-3 px-8 rounded-xl border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all hover:brightness-110 shadow-lg"
          >
            Contact us
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-[557px]">
          <div className="relative h-[578px] rounded-xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/images/training-support.jpg"
              alt="Training and Support"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
