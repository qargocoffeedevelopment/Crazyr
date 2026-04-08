import { useState, useEffect } from "react";

const TheMan = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-classified font-mono text-classified-foreground overflow-hidden">
      {/* Scan line overlay */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="absolute inset-x-0 h-px bg-classified-accent/20 animate-scan-line" />
      </div>

      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`relative z-10 max-w-2xl mx-auto px-6 py-16 transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="border border-classified-border p-6 mb-10 animate-flicker">
          <p className="text-xs text-classified-muted tracking-[0.3em] uppercase mb-1">
            🕳️ Hidden Page (Easter Egg)
          </p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-classified-foreground">
            THE MAN — <span className="text-classified-accent">INTERNAL REPORT</span>
          </h1>
        </div>

        {/* Main text */}
        <Section delay={0}>
          <p className="italic text-classified-muted text-sm mb-4">
            I understand the weight of what I am submitting.
          </p>
          <p className="mb-3">
            This record is based only on what has been observed, repeated, and
            quietly shared over time.
          </p>
          <p className="mb-3">I am not naming anyone.</p>
          <p className="mb-3">I am not identifying any location.</p>
          <p>I am only documenting patterns that should not exist.</p>
        </Section>

        <Divider />

        <Section delay={1}>
          <p className="mb-3">
            Over the past several cycles, I became aware of an individual
            presence — referred to only as{" "}
            <span className="text-classified-accent font-bold">"The Man."</span>
          </p>
          <p className="mb-3">
            Based on collected fragments, I believe this presence has remained
            active within multiple environments for an extended period of time,
            possibly longer than initially perceived.
          </p>
          <p className="text-classified-muted">
            There is no confirmed origin. Only transitions.
          </p>
        </Section>

        <Divider />

        <Section delay={2}>
          <p className="text-sm text-classified-muted uppercase tracking-widest mb-4">
            According to what has been gathered, this presence:
          </p>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start gap-2">
              <span className="text-classified-accent mt-1">▸</span>
              Appeared in one place for years without detection
            </li>
            <li className="flex items-start gap-2">
              <span className="text-classified-accent mt-1">▸</span>
              Disappeared abruptly without record
            </li>
            <li className="flex items-start gap-2">
              <span className="text-classified-accent mt-1">▸</span>
              Re-emerged elsewhere without trace of movement
            </li>
          </ul>
          <p className="mt-4">
            Since reappearing, it has integrated seamlessly into different
            systems, environments, and structures.
          </p>
          <p className="mt-2 text-classified-muted">
            It does not disrupt immediately.
          </p>
          <p className="text-classified-accent font-semibold">
            It settles first.
          </p>
        </Section>

        <Divider />

        {/* Supplemental Notes */}
        <Section delay={3}>
          <h2 className="text-lg font-bold mb-4 tracking-widest uppercase text-classified-foreground">
            📄 Supplemental Notes
          </h2>
          <p className="text-sm text-classified-muted mb-4">
            The following observations have been repeated across unrelated
            reports:
          </p>
          <ul className="space-y-3 pl-4 text-sm">
            {[
              "The presence is never directly introduced",
              "It becomes noticeable only after changes occur",
              "Systems surrounding it begin to behave inconsistently",
              "Individuals report a sense of familiarity without recognition",
              "Records prior to its appearance are often incomplete",
            ].map((note, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-classified-accent">●</span>
                {note}
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Final Statement */}
        <Section delay={4}>
          <h2 className="text-lg font-bold mb-4 tracking-widest uppercase text-classified-accent">
            ⚠️ Final Statement
          </h2>
          <p className="mb-3">
            I am submitting this not as a conclusion, but as a pattern.
          </p>
          <p className="mb-3">I cannot confirm intent.</p>
          <p className="mb-3">I cannot confirm identity.</p>
          <p className="mb-1">But I can confirm this:</p>
          <p className="text-classified-accent font-bold text-lg mt-2">
            Something is moving without being seen.
          </p>
          <p className="text-classified-accent font-bold text-lg">
            And it has been here longer than anyone realizes.
          </p>
        </Section>

        <Divider />

        {/* Hidden line — easter egg within the easter egg */}
        <div className="mt-12 mb-20 flex justify-center">
          <div className="group cursor-default border border-classified-border/0 hover:border-classified-accent/30 transition-all duration-700 px-6 py-4 rounded">
            <p className="text-xs text-classified-muted/0 group-hover:text-classified-accent transition-all duration-1000 select-none text-center tracking-widest">
              🔐 "It was never one place. It was always all of them."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Divider = () => (
  <div className="my-8 border-t border-classified-border/50" />
);

const Section = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <div
    className="opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${delay * 0.3 + 0.5}s` }}
  >
    {children}
  </div>
);

export default TheMan;
