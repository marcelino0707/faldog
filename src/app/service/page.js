import Image from "next/image";
import Link from "next/link";
import { services } from "../data/services";

export default function Service() {
    return (
        <>
        {/* Hero */}
        <section className="w-full relative min-h-[450px] md:h-[600px] overflow-hidden md:rounded-none">
            <Image
            src="/service-hero.png"
            alt="hero service"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            priority
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 flex items-center justify-end px-6 md:px-20 z-20">
            <div className="text-right max-w-md">
                <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug drop-shadow-md">
                Spesialis Jasa <br /> Konstruksi
                </h2>
            </div>
            </div>
            <div className="sm:hidden absolute bottom-0 w-full overflow-hidden leading-none rotate-180 z-20">
                <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-10">
                    <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" className="fill-white"></path>
                </svg>
            </div>
        </section>

        {/* Section 1 */}
        <section className="w-full flex flex-col md:grid md:grid-cols-2 min-h-[450px] mt-6 md:mt-0">
            <div className="order-2 md:order-1 flex items-center justify-center bg-white px-6 md:px-10 py-10 md:py-12">
            <div className="max-w-md">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                Mitra Anda Dalam Konstruksi
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                Perusahaan kami bersedia dan merasa mampu dalam bentuk penanganan
                pekerjaan di bidang Pertambangan, Kontraktor, Supplier, Jasa,
                Heavy Duty Rental, General Trading, Perusahaan Bongkar Muat (PBM)
                dan Jasa umum lainnya.
                </p>
            </div>
            </div>
            <div className="order-1 md:order-2 relative h-[350px] md:h-auto">
            <Image
                src="/service1.png"
                alt="Service Detail"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
            />
            </div>
        </section>

        {/* Section 2 */}
        <section className="w-full flex flex-col md:grid md:grid-cols-2 min-h-[450px]">
            <div className="relative order-1 md:order-1 h-[350px] md:h-auto">
            <Image
                src="/service2.png"
                alt="Supporting Service"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
            />
            </div>
            <div className="order-2 flex items-center justify-center bg-white px-6 md:px-10 py-10 md:py-12">
            <div className="max-w-md">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                Jasa Pendukung
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                PT Lingga Jaya Perkasa Line memiliki lini bisnis jasa yang
                melingkupi portfolio utama korporasi, dimulai dari jasa-jasa
                pekerjaan tanah, pekerjaan pondasi serta penyiapan lahan
                konstruksi dengan didukung pengalaman dan utilitas yang telah
                teruji yang menjadikan kami adaptif dalam menangani kondisi di
                lapangan dan kebutuhan masyarakat dalam negeri.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                {[
                    "Pekerjaan Tanah",
                    "Pekerjaan Pondasi",
                    "Pekerjaan Beton",
                    "Pekerjaan Pengaspalan",
                    "Penyiapan Lahan Konstruksi",
                    "Penyiapan dan Pematangan Tanah",
                ].map((item, index) => {
                    const matchedService = services.find(
                    (service) => service.title === item
                    );
                    return matchedService ? (
                    <Link
                        key={index}
                        href={`/service/${matchedService.slug}`}
                        className="inline-block bg-gray-200 text-sm text-gray-800 px-4 py-1 rounded-full hover:bg-gray-300 transition"
                    >
                        {item}
                    </Link>
                    ) : (
                    <span
                        key={index}
                        className="inline-block bg-gray-100 text-sm text-gray-400 px-4 py-1 rounded-full"
                    >
                        {item}
                    </span>
                    );
                })}
                </div>
            </div>
            </div>
        </section>

        {/* Section 3 */}
        <section className="w-full flex flex-col md:grid md:grid-cols-2 min-h-[450px] mb-10 md:mb-20">
            <div className="order-2 md:order-1 flex items-center justify-center bg-white px-6 md:px-10 py-10 md:py-12">
            <div className="max-w-md">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 leading-snug">
                Penyedia Solusi <br /> Bahan Bangunan
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                PT Lingga Jaya Perkasa Line menyediakan berbagai macam varian
                produk dan layanan sesuai tingkat kebutuhan pembangunan dengan
                kompleksitas yang dinamis dari aspek geografis dan kondisi lokasi
                di Indonesia. Penyediaan tersebut hadir untuk memenuhi berbagai
                sektor industri, konstruksi, infrastruktur hingga proyek skala
                besar lainnya.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                {["Supplier", "Heavy Duty Rental"].map((item, index) => {
                    const matchedService = services.find(
                    (service) => service.title === item
                    );
                    return matchedService ? (
                    <Link
                        key={index}
                        href={`/service/${matchedService.slug}`}
                        className="inline-block bg-gray-200 text-sm text-gray-800 px-4 py-1 rounded-full hover:bg-gray-300 transition"
                    >
                        {item}
                    </Link>
                    ) : (
                    <span
                        key={index}
                        className="inline-block bg-gray-100 text-sm text-gray-400 px-4 py-1 rounded-full"
                    >
                        {item}
                    </span>
                    );
                })}
                </div>
            </div>
            </div>
            <div className="relative order-1 md:order-2 h-[350px] md:h-auto">
            <Image
                src="/service3.png"
                alt="Material Supply"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
            />
            </div>
        </section>
        </>
    );
}