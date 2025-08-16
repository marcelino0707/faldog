"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { news } from "../data/news";
export default function News() {
    const [showAllNews, setShowAllNews] = useState(false);
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
            </section>
        </>
    );
}