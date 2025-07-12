import Image from 'next/image';
import React from 'react';
import RoomSearchBox from './RoomSearchBox';

const HeroSection = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-24">
        <div className="container mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* left column content and search */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl">
                  Find Your Perfect Shared Living Space
                </h1>
                <p className="text-muted-foreground mb-8 max-w-xl text-lg">
                  Discover comfortable, affordable rooms in shared houses with like-minded people.
                  Your next home is just a click away.
                </p>
              </div>
              {/* search box component */}
              <div className="w-full">
                <RoomSearchBox />
              </div>
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-purple-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm">2M+ happy clients</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm">4.9/5 rating</span>
                </div>
              </div>
            </div>
            {/* right column Hero Image */}
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden lg:h-[600px]">
                <Image
                  src={'/bg.png?height=600&width=600'}
                  alt="perfect and affordable sharing room"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
