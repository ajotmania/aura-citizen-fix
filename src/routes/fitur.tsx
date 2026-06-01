import { createFileRoute } from "@tanstack/react-router";
import {
  Camera, MapPin, Bell, BarChart3, Users, ShieldCheck, Wrench, Layers, Database, Sparkles,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/fitur")({
  head: () => ({
    meta: [
      { title: "Fitur AURA — Pelaporan, GIS Monitoring, Work Order" },
      {
        name: "description",
        content:
          "Fitur AURA: pelaporan instan dengan foto & GPS, dashboard GIS real-time, work order otomatis ke petugas, dan analitik kota.",
      },
      { property: "og:title", content: "Fitur AURA" },
      { property: "og:description", content: "Pelaporan instan, GIS real-time, work order otomatis, dan analitik kota." },
    ],
  }),
  component: FeaturesPage,
});

const FEATURES = [
  { icon: Camera, t: "Lapor Instan", d: "Foto, lokasi GPS, kategori, dan deskripsi dalam satu form ringkas." },
  { icon: MapPin, t: "Peta GIS Real-time", d: "Sebaran laporan, status, dan tingkat urgensi tervisualisasi di peta." },
  { icon: Wrench, t: "Work Order Otomatis", d: "Admin menugaskan petugas lapangan langsung dari dashboard." },
  { icon: Bell, t: "Update Status", d: "Warga memantau perkembangan laporannya dari pending sampai selesai." },
  { icon: BarChart3, t: "Analitik Kota", d: "Statistik kategori, urgensi, dan response time per wilayah." },
  { icon: Users, t: "Multi-Role", d: "Tiga peran: Warga, Petugas Lapangan, dan Admin Dinas dalam satu platform." },
  { icon: ShieldCheck, t: "Akses Aman", d: "Row-level security memastikan setiap user hanya akses data yang berhak." },
  { icon: Layers, t: "Indeks Urgensi", d: "Klasifikasi rendah, sedang, tinggi, kritis untuk prioritas penanganan." },
  { icon: Database, t: "Data Terpusat", d: "Riwayat laporan dan bukti perbaikan tersimpan rapi untuk audit." },
];

function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden grain border-b border-border">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-25 blur-3xl animate-float-slow"
            style={{ background: "radial-gradient(closest-side, var(--primary-glow), transparent)" }}
          />
          <div className="container relative mx-auto px-4 py-24 text-center">
            <Reveal>
              <Badge variant="outline" className="border-accent/30 text-accent">
                <Sparkles className="mr-1 h-3 w-3" /> Kemampuan platform
              </Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-serif-display text-5xl tracking-tight text-balance md:text-7xl">
                Fitur lengkap <span className="italic text-primary">AURA</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-balance">
                Semua yang dibutuhkan untuk mendeteksi, memetakan, dan menangani kerusakan
                infrastruktur publik.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container mx-auto grid gap-6 px-4 py-20 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={(i % 3) * 100}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-elev">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-gradient text-primary-foreground transition-transform group-hover:rotate-3 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif-display text-2xl">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
