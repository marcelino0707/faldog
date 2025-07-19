import Image from "next/image";
export default function Service() {
    return (
        <>
            <section className="w-full relative h-[600px] overflow-hidden">
                <Image
                    src="/service-hero.png"
                    alt="hero service"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top"}}
                    priority
                />
                {/* Overlay opacity */}
                <div className="absolute inset-0 bg-black/50 z-10" /> 

                <div className="absolute inset-0 flex items-center justify-end px-20 z-20">
                    <div className="text-right max-w-md">
                        <h2 className="text-white text-4xl font-bold leading-snug drop-shadow-md">
                            Spesialis Jasa <br /> Konstruksi
                        </h2>
                    </div>
                </div>
            </section>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 h-[600px]">
                {/* Kolom kiri - Teks */}
                <div className="flex items-center justify-center bg-white px-10 py-12">
                <div className="max-w-md">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                    Mitra Anda Dalam Konstruksi
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                    Perusahaan kami bersedia dan merasa mampu dalam bentuk penanganan
                    pekerjaan di bidang Pertambangan, Kontraktor, Supplier, Jasa, Heavy
                    Duty Rental, General Trading, Perusahaan Bongkar Muat (PBM) dan
                    Jasa umum lainnya.
                    </p>
                </div>
                </div>

                {/* Kolom kanan - Gambar */}
                <div className="relative h-[600px] md:h-auto">
                    <div className="absolute inset-0 md:left-12">
                        <Image
                            src="/service1.png"
                            alt="Service Detail"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 h-[600px]">
                {/* Kolom kiri - Gambar */}
                <div className="relative h-[600px] md:h-auto">
                    <div className="absolute inset-0 md:right-12">
                        <Image
                            src="/service2.png"
                            alt="Supporting Service"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            priority
                        />
                    </div>
                </div>

                {/* Kolom kanan - Teks & Badge */}
                <div className="flex items-center justify-center bg-white px-10 py-12">
                <div className="max-w-md">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                    Jasa Pendukung
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                    PT Lingga Jaya Perkasa Line memiliki lini bisnis jasa yang
                    melingkupi portfolio utama korporasi, dimulai dari jasa-jasa
                    pekerjaan tanah, pekerjaan pondasi serta penyiapan lahan
                    konstruksi dengan didukung pengalaman dan utilitas yang telah
                    teruji yang menjadikan kami adaptif dalam menangani kondisi
                    di lapangan dan kebutuhan masyarakat dalam negeri.
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                    {[
                        "Pekerjaan Tanah",
                        "Pekerjaan Pondasi",
                        "Pekerjaan Beton",
                        "Pekerjaan Pengaspalan",
                        "Penyiapan Lahan Konstruksi",
                        "Pekerjaan Pagar",
                        "Pekerjaan Pemadatan"
                    ].map((item, index) => (
                        <span
                        key={index}
                        className="inline-block bg-gray-200 text-sm text-gray-800 px-4 py-1 rounded-full"
                        >
                        {item}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
            </section>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 h-[600px] mb-20">
                {/* Kolom kiri - Teks & Badge */}
                <div className="flex items-center justify-center bg-white px-10 py-12 order-2 md:order-1">
                    <div className="max-w-md">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-4 leading-snug">
                        Penyedia Solusi <br /> Bahan Bangunan
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        PT Lingga Jaya Perkasa Line menyediakan berbagai macam varian produk dan layanan sesuai tingkat kebutuhan pembangunan dengan kompleksitas yang dinamis dari aspek geografis dan kondisi lokasi di Indonesia. Penyediaan tersebut hadir untuk memenuhi berbagai sektor industri, konstruksi, infrastruktur hingga proyek skala besar lainnya.
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                        {["Supplier", "Heavy Duty Rental"].map((item, index) => (
                        <span
                            key={index}
                            className="inline-block bg-gray-200 text-sm text-gray-800 px-4 py-1 rounded-full"
                        >
                            {item}
                        </span>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Kolom kanan - Gambar */}
                <div className="relative h-[600px] md:h-auto order-1 md:order-2">
                    <div className="absolute inset-0 md:left-12">
                    <Image
                        src="/service3.png"
                        alt="Material Supply"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        priority
                    />
                    </div>
                </div>
            </section>
        </>
    );
}