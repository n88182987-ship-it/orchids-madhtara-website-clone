import { useState } from 'react'
import './App.css'

const BASE = 'https://www.madhtara.com'

const announcements = [
  '✨ FREE SHIPPING ON ORDERS ABOVE ₹999 ✨',
  '🌸 925 STERLING SILVER JEWELLERY 🌸',
  '💎 AUTHENTIC & HANDPICKED DESIGNS 💎',
  '🚚 RELIABLE DELIVERY ACROSS INDIA 🚚',
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'CATALOGUE', href: '/collections/all', children: [
    { label: 'ANKLET', href: '/collections/anklet' },
    { label: 'BRACELETS', href: '/collections/braclets' },
    { label: 'EARINGS', href: '/collections/earings' },
    { label: 'PENDANT', href: '/collections/pendant' },
    { label: 'PENDANT SET', href: '/collections/pendant-set' },
    { label: 'STUDS', href: '/collections/studds' },
  ]},
  { label: 'About Us', href: '/pages/about-us' },
  { label: 'Contact Us', href: '/pages/contact-us' },
  { label: 'BEST SELLING', href: '/collections/best-seller' },
  { label: "Valentine Combo's", href: '/pages/valentine-combos' },
]

const categories = [
  { name: 'ANKLETS', href: '/collections/anklet', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_1_2026_02_41_44_PM.png?v=1772356089` },
  { name: 'BRACELETS', href: '/collections/braclets', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_1_2026_02_47_07_PM.png?v=1772356454` },
  { name: 'EARINGS', href: '/collections/earings', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_1_2026_02_49_34_PM.png?v=1772356617` },
  { name: 'PENDANT', href: '/collections/pendant', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_1_2026_02_51_02_PM.png?v=1772356646` },
  { name: 'PENDANT SET', href: '/collections/pendant-set', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_1_2026_02_54_13_PM.png?v=1772356856` },
  { name: 'STUDS', href: '/collections/studds', img: `${BASE}/cdn/shop/files/STUDS.png?v=1762250641` },
]

const anklets = [
  { title: '925 Sterling Silver Blue Line Anklets', price: 'Rs. 2,299.00', img: `${BASE}/cdn/shop/files/MG_5463.jpg?v=1765883646`, href: '/products/925-sterling-silver-blue-line-anklets' },
  { title: '925 Sterling Silver Black Line Anklets', price: 'Rs. 2,299.00', img: `${BASE}/cdn/shop/files/MG_5472.jpg?v=1765883834`, href: '/products/925-sterling-silver-black-line-anklets' },
  { title: '925 Sterling Silver Pink Line Anklets', price: 'Rs. 2,299.00', img: `${BASE}/cdn/shop/files/MG_5478.jpg?v=1765884304`, href: '/products/925-sterling-silver-pink-line-anklets' },
  { title: '925 Sterling Silver Aira Slim Anklet', price: 'Rs. 2,499.00', img: `${BASE}/cdn/shop/files/MG_5510.jpg?v=1765885423`, href: '/products/925-sterling-silver-aira-slim-anklet' },
  { title: '925 Sterling Silver Multicolour Nazariya Sparkle Anklets', price: 'Rs. 2,499.00', img: `${BASE}/cdn/shop/files/MG_5538.jpg?v=1765885785`, href: '/products/925-sterling-silver-multicolour-nazariya-sparkle-anklets' },
  { title: '925 Sterling Silver Link Vibe Anklet', price: 'Rs. 2,549.00', img: `${BASE}/cdn/shop/files/MG_4761.jpg?v=1762168922`, href: '/products/925-sterling-silver-link-vibe-anklet' },
  { title: '925 Sterling Silver Nazariya Sparkle Anklets', price: 'Rs. 2,549.00', img: `${BASE}/cdn/shop/files/MG_5532.jpg?v=1765886067`, href: '/products/925-sterling-silver-nazariya-sparkle-anklets' },
  { title: 'Double Layer Infinity Anklet in 925 Silver', price: 'Rs. 2,550.00', img: `${BASE}/cdn/shop/files/MG_4774.jpg?v=1762168280`, href: '/products/double-layer-infinity-anklet' },
  { title: '925 Sterling Silver Leaf & Floral Charm Anklet', price: 'Rs. 2,579.00', img: `${BASE}/cdn/shop/files/MG_4772.jpg?v=1762168844`, href: '/products/925-sterling-silver-leaf-floral-charm-anklet' },
  { title: '925 Sterling Silver White Line Anklets', price: 'Rs. 2,590.00', img: `${BASE}/cdn/shop/files/MG_5490.jpg?v=1765884676`, href: '/products/925-sterling-silver-white-line-anklets' },
  { title: 'Infinity Anklet in Sterling Silver – Gift of Forever', price: 'Rs. 2,849.00', img: `${BASE}/cdn/shop/files/MG_4781_17ae8c76-cd33-4e91-a1b7-64ba6981b78b.jpg?v=1762169800`, href: '/products/infinity-anklet-sterling-silver' },
  { title: '925 Sterling Oxidised Line Anklets', price: 'Rs. 3,149.00', img: `${BASE}/cdn/shop/files/MG_5428.jpg?v=1765880837`, href: '/products/925-sterling-oxidised-line-anklets' },
  { title: '925 Sterling Silver Twin Tone Minimal Anklet', price: 'Rs. 3,299.00', img: `${BASE}/cdn/shop/files/MG_5518.jpg?v=1765885228`, href: '/products/925-sterling-silver-twin-tone-minimal-anklet' },
  { title: '925 Sterling Silver Oxidised Mayura Grace Anklets', price: 'Rs. 3,599.00', img: `${BASE}/cdn/shop/files/MG_5419.jpg?v=1765879398`, href: '/products/925-sterling-silver-oxidised-mayura-grace-anklets' },
  { title: '925 Sterling Silver Nitya Shine Anklets', price: 'Rs. 3,899.00', img: `${BASE}/cdn/shop/files/MG_5398.jpg?v=1765879682`, href: '/products/925-sterling-silver-nitya-shine-anklets' },
]

const earrings = [
  { title: '925 Sterling Silver Serenelle Chain Earrings', price: 'Rs. 899.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_6_2026_01_25_48_PM.png?v=1772783535`, href: '/products/925-sterling-silver-serenelle-chain-earrings' },
  { title: '925 Sterling Silver Eternal Loop Earrings', price: 'Rs. 1,149.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_6_2026_01_28_14_PM.png?v=1772783680`, href: '/products/925-sterling-silver-eternal-loop-earrings' },
  { title: 'Blue Shine Silver Drop Earrings', price: 'Rs. 1,449.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_7_2026_03_50_09_PM.png?v=1772878595`, href: '/products/blue-shine-silver-drop-earrings' },
  { title: '925 Sterling Silver Perfect Bloom Leaf', price: 'Rs. 1,199.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_6_2026_01_31_30_PM.png?v=1772783910`, href: '/products/925-sterling-silver-perfect-bloom-leaf' },
  { title: '925 Sterling Silver Blue Square Spark Earrings', price: 'Rs. 1,349.00', img: `${BASE}/cdn/shop/files/Gemini_Generated_Image_bwkmbpbwkmbpbwkm.png?v=1772784498`, href: '/products/925-sterling-silver-blue-square-spark-earrings' },
  { title: 'Pink Heart Silver Hoop Earrings', price: 'Rs. 1,499.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_7_2026_03_54_46_PM.png?v=1772878876`, href: '/products/pink-heart-silver-hoop-earrings' },
  { title: 'Everyday Silver Huggy Earrings', price: 'Rs. 1,349.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_6_2026_01_40_30_PM.png?v=1772784427`, href: '/products/everyday-silver-huggy-earrings' },
  { title: 'Colour Pop Silver Hoop Earrings', price: 'Rs. 1,549.00', img: `${BASE}/cdn/shop/files/Gemini_Generated_Image_qah6vpqah6vpqah6.png?v=1772879445`, href: '/products/colour-pop-silver-hoop-earrings' },
  { title: 'Classic Shine Silver Drop Earrings', price: 'Rs. 1,549.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_7_2026_04_02_32_PM.png?v=1772879485`, href: '/products/classic-shine-silver-drop-earrings' },
  { title: '925 Sterling Silver Emerald Green Love Droplets', price: 'Rs. 1,599.00', img: `${BASE}/cdn/shop/files/Gemini_Generated_Image_l03t2ml03t2ml03t.png?v=1772880168`, href: '/products/925-sterling-silver-emerald-green-love-droplets' },
  { title: 'Teal Charm Chain Silver Earrings', price: 'Rs. 1,799.00', img: `${BASE}/cdn/shop/files/Gemini_Generated_Image_3myy9f3myy9f3myy.png?v=1772880889`, href: '/products/teal-charm-chain-silver-earrings' },
  { title: 'Yellow Spark Drop Silver Earrings', price: 'Rs. 1,749.00', img: `${BASE}/cdn/shop/files/Gemini_Generated_Image_9yo8789yo8789yo8.png?v=1772880129`, href: '/products/yellow-spark-drop-silver-earrings' },
  { title: 'Yellow Heart Drop Silver Earrings', price: 'Rs. 1,849.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_7_2026_03_34_17_PM.png?v=1772879710`, href: '/products/yellow-heart-drop-silver-earrings' },
  { title: 'Pastel Bar Silver Hoop Earrings', price: 'Rs. 1,849.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_7_2026_04_31_54_PM.png?v=1772881098`, href: '/products/pastel-bar-silver-hoop-earrings' },
  { title: '925 Sterling Silver Black Drop Earrings', price: 'Rs. 2,049.00', img: `${BASE}/cdn/shop/files/Gemini_Generated_Image_u821amu821amu821.png?v=1772881765`, href: '/products/925-sterling-silver-black-drop-earrings' },
  { title: 'Angel Wing Silver Stud Earrings', price: 'Rs. 2,099.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_7_2026_04_41_08_PM.png?v=1772881663`, href: '/products/angel-wing-silver-stud-earrings' },
]

const bracelets = [
  { title: '925 Sterling Silver Dual Tone Pearl Charm Bracelet', price: 'Rs. 999.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_8_2026_05_53_59_PM.png?v=1773120817`, href: '/products/925-sterling-silver-dual-tone-pearl-charm-bracelet' },
  { title: '925 Sterling Silver Forever You & Me Bracelet', price: 'Rs. 1,379.00', img: `${BASE}/cdn/shop/files/IMG-7106.png?v=1770483253`, href: '/products/925-sterling-silver-forever-you-me-bracelet' },
  { title: '92.5 Sterling Silver Pastel Orbit Bracelet', price: 'Rs. 1,549.00', img: `${BASE}/cdn/shop/files/IMG-7108.png?v=1770483467`, href: '/products/92-5-sterling-silver-pastel-orbit-bracelet' },
  { title: '92.5 Sterling Silver Pastel Orbit Bracelet (Rose Gold)', price: 'Rs. 1,549.00', img: `${BASE}/cdn/shop/files/IMG-7112.png?v=1770483782`, href: '/products/92-5-sterling-silver-pastel-orbit-bracelet-rose-gold' },
  { title: '92.5 Sterling Silver Midnight Blue Spark Tennis Bracelet', price: 'Rs. 1,739.00', img: `${BASE}/cdn/shop/files/IMG-7114.png?v=1770483934`, href: '/products/92-5-sterling-silver-midnight-blue-spark-tennis-bracelet' },
  { title: '925 Sterling Silver Clover Luck Bracelet', price: 'Rs. 1,799.00', img: `${BASE}/cdn/shop/files/MG_4734.jpg?v=1762245395`, href: '/products/925-sterling-silver-clover-luck-bracelet' },
  { title: '925 Sterling Silver Sparkline Tennis Bracelet', price: 'Rs. 1,799.00', img: `${BASE}/cdn/shop/files/MG_4740.jpg?v=1762245504`, href: '/products/925-sterling-silver-sparkline-tennis-bracelet' },
  { title: '92.5 Sterling Silver Lucky Clover Open Bracelet', price: 'Rs. 1,850.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_10_2026_11_27_24_AM.png?v=1773122291`, href: '/products/92-5-sterling-silver-lucky-clover-open-bracelet' },
  { title: '92.5 Sterling Silver Blue Flutter Bracelet', price: 'Rs. 1,899.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_10_2026_11_11_36_AM.png?v=1773121409`, href: '/products/92-5-sterling-silver-blue-flutter-bracelet' },
  { title: '92.5 Sterling Silver Green Dot Chain Bracelet', price: 'Rs. 2,100.00', img: `${BASE}/cdn/shop/files/MG_5570.jpg?v=1765963366`, href: '/products/92-5-sterling-silver-green-dot-chain-bracelet' },
  { title: '92.5 Sterling Silver Blue Stone Dual Chain Bracelet', price: 'Rs. 2,199.00', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_10_2026_11_30_11_AM.png?v=1773122455`, href: '/products/92-5-sterling-silver-blue-stone-dual-chain-bracelet' },
  { title: '92.5 Sterling Silver Twin Spark Open Bracelet', price: 'Rs. 2,199.00', img: `${BASE}/cdn/shop/files/MG_5074.jpg?v=1765983869`, href: '/products/92-5-sterling-silver-twin-spark-open-bracelet' },
  { title: '92.5 Sterling Silver Pearl Leaf Open Bracelet', price: 'Rs. 2,199.00', img: `${BASE}/cdn/shop/files/MG_5132.jpg?v=1765984419`, href: '/products/92-5-sterling-silver-pearl-leaf-open-bracelet' },
  { title: '92.5 Sterling Silver Blue Wave Charm Bracelet', price: 'Rs. 2,200.00', img: `${BASE}/cdn/shop/files/MG_5582.jpg?v=1765959299`, href: '/products/92-5-sterling-silver-blue-wave-charm-bracelet' },
  { title: '92.5 Sterling Silver Pearl Spark Trio Bracelet', price: 'Rs. 2,249.00', img: `${BASE}/cdn/shop/files/MG_5065.jpg?v=1765979456`, href: '/products/92-5-sterling-silver-pearl-spark-trio-bracelet' },
  { title: '92.5 Sterling Silver Purple Glow Tennis Bracelet', price: 'Rs. 2,299.00', img: `${BASE}/cdn/shop/files/Copy_of__MG_5082.jpg?v=1765982058`, href: '/products/92-5-sterling-silver-purple-glow-tennis-bracelet' },
]

const pendants = [
  { title: '925 Silver Soft Pearl Drop Pendant', price: 'Rs. 1,499.00', img: `${BASE}/cdn/shop/files/MG_5934.jpg`, href: '/products/925-silver-soft-pearl-drop-pendant' },
  { title: '925 Sterling Silver Eternal Knot Pendant', price: 'Rs. 1,549.00', img: `${BASE}/cdn/shop/files/MG_4714.jpg`, href: '/products/925-sterling-silver-eternal-knot-pendant' },
  { title: '925 Sterling Silver Two Souls One Heart Pendant', price: 'Rs. 1,749.00', img: `${BASE}/cdn/shop/files/MG_4674.jpg`, href: '/products/925-sterling-silver-two-souls-one-heart-pendant' },
  { title: '925 Sterling Silver Galaxy Line Pendant', price: 'Rs. 1,949.00', img: `${BASE}/cdn/shop/files/MG_4698.jpg`, href: '/products/925-sterling-silver-galaxy-line-pendant' },
  { title: '925 Sterling Silver Celeste Butterfly Pendant', price: 'Rs. 2,049.00', img: `${BASE}/cdn/shop/files/MG_4468_1.jpg`, href: '/products/925-sterling-silver-celeste-butterfly-pendant' },
  { title: '925 Sterling Silver Falling Petals Pendant', price: 'Rs. 2,149.00', img: `${BASE}/cdn/shop/files/MG_4467.jpg`, href: '/products/925-sterling-silver-falling-petals-pendant' },
  { title: '925 Silver Emerald Grace Pendant', price: 'Rs. 2,149.00', img: `${BASE}/cdn/shop/files/MG_5921.jpg`, href: '/products/925-silver-emerald-grace-pendant' },
  { title: '925 Silver Sky Spark Curve', price: 'Rs. 2,299.00', img: `${BASE}/cdn/shop/files/MG_5655.jpg`, href: '/products/925-silver-sky-spark-curve' },
  { title: 'Sun Aura 925 Sterling Silver Pendant', price: 'Rs. 2,349.00', img: `${BASE}/cdn/shop/files/MG_4710.jpg`, href: '/products/sun-aura-925-sterling-silver-pendant' },
  { title: '925 Silver Classic Sparkle Chain', price: 'Rs. 2,349.00', img: `${BASE}/cdn/shop/files/MG_5698.jpg`, href: '/products/925-silver-classic-sparkle-chain' },
  { title: '925 Sterling Silver Luna Infinity Curve Pendant', price: 'Rs. 2,449.00', img: `${BASE}/cdn/shop/files/MG_4691.jpg`, href: '/products/925-sterling-silver-luna-infinity-curve-pendant' },
  { title: '925 Silver Emerald Heart Drop', price: 'Rs. 2,499.00', img: `${BASE}/cdn/shop/files/MG_5644.jpg`, href: '/products/925-silver-emerald-heart-drop' },
  { title: '925 Sterling Silver Wing Butterfly Pendant', price: 'Rs. 2,549.00', img: `${BASE}/cdn/shop/files/MG_4700.jpg?v=1762247466`, href: '/products/925-sterling-silver-wing-butterfly-pendant' },
  { title: '925 Sterling Silver Twinkling Star Layered Pendant', price: 'Rs. 2,549.00', img: `${BASE}/cdn/shop/files/MG_4667.jpg`, href: '/products/925-sterling-silver-twinkling-star-layered-pendant' },
  { title: '925 Sterling Silver Dewdrop Elegance Pendant', price: 'Rs. 2,549.00', img: `${BASE}/cdn/shop/files/MG_4474.jpg`, href: '/products/925-sterling-silver-dewdrop-elegance-pendant' },
]

const pendantSets = [
  { title: '925 Silver Emerald Grace Set', price: 'Rs. 2,399.00', img: `${BASE}/cdn/shop/files/MG_5868.jpg?v=1765952067`, href: '/products/925-silver-emerald-grace-set' },
  { title: '925 Silver Heart Promise Set', price: 'Rs. 2,549.00', img: `${BASE}/cdn/shop/files/MG_5736.jpg?v=1765953162`, href: '/products/925-silver-heart-promise-set' },
  { title: '925 Silver Snow Glow Set', price: 'Rs. 2,849.00', img: `${BASE}/cdn/shop/files/MG_5741.jpg?v=1765952636`, href: '/products/925-silver-snow-glow-set' },
  { title: '925 Silver Angel Wing Drop Set', price: 'Rs. 2,899.00', img: `${BASE}/cdn/shop/files/MG_5913.jpg?v=1765954184`, href: '/products/925-silver-angel-wing-drop-set' },
  { title: '925 Silver Rose Bloom Set', price: 'Rs. 2,949.00', img: `${BASE}/cdn/shop/files/MG_5772.jpg?v=1765955303`, href: '/products/925-silver-rose-bloom-set' },
  { title: '925 Silver Pearl Frame Set', price: 'Rs. 2,999.00', img: `${BASE}/cdn/shop/files/MG_5926.jpg?v=1765954392`, href: '/products/925-silver-pearl-frame-set' },
  { title: '925 Silver Twin Drop Grace Set', price: 'Rs. 2,999.00', img: `${BASE}/cdn/shop/files/MG_5850.jpg?v=1765955047`, href: '/products/925-silver-twin-drop-grace-set' },
  { title: '925 Silver Emerald Aura Set', price: 'Rs. 3,149.00', img: `${BASE}/cdn/shop/files/MG_5887.jpg?v=1765953975`, href: '/products/925-silver-emerald-aura-set' },
  { title: '925 Silver Urban Spark Bar Set', price: 'Rs. 3,149.00', img: `${BASE}/cdn/shop/files/MG_5891.jpg?v=1765954834`, href: '/products/925-silver-urban-spark-bar-set' },
  { title: 'Twirl Glow 925 Sterling Silver Pendant Set', price: 'Rs. 3,199.00', img: `${BASE}/cdn/shop/files/MG_4488.jpg?v=1762248147`, href: '/products/twirl-glow-925-sterling-silver-pendant-set' },
  { title: '925 Silver Soft Square Sparkle Set', price: 'Rs. 3,249.00', img: `${BASE}/cdn/shop/files/MG_5904.jpg?v=1765954615`, href: '/products/925-silver-soft-square-sparkle-set' },
  { title: '925 Silver Bloom Spark Set', price: 'Rs. 3,299.00', img: `${BASE}/cdn/shop/files/MG_5994.jpg?v=1765956400`, href: '/products/925-silver-bloom-spark-set' },
  { title: '925 Sterling Silver Midnight Heart Pendant Set', price: 'Rs. 3,349.00', img: `${BASE}/cdn/shop/files/MG_4521.jpg?v=1762279230`, href: '/products/925-sterling-silver-midnight-heart-pendant-set' },
  { title: '925 Silver Mini Bloom Pearl Set', price: 'Rs. 3,349.00', img: `${BASE}/cdn/shop/files/MG_5641.jpg?v=1765960626`, href: '/products/925-silver-mini-bloom-pearl-set' },
  { title: '925 Silver Blue Blossom Set', price: 'Rs. 3,499.00', img: `${BASE}/cdn/shop/files/MG_5833.jpg?v=1765955802`, href: '/products/925-silver-blue-blossom-set' },
  { title: '925 Silver Heart Spark Set', price: 'Rs. 3,499.00', img: `${BASE}/cdn/shop/files/MG_5760.jpg?v=1765956050`, href: '/products/925-silver-heart-spark-set' },
]

const studs = [
  { title: '925 Sterling Silver Ribbon Knot Studs', price: 'Rs. 849.00', img: `${BASE}/cdn/shop/files/MG_4892.jpg?v=1762361501`, href: '/products/925-sterling-silver-ribbon-knot-studs' },
  { title: '925 Sterling Silver Astral Arc Studs', price: 'Rs. 849.00', img: `${BASE}/cdn/shop/files/MG_4612.jpg?v=1762363973`, href: '/products/925-sterling-silver-astral-arc-studs' },
  { title: '92.5 Silver Little Flutter Studs', price: 'Rs. 949.00', img: `${BASE}/cdn/shop/files/MG_5289.jpg?v=1766069548`, href: '/products/92-5-silver-little-flutter-studs' },
  { title: '925 Sterling Silver Lilac Petal Studs', price: 'Rs. 1,049.00', img: `${BASE}/cdn/shop/files/MG_4831_23dc991a-7c4a-462b-a7d0-6581e6eaaf85.jpg?v=1762275626`, href: '/products/925-sterling-silver-lilac-petal-studs' },
  { title: '925 Sterling Silver Moonpetal Studs', price: 'Rs. 1,049.00', img: `${BASE}/cdn/shop/files/MG_4571.jpg?v=1762365031`, href: '/products/925-sterling-silver-moonpetal-studs' },
  { title: '92.5 Silver Green Bloom Studs', price: 'Rs. 1,090.00', img: `${BASE}/cdn/shop/files/MG_5189.jpg?v=1766068231`, href: '/products/92-5-silver-green-bloom-studs' },
  { title: '925 Sterling Silver Blue Aura Circle Studs', price: 'Rs. 1,100.00', img: `${BASE}/cdn/shop/files/MG_5791.jpg?v=1766052664`, href: '/products/925-sterling-silver-blue-aura-circle-studs' },
  { title: '925 Sterling Silver Midnight Knot Studs', price: 'Rs. 1,100.00', img: `${BASE}/cdn/shop/files/MG_5813.jpg?v=1766066017`, href: '/products/925-sterling-silver-midnight-knot-studs' },
  { title: '925 Sterling Silver EverShine Leaf Studs', price: 'Rs. 1,149.00', img: `${BASE}/cdn/shop/files/MG_4835.jpg?v=1762248594`, href: '/products/925-sterling-silver-evershine-leaf-studs' },
  { title: '925 Sterling Silver Faerie Bloom Studs', price: 'Rs. 1,149.00', img: `${BASE}/cdn/shop/files/MG_4837.jpg?v=1762361875`, href: '/products/925-sterling-silver-faerie-bloom-studs' },
  { title: '925 Sterling Silver Whimsical Clover Studs', price: 'Rs. 1,149.00', img: `${BASE}/cdn/shop/files/MG_4883.jpg?v=1762362576`, href: '/products/925-sterling-silver-whimsical-clover-studs' },
  { title: '925 Sterling Silver Royal Spark Studs', price: 'Rs. 1,269.00', img: `${BASE}/cdn/shop/files/MG_4580.jpg?v=1762362895`, href: '/products/925-sterling-silver-royal-spark-studs' },
  { title: '92.5 Silver Multicolour Spark Studs', price: 'Rs. 1,310.00', img: `${BASE}/cdn/shop/files/MG_5209.jpg?v=1766068932`, href: '/products/92-5-silver-multicolour-spark-studs' },
  { title: '92.5 Silver Blue Wave Studs', price: 'Rs. 1,330.00', img: `${BASE}/cdn/shop/files/MG_5275.jpg?v=1766067733`, href: '/products/92-5-silver-blue-wave-studs' },
  { title: '925 Sterling Silver Cute Flower Studs', price: 'Rs. 1,339.00', img: `${BASE}/cdn/shop/files/MG_4502.jpg?v=1762364418`, href: '/products/925-sterling-silver-cute-flower-studs' },
  { title: '925 Sterling Silver Starlight Heart Studs', price: 'Rs. 1,349.00', img: `${BASE}/cdn/shop/files/IMG_4511.jpg?v=1762364788`, href: '/products/925-sterling-silver-starlight-heart-studs' },
]

const bestSellers = [
  { title: '925 Sterling Silver Wing Butterfly Pendant', price: 'Rs. 2,549.00', img: `${BASE}/cdn/shop/files/MG_4700.jpg?v=1762247466`, href: '/products/925-sterling-silver-wing-butterfly-pendant' },
  { title: '925 Sterling Silver Falling Petals Pendant', price: 'Rs. 2,149.00', img: `${BASE}/cdn/shop/files/MG_4467.jpg?v=1762277716`, href: '/products/925-sterling-silver-falling-petals-pendant' },
  { title: '925 Sterling Silver Galaxy Line Pendant', price: 'Rs. 1,949.00', img: `${BASE}/cdn/shop/files/MG_4698.jpg?v=1762247751`, href: '/products/925-sterling-silver-galaxy-line-pendant' },
  { title: '925 Sterling Silver Sparkline Tennis Bracelet', price: 'Rs. 1,799.00', img: `${BASE}/cdn/shop/files/MG_4740.jpg?v=1762245504`, href: '/products/925-sterling-silver-sparkline-tennis-bracelet' },
  { title: '925 Sterling Silver Two Souls One Heart Pendant', price: 'Rs. 1,749.00', img: `${BASE}/cdn/shop/files/MG_4674.jpg?v=1762276811`, href: '/products/925-sterling-silver-two-souls-one-heart-pendant' },
  { title: '925 Sterling Silver Forever You & Me Bracelet', price: 'Rs. 1,379.00', img: `${BASE}/cdn/shop/files/IMG-7106.png?v=1770483253`, href: '/products/925-sterling-silver-forever-you-me-bracelet' },
  { title: '925 Sterling Silver Feather Charms', price: 'Rs. 1,269.00', img: `${BASE}/cdn/shop/files/MG_4619.jpg?v=1762271398`, href: '/products/925-sterling-silver-feather-charms' },
]

function Marquee() {
  const items = [...announcements, ...announcements]
  return (
    <div className="marquee-bar">
      <div className="marquee-inner">
        {items.map((t, i) => (
          <span key={i}>{t} &nbsp;&nbsp;&nbsp; ✦ &nbsp;&nbsp;&nbsp;</span>
        ))}
      </div>
    </div>
  )
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [cartCount] = useState(0)

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="hamburger" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <a className="logo-link" href={BASE} target="_blank" rel="noreferrer">
          <img
            src={`${BASE}/cdn/shop/files/ChatGPT_Image_Aug_28_2025_09_28_21_AM_85d69f84-f91f-4bb7-94b2-e2d4d286bdb5_130x.png?v=1762771740`}
            alt="Madhtara"
            className="logo-img"
          />
        </a>
        <nav className="main-nav">
          {navLinks.map(link =>
            link.children ? (
              <div
                key={link.label}
                className="nav-item has-dropdown"
                onMouseEnter={() => setCatalogOpen(true)}
                onMouseLeave={() => setCatalogOpen(false)}
              >
                <a href={`${BASE}${link.href}`} target="_blank" rel="noreferrer">{link.label} ▾</a>
                {catalogOpen && (
                  <div className="dropdown">
                    {link.children.map(c => (
                      <a key={c.label} href={`${BASE}${c.href}`} target="_blank" rel="noreferrer">{c.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={link.label} className="nav-item">
                <a href={`${BASE}${link.href}`} target="_blank" rel="noreferrer">{link.label}</a>
              </div>
            )
          )}
        </nav>
        <div className="header-icons">
          <a href={`${BASE}/account`} target="_blank" rel="noreferrer" title="Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </a>
          <a href={`${BASE}/cart`} target="_blank" rel="noreferrer" title="Cart" className="cart-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </a>
        </div>
      </div>
      {mobileOpen && (
        <div className="mobile-nav">
          {navLinks.map(link => (
            <a key={link.label} href={`${BASE}${link.href}`} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-img-wrap">
        <img
          src={`${BASE}/cdn/shop/files/Neutral_Modern_Fashion_Collection_Banner_300_x_450_px.jpg?quality=90&v=1762256303&width=1400`}
          alt="Madhtara Silver Jewellery Collection"
          className="hero-img"
        />
        <div className="hero-overlay">
          <img
            src={`${BASE}/cdn/shop/files/Silver_that_Speaks_Style..svg?v=1762258459`}
            alt="Silver that Speaks Style"
            className="hero-text-svg"
          />
        </div>
      </div>
    </section>
  )
}

function CategoryGrid() {
  return (
    <section className="category-section">
      <h2 className="section-title">SHOP BY CATEGORY</h2>
      <div className="category-grid">
        {categories.map(cat => (
          <a key={cat.name} href={`${BASE}${cat.href}`} target="_blank" rel="noreferrer" className="category-card">
            <div className="cat-img-wrap">
              <img src={cat.img} alt={cat.name} loading="lazy" />
            </div>
            <span className="cat-label">{cat.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  return (
    <a className="product-card" href={`${BASE}${product.href}`} target="_blank" rel="noreferrer">
      <div className="product-img-wrap">
        <img src={product.img} alt={product.title} loading="lazy" />
        <div className="product-overlay">
          <button type="button" onClick={e => e.preventDefault()}>Quick Add</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price}</p>
      </div>
    </a>
  )
}

function ProductSection({ id, title, subtitle, products, viewAllHref }) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? products : products.slice(0, 8)
  return (
    <section id={id} className="products-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      <div className="products-grid">
        {visible.map(p => <ProductCard key={p.href} product={p} />)}
      </div>
      <div className="section-footer">
        {!showAll && products.length > 8 && (
          <button className="btn-outline" onClick={() => setShowAll(true)}>
            View More ({products.length - 8} more)
          </button>
        )}
        <a className="btn-outline" href={`${BASE}${viewAllHref}`} target="_blank" rel="noreferrer">
          View All {title}
        </a>
      </div>
    </section>
  )
}

function BestSellersSection() {
  return (
    <section className="products-section best-sellers">
      <div className="section-header">
        <h2 className="section-title">⭐ BEST SELLERS</h2>
        <p className="section-subtitle">Our most loved pieces</p>
      </div>
      <div className="products-grid">
        {bestSellers.map(p => <ProductCard key={p.href} product={p} />)}
      </div>
      <div className="section-footer">
        <a className="btn-outline" href={`${BASE}/collections/best-seller`} target="_blank" rel="noreferrer">
          View All Best Sellers
        </a>
      </div>
    </section>
  )
}

function ValentineSection() {
  return (
    <section className="valentine-section">
      <div className="valentine-inner">
        <div className="valentine-text">
          <p className="val-tag">Special Collection</p>
          <h2>Valentine&apos;s Combos</h2>
          <p className="val-desc">
            Celebrate love with our curated Valentine&apos;s combos — perfect gift sets of 925
            sterling silver jewellery for the one you adore.
          </p>
          <a href={`${BASE}/pages/valentine-combos`} target="_blank" rel="noreferrer" className="btn-primary">
            Shop Valentine Combos
          </a>
        </div>
        <div className="valentine-img">
          <img
            src={`${BASE}/cdn/shop/files/Lucid_Origin_A_stunning_ultrarealistic_portrait_of_an_Indian_A_1.jpg?v=1762258703`}
            alt="Valentine jewellery gift"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-img">
          <img
            src={`${BASE}/cdn/shop/files/Lucid_Origin_A_stunning_ultrarealistic_portrait_of_an_Indian_A_1.jpg?v=1762258703`}
            alt="Madhtara silver jewellery model"
            loading="lazy"
          />
        </div>
        <div className="about-text">
          <p className="about-tag">Our Story</p>
          <h2>WHERE STYLE MEETS SIMPLICITY</h2>
          <p>
            Madhtara is a jewellery brand based in Saharanpur that blends traditional Indian
            heritage with contemporary design. We offer beautifully crafted 925 sterling silver
            jewellery that celebrates timeless elegance, artistry, and culture.
          </p>
          <p>
            Our mission is to make premium-quality jewellery accessible and affordable — combining
            traditional charm with contemporary style through authentic, handpicked designs and
            quality craftsmanship.
          </p>
          <a href={`${BASE}/pages/about-us`} target="_blank" rel="noreferrer" className="btn-primary">
            More About Us
          </a>
        </div>
      </div>
    </section>
  )
}

function FeaturesStrip() {
  const features = [
    { icon: '🚚', title: 'FREE SHIPPING', desc: 'On all prepaid orders above ₹999' },
    { icon: '↩️', title: 'EASY RETURNS', desc: '7-day hassle-free return policy' },
    { icon: '💬', title: '24/7 SUPPORT', desc: 'Chat & email support always ready' },
    { icon: '🔒', title: 'SECURE PAYMENTS', desc: 'All major cards & UPI accepted' },
    { icon: '✅', title: 'CERTIFIED SILVER', desc: 'Authentic 925 sterling silver' },
  ]
  return (
    <section className="features-strip">
      {features.map(f => (
        <div key={f.title} className="feature-item">
          <span className="feature-icon">{f.icon}</span>
          <div>
            <strong>{f.title}</strong>
            <span>{f.desc}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            src={`${BASE}/cdn/shop/files/ChatGPT_Image_Aug_28_2025_09_28_21_AM_85d69f84-f91f-4bb7-94b2-e2d4d286bdb5_130x.png?v=1762771740`}
            alt="Madhtara"
          />
          <p>
            At MADHTARA, we believe jewellery is more than an accessory. Our 925 sterling silver
            collections blend Indian artistry with modern sophistication.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/Madhtara" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/madhtara_92.5_silver/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/919058850701" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>CATALOGUE</h4>
          <a href={`${BASE}/collections/anklet`} target="_blank" rel="noreferrer">Anklet</a>
          <a href={`${BASE}/collections/braclets`} target="_blank" rel="noreferrer">Bracelets</a>
          <a href={`${BASE}/collections/earings`} target="_blank" rel="noreferrer">Earings</a>
          <a href={`${BASE}/collections/pendant`} target="_blank" rel="noreferrer">Pendant</a>
          <a href={`${BASE}/collections/pendant-set`} target="_blank" rel="noreferrer">Pendant Set</a>
          <a href={`${BASE}/collections/studds`} target="_blank" rel="noreferrer">Studs</a>
          <a href={`${BASE}/collections/best-seller`} target="_blank" rel="noreferrer">Best Selling</a>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <a href={`${BASE}/pages/about-us`} target="_blank" rel="noreferrer">About Us</a>
          <a href={`${BASE}/pages/contact-us`} target="_blank" rel="noreferrer">Contact Us</a>
          <a href={`${BASE}/pages/valentine-combos`} target="_blank" rel="noreferrer">Valentine Combos</a>
          <a href={`${BASE}/policies/privacy-policy`} target="_blank" rel="noreferrer">Privacy Policy</a>
          <a href={`${BASE}/policies/refund-policy`} target="_blank" rel="noreferrer">Refund Policy</a>
          <a href={`${BASE}/policies/shipping-policy`} target="_blank" rel="noreferrer">Shipping Policy</a>
          <a href={`${BASE}/policies/terms-of-service`} target="_blank" rel="noreferrer">Terms of Service</a>
        </div>

        <div className="footer-col">
          <h4>CONTACT US</h4>
          <p>📧 mathtara2025@gmail.com</p>
          <p>📞 +91 9058850701</p>
          <p>📞 +91 8126721276</p>
          <p>📍 Sarafa Bazar, Lakshmi Market,<br />Saharanpur, India</p>
          <p style={{marginTop:'0.75rem', fontSize:'0.8rem', color:'#888'}}>© 2025 Madhtara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="site-wrap">
      <Marquee />
      <Header />
      <main>
        <HeroBanner />
        <CategoryGrid />
        <BestSellersSection />
        <ProductSection
          id="anklets"
          title="ANKLETS"
          subtitle="Shop our new arrivals — 925 Sterling Silver"
          products={anklets}
          viewAllHref="/collections/anklet"
        />
        <ValentineSection />
        <ProductSection
          id="earrings"
          title="EARINGS"
          subtitle="Elegant designs for every occasion"
          products={earrings}
          viewAllHref="/collections/earings"
        />
        <AboutSection />
        <ProductSection
          id="bracelets"
          title="BRACELETS"
          subtitle="Wrap your wrist in pure silver"
          products={bracelets}
          viewAllHref="/collections/braclets"
        />
        <Marquee />
        <ProductSection
          id="pendants"
          title="PENDANTS"
          subtitle="Delicate, meaningful, timeless"
          products={pendants}
          viewAllHref="/collections/pendant"
        />
        <ProductSection
          id="pendant-sets"
          title="PENDANT SETS"
          subtitle="Complete looks in matching silver sets"
          products={pendantSets}
          viewAllHref="/collections/pendant-set"
        />
        <ProductSection
          id="studs"
          title="STUDS"
          subtitle="Minimal studs, maximum style"
          products={studs}
          viewAllHref="/collections/studds"
        />
        <FeaturesStrip />
      </main>
      <Footer />
    </div>
  )
}
