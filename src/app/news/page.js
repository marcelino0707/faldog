"use client";

import { useState } from "react";
import Image from "next/image";
export default function News() {
    const [showAll, setShowAll] = useState(false);

    const newsImages = [
        "/news/Image News 1.png",
        "/news/Image News 2.png",
        "/news/Image News 3.png",
        "/news/Image News 4.png",
        "/news/Image News 5.png",
        "/news/Image News 6.png",
        "/news/Image News 7.png",
        "/news/Image News 8.png",
        "/news/Image News 9.png",
    ];

    const imagesToShow = showAll ? newsImages : newsImages.slice(0, 6);

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
            <section className="w-full flex flex-col items-center mb-10 px-20">
                <div className="container">
                    <h1 className="text-[#00ADEF] font-bold text-2xl self-start max-w-5xl w-full mb-6">
                        Berita Terbaru
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full container">
                {imagesToShow.map((src, index) => (
                    <div key={index} className="w-full h-[500px] relative">
                    <Image
                        src={src}
                        alt={`news-${index + 1}`}
                        fill
                        style={{ objectFit: "cover", borderRadius: "12px" }}
                        className="shadow-md"
                        priority
                    />
                    </div>
                ))}
                </div>

                {!showAll && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="mt-6 bg-[#E8C547] text-sm font-semibold text-white px-6 py-2 rounded-md shadow hover:scale-105 transition"
                    >
                        Lebih Banyak Berita
                    </button>
                )}
            </section>
        </>
    );
}