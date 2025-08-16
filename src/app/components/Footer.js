import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative">
        <div className="w-full h-[300px] overflow-hidden relative">
            <Image
                src="/footer.png"
                alt="Home BG"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
            />
            <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center md:items-start px-4 lg:px-20 py-6 gap-6 bg-black/50">
                <div className="text-white text-sm md:text-base font-light max-w-md w-full h-full flex flex-col justify-between">
                    <div className="mb-4">
                        <strong className="block font-bold mb-1">Alamat Kantor</strong>
                        <p>
                            Jl. Raya Suralaya, Link.Pulorida No. 09
                        </p>
                        <p>
                            Kel. Lebakgede Kec. Pulomerak, Kota Cilegon, Banten,
                        </p>
                        <p>
                            42439
                        </p>
                        <p>
                            Telp: (0254) 574246/574451
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">
                            Email:
                        </p>
                        <p>
                            linggacil@yahoo.com
                        </p>
                    </div>   
                    <div className="flex gap-10">
                        {[1, 2, 3, 4].map((icon) => (
                            <div key={icon} className="w-6 h-6 md:w-7 md:h-7 relative hover:scale-110 transition-transform">
                                <Image
                                    src={`/media_social_footers/${icon}.png`}
                                    alt={`icon-${icon}`}
                                    fill
                                    style={{ objectFit: "contain" }}
                                    priority
                                />
                            </div>
                        ))}
                    </div>                 
                </div>
                <div className="relative w-[180px] h-[60px] md:w-[230px] md:h-[80px]">
                    <Image
                        src="/Logo.png"
                        alt="Home BG"
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </div>
            </div>
        </div>
        </footer>
    );
}
