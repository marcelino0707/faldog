"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/app/data/services";
import { news } from "./data/news";

export default function Home() {
  const [showAllService, setShowAllService] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);
  const visibleServices = showAllService ? services : services.slice(0, 6);
  const visibleNews = showAllNews ? news : news.slice(0, 6);
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
        <div className="relative flex justify-around w-full h-full px-20 my-20">
          <div className="container">
            <div className="flex justify-around content-center gap-4">
              <div className="w-1/2 h-[500px] md: relative overflow-hidden rounded-2xl">
                <Image
                  src="/Foto Sejarah.png"
                  alt="Home Sejarah"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top"}}
                  priority
                />
              </div>
              <div className="w-1/2 flex flex-col justify-center px-8 gap-5">
                {/* Title */}
                <h2 className="text-[#07A6E1] text-2xl font-bold">
                  Sejarah PT Lingga Jaya Perkasa Line
                </h2>
                <p className="text-xl leading-normal text-justify">
                  PT Lingga Jaya Perkasa Line memiliki sejarah yang membanggakan di Indonesia. Didirikan pada tanggal 30 Juni tahun 2009. Pelajari lebih lanjut tentang sejarah perusahaan selama beberapa windu.
                </p>
                <Link href="/about/history">
                  <button
                    className="bg-[#E8C547] text-xl font-semibold text-white py-2 rounded-xl shadow hover:scale-105 transition w-1/3"
                  >
                    Selengkapnya
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Hero 3 */}
        <div className="relative flex justify-around w-full h-full">
          <div className={`relative w-full ${showAllService ? "h-[1100px]" : "h-[900px]"} overflow-hidden`}>
            <Image
              src="/Gambar Servis Kami.png"
              alt="Servis Kami"
              fill
              style={{ objectFit: "cover", objectPosition: "top"}}
              priority
            />
            <div className="absolute inset-0 bg-black/60 z-[1]" />
            <div className="absolute inset-0 z-[2] flex flex-col py-10 px-20 text-white">
                <h1 className="font-extrabold text-3xl mb-5">Servis Kami</h1>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
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
                    className="mt-10 px-6 py-3 bg-white text-[#0a1c29] font-bold rounded-full self-center hover:bg-gray-100 transition"
                  >
                    Lebih Banyak Servis
                  </button>
                )}
            </div>
          </div>
        </div>
        {/* Hero 4 */}
        <div className="relative w-full h-full text-white">
            <div className="relative w-full h-full bg-white py-10 px-20">
            <h1 className="text-[#07A6E1] font-bold text-3xl mb-8">Berita Terkini</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              {visibleNews.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="w-[300px] h-[300px] relative overflow-hidden rounded-2xl shadow-lg group"
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

            {!showAllNews && news.length > 6 && (
              <button
                onClick={() => setShowAllNews(true)}
                className="mt-10 px-6 py-3 bg-[#07A6E1] text-white font-bold rounded-full self-center hover:bg-[#0595c9] transition block mx-auto"
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
