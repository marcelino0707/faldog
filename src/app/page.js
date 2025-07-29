"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/app/data/services";
import { news } from "./data/news";

export default function Home() {
  const [showAllService, setShowAllService] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);
  const visibleServices = showAllService ? services : services.slice(0, 6);
  const visibleNews = showAllNews ? news : news.slice(0, 6);

  const newsSliderRef = useRef(null);

  const autoScrollRef = useRef(null);

  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      if (newsSliderRef.current) {
        newsSliderRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });

        // Loop back to start if reached end
        const { scrollLeft, scrollWidth, clientWidth } = newsSliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          newsSliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, []);

  return (
    <>
      <section className="w-full relative">
        {/* Hero 1 */}
        <div className="relative w-full h-[600px] overflow-hidden mb-4">
          <Image
            src="/Foto Banner.png"
            alt="Home BG"
            fill
            style={{ objectFit: "cover", objectPosition: "top"}}
            priority
          />

          <div className="absolute inset-0 flex items-center justify-start px-20">
            <h2 className="text-white text-2xl max-w-md font-[600]">
              Kami hadir untuk memberikan kepuasaan kepada pelanggan dan{" "}
              <strong className="text-3xl"> Masyarakat</strong>
            </h2>
          </div>
        </div>
        {/* Hero 2 */}
        <div className="relative flex flex-col lg:flex-row justify-around w-full h-full px-6 lg:px-20 my-10 lg:my-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-around items-center gap-8">
            {/* Gambar */}
            <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] relative overflow-hidden rounded-2xl">
              <Image
                src="/Foto Sejarah.png"
                alt="Home Sejarah"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
            </div>

            {/* Konten */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 sm:px-6 lg:px-8 gap-4">
              <h2 className="text-[#07A6E1] text-xl sm:text-2xl font-bold text-center lg:text-left">
                Sejarah PT Lingga Jaya Perkasa Line
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-justify">
                PT Lingga Jaya Perkasa Line memiliki sejarah yang membanggakan di Indonesia.
                Didirikan pada tanggal 30 Juni tahun 2009. Pelajari lebih lanjut tentang sejarah perusahaan selama beberapa windu.
              </p>
              <div className="mt-2 lg:mt-0 flex justify-center lg:justify-start">
                <Link href="/about/history">
                  <button className="bg-[#E8C547] text-base sm:text-xl font-semibold text-white py-2 px-6 rounded-xl shadow hover:scale-105 transition">
                    Selengkapnya
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* Hero 3 */}
        <div className="relative flex justify-around w-full h-full">
          <div className={`relative w-full overflow-hidden ${showAllService ? "h-[1400px] md:h-[1100px]" : "h-[1200px] md:h-[900px]"}`}>
            <Image
              src="/Gambar Servis Kami.png"
              alt="Servis Kami"
              fill
              style={{ objectFit: "cover", objectPosition: "top"}}
              priority
            />
          <div className="absolute inset-0 bg-black/60 z-[1]" />
            <div className="absolute inset-0 z-[2] flex flex-col py-10 text-white">
                <h1 className="font-extrabold text-3xl mb-5 px-20">Servis Kami</h1>
                <div className="grid grid-cols-2 gap-4 lg:hidden px-4">
                  {visibleServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/service/${service.slug}`}
                      className="w-full h-[300px] relative overflow-hidden rounded-2xl group shadow-lg"
                    >
                      <Image
                        src={service.mini_image}
                        alt={service.title}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="group-hover:scale-110 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 flex items-start justify-start px-2 py-6 pl-4">
                        <p className="text-white font-bold text-xl">{service.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-3 gap-6 w-full place-items-center">
                  {visibleServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/service/${service.slug}`}
                      className="w-[300px] h-[300px] relative overflow-hidden rounded-2xl group shadow-lg"
                    >
                      <Image
                        src={service.mini_image}
                        alt={service.title}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="group-hover:scale-110 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                        <p className="text-white font-bold text-lg">{service.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                {!showAllService && services.length > 6 && (
                  <button
                    onClick={() => setShowAllService(true)}
                    className="mt-10 px-6 py-3 bg-white text-[#0a1c29] font-bold rounded-full self-center hover:bg-gray-100 transition lg:block"
                  >
                    Lebih Banyak Servis
                  </button>
                )}
            </div>
          </div>
        </div>
        {/* Hero 4 */}
        <div className="relative w-full h-full text-white">
          <div className="relative w-full h-full bg-white py-10 px-4 lg:px-20">
            <h1 className="text-[#07A6E1] font-bold text-3xl mb-8">Berita Terkini</h1>

            {/* Desktop (auto scroll horizontal with snap-x) */}
            <div className="hidden sm:block relative">
              {/* Snap Slider */}
              <div
                ref={newsSliderRef}
                className="flex gap-4 overflow-x-auto snap-x scroll-smooth pb-4"
                onMouseEnter={() => clearInterval(autoScrollRef.current)}
                onMouseLeave={startAutoScroll}
              >
                {visibleNews.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="min-w-[300px] h-[300px] flex-shrink-0 relative overflow-hidden rounded-2xl group snap-start shadow-lg"
                  >
                    <Image
                      src={item.mini_image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="group-hover:scale-110 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black/60 py-2 px-4">
                      <p className="text-white font-semibold text-center">{item.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile (grid 2x2) */}
            <div className="grid grid-cols-2 gap-2 sm:hidden">
              {visibleNews.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="w-full h-[300px] relative overflow-hidden rounded-2xl shadow-lg group"
                >
                  <Image
                    src={item.mini_image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 py-1 px-2">
                    <p className="text-white text-sm font-semibold text-center">{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Tombol Lebih Banyak Berita */}
            {!showAllNews && news.length > 6 && (
              <button
                onClick={() => setShowAllNews(true)}
                className="sm:hidden mt-10 px-6 py-3 bg-[#E8C547] text-white font-bold rounded-full self-center hover:bg-[#F4B400] transition block mx-auto"
              >
                Lebih Banyak Berita
              </button>
            )}
          </div>
        </div>

      </section>
    </>
  );
}
