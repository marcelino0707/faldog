
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { services } from "@/app/data/services";

export default function ServiceDetail() {
    const params = useParams();
    const { detail: slug } = params;

    const data = services.find((item) => item.slug === slug);

    if (!data) {
        return <div className="p-10">Servis tidak ditemukan</div>;
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

                <div className="absolute inset-0 flex items-center justify-start pl-20 z-20">
                    <div className="text-right">
                        <h2 className="text-white text-4xl font-bold leading-snug drop-shadow-md">
                            {data.title}
                        </h2>
                    </div>
                </div>
                </div>
            </section>

            {/* Konten Deskripsi */}
            <section className="mx-auto px-20 py-12">
                <h2 className="text-lg md:text-xl font-semibold mb-4">
                {data.subtitle}
                </h2>
                <p className="text-justify text-base leading-relaxed mb-6">
                {data.first_content}
                </p>
                <p className="text-justify text-base leading-relaxed">
                {data.second_content}
                </p>
            </section>
        </div>
    );
}