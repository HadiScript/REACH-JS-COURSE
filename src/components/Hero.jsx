import React from "react";
import Typewriter from "typewriter-effect";
// 4f46e5

const Hero = () => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-xl text-center">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Understand User Flow.
            <strong class="font-extrabold text-[#4F46E5] sm:block">
              <Typewriter
                options={{
                  strings: ["Increase Conversion."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </strong>
          </h1>

          <p class="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded bg-[#4F46E5] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#3d36c7] focus:outline-none focus:ring active:bg-[#4F46E5] sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              class="block w-full rounded px-12 py-3 text-sm font-medium text-[#4F46E5] shadow hover:text-[#4F46E5] focus:outline-none focus:ring active:text-[#4F46E5] sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
