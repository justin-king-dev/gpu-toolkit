# NVIDIA GPU news, Sep–Oct 2026

Collected 2026-10-15. Complete single-file pages (SingleFile) in `html/`. Prefix = story number.

## 01 — AI firms reportedly buying RTX 5090s in bulk for servers
- Hong Kong outlet HKEPC published photos of pallets of boxed RTX 5090s at AI server assembly sites and said many Chinese vendors are stocking up from retailers to build and resell AI workstations.
- Street prices: launch MSRP US$1,999 → around US$5,000 in the US, above €5,000 in Europe; PC Guide cites over US$6,500 on Amazon, some listings near US$9,000–10,000.
- **Doubt:** TechRadar (citing Digitec's Kevin Hofer) says the photos may be AI-generated (box lettering reads "50B0"/"50R0"). Scale and motive are unconfirmed; memory shortages are another cause of the price rise.
- Original source: an HKEPC post on X (10 Sep 2026) — not saveable without an X login. The cards pictured are standard RTX 5090s, not the China-only 5090 D / D V2.
- Files: `01_*_pcguide.html`, `01_*_techradar_photos_doubt.html`, `01_*_mezha.html`

## 02 — GeForce RTX 60 series reportedly slips to 2028
- Leaker kopite7kimi now places the GR20x (Rubin-based) gaming GPUs in 2028, after earlier pointing to H2 2027; some outlets attribute it to Kepler_L2. Moore's Law Is Dead had claimed H1 2027.
- Context: the RTX 50 Super refresh was also reportedly shelved; NVIDIA is prioritising memory for AI products. Nothing official from NVIDIA.
- kopite7kimi's post is dated 21 Sep 2026; NVIDIA told Tom's Hardware it does not comment on unannounced products.
- Files: `02_*_tbreak_first_report.html`, `02_*_tbreak.html` (follow-up), `02_*_canaltech.html` (Portuguese), `02_*_notebookcheck_es.html` (Spanish: kopite7kimi contradicts MLID)

## 03 — ASRock TempGuard didn't stop a PSU-side melt on an RTX PRO 6000 rig
- ASRock Taichi TC-1650T PSU + RTX PRO 6000 Blackwell (US$16,000 card): the 12V-2x6 cable melted into the PSU's modular socket. The GPU reportedly survived.
- TempGuard's NTC sensor should shut the PC down above 105 °C but didn't trigger. Most likely reason: the sensor sits near the GPU end, so it can't see a fault at the PSU end (one technician claims it's on the ground side instead — unconfirmed).
- A separate case with the same PSU burned at the GPU end; ASRock replaced the cable.
- Files: `03_*_pcguide.html`, `03_*_lowyat.html`, `03_*_overclocking_com.html` (notes the sensor theory is not confirmed by ASRock or NVIDIA), `03_*_gaming_st_jp.html` (Japanese)

## 04 — PNY reportedly denies melted RTX 5090 warranty claim over PSU's own cable
- A Reddit user's PNY RTX 5090 died at idle; both ends of the 16-pin cable melted. They used the native cable from their ASRock PG-1600G PSU, no adapter, power limit below default.
- PNY's reported reply: only the PNY-supplied cable/adapter is covered; damage from PSU or third-party cables is the cable/PSU maker's responsibility.
- TechSpot says this rule is not in PNY's published warranty policy; only the owner's side is known so far.
- A second case (Digital Storm prebuilt with a PNY 5090): both Digital Storm and PNY reportedly refused, PNY again citing a third-party PSU cable.
- Files: `04_*_thefpsreview.html`, `04_*_kami_labs.html`, `04_*_theouterhaven.html` (includes the Digital Storm case), `04_*_noobfeed.html`

Not captured (Cloudflare / 403 / timeout): Guru3D, Notebookcheck (EN), Windows Report, Digital Citizen, TechNews.tw, TweakTown, HotHardware, TechSpot, Overclock3D, MadShrimps, Xenospectrum, Digitec/Galaxus, HKEPC (X post).
