import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative">
        <div className="w-full h-[360px] overflow-hidden relative">
            <Image
                src="/footer.png"
                alt="Home BG"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
            />
            <div className="absolute inset-0 flex flex-col md:flex-row justify-around w-full md:justify-around items-center md:items-start px-4 py-4 md:px-0">
                <div className="text-white text-lg font-light max-w-md flex flex-wrap items-center align-middle mb-4">
                    <div>
                        <strong className="font-bold">Alamat Kantor</strong>
                        <p>
                            Pulorida RT.003 RW.001 
                        </p>
                        <p>
                            Kel. Lebakgede Kec. Pulomerak, Kota Cilegon, Banten
                        </p>
                        <p>
                            Telp: 0254-574452
                        </p>
                    </div>
                    <div>
                        <p>
                            Email:
                        </p>
                        <p>
                            Corporate Secretary: corpseclingga@gmail.com
                        </p>
                    </div>   
                    <div className="flex gap-4 mt-3">
                        {[1, 2, 3, 4].map((icon) => (
                            <div key={icon} className="w-6 h-6 relative">
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
                <div className="max-w-md w-[150px] h-[120px] overflow-hidden relative">
                    <Image
                        src="/Logo Footer.png"
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
