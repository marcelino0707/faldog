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
                <div className="absolute inset-0 bg-black/50 flex items-center justify-start pl-20">
                    <h2 className="text-white text-4xl font-bold leading-snug drop-shadow-md">
                        {data.title}
                    </h2>
                </div>
            </section>

            {/* Konten Deskripsi */}
            <section className="mx-auto px-20 py-12">
                <h2 className="text-lg md:text-xl font-semibold mb-4">
                    {data.subtitle}
                </h2>

                {/* first_content */}
                {data.first_content && (
                    <p className="text-justify text-base leading-relaxed mb-6">
                        {data.first_content}
                    </p>
                )}

                {/* second_content (jika ada) */}
                {data.second_content && (
                    <p className="text-justify text-base leading-relaxed mb-6">
                        {data.second_content}
                    </p>
                )}

               {/* List Section */}
                    {(data.first_list_content || data.second_list_content) && (
                        <section className="mx-auto pb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                
                                {/* First List */}
                                {data.first_list_content && (
                                    <div>
                                        <h3 className="font-semibold mb-3">
                                            {data.first_list_content.title}
                                        </h3>
                                        <ul className="list-disc list-inside space-y-1">
                                            {data.first_list_content.list.map((item, idx) => (
                                                <li key={idx} className="text-base leading-relaxed">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Second List */}
                                {data.second_list_content && (
                                    <div>
                                        <h3 className="font-semibold mb-3">
                                            {data.second_list_content.title}
                                        </h3>
                                        <ul className="list-disc list-inside space-y-1">
                                            {data.second_list_content.list.map((item, idx) => (
                                                <li key={idx} className="text-base leading-relaxed">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
            </section>
        </div>
    );
}
