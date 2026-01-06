"use client";

import Image from "next/image";

export default function Banner(): React.JSX.Element {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden  -top-150 z-10">
                <div className="relative inline-block ">
                  <Image
                    src="/assets/site-arrow-braydensautomations.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-gray-800 text-lg whitespace-nowrap">
                      Hello! I&apos;m{" "}
                      <span className="text-[#00F0FF]">Brayden Jones</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-200"></div>
                </div>
              </div>
              <Image
                src="/assets/me.png"
                alt="Brayden Jones - AI Automation Specialist"
                width={300}
                height={300}
                className=" max-w-md absolute"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <Image
                src="/assets/54-543874_blue-glow-effect-png.png"
                alt="Brayden Jones - AI Automation Specialist"
                width={300}
                height={300}
                className="max-w-md "
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/site-arrow-braydensautomations.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute "
                style={{ left: "-100px", top: "-50px", width: "auto", height: "auto" }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-gray-800 text-lg">
                  Hello! I&apos;m{" "}
                  <span className="text-[#00F0FF]">Brayden Jones</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div className="">
              <h1 className="text-4xl tracking-tight lg:text-6xl font-semibold text-gray-800 leading-tight">
                An AI specialist who helps local HVAC companies automate the chaos so you can focus on what <span className="text-[#00F0FF]">really matters</span>.
              </h1>
              <p className="text-md text-gray-700">
                Because if your leads don&apos;t get answered, what else matters?
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-gray-800 font-bold">
            I build AI automations for local businesses in Upstate New York.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 tracking-wide">
            Currently, I design and deploy custom chat, phone, and email systems that have helped home‑service, HVAC, and local trades capture more leads and waste less time.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mt-15 mx-auto lg:mx-0">
            Self‑taught automation specialist with real experience in HVAC, landscaping, and other hands‑on work. I build practical AI systems—website chat, phone agents, and follow‑up flows—that fit how small business owners actually operate, not how software thinks they should.
          </p>
        </div>
      </div>
    </section>
  );
}
