# NVIDIA Jetson AGX Thor Developer Kit — China

Collected 2026-10-14. Part number **945-14070-0080-000** (RS China stock no. 606-864).

## Price

| Source | Price | Date / note |
|---|---|---|
| RS Components China (rsonline.cn) | **RMB 43,714.85 excl. tax / RMB 49,397.78 incl. tax** | Live listing at time of saving; 2 in stock, 8 more shipping 2026-10-21 — `html/07_*` |
| NVIDIA official launch price | US$3,499 (≈ RMB 25,000) | Aug 2025 launch — `html/04_*` (NVIDIA China blog), `html/18_*` (heise) |
| NVIDIA price increase | US$3,499 → **US$5,499** (+57%, ≈ RMB 37,265) | Jul 2026; US store showed out of stock — `html/16_*` (ifeng), `html/17_*` (hwbusters) |
| Seeed Studio (bundle with antenna kit) | US$5,499.00 + US$1.30 antenna kit | Back order — `html/08_*` |

## Specifications (official NVIDIA China datasheet, `docs/Jetson-thor-devkit-datasheet-zhCN.pdf`)

**Jetson T5000 module**

| Item | Spec |
|---|---|
| AI performance | 2070 TFLOPS (FP4, sparse) |
| GPU | 2560-core NVIDIA Blackwell GPU, 96 fifth-gen Tensor Cores, MIG support |
| CPU | 14-core Arm Neoverse-V3AE 64-bit; 64 KB I-cache + 64 KB D-cache, 1 MB L2 per core, 16 MB shared L3 |
| Memory | 128 GB 256-bit LPDDR5X, 273 GB/s |
| Storage | 1 TB NVMe in M.2 Key M slot |
| Video encode | 6x 4Kp60 / 12x 4Kp30 / 24x 1080p60 / 50x 1080p30 (H.265); 48x 1080p30 / 6x 4Kp60 (H.264) |
| Video decode | 4x 8Kp30 / 10x 4Kp60 / 22x 4Kp30 / 46x 1080p60 / 92x 1080p30 (H.265); 82x 1080p30 / 4x 4Kp60 (H.264) |
| Power | 40 W – 130 W |
| Other accelerators | 3rd-gen PVA, dual encoders/decoders, optical flow accelerator |

**Reference carrier board**

| Item | Spec |
|---|---|
| Camera | HSB cameras via QSFP; USB cameras |
| PCIe | M.2 Key M x4 PCIe 5.0 (1 TB NVMe installed); M.2 Key E x1 PCIe 5.0 (Wi-Fi/BT module installed) |
| USB | 2x USB-A 3.2, 2x USB-C 3.1 |
| Networking | 1x 5 GbE RJ45, 1x QSFP28 (4x 25 GbE) |
| Display | 1x HDMI 2.0b, 1x DisplayPort 1.4a |
| Other I/O | 2x 13-pin CAN, 2x 6-pin automation, 2x 5-pin JTAG, 4-pin fan (12 V PWM/tach), 2x 5-pin audio panel, 2-pin RTC battery, Microfit power jack, power / force-recovery / reset buttons |
| Dimensions | 243.19 mm x 112.40 mm x 56.88 mm (incl. bracket, carrier, module, thermal solution) |

**In the box:** Jetson T5000 module with heatsink and reference carrier board, 140 W DC power supply, 802.11ax Wi-Fi NIC, 1 TB NVMe (M.2 Key M), quick start guide.

Compared to Jetson AGX Orin: up to 7.5x AI compute, 3.5x energy efficiency.
Software: JetPack / Jetson Linux, NVIDIA Isaac (incl. GR00T N), Metropolis, Holoscan, VSS agent workflow.

## Files

`html/` — complete single-file pages saved with SingleFile (CSS, images, fonts embedded; open directly in a browser)

| File | Content |
|---|---|
| 01_nvidia_cn_official_jetson_thor.html | Official NVIDIA China product page (specs, highlights) |
| 02_nvidia_com_official_jetson_thor_en.html | Official NVIDIA global product page (English) |
| 04_nvidia_blog_cn_jetson_thor_now_available.html | NVIDIA China blog: launch announcement, US$3,499 price |
| 07_rsonline_cn_jetson_agx_thor_devkit_price.html | RS China listing, RMB price and stock, parameter table |
| 08_seeedstudio_jetson_agx_thor_devkit.html | Seeed Studio listing (US$5,499) |
| 10_nvidia_docs_devkit_hardware_layout.html | NVIDIA user guide: hardware layout, ports |
| 11_nvidia_docs_devkit_quick_start.html | NVIDIA user guide: quick start, box contents |
| 16_ifeng_jetson_price_increase_2026-07.html | ifeng (Chinese): July 2026 price increase with RMB conversions |
| 17_hwbusters_jetson_price_increase.html | Hardware Busters: July 2026 price increase |
| 18_heise_jetson_thor_price.html | heise: launch price, EU pricing |

`docs/` — official NVIDIA China datasheet PDF (Chinese)

`images/` — product images: NVIDIA official renders (`nvidia_cn_*`), user-guide photos of the box, ports and carrier board (`nvidia_docs_*`), RS China product photos (`rs_cn_*`)
