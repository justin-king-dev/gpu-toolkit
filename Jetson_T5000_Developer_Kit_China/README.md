# NVIDIA Jetson T5000 Developer Kit — China

Collected 2026-10-14.

**Important:** NVIDIA does not sell a separate "T5000 developer kit". The official T5000 developer kit **is the Jetson AGX Thor Developer Kit** (P/N 945-14070-0080-000), which contains the T5000 module on a reference carrier board. That kit's full data is in [`../Jetson_AGX_Thor_Developer_Kit_China/`](../Jetson_AGX_Thor_Developer_Kit_China/README.md). This folder covers the **T5000 module itself** (P/N 900-13834-0080-000 / -001) and third-party T5000 kits sold in China.

## Price

| Item | Price | Source |
|---|---|---|
| Jetson AGX Thor Developer Kit (T5000 kit) | **US$5,499** MSRP | NVIDIA Jetson FAQ — `html/03_*` |
| Jetson T5000 module | **US$4,999** (1KU+), was US$2,999 before Jul 2026 (+67%) | NVIDIA Jetson FAQ, CNX Software — `html/03_*`, `html/02_*` |
| Jetson T4000 module (smaller sibling) | US$2,999 (1KU+), was US$1,999 (+50%) | same |
| AGX Thor dev kit in China (RS China) | RMB 43,714.85 excl. tax / RMB 49,397.78 incl. tax | see AGX Thor folder |
| T5000 kits from Shenzhen sellers (Alibaba) | US$3,889 – 4,250 (third-party, quote-based) | search result only; Alibaba pages were captcha-blocked |
| Third-party "CLBA T5000" kit with 1 TB SSD on JD.com | not captured | [JD listing](https://ic-item.jd.com/100270676459.html) — JD is unreachable from this machine |

Module country of origin (NVIDIA FAQ): T5000 900-13834-0080-001 — China, USA or Vietnam.

## T5000 module specifications (NVIDIA Jetson Thor module datasheet, Jan 2026 — `docs/nvidia_jetson_thor_module_brief_datasheet.pdf`)

| Item | Jetson T5000 | Jetson T4000 |
|---|---|---|
| AI performance | 2070 TFLOPS (FP4, sparse) | 1200 TFLOPS (FP4, sparse) |
| GPU | 2560-core Blackwell, 5th-gen Tensor Cores, MIG with 10 TPCs, up to 1.57 GHz | 1536-core Blackwell, MIG with 6 TPCs, up to 1.53 GHz |
| CPU | 14-core Arm Neoverse-V3AE, up to 2.6 GHz, 1 MB L2/core, 16 MB L3 | 12-core Arm Neoverse-V3AE, up to 2.6 GHz |
| Vision accelerator | 1x PVA v3 | 1x PVA v3 |
| Memory | 128 GB 256-bit LPDDR5X, 273 GB/s | 64 GB 256-bit LPDDR5X, 273 GB/s |
| Storage | NVMe via PCIe; SSD via USB 3.2 | same |
| Video | 2x NVENC, 2x NVDEC | 1x NVENC, 1x NVDEC |
| Camera | Up to 20 cameras via HSB; up to 6 via 16 lanes MIPI CSI-2; up to 32 with virtual channels; C-PHY 2.1 (10.25 Gbps), D-PHY 2.1 (40 Gbps) | same |
| PCIe | Up to 8 lanes Gen5 (C1 x1, C3 x2 root port; C2 x1, C4 x8, C5 x4 root port or endpoint) | same |
| USB | Up to 3x USB 3.2, 4x USB 2.0 | same |
| Networking | 4x 25 GbE | 3x 25 GbE |
| Display | 4x shared HDMI 2.1, DisplayPort 1.4a (HBR2, MST) | same |
| Other I/O | 5x I2S / 2x AHUB, 2x DMIC, 4x UART, 4x CAN, 3x SPI, 12x I2C, 6x PWM | no CAN listed, 13x I2C |
| Power | 40 W – 130 W | 40 W – 70 W |
| Mechanical | 100 mm x 87 mm, 699-pin B2B connector, integrated thermal transfer plate with heatpipe | same (pin-compatible with T5000) |

## Files

`html/` — complete single-file pages (SingleFile)

| File | Content |
|---|---|
| 01_cnx_jetson_agx_thor_devkit_t5000_launch.html | CNX Software: dev kit and T5000 launch, detailed specs |
| 02_cnx_jetson_price_increase_2026-07_t5000_module.html | CNX Software: Jul 2026 price table (dev kit, T5000, T4000) |
| 03_nvidia_jetson_faq_module_prices.html | NVIDIA Jetson FAQ: official MSRPs, part numbers, country of origin |
| 09_siliconhighway_t5000_module.html | Silicon Highway Direct: T5000 module listing (900-13834-0080-000) |
| 12_nvidia_forum_t5000_module_versions_price.html | NVIDIA forum: -000 vs -001 module versions; distributor quotes T5000 $3,800 (-000) / $5,300 (-001), T4000 $2,750 / $3,250 |
| 13_cnbc_thor_t5000_launch.html | CNBC: T5000 "robot brain" launch, Aug 2025 |
| 15_jetsonhacks_t4000_jetpack71.html | JetsonHacks: T4000 module and JetPack 7.1 release, Jan 2026 |

Not captured (unreachable from this machine or bot-blocked): JD.com, Plink-AI (China), Alibaba, RS Germany, TwoWin, Fusion Worldwide, CSDN.

`docs/` — NVIDIA Jetson Thor module datasheet (T5000 + T4000)

`images/` — T5000 module photos (OpenZeka, Silicon Highway), NVIDIA module renders and carrier-board connector side
