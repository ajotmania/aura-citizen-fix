import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Camera,
  Wrench,
  ShieldCheck,
  Activity,
  Leaf,
  Lightbulb,
  Footprints,
  AlertTriangle,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImg from "@/assets/hero-city.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURA — Ekosistem Tata Kota Cerdas untuk Infrastruktur Publik" },
      {
        name: "description",
        content:
          "AURA membantu warga melaporkan kerusakan jalan, trotoar, dan PJU. Admin dinas memantau lewat peta GIS real-time dan menugaskan petugas lapangan secara otomatis.",
      },
      { property: "og:title", content: "AURA — Ekosistem Tata Kota Cerdas" },
      {
        property: "og:description",
        content:
          "Lapor kerusakan infrastruktur kota dalam hitungan detik. Pantau penanganan secara real-time melalui dashboard GIS.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <div className="container relative mx-auto grid gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
            <div className="flex flex-col justify-center">
              <Badge className="w-fit border-primary/20 bg-primary/10 text-primary hover:bg-primary/15">
                <Leaf className="mr-1.5 h-3.5 w-3.5" /> Smart City · Eco-Urban
              </Badge>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance md:text-6xl">
                Kota yang <span className="text-primary">menyembuhkan</span> dirinya sendiri.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground text-balance">
                AURA mengintegrasikan warga, petugas lapangan, dan admin dinas dalam satu alur
                kerja terpadu untuk mendeteksi, memetakan, dan menangani kerusakan infrastruktur
                publik secara cepat dan transparan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-leaf-gradient text-primary-foreground shadow-elev hover:opacity-90"
                >
                  <Link to="/auth/signup">
                    Mulai Lapor <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/fitur">Pelajari fitur</Link>
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Data spasial terverifikasi</div>
                <div className="flex items-center gap-2"><Activity className="h-4 w-4 text-primary" /> Real-time</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-leaf-gradient opacity-20 blur-2xl" />
              <img
                src={heroImg}
                alt="Ilustrasi kota cerdas dengan infrastruktur yang terawat"
                className="rounded-3xl shadow-elev"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-soft md:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/15 text-success">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Laporan ditangani</p>
                    <p className="text-lg font-bold">128 / minggu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="border-y border-border bg-secondary/40">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tiga fokus utama</h2>
              <p className="mt-3 text-muted-foreground">
                Kerusakan yang berdampak langsung pada mobilitas dan keselamatan warga.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { icon: AlertTriangle, t: "Jalan Berlubang", d: "Deteksi lubang aspal yang membahayakan pengendara." },
                { icon: Footprints, t: "Trotoar Rusak", d: "Jaga aksesibilitas pejalan kaki dan kursi roda." },
                { icon: Lightbulb, t: "PJU Padam", d: "Pulihkan penerangan jalan untuk keamanan malam hari." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-elev">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="border-accent/30 text-accent">Alur kerja</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Dari laporan ke perbaikan dalam satu alur
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", icon: Camera, t: "Warga melapor", d: "Kirim foto, lokasi GPS, dan deskripsi kendala. Cepat dan tanpa ribet." },
              { n: "02", icon: MapPin, t: "Admin memetakan", d: "Dashboard GIS memetakan sebaran masalah dan menentukan urgensi penanganan." },
              { n: "03", icon: Wrench, t: "Petugas menangani", d: "Work order otomatis ke petugas terdekat dengan bukti foto saat selesai." },
            ].map(({ n, icon: Icon, t, d }) => (
              <div key={n} className="relative rounded-3xl border border-border bg-card p-7 shadow-soft">
                <span className="absolute -top-4 left-7 rounded-full bg-leaf-gradient px-3 py-1 text-xs font-bold text-primary-foreground shadow-soft">
                  {n}
                </span>
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 pb-20">
          <div className="overflow-hidden rounded-3xl bg-hero-gradient p-10 text-primary-foreground shadow-elev md:p-16">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                  Jadilah bagian dari kota yang lebih baik.
                </h2>
                <p className="mt-3 max-w-xl text-primary-foreground/85">
                  Daftar sebagai warga, petugas, atau admin dinas. Bersama wujudkan tata kota yang
                  responsif terhadap kebutuhan publik.
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/auth/signup">Daftar gratis</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/auth/login">Masuk</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
