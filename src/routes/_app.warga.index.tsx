import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/warga/")({
  beforeLoad: () => {
    // Redirect handled by client component since we use client auth
  },
  component: WargaIndex,
});

function WargaIndex() {
  // Defer to /warga/laporan
  if (typeof window !== "undefined") window.location.replace("/warga/laporan");
  return null;
}
