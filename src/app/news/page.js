"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { news } from "../data/news";
export default function News() {
    const [showAllNews, setShowAllNews] = useState(false);
    const visibleNews = showAllNews ? news : news.slice(0, 6);
    
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
            <div className="relative w-full h-full text-white">
                <div className="relative w-full h-full bg-white py-10 px-4 lg:px-20">
                <h1 className="text-[#07A6E1] font-bold text-3xl mb-8">Berita Terkini</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                    {visibleNews.map((item) => (
                    <Link
                        key={item.slug}
                        href={`/news/${item.slug}`}
                        className="w-full md:w-[300px] group"
                    >
                        <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src={item.mini_image}
                            alt={item.title}
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            className="group-hover:scale-110 transition-transform duration-500"
                            priority
                        />
                        </div>
                        <p className="mt-2 text-black font-semibold text-center group-hover:text-[#07A6E1]">
                        {item.title}
                        </p>
                    </Link>
                    ))}
                </div>

                {/* Tombol Lebih Banyak Berita */}
                {!showAllNews && news.length > 6 && (
                    <button
                    onClick={() => setShowAllNews(true)}
                    className="mt-10 px-6 py-3 bg-[#E8C547] text-white font-bold rounded-full self-center hover:bg-[#F4B400] transition block mx-auto"
                    >
                    Lebih Banyak Berita
                    </button>
                )}
            </div>
        </div>
        </>
    );
}