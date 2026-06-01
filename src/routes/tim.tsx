import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/tim")({
  head: () => ({
    meta: [
      { title: "Tim AURA — Coding Camp 2026 powered by DBS Foundation" },
      {
        name: "description",
        content:
          "Tim multidisiplin di balik AURA: Artificial Intelligence, Data Science, dan Full-Stack Development.",
      },
      { property: "og:title", content: "Tim AURA" },
      { property: "og:description", content: "Tim kolaboratif lintas-path di Coding Camp 2026 yang membangun AURA." },
    ],
  }),
  component: TeamPage,
});

const PATHS = [
  { name: "Artificial Intelligence", desc: "Klasifikasi gambar, deteksi kerusakan, scoring urgensi.", color: "bg-primary/10 text-primary border-primary/20" },
  { name: "Data Science", desc: "Analisis spasial, indeks aksesibilitas, prioritas penanganan.", color: "bg-accent/15 text-accent border-accent/20" },
  { name: "Full-Stack Development", desc: "Aplikasi web, dashboard GIS, integrasi backend.", color: "bg-success/15 text-success border-success/20" },
];

// Placeholder slots — replace with real members later
const PLACEHOLDER_MEMBERS = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  name: `Anggota ${i + 1}`,
  role: PATHS[i % PATHS.length].name,
  task: "Peran & tanggung jawab akan ditambahkan.",
}));

function TeamPage() {
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
              <Badge variant="outline" className="border-primary/30 text-primary">
                Coding Camp 2026 · DBS Foundation
              </Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-serif-display text-5xl tracking-tight text-balance md:text-7xl">
                Tim di balik <span className="italic text-primary">AURA</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-balance">
                Tiga path, satu misi: membangun ekosistem tata kota yang lebih responsif.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container mx-auto grid gap-6 px-4 py-16 md:grid-cols-3">
          {PATHS.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div className={`h-full rounded-3xl border p-7 transition-transform hover:-translate-y-1.5 ${p.color}`}>
                <h3 className="font-serif-display text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm opacity-80">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="container mx-auto px-4 pb-24">
          <Reveal>
            <h2 className="font-serif-display text-3xl tracking-tight md:text-4xl">Anggota tim</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Slot placeholder — lengkapi dengan nama, foto, dan tanggung jawab masing-masing anggota.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PLACEHOLDER_MEMBERS.map((m, i) => (
              <Reveal key={m.id} delay={(i % 3) * 100}>
                <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev">
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="bg-leaf-gradient text-primary-foreground text-lg">
                      {m.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-xs text-primary">{m.role}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{m.task}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
