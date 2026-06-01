import { createFileRoute } from "@tanstack/react-router";
import { Target, Globe2, HeartHandshake, Sparkles } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang AURA — Visi & Misi Ekosistem Smart City" },
      {
        name: "description",
        content:
          "Kenali AURA: ekosistem tata kota cerdas yang menyatukan warga, petugas, dan dinas untuk infrastruktur publik yang lebih baik.",
      },
      { property: "og:title", content: "Tentang AURA" },
      { property: "og:description", content: "Visi dan misi AURA dalam membangun tata kota yang responsif dan inklusif." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
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
                <Sparkles className="mr-1 h-3 w-3" /> Visi & misi
              </Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-serif-display text-5xl tracking-tight text-balance md:text-7xl">
                Tentang <span className="italic text-primary">AURA</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-balance">
                Solusi tuntas untuk infrastruktur publik — bukan sekadar platform pelaporan.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container mx-auto grid gap-6 px-4 py-20 md:grid-cols-2">
          {[
            {
              icon: Target,
              t: "Fokus pada Mobilitas",
              d: "AURA berfokus pada kerusakan infrastruktur publik yang berdampak langsung pada mobilitas warga: jalan berlubang, trotoar rusak, dan malfungsi PJU.",
            },
            {
              icon: Globe2,
              t: "Berbasis GIS",
              d: "Dashboard monitoring berbasis Geographic Information System (GIS) memungkinkan pemetaan sebaran masalah kota secara real-time dan presisi.",
            },
            {
              icon: HeartHandshake,
              t: "Tiga Entitas, Satu Alur",
              d: "Warga sebagai pelapor, Petugas Lapangan sebagai eksekutor, Admin Dinas sebagai pengawas — terintegrasi dalam alur kerja terpadu.",
            },
            {
              icon: Sparkles,
              t: "Validitas Data Spasial",
              d: "Skala implementasi difokuskan pada simulasi data spasial perkotaan untuk menguji indeks aksesibilitas dan urgensi penanganan.",
            },
          ].map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 110}>
              <div className="group h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-elev">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:rotate-3 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif-display text-2xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="border-y border-border bg-warm-gradient py-20">
          <Reveal className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="font-serif-display text-4xl tracking-tight text-balance md:text-5xl">
              Pengembangan Kolaboratif
            </h2>
            <p className="mt-5 text-muted-foreground text-balance">
              Ekosistem AURA dikelola secara kolaboratif oleh tim multidisiplin dari beberapa path
              di program <strong>Coding Camp 2026 powered by DBS Foundation</strong>: Artificial
              Intelligence, Data Science, dan Full-Stack Development.
            </p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
