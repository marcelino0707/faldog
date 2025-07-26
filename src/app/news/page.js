"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { news } from "../data/news";
export default function News() {
    const [showAllNews, setShowAllNews] = useState(false);
    const visibleNews = showAllNews ? news : news.slice(0, 6);

    const newsSliderRef = useRef(null);
    const scrollSlider = (ref, direction) => {
    if (ref.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <>
            <section className="w-full relative h-[400px] overflow-hidden mb-10">
                <Image
                    src="/news-hero.png"
                    alt="news hero"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top"}}
                    priority
                />
                {/* Overlay opacity */}
                <div className="absolute inset-0 bg-black/50 z-10" /> 

                <div className="absolute inset-0 flex items-center justify-start pl-20 z-20">
                    <div className="text-right max-w-md">
                        <h2 className="text-white text-4xl font-bold leading-snug drop-shadow-md">
                            Ruang Berita
                        </h2>
                    </div>
                </div>
            </section>
            <section className="relative w-full h-full text-white">
                <div className="relative w-full h-full bg-white py-10 px-20">
                <h1 className="text-[#07A6E1] font-bold text-3xl mb-8">Berita Terkini</h1>

                {/* Mobile Slider */}
                <div className="lg:hidden relative">
                {/* Left Arrow */}
                <button
                    onClick={() => scrollSlider(newsSliderRef, "left")}
                    className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow"
                >
                    ◀
                </button>

                <div
                    ref={newsSliderRef}
                    className="flex gap-4 overflow-x-auto snap-x scroll-smooth pb-4"
                >
                    {visibleNews.map((item) => (
                    <Link
                        key={item.slug}
                        href={`/news/${item.slug}`}
                        className="min-w-[280px] h-[280px] flex-shrink-0 relative overflow-hidden rounded-2xl group snap-start shadow-lg"
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

                {/* Right Arrow */}
                <button 
                    onClick={() => scrollSlider(newsSliderRef, "right")}
                    className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow"
                >
                    ▶
                </button>
                </div>  

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
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
                    className="mt-10 px-6 py-3 bg-[#E8C547] text-white font-bold rounded-full self-center hover:bg-[#F4B400] transition block mx-auto hidden lg:block"
                >
                    Lebih Banyak Berita
                </button>
                )}
            </div>
            </section>
        </>
    );
}