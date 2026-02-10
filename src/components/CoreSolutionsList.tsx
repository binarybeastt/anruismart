import Image from "next/image";
import Link from "next/link";

type SolutionFeature = {
  text: string;
};

type Solution = {
  number: string;
  title: string;
  description: React.ReactNode;
  image: string;
  featuresTitle: string;
  features: SolutionFeature[];
  footerText: string;
  buttonText: string;
  isReversed?: boolean; // For layout variation if needed, though design shows consistent layout
};

const solutions: Solution[] = [
  {
    number: "1.",
    title: "Smart Interactive Displays & Classrooms",
    description: (
      <>
        <span className="font-bold">The foundation of modern teaching and collaboration. </span>
        Traditional blackboards and projectors are no longer enough. Our Smart Interactive Display solutions replace fragmented classroom tools with unified, intelligent teaching and presentation platforms that drive engagement and collaboration
      </>
    ),
    image: "/images/solution-display.jpg",
    featuresTitle: "Our interactive classroom solutions combine:",
    features: [
      { text: "High-resolution touch displays with multi-touch support" },
      { text: "Built-in teaching tools and digital whiteboarding" },
      { text: "Wireless screen sharing and multi-device casting" },
      { text: "Android / Windows dual-OS flexibility" },
      { text: "Seamless integration with AV, recording, and conferencing systems" },
    ],
    footerText: "These solutions are ideal for classrooms, lecture halls, training centres, and corporate meeting rooms—enabling more engaging lessons, collaborative discussions, and effective knowledge delivery.",
    buttonText: "Learn more",
  },
  {
    number: "2.",
    title: "Recording & Broadcasting Systems",
    description: (
      <>
        <span className="font-bold">Extending learning beyond the physical classroom. </span>
        Our Recording & Broadcasting Systems enable institutions to professionally capture, stream, and archive lessons, workshops, and events—supporting hybrid learning, distance education, and institutional communication.
      </>
    ),
    image: "/images/solution-recording.jpg",
    featuresTitle: "Solution highlights include:",
    features: [
      { text: "5G Mobile Recording Systems – Portable, wireless lecture capture and live streaming for flexible learning spaces" },
      { text: "Standard Recording Classroom Solutions – AI-enabled dual-camera lecture capture for everyday classroom use" },
      { text: "Premium 4K Recording Classroom Systems – Advanced multi-camera setups with intelligent tracking and seamless live broadcasting" },
    ],
    footerText: "These systems support live streaming, on-demand playback, and content archiving—fully supported with installation, training, and ongoing maintenance.",
    buttonText: "Talk to Us",
  },
  {
    number: "3.",
    title: "Smart Campus Digital Infrastructure",
    description: (
      <>
        <span className="font-bold">A truly smart campus depends on reliable infrastructure. </span>
        We design and deploy digital backbones that connect classrooms, devices, and systems into a single, secure, and manageable environment.
      </>
    ),
    image: "/images/solution-campus-digital.jpg",
    featuresTitle: "Our Smart Campus solutions include:",
    features: [
      { text: "High-speed wired and wireless networking\nSmart access control and security systems" },
      { text: "Centralised device and system management platforms" },
      { text: "Backend monitoring, analytics, and control dashboards" },
    ],
    footerText: "This infrastructure enables interactive classrooms, digital signage, attendance capture, scheduling notifications, and campus-wide information systems—improving operational efficiency and learning continuity.",
    buttonText: "Get in touch",
  },
  {
    number: "4.",
    title: "Data Analytics & AI Solutions",
    description: (
      <>
        <span className="font-bold">Turning data into insight, and insight into impact. </span>
        Modern institutions generate vast amounts of learning and operational data. Our Data, Analytics & AI solutions transform this data into actionable intelligence that supports smarter decisions and continuous improvement
      </>
    ),
    image: "/images/solution-data-ai.jpg",
    featuresTitle: "Core capabilities include:",
    features: [
      { text: "Classroom engagement and learning analytics\nAI-powered attendance monitoring and behaviour insights" },
      { text: "Usage analytics for displays, recording systems, and campus devices" },
      { text: "Centralised dashboards for performance tracking and reporting" },
      { text: "Predictive insights for planning, optimisation, and resource allocation" },
    ],
    footerText: "By integrating analytics across classrooms and campus infrastructure, institutions gain visibility into teaching effectiveness, learner participation, and technology performance.",
    buttonText: "Learn more",
  },
  {
    number: "5.",
    title: "OEM & Custom Technology Services",
    description: (
      <>
        <span className="font-bold">Tailoring technology to institutional identity and scale.</span>
         We help institutions, governments, and partners deploy customised technology solutions that reflect their brand, teaching model, and operational needs
      </>
    ),
    image: "/images/solution-oem-custom.jpg",
    featuresTitle: "Our interactive classroom solutions combine:",
    features: [
      { text: "Custom branding and UI/UX design for devices and software" },
      { text: "Logo, boot screen, packaging, and device customization" },
      { text: "Tailored hardware configurations for different classroom sizes and usage models" },
    ],
    footerText: "This enables organisations to deploy bespoke, professionally branded technology ecosystems with consistent performance and long-term scalability.",
    buttonText: "Get in touch",
  },
];

