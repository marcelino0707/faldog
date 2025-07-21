"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { news } from "@/app/data/news";

export default function NewsDetail() {
    const params = useParams();
    const { detail: slug } = params;

    const data = news.find((item) => item.slug === slug);

    if (!data) {
        return <div className="p-10">Berita tidak ditemukan</div>;
    }

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
            <section className="w-full flex flex-col items-center mb-10 px-5 sm:px-10 md:px-20">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 max-w-4xl">
                    {data.title}
                </h1>
                <Image
                    src={data.image}
                    alt={data.title}
                    width={800}
                    height={400}
                    className="rounded-xl mb-6 max-w-full object-cover"
                />
                <div className="text-justify text-base leading-relaxed max-w-4xl space-y-6">
                    <p className="font-semibold text-lg">{data.subtitle}</p>
                    <p>{data.first_content}</p>
                    <p>{data.second_content}</p>
                    <p>{data.third_content}</p>
                </div>
            </section>
        </>
    );
}