Everything is saved. Here are the folder and the answers to your five questions.

## 1. Jetson T5000 developer kit in China → [tool_kits/Jetson_T5000_Developer_Kit_China/](tool_kits/Jetson_T5000_Developer_Kit_China/README.md)

NVIDIA doesn't sell a separate "T5000 developer kit". The T5000 is the module inside the **Jetson AGX Thor Developer Kit**, so that kit is the official T5000 kit. Its full data is already in the AGX Thor folder. This new folder covers the **T5000 module itself** and its prices:

- **AGX Thor dev kit:** US$5,499 (official price list). RS China sells it for RMB 49,397.78 including tax.
- **T5000 module:** **US$4,999** each when buying 1,000+, up from US$2,999 before July 2026. Distributors quote US$3,800–5,300 for a single unit.
- **T4000 module:** US$2,999 each when buying 1,000+.
- **Saved:** 7 complete pages, NVIDIA's official T5000/T4000 module datasheet (PDF), 11 images, and a summary file.
- **Not captured:** the China-based kit sellers (a JD.com "CLBA T5000" kit, Plink-AI, Alibaba). They were either unreachable from this computer or showed captchas.

## 2. Jetson AGX Thor's successor
**None has been announced.** As of October 2026, Thor is still NVIDIA's top Jetson. The only new member is the smaller, cheaper **Jetson T4000** (January 2026): 1200 TFLOPS, 64 GB of memory, 40–70 W, and the same connector as the T5000. Based on NVIDIA's pattern, the next Jetson will probably use Rubin, but that is my guess, not an announcement.

## 3. Blackwell's successor
**Rubin.** NVIDIA said it was in full production at CES 2026. Vera Rubin data-center systems started reaching cloud providers in the second half of 2026. Rubin Ultra is planned for 2027 and **Feynman** for about 2028.

## 4. Latest NVIDIA GPU architecture
- **Data center:** **Rubin** is the newest architecture shipping.
- **Consumer and edge:** **Blackwell** is still the latest, in the RTX 50 series, Jetson Thor and GB10/DGX Spark. The RTX 50 Super was reportedly delayed, and Rubin-based RTX 60 cards are rumored for around 2028.

## 5. Full list of NVIDIA GPUs
The list is too long to paste here, so I saved Wikipedia's complete list as a full page, with spec tables for every product line. It's in [tool_kits/_reference_nvidia_gpus/](tool_kits/_reference_nvidia_gpus/README.md), along with the Blackwell and Rubin articles.

## 6. Jetson AGX Thor vs NVIDIA GB10 (DGX Spark): which is better for you?
Both use Blackwell and have 128 GB of memory at the same speed (273 GB/s), so they run large AI models at a similar speed. The real difference is what they're built for:

| Choose **Jetson AGX Thor** if… | Choose **DGX Spark (GB10)** if… |
|---|---|
| The computer goes **inside a robot**, drone or edge device | It sits **on your desk** for AI development |
| You need robot connections (CAN, MIPI cameras, 4x25 GbE sensor networking) | You run, fine-tune or test models (LLMs, VLMs) |
| You need adjustable power use (40–130 W) | You want more CPU cores (20 vs 14), 4 TB storage, and the option to link two units at 200 Gb/s |
| You'll deploy on the T5000/T4000 module in production | You want the easier desktop software setup (DGX OS) |
| US$5,499 | US$4,699, which is cheaper |

**My recommendation:** for building robots or physical AI, get **Thor**. For learning, model development or running LLMs locally, get **DGX Spark**: it's cheaper, has more CPU and storage, and benchmarks show it slightly faster at running LLMs. Some teams use both, developing on Spark and deploying on Thor. Tell me what you'll use it for and I'll give you a definite answer.

Sources:
- [NVIDIA Jetson FAQ (official prices)](https://developer.nvidia.com/embedded/faq)
- [CNX – July 2026 Jetson price increase](https://www.cnx-software.com/2026/07/22/nvidia-increases-the-price-of-jetson-modules-and-devkits-by-up-to-101/)
- [CNX – AGX Thor / T5000 launch](https://www.cnx-software.com/2025/08/19/3499-nvidia-jetson-agx-thor-developer-kit-2070-tops-jetson-t5000-som-for-robotics-and-edge-ai/)
- [NVIDIA forum – T5000 module versions and prices](https://forums.developer.nvidia.com/t/what-is-the-difference-between-001-and-0a1-modules/376886)
- [JD.com CLBA T5000 kit](https://ic-item.jd.com/100270676459.html)
- [Plink-AI T5000](http://www.plink-ai.com/cn/product/product-3-531.html)
- [Alibaba T5000 listing](https://www.alibaba.com/product-detail/Original-NVIDIA-Jetson-AGX-Thor-Developer_1601781294009.html)
- [Silicon Highway – T5000 module](https://www.siliconhighwaydirect.com/product-p/900-13834-0080-000.htm)
- [CNBC – Thor launch](https://www.cnbc.com/2025/08/25/nvidias-thor-t5000-robot-brain-chip.html)
- [JetsonHacks – T4000 and JetPack 7.1](https://jetsonhacks.com/2026/01/12/jetpack-7-1-and-jetson-t4000-now-available/)
- [NVIDIA Robotics on X – T4000](https://x.com/NVIDIARobotics/status/2008580578296189138)
- [Wikipedia – Rubin](https://en.wikipedia.org/wiki/Rubin_(microarchitecture))
- [TweakTown – Feynman 2028](https://www.tweaktown.com/news/110521/nvidia-updates-roadmap-with-new-details-on-its-next-gen-gpu-feynman-coming-in-2028/index.html)
- [Notebookcheck – RTX 50 Super / RTX 60 delay](https://www.notebookcheck.net/Nvidia-GeForce-RTX-50-Super-refresh-and-RTX-60-series-reportedly-delayed.1220682.0.html)
- [Wikipedia – List of NVIDIA GPUs](https://en.wikipedia.org/wiki/List_of_Nvidia_graphics_processing_units)
- [NVIDIA DGX Spark](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)
- [DGX Spark price change](https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713)
- [NVIDIA forum – DGX Spark vs Thor](https://forums.developer.nvidia.com/t/comparing-ai-performance-of-dgx-spark-to-jetson-thor/343159)
- [Ajeet Raina – Spark vs Thor](https://www.ajeetraina.com/nvidia-dgx-spark-vs-jetson-agx-thor-which-one-should-you-buy/)