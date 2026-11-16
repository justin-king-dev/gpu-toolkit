# NVIDIA GPU reference pages

Collected 2026-10-14. Complete single-file pages (SingleFile) in `html/`.

| File | Content |
|---|---|
| wikipedia_list_of_nvidia_gpus.html | Full list of NVIDIA GPUs (GeForce, Quadro/RTX, Tesla/data center, Jetson/Tegra, etc.) with specs tables |
| wikipedia_blackwell_microarchitecture.html | Blackwell architecture (Jetson Thor, GB10, RTX 50, B200/B300) |
| wikipedia_rubin_microarchitecture.html | Rubin architecture — Blackwell's successor |
| nvidia_dgx_spark_official.html | NVIDIA DGX Spark (GB10) official page and spec table |
| nvidia_forum_dgx_spark_vs_jetson_thor.html | NVIDIA forum: AI performance comparison, DGX Spark vs Jetson Thor |
| ajeetraina_dgx_spark_vs_jetson_thor.html | Article: DGX Spark vs Jetson AGX Thor, which to buy |
| wikipedia_geforce_rtx_50_series.html | RTX 50 series specs table — RTX 5090: 21,760 CUDA cores, 32 GB GDDR7 512-bit, 1,792 GB/s, 575 W |
| servethehome_gb10_hot_chips_2025.html | ServeTheHome: NVIDIA's GB10 architecture talk at Hot Chips 2025 |
| geizhals_lenovo_pgx_gb10_48sm_spec.html | Lenovo ThinkStation PGX (GB10) listing — GPU 48 SM / 6,144 CUDA cores / 192 Tensor Cores (retailer spec, not NVIDIA) |
| backendai_is_dgx_spark_actually_blackwell.html | Backend.AI: GB10 GPU is compute capability 12.1 (SM121), not datacenter Blackwell (SM100) |
| heise_nvidia_gb10_details.html | heise: GB10 chip details (Hot Chips 2025) — MediaTek CPU die + NVIDIA GPU die, TSMC 3 nm |

Note: "GB10 icosa-core" — no source found using this term (3 searches, Oct 2026). "Icosa" = 20 and GB10's CPU has 20 cores (10 Cortex-X925 + 10 Cortex-A725), so it is almost certainly a spec-site label for the same GB10 Grace Blackwell Superchip. Every GB10 product (DGX Spark, ASUS GX10, Dell, HP, Lenovo PGX) uses the same chip. Unconfirmed until the original source of the term is found.

## Jetson AGX Thor vs GB10 vs RTX 5090

| | Jetson AGX Thor Dev Kit | GB10 (DGX Spark) | GeForce RTX 5090 |
|---|---|---|---|
| Type | Complete robot/edge computer | Complete desktop AI computer | Graphics card only (needs a PC) |
| GPU | Blackwell, 2560 CUDA cores | Blackwell, 6144 CUDA cores | Blackwell GB202, 21,760 CUDA cores |
| AI compute (NVIDIA, FP4 sparse) | 2070 TFLOPS | ~1000 TFLOPS | 3352 TOPS |
| Memory | 128 GB LPDDR5X (shared) | 128 GB LPDDR5X (shared) | 32 GB GDDR7 (GPU only) |
| Memory bandwidth | 273 GB/s | 273 GB/s | 1792 GB/s |
| Power | 40–130 W | ~140 W chip, 240 W PSU | 575 W card alone |
| Largest LLM that fits (approx., 4-bit) | ~120–200B params | ~120–200B params | ~30–50B params |
| Token speed on models that fit | slow | slow | ~6x faster (bandwidth) |
| US price | $5,499 | $4,699 | $1,999 MSRP, ~$5,000+ street (Oct 2026) |

**China:** NVIDIA China does not sell the RTX 5090. The China model is the **RTX 5090 D V2** (official nvidia.cn spec): 21,760 CUDA cores, **2,375 AI TOPS**, **24 GB GDDR7, 384-bit** (~1.3 TB/s at 28 Gbps — bandwidth not stated by NVIDIA), boost 2.41 GHz, 575 W, 1,000 W PSU recommended. With 24 GB, it fits only ~20–35B-parameter LLMs at 4-bit. Source: https://www.nvidia.cn/geforce/graphics-cards/50-series/rtx-5090-d-v2/ (full-page save failed — NVIDIA GeForce pages time out in the SingleFile CLI; save it manually with the SingleFile extension if needed).

## Jetson AGX Thor vs DGX Spark (GB10) — detail

| | Jetson AGX Thor Dev Kit | DGX Spark (GB10) |
|---|---|---|
| Purpose | Robot / edge computer (deploy in the device) | Desktop AI developer workstation |
| GPU | Blackwell, 2560 cores, 96 Tensor Cores | Blackwell, 6144 CUDA cores, 5th-gen Tensor, 4th-gen RT |
| AI compute (NVIDIA figure) | 2070 TFLOPS FP4 sparse | Up to 1 PFLOP FP4 |
| CPU | 14-core Neoverse-V3AE | 20-core (10 Cortex-X925 + 10 Cortex-A725) |
| Memory | 128 GB LPDDR5X, 273 GB/s | 128 GB LPDDR5X, 273 GB/s |
| Storage | 1 TB NVMe | Up to 4 TB NVMe |
| Networking | 5 GbE + QSFP28 (4x 25 GbE) | 10 GbE + ConnectX-7 200 Gb/s (link 2 units) |
| Robot I/O | CAN, MIPI CSI / HSB cameras, JTAG, automation headers | none |
| Power | 40 – 130 W configurable | 240 W PSU, 140 W chip TDP |
| Size | 243 x 112 x 57 mm | 150 x 150 x 50.5 mm, 1.2 kg |
| OS / software | JetPack 7 (Jetson Linux), Isaac, Holoscan, Metropolis | DGX OS (Ubuntu), full NVIDIA AI desktop stack |
| US price | $5,499 (since Jul 2026) | $4,699 Founders Edition (since Feb 2026) |
| China price | RS China RMB 49,397.78 incl. tax | not found |
