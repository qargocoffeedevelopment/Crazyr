import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import suspect1 from "@/assets/suspect-1.jpg";
import suspect2 from "@/assets/suspect-2.jpg";
import suspect3 from "@/assets/suspect-3.jpg";
import suspect4 from "@/assets/suspect-4.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleFileClick = useCallback(() => {
    const next = clickCount + 1;
    setClickCount(next);
    if (next >= 3) {
      navigate("/the-man");
    }
  }, [clickCount, navigate]);

  return (
    <div className="min-h-screen bg-[hsl(0,0%,7%)] text-[hsl(0,0%,90%)] overflow-hidden">
      {/* Breaking banner */}
      <div className="bg-[hsl(0,80%,45%)] text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-sm font-bold tracking-wide uppercase">
          🔴 BREAKING — Suspect identified in multiple ongoing investigations — Authorities remain silent — Pattern detected across jurisdictions — More details inside 🔴
        </div>
      </div>

      {/* Nav bar */}
      <header className="border-b border-[hsl(0,0%,15%)] bg-[hsl(0,0%,5%)]">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[hsl(0,80%,45%)] rounded flex items-center justify-center text-white font-black text-sm">
              CI
            </div>
            <div>
              <h1 className="text-lg font-black uppercase tracking-tight leading-none">Crime Insider</h1>
              <p className="text-[10px] text-[hsl(0,0%,50%)] tracking-widest uppercase">Investigations · Exposés · Truth</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs text-[hsl(0,0%,50%)] uppercase tracking-wider">
            <span className="text-[hsl(0,80%,45%)] font-bold">Home</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Featured article */}
        <div className="mb-3 flex items-center gap-3">
          <span className="bg-[hsl(0,80%,45%)] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
            Exclusive
          </span>
          <span className="text-[hsl(0,0%,40%)] text-xs">
            Published today · 8 min read
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6 max-w-3xl">
          Hezbollah Sleeper cell reporting for Dearborn, MI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article body */}
          <div className="md:col-span-2 space-y-6">
            {/* Suspect photos grid */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[hsl(0,80%,45%)] text-xs font-bold uppercase tracking-wider">📸 Captured Images</span>
                <span className="text-[hsl(0,0%,40%)] text-xs">— Obtained from multiple sources</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: suspect1, caption: "Vehicle surveillance — ███████, 2025" },
                  { src: suspect2, caption: "Residential area — Location withheld" },
                  { src: suspect3, caption: "Night capture — Undisclosed venue" },
                  { src: suspect4, caption: "Public setting — ████ district" },
                ].map((photo, i) => (
                  <div
                    key={i}
                    className="relative group overflow-hidden rounded-lg border border-[hsl(0,0%,15%)] cursor-pointer"
                    onClick={() => setSelectedPhoto(photo.src)}
                  >
                    <img
                      src={photo.src}
                      alt={`Suspect photo ${i + 1}`}
                      className="w-full h-48 object-cover object-top grayscale-[30%] contrast-110 brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[hsl(0,80%,45%)]/80 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      IMG-{String(i + 1).padStart(3, "0")}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[hsl(0,0%,35%)] text-[10px] italic text-center">
                ⚠ Images obtained through confidential channels. Authenticity pending verification.
              </p>
            </div>

            {/* Article text */}
            <div className="space-y-6 text-[hsl(0,0%,70%)] leading-relaxed">
              {/* Redacted-style intro divider */}
              <div className="flex items-center gap-3 text-[hsl(0,0%,30%)] text-[10px] uppercase tracking-[0.3em]">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(0,80%,45%)/30] to-transparent" />
                <span>Begin classified excerpt</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(0,80%,45%)/30] to-transparent" />
              </div>

              <p className="text-lg text-[hsl(0,0%,85%)] font-medium first-letter:text-5xl first-letter:font-black first-letter:text-[hsl(0,80%,45%)] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                I recently became aware of concerns regarding an individual whom I believe may have ties to <span className="text-[hsl(0,80%,45%)] font-semibold">Hezbollah</span> or Hezbollah-associated activity. Based on the information available to me, I believe this person may currently be residing in <span className="border-b border-dashed border-[hsl(0,80%,45%)/50]">Dearborn, Michigan</span>, and may have been living in the United States for approximately <span className="font-bold text-[hsl(0,0%,90%)]">seven years</span>.
              </p>

              <p>
                According to the information I have learned, this individual previously lived in the <span className="border-b border-dashed border-[hsl(0,80%,45%)/50]">United Arab Emirates</span> for approximately ten years. I was told that he was later <span className="bg-[hsl(0,80%,45%)/10] text-[hsl(0,80%,55%)] px-1.5 py-0.5 rounded font-medium">deported from the UAE</span>, after which he reportedly obtained a visa to enter the United States. Since arriving in the U.S., I believe he has established himself in the community, opened or operated multiple businesses, and become increasingly connected with other individuals whom I suspect may be associated with similar activity.
              </p>

              {/* Callout box */}
              <div className="border-l-4 border-[hsl(0,80%,45%)] bg-[hsl(0,80%,45%)/5] pl-5 py-4 rounded-r-lg">
                <p className="text-[hsl(0,0%,90%)] font-semibold text-base">
                  ⚠ I am providing below the details I know so the authorities can review this carefully.
                </p>
              </div>

              {/* Styled bullet list */}
              <div className="space-y-3 pl-1">
                {[
                  "The following background information has come to my attention:",
                  "The person reportedly lived in the United Arab Emirates for about ten years.",
                  "The person was reportedly deported from the UAE.",
                  "The person later came to the United States on a visa.",
                  "The person has reportedly been living in Dearborn, Michigan, for about seven years.",
                  "The person has reportedly opened or been connected to multiple businesses in the United States.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[hsl(0,80%,45%)] shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <p className={`${i === 0 ? "text-[hsl(0,0%,85%)] font-medium" : ""} group-hover:text-[hsl(0,0%,85%)] transition-colors duration-300`}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* End divider */}
              <div className="flex items-center gap-3 text-[hsl(0,0%,30%)] text-[10px] uppercase tracking-[0.3em]">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(0,80%,45%)/30] to-transparent" />
                <span>End excerpt</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(0,80%,45%)/30] to-transparent" />
              </div>
            </div>

            {/* CTA to full report */}
            <div className="mt-8">
              <button
                onClick={handleFileClick}
                className="group relative w-full bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,18%)] hover:border-[hsl(0,80%,45%)] rounded-lg p-5 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[hsl(0,80%,45%)] text-xs font-bold uppercase tracking-wider mb-1">
                      {clickCount === 0 && "🔒 Restricted Access"}
                      {clickCount === 1 && "🔓 Verifying clearance..."}
                      {clickCount >= 2 && "📂 Access Granted"}
                    </p>
                    <p className="text-white font-bold text-lg">
                      Read the Full Internal Report
                    </p>
                    <p className="text-[hsl(0,0%,50%)] text-sm mt-1">
                      Contains classified observations and pattern analysis
                    </p>
                  </div>
                  <span className="text-[hsl(0,0%,30%)] group-hover:text-[hsl(0,80%,45%)] text-3xl transition-colors">
                    →
                  </span>
                </div>
                {/* Progress bar */}
                <div className="mt-4 h-1 bg-[hsl(0,0%,15%)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[hsl(0,80%,45%)] transition-all duration-500 rounded-full"
                    style={{ width: `${(clickCount / 3) * 100}%` }}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Suspect card */}
            <div className="bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] rounded-lg overflow-hidden">
              <div className="bg-[hsl(0,80%,45%)] px-4 py-2">
                <p className="text-white text-xs font-bold uppercase tracking-wider">Suspect Profile</p>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { label: "Real Name", value: "Issam Ozeir" },
                  { label: "Age", value: "Unknown" },
                  { label: "Origin", value: "Unconfirmed" },
                  { label: "Status", value: "Active", highlight: true },
                  { label: "Threat Level", value: "Undetermined" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center text-sm border-b border-[hsl(0,0%,13%)] pb-2 last:border-0 last:pb-0">
                    <span className="text-[hsl(0,0%,45%)] text-xs uppercase tracking-wider">{item.label}</span>
                    <span className={item.highlight ? "text-[hsl(0,80%,45%)] font-bold" : "text-[hsl(0,0%,80%)]"}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[hsl(0,0%,12%)] mt-16 py-8">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between text-[10px] text-[hsl(0,0%,30%)] uppercase tracking-widest">
          <span>Crime Insider © 2026</span>
          <span>All sources confidential</span>
        </div>
      </footer>

      {/* Photo lightbox */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-3xl bg-black/95 border-[hsl(0,0%,15%)] p-2">
          <DialogTitle className="sr-only">Suspect photo</DialogTitle>
          {selectedPhoto && (
            <img
              src={selectedPhoto}
              alt="Suspect evidence"
              className="w-full h-auto max-h-[85vh] object-contain rounded"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