function CheckmarkIcon() {
  return (
    <div className="flex-none rotate-180">
      <div className="bg-[#99ea5c] p-[3px] rounded-[9px]">
        <div className="flex-none rotate-180">
           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="#0F386C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function CoreSolutionsList() {
  return (
    <section className="bg-[#f3f3f3] py-[108px] px-6 md:px-[66px]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Progress Bar (Decorative) */}
        <div className="flex items-center justify-between mb-12">
           <div className="flex gap-2">
            <div className="h-2 w-[35px] bg-[#8ed955]"></div>
            <div className="h-2 w-[36px] bg-[#e0e0e0]"></div>
            <div className="h-2 w-[36px] bg-[#e0e0e0]"></div>
            <div className="h-2 w-[36px] bg-[#e0e0e0]"></div>
            <div className="h-2 w-[35px] bg-[#e0e0e0]"></div>
            <div className="h-2 w-[35px] bg-[#e0e0e0]"></div>
           </div>
           {/* Decorative Icon */}
           <div className="w-9 h-9 rotate-90 relative">
              <Image src="/images/icon-resize.svg" alt="" fill className="object-contain" />
           </div>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div key={index} className="border-b-2 border-[#e0e0e0] pb-16 last:border-0">
              
              {/* Header: Title & Description */}
              <div className="mb-12">
                <h2 className="flex flex-col md:flex-row items-start md:items-center gap-4 text-[#1c559d] font-display font-bold text-[32px] tracking-[-0.64px] mb-4">
                  <span className="mr-4">{solution.number}</span>
                  {solution.title}
                </h2>
                <p className="text-[#1d1a22] font-sans text-[18px] leading-[27px] tracking-[-0.36px] max-w-[1068px]">
                  {solution.description}
                </p>
              </div>

              {/* Content Grid */}
              <div className="flex flex-col lg:flex-row gap-6 mb-12">
                
                {/* Image Card */}
                <div className="lg:w-[758px] bg-[#bfe2ff] p-2 rounded-[24px]">
                  <div className="relative h-[300px] lg:h-[416px] w-full rounded-[16px] overflow-hidden shadow-lg">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Features Card */}
                <div className="flex-1 bg-[#2f95ec] rounded-[16px] p-8 md:p-12 text-white">
                  <h3 className="font-display font-bold text-[21px] mb-8 leading-[36px] tracking-[-0.42px]">
                    {solution.featuresTitle}
                  </h3>
                  <div className="space-y-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <CheckmarkIcon />
                        <p className="font-display font-normal text-[18px] leading-[24px] tracking-[-0.36px] flex-1 whitespace-pre-line">
                            {feature.text.split("–").map((part, i) => (
                                i === 0 && feature.text.includes("–") ? <span key={i} className="font-bold">{part} – </span> : part
                            ))}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Text & CTA */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <p className="text-[#1d1a22] font-sans text-[18px] leading-[27px] tracking-[-0.36px] max-w-[944px]">
                  {solution.footerText}
                </p>
                <Link
                  href="/contact"
                  className="bg-[#8ed955] text-white font-bold text-[18px] py-3 px-8 rounded-[12px] border-b-4 border-[#265900] active:border-b-0 active:translate-y-1 transition-all whitespace-nowrap"
                >
                  {solution.buttonText}
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
