export const navigation = [
    { name: "Beranda", href: "/" },
    {   name: "Tentang Kami", 
        href: "/about",
        children: [
            { name: 'Sejarah', href: '#history' },
            { name: 'Struktur Organisasi', href: '#organizational-structure' },
            { name: 'Visi dan Misi', href: '#vision-mission' }
        ]
    },
    { name: "Servis", href: "/service" },
    { name: "Berita", href: "/news" },
    { name: "Kontak", href: "/contact" },
];
