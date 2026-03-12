export const BASE = 'https://www.madhtara.com'

export const announcements = [
  '✨ FREE SHIPPING ON ORDERS ABOVE ₹999 ✨',
  '🌸 925 STERLING SILVER JEWELLERY 🌸',
  '💎 AUTHENTIC & HANDPICKED DESIGNS 💎',
  '🚚 RELIABLE DELIVERY ACROSS INDIA 🚚',
]

export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'CATALOGUE', href: '/collections/all', children: [
      { label: 'ANKLET', href: '/collections/anklet' },
      { label: 'BRACELETS', href: '/collections/braclets' },
      { label: 'EARINGS', href: '/collections/earings' },
      { label: 'PENDANT', href: '/collections/pendant' },
      { label: 'PENDANT SET', href: '/collections/pendant-set' },
      { label: 'STUDS', href: '/collections/studds' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'BEST SELLING', href: '/collections/best-seller' },
  { label: "Valentine Combo's", href: '/collections/valentine' },
]

export const categories = [
  { name: 'ANKLETS',     href: '/collections/anklet',      img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_1_2026_02_41_44_PM.png?v=1772356089` },
  { name: 'BRACELETS',  href: '/collections/braclets',    img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_1_2026_02_47_07_PM.png?v=1772356454` },
  { name: 'EARINGS',    href: '/collections/earings',     img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_1_2026_02_49_34_PM.png?v=1772356617` },
  { name: 'PENDANT',    href: '/collections/pendant',     img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_1_2026_02_51_02_PM.png?v=1772356646` },
  { name: 'PENDANT SET',href: '/collections/pendant-set', img: `${BASE}/cdn/shop/files/ChatGPT_Image_Mar_1_2026_02_54_13_PM.png?v=1772356856` },
  { name: 'STUDS',      href: '/collections/studds',      img: `${BASE}/cdn/shop/files/STUDS.png?v=1762250641` },
]

// ─── helper to build a slug-based id ───────────────────────────────────────
function p(slug, title, price, img, collection, desc) {
  return {
    id: slug,
    title,
    price,
    img: `${BASE}/cdn/shop/files/${img}`,
    collection,
    href: `/product/${slug}`,
    desc: desc || `A beautifully crafted 925 Sterling Silver piece from Madhtara. Hallmarked and certified, perfect for everyday elegance or gifting.`,
    material: '925 Sterling Silver',
    weight: '3–6g (approx.)',
    features: ['Hallmarked 925 Sterling Silver', 'Tarnish-resistant', 'Hypoallergenic', 'Free gift packaging'],
  }
}

// ─── ANKLETS ────────────────────────────────────────────────────────────────
export const anklets = [
  p('925-sterling-silver-blue-line-anklets','925 Sterling Silver Blue Line Anklets','Rs. 2,299.00','MG_5463.jpg?v=1765883646','anklet','Delicate blue line design crafted in 925 sterling silver. Adjustable fit, perfect for daily wear.'),
  p('925-sterling-silver-black-line-anklets','925 Sterling Silver Black Line Anklets','Rs. 2,299.00','MG_5472.jpg?v=1765883834','anklet','Bold black line meets sterling silver in this minimal, modern anklet.'),
  p('925-sterling-silver-pink-line-anklets','925 Sterling Silver Pink Line Anklets','Rs. 2,299.00','MG_5478.jpg?v=1765884304','anklet','Soft pink tones woven into a 925 sterling silver chain — feminine and fun.'),
  p('925-sterling-silver-aira-slim-anklet','925 Sterling Silver Aira Slim Anklet','Rs. 2,499.00','MG_5510.jpg?v=1765885423','anklet','Whisper-thin Aira design in pure 925 silver. Effortlessly elegant.'),
  p('925-sterling-silver-multicolour-nazariya-sparkle-anklets','925 Sterling Silver Multicolour Nazariya Sparkle Anklets','Rs. 2,499.00','MG_5538.jpg?v=1765885785','anklet','Vibrant multicolour nazariya beads set in sterling silver — traditional charm, modern style.'),
  p('925-sterling-silver-link-vibe-anklet','925 Sterling Silver Link Vibe Anklet','Rs. 2,549.00','MG_4761.jpg?v=1762168922','anklet','Chunky link chain anklet in 925 silver. Streetwear-ready and statement-making.'),
  p('925-sterling-silver-nazariya-sparkle-anklets','925 Sterling Silver Nazariya Sparkle Anklets','Rs. 2,549.00','MG_5532.jpg?v=1765886067','anklet','Classic nazariya motif with a sparkle twist, crafted in pure 925 sterling silver.'),
  p('double-layer-infinity-anklet','Double Layer Infinity Anklet in 925 Silver','Rs. 2,550.00','MG_4774.jpg?v=1762168280','anklet','Two intertwined infinity chains symbolising endless love — in 925 sterling silver.'),
  p('925-sterling-silver-leaf-floral-charm-anklet','925 Sterling Silver Leaf & Floral Charm Anklet','Rs. 2,579.00','MG_4772.jpg?v=1762168844','anklet','Delicate leaf and floral charms dangling from a fine 925 silver chain.'),
  p('925-sterling-silver-white-line-anklets','925 Sterling Silver White Line Anklets','Rs. 2,590.00','MG_5490.jpg?v=1765884676','anklet','Clean white line detail on a polished 925 sterling silver chain anklet.'),
  p('infinity-anklet-sterling-silver','Infinity Anklet in Sterling Silver – Gift of Forever','Rs. 2,849.00','MG_4781_17ae8c76-cd33-4e91-a1b7-64ba6981b78b.jpg?v=1762169800','anklet','A timeless gift — the infinity symbol in smooth 925 sterling silver.'),
  p('925-sterling-oxidised-line-anklets','925 Sterling Oxidised Line Anklets','Rs. 3,149.00','MG_5428.jpg?v=1765880837','anklet','Oxidised 925 silver finish for a vintage, antique look with a modern silhouette.'),
  p('925-sterling-silver-twin-tone-minimal-anklet','925 Sterling Silver Twin Tone Minimal Anklet','Rs. 3,299.00','MG_5518.jpg?v=1765885228','anklet','Two-tone silver finish in a minimalist design — clean, contemporary, classy.'),
  p('925-sterling-silver-oxidised-mayura-grace-anklets','925 Sterling Silver Oxidised Mayura Grace Anklets','Rs. 3,599.00','MG_5419.jpg?v=1765879398','anklet','Peacock-inspired oxidised silver anklet capturing the grace of the Mayura.'),
  p('925-sterling-silver-nitya-shine-anklets','925 Sterling Silver Nitya Shine Anklets','Rs. 3,899.00','MG_5398.jpg?v=1765879682','anklet','High-polish Nitya shine design — bright, bold and beautifully crafted.'),
]

// ─── EARRINGS ───────────────────────────────────────────────────────────────
export const earrings = [
  p('925-sterling-silver-serenelle-chain-earrings','925 Sterling Silver Serenelle Chain Earrings','Rs. 899.00','ChatGPT_Image_Mar_6_2026_01_25_48_PM.png?v=1772783535','earings','Flowing chain drops in 925 sterling silver — light, elegant, effortless.'),
  p('925-sterling-silver-eternal-loop-earrings','925 Sterling Silver Eternal Loop Earrings','Rs. 1,149.00','ChatGPT_Image_Mar_6_2026_01_28_14_PM.png?v=1772783680','earings','Seamless loop hoops in 925 sterling silver for a clean, modern look.'),
  p('blue-shine-silver-drop-earrings','Blue Shine Silver Drop Earrings','Rs. 1,449.00','ChatGPT_Image_Mar_7_2026_03_50_09_PM.png?v=1772878595','earings','Vivid blue stone drop earrings set in 925 sterling silver.'),
  p('925-sterling-silver-perfect-bloom-leaf','925 Sterling Silver Perfect Bloom Leaf','Rs. 1,199.00','ChatGPT_Image_Mar_6_2026_01_31_30_PM.png?v=1772783910','earings','Leaf-shaped bloom studs in polished 925 sterling silver.'),
  p('925-sterling-silver-blue-square-spark-earrings','925 Sterling Silver Blue Square Spark Earrings','Rs. 1,349.00','Gemini_Generated_Image_bwkmbpbwkmbpbwkm.png?v=1772784498','earings','Geometric blue square stones set in sterling silver — bold and modern.'),
  p('pink-heart-silver-hoop-earrings','Pink Heart Silver Hoop Earrings','Rs. 1,499.00','ChatGPT_Image_Mar_7_2026_03_54_46_PM.png?v=1772878876','earings','Playful pink hearts on sterling silver hoops — cute and romantic.'),
  p('everyday-silver-huggy-earrings','Everyday Silver Huggy Earrings','Rs. 1,349.00','ChatGPT_Image_Mar_6_2026_01_40_30_PM.png?v=1772784427','earings','Snug huggy hoops in 925 sterling silver, perfect for everyday wear.'),
  p('colour-pop-silver-hoop-earrings','Colour Pop Silver Hoop Earrings','Rs. 1,549.00','Gemini_Generated_Image_qah6vpqah6vpqah6.png?v=1772879445','earings','Pop of colour on classic silver hoops — fun and fashionable.'),
  p('classic-shine-silver-drop-earrings','Classic Shine Silver Drop Earrings','Rs. 1,549.00','ChatGPT_Image_Mar_7_2026_04_02_32_PM.png?v=1772879485','earings','Timeless silver drop earrings with a high-shine finish.'),
  p('925-sterling-silver-emerald-green-love-droplets','925 Sterling Silver Emerald Green Love Droplets','Rs. 1,599.00','Gemini_Generated_Image_l03t2ml03t2ml03t.png?v=1772880168','earings','Lush emerald green droplet charms in 925 sterling silver.'),
  p('teal-charm-chain-silver-earrings','Teal Charm Chain Silver Earrings','Rs. 1,799.00','Gemini_Generated_Image_3myy9f3myy9f3myy.png?v=1772880889','earings','Teal charm beads cascading on sterling silver chains.'),
  p('yellow-spark-drop-silver-earrings','Yellow Spark Drop Silver Earrings','Rs. 1,749.00','Gemini_Generated_Image_9yo8789yo8789yo8.png?v=1772880129','earings','Sunny yellow stone drops in 925 sterling silver — bright and cheerful.'),
  p('yellow-heart-drop-silver-earrings','Yellow Heart Drop Silver Earrings','Rs. 1,849.00','ChatGPT_Image_Mar_7_2026_03_34_17_PM.png?v=1772879710','earings','Heart-shaped yellow drops on sterling silver ear wires.'),
  p('pastel-bar-silver-hoop-earrings','Pastel Bar Silver Hoop Earrings','Rs. 1,849.00','ChatGPT_Image_Mar_7_2026_04_31_54_PM.png?v=1772881098','earings','Pastel bar inlays on sterling silver hoops — soft and stylish.'),
  p('925-sterling-silver-black-drop-earrings','925 Sterling Silver Black Drop Earrings','Rs. 2,049.00','Gemini_Generated_Image_u821amu821amu821.png?v=1772881765','earings','Sleek black stone drops in polished 925 sterling silver.'),
  p('angel-wing-silver-stud-earrings','Angel Wing Silver Stud Earrings','Rs. 2,099.00','ChatGPT_Image_Mar_7_2026_04_41_08_PM.png?v=1772881663','earings','Delicate angel wing studs in 925 sterling silver — ethereal and elegant.'),
]

// ─── BRACELETS ──────────────────────────────────────────────────────────────
export const bracelets = [
  p('925-sterling-silver-dual-tone-pearl-charm-bracelet','925 Sterling Silver Dual Tone Pearl Charm Bracelet','Rs. 999.00','ChatGPT_Image_Mar_8_2026_05_53_59_PM.png?v=1773120817','braclets','Dual-tone chain with pearl charms — classic elegance in 925 sterling silver.'),
  p('925-sterling-silver-forever-you-me-bracelet','925 Sterling Silver Forever You & Me Bracelet','Rs. 1,379.00','IMG-7106.png?v=1770483253','braclets','Romantic "Forever You & Me" engraving on a sterling silver bracelet — perfect for gifting.'),
  p('92-5-sterling-silver-pastel-orbit-bracelet','92.5 Sterling Silver Pastel Orbit Bracelet','Rs. 1,549.00','IMG-7108.png?v=1770483467','braclets','Pastel-coloured orbit beads on a 925 sterling silver bracelet.'),
  p('92-5-sterling-silver-pastel-orbit-bracelet-rose-gold','92.5 Sterling Silver Pastel Orbit Bracelet (Rose Gold)','Rs. 1,549.00','IMG-7112.png?v=1770483782','braclets','Rose gold finish with pastel orbit beads — warm, feminine, and modern.'),
  p('92-5-sterling-silver-midnight-blue-spark-tennis-bracelet','92.5 Sterling Silver Midnight Blue Spark Tennis Bracelet','Rs. 1,739.00','IMG-7114.png?v=1770483934','braclets','Midnight blue stones sparkle along this 925 sterling silver tennis bracelet.'),
  p('925-sterling-silver-clover-luck-bracelet','925 Sterling Silver Clover Luck Bracelet','Rs. 1,799.00','MG_4734.jpg?v=1762245395','braclets','Four-leaf clover charms in 925 sterling silver — wear your luck on your wrist.'),
  p('925-sterling-silver-sparkline-tennis-bracelet','925 Sterling Silver Sparkline Tennis Bracelet','Rs. 1,799.00','MG_4740.jpg?v=1762245504','braclets','Classic tennis bracelet with a continuous sparkline of sterling silver stones.'),
  p('92-5-sterling-silver-lucky-clover-open-bracelet','92.5 Sterling Silver Lucky Clover Open Bracelet','Rs. 1,850.00','ChatGPT_Image_Mar_10_2026_11_27_24_AM.png?v=1773122291','braclets','Open-ended clover design bracelet in 925 sterling silver — adjustable and chic.'),
  p('92-5-sterling-silver-blue-flutter-bracelet','92.5 Sterling Silver Blue Flutter Bracelet','Rs. 1,899.00','ChatGPT_Image_Mar_10_2026_11_11_36_AM.png?v=1773121409','braclets','Blue butterfly charms flutter along this delicate 925 silver bracelet.'),
  p('92-5-sterling-silver-green-dot-chain-bracelet','92.5 Sterling Silver Green Dot Chain Bracelet','Rs. 2,100.00','MG_5570.jpg?v=1765963366','braclets','Small green dot charms dotted along a fine sterling silver chain.'),
  p('92-5-sterling-silver-blue-stone-dual-chain-bracelet','92.5 Sterling Silver Blue Stone Dual Chain Bracelet','Rs. 2,199.00','ChatGPT_Image_Mar_10_2026_11_30_11_AM.png?v=1773122455','braclets','Dual chain bracelet with blue stone accents in 925 sterling silver.'),
  p('92-5-sterling-silver-twin-spark-open-bracelet','92.5 Sterling Silver Twin Spark Open Bracelet','Rs. 2,199.00','MG_5074.jpg?v=1765983869','braclets','Twin spark stones on an open-cuff 925 sterling silver bracelet.'),
  p('92-5-sterling-silver-pearl-leaf-open-bracelet','92.5 Sterling Silver Pearl Leaf Open Bracelet','Rs. 2,199.00','MG_5132.jpg?v=1765984419','braclets','Pearl and leaf motifs on an elegant open-cuff sterling silver bracelet.'),
  p('92-5-sterling-silver-blue-wave-charm-bracelet','92.5 Sterling Silver Blue Wave Charm Bracelet','Rs. 2,200.00','MG_5582.jpg?v=1765959299','braclets','Wave-shaped blue charms on a 925 sterling silver chain — ocean-inspired.'),
  p('92-5-sterling-silver-pearl-spark-trio-bracelet','92.5 Sterling Silver Pearl Spark Trio Bracelet','Rs. 2,249.00','MG_5065.jpg?v=1765979456','braclets','Triple pearl and spark stones on a 925 sterling silver chain bracelet.'),
  p('92-5-sterling-silver-purple-glow-tennis-bracelet','92.5 Sterling Silver Purple Glow Tennis Bracelet','Rs. 2,299.00','Copy_of__MG_5082.jpg?v=1765982058','braclets','Rich purple stones glow along this 925 sterling silver tennis bracelet.'),
]

// ─── PENDANTS ───────────────────────────────────────────────────────────────
export const pendants = [
  p('925-silver-soft-pearl-drop-pendant','925 Silver Soft Pearl Drop Pendant','Rs. 1,499.00','MG_5934.jpg','pendant','A soft pearl drop suspended in 925 sterling silver — understated luxury.'),
  p('925-sterling-silver-eternal-knot-pendant','925 Sterling Silver Eternal Knot Pendant','Rs. 1,549.00','MG_4714.jpg','pendant','The eternal knot symbolises infinite love and wisdom — crafted in 925 sterling silver.'),
  p('925-sterling-silver-two-souls-one-heart-pendant','925 Sterling Silver Two Souls One Heart Pendant','Rs. 1,749.00','MG_4674.jpg?v=1762276811','pendant','Two intertwined hearts representing inseparable souls in 925 sterling silver.'),
  p('925-sterling-silver-galaxy-line-pendant','925 Sterling Silver Galaxy Line Pendant','Rs. 1,949.00','MG_4698.jpg?v=1762247751','pendant','Inspired by the cosmos — a sleek line pendant in 925 sterling silver.'),
  p('925-sterling-silver-celeste-butterfly-pendant','925 Sterling Silver Celeste Butterfly Pendant','Rs. 2,049.00','MG_4468_1.jpg','pendant','Celestial butterfly in 925 sterling silver — delicate, dreamy, divine.'),
  p('925-sterling-silver-falling-petals-pendant','925 Sterling Silver Falling Petals Pendant','Rs. 2,149.00','MG_4467.jpg?v=1762277716','pendant','Softly falling petal motif in polished 925 sterling silver.'),
  p('925-silver-emerald-grace-pendant','925 Silver Emerald Grace Pendant','Rs. 2,149.00','MG_5921.jpg','pendant','Lush emerald stone set gracefully in 925 sterling silver.'),
  p('925-silver-sky-spark-curve','925 Silver Sky Spark Curve','Rs. 2,299.00','MG_5655.jpg','pendant','A sparkling curved line pendant inspired by the open sky — in 925 silver.'),
  p('sun-aura-925-sterling-silver-pendant','Sun Aura 925 Sterling Silver Pendant','Rs. 2,349.00','MG_4710.jpg','pendant','Radiant sun aura design in polished 925 sterling silver.'),
  p('925-silver-classic-sparkle-chain','925 Silver Classic Sparkle Chain','Rs. 2,349.00','MG_5698.jpg','pendant','Classic diamond-cut sparkle chain in 925 sterling silver.'),
  p('925-sterling-silver-luna-infinity-curve-pendant','925 Sterling Silver Luna Infinity Curve Pendant','Rs. 2,449.00','MG_4691.jpg','pendant','Luna crescent meets infinity curve in this 925 sterling silver pendant.'),
  p('925-silver-emerald-heart-drop','925 Silver Emerald Heart Drop','Rs. 2,499.00','MG_5644.jpg','pendant','Emerald heart drop in 925 sterling silver — elegant and romantic.'),
  p('925-sterling-silver-wing-butterfly-pendant','925 Sterling Silver Wing Butterfly Pendant','Rs. 2,549.00','MG_4700.jpg?v=1762247466','pendant','Graceful butterfly wings in 925 sterling silver — a bestseller.'),
  p('925-sterling-silver-twinkling-star-layered-pendant','925 Sterling Silver Twinkling Star Layered Pendant','Rs. 2,549.00','MG_4667.jpg','pendant','Layered twinkling stars in 925 sterling silver — magical and whimsical.'),
  p('925-sterling-silver-dewdrop-elegance-pendant','925 Sterling Silver Dewdrop Elegance Pendant','Rs. 2,549.00','MG_4474.jpg','pendant','A single dewdrop in glistening 925 sterling silver — pure elegance.'),
]

// ─── PENDANT SETS ───────────────────────────────────────────────────────────
export const pendantSets = [
  p('925-silver-emerald-grace-set','925 Silver Emerald Grace Set','Rs. 2,399.00','MG_5868.jpg?v=1765952067','pendant-set','Matching pendant and earring set in emerald and 925 sterling silver.'),
  p('925-silver-heart-promise-set','925 Silver Heart Promise Set','Rs. 2,549.00','MG_5736.jpg?v=1765953162','pendant-set','Promise heart pendant with matching earrings in 925 sterling silver.'),
  p('925-silver-snow-glow-set','925 Silver Snow Glow Set','Rs. 2,849.00','MG_5741.jpg?v=1765952636','pendant-set','Snow-white glow pendant set in polished 925 sterling silver.'),
  p('925-silver-angel-wing-drop-set','925 Silver Angel Wing Drop Set','Rs. 2,899.00','MG_5913.jpg?v=1765954184','pendant-set','Angel wing drop pendant and earring set in 925 sterling silver.'),
  p('925-silver-rose-bloom-set','925 Silver Rose Bloom Set','Rs. 2,949.00','MG_5772.jpg?v=1765955303','pendant-set','Rose bloom flower pendant and matching studs in 925 silver.'),
  p('925-silver-pearl-frame-set','925 Silver Pearl Frame Set','Rs. 2,999.00','MG_5926.jpg?v=1765954392','pendant-set','Pearl-framed pendant and earring set — classic and timeless.'),
  p('925-silver-twin-drop-grace-set','925 Silver Twin Drop Grace Set','Rs. 2,999.00','MG_5850.jpg?v=1765955047','pendant-set','Twin drop pendant and earring set in graceful 925 sterling silver.'),
  p('925-silver-emerald-aura-set','925 Silver Emerald Aura Set','Rs. 3,149.00','MG_5887.jpg?v=1765953975','pendant-set','Emerald aura pendant and earring set radiating natural beauty.'),
  p('925-silver-urban-spark-bar-set','925 Silver Urban Spark Bar Set','Rs. 3,149.00','MG_5891.jpg?v=1765954834','pendant-set','Modern bar pendant set with urban spark — contemporary and chic.'),
  p('twirl-glow-925-sterling-silver-pendant-set','Twirl Glow 925 Sterling Silver Pendant Set','Rs. 3,199.00','MG_4488.jpg?v=1762248147','pendant-set','Swirling glow design pendant set in 925 sterling silver.'),
  p('925-silver-soft-square-sparkle-set','925 Silver Soft Square Sparkle Set','Rs. 3,249.00','MG_5904.jpg?v=1765954615','pendant-set','Soft square sparkle pendant and earring set in 925 silver.'),
  p('925-silver-bloom-spark-set','925 Silver Bloom Spark Set','Rs. 3,299.00','MG_5994.jpg?v=1765956400','pendant-set','Blooming floral sparks in a matching 925 silver pendant set.'),
  p('925-sterling-silver-midnight-heart-pendant-set','925 Sterling Silver Midnight Heart Pendant Set','Rs. 3,349.00','MG_4521.jpg?v=1762279230','pendant-set','Dark romance — midnight heart pendant and earring set in 925 sterling silver.'),
  p('925-silver-mini-bloom-pearl-set','925 Silver Mini Bloom Pearl Set','Rs. 3,349.00','MG_5641.jpg?v=1765960626','pendant-set','Mini bloom pearl pendant and earring set — soft, sweet, and sophisticated.'),
  p('925-silver-blue-blossom-set','925 Silver Blue Blossom Set','Rs. 3,499.00','MG_5833.jpg?v=1765955802','pendant-set','Blue blossom flower pendant and earring set in 925 sterling silver.'),
  p('925-silver-heart-spark-set','925 Silver Heart Spark Set','Rs. 3,499.00','MG_5760.jpg?v=1765956050','pendant-set','Heart with sparkling stones — pendant and earring set in 925 silver.'),
]

// ─── STUDS ──────────────────────────────────────────────────────────────────
export const studs = [
  p('925-sterling-silver-ribbon-knot-studs','925 Sterling Silver Ribbon Knot Studs','Rs. 849.00','MG_4892.jpg?v=1762361501','studds','Cute ribbon knot studs in 925 sterling silver — small but statement-making.'),
  p('925-sterling-silver-astral-arc-studs','925 Sterling Silver Astral Arc Studs','Rs. 849.00','MG_4612.jpg?v=1762363973','studds','Crescent arc studs inspired by the cosmos in 925 sterling silver.'),
  p('92-5-silver-little-flutter-studs','92.5 Silver Little Flutter Studs','Rs. 949.00','MG_5289.jpg?v=1766069548','studds','Tiny butterfly flutter studs in 925 sterling silver — delicate and sweet.'),
  p('925-sterling-silver-lilac-petal-studs','925 Sterling Silver Lilac Petal Studs','Rs. 1,049.00','MG_4831_23dc991a-7c4a-462b-a7d0-6581e6eaaf85.jpg?v=1762275626','studds','Lilac petal studs in 925 sterling silver — soft, floral, and feminine.'),
  p('925-sterling-silver-moonpetal-studs','925 Sterling Silver Moonpetal Studs','Rs. 1,049.00','MG_4571.jpg?v=1762365031','studds','Moon-petal design studs in polished 925 sterling silver.'),
  p('92-5-silver-green-bloom-studs','92.5 Silver Green Bloom Studs','Rs. 1,090.00','MG_5189.jpg?v=1766068231','studds','Green bloom flower studs in 925 sterling silver — fresh and vibrant.'),
  p('925-sterling-silver-blue-aura-circle-studs','925 Sterling Silver Blue Aura Circle Studs','Rs. 1,100.00','MG_5791.jpg?v=1766052664','studds','Blue aura circle studs in sterling silver — simple, sleek, stunning.'),
  p('925-sterling-silver-midnight-knot-studs','925 Sterling Silver Midnight Knot Studs','Rs. 1,100.00','MG_5813.jpg?v=1766066017','studds','Midnight-dark knot studs in polished 925 sterling silver.'),
  p('925-sterling-silver-evershine-leaf-studs','925 Sterling Silver EverShine Leaf Studs','Rs. 1,149.00','MG_4835.jpg?v=1762248594','studds','Ever-shining leaf studs in bright 925 sterling silver.'),
  p('925-sterling-silver-faerie-bloom-studs','925 Sterling Silver Faerie Bloom Studs','Rs. 1,149.00','MG_4837.jpg?v=1762361875','studds','Faerie-inspired bloom studs in 925 sterling silver — magical and pretty.'),
  p('925-sterling-silver-whimsical-clover-studs','925 Sterling Silver Whimsical Clover Studs','Rs. 1,149.00','MG_4883.jpg?v=1762362576','studds','Four-leaf clover studs in 925 sterling silver — carry your luck everywhere.'),
  p('925-sterling-silver-royal-spark-studs','925 Sterling Silver Royal Spark Studs','Rs. 1,269.00','MG_4580.jpg?v=1762362895','studds','Royal crown-inspired spark studs in dazzling 925 sterling silver.'),
  p('92-5-silver-multicolour-spark-studs','92.5 Silver Multicolour Spark Studs','Rs. 1,310.00','MG_5209.jpg?v=1766068932','studds','Multicoloured spark stones set in 925 sterling silver — vibrant and fun.'),
  p('92-5-silver-blue-wave-studs','92.5 Silver Blue Wave Studs','Rs. 1,330.00','MG_5275.jpg?v=1766067733','studds','Ocean wave-inspired blue studs in 925 sterling silver.'),
  p('925-sterling-silver-cute-flower-studs','925 Sterling Silver Cute Flower Studs','Rs. 1,339.00','MG_4502.jpg?v=1762364418','studds','Adorable flower studs in polished 925 sterling silver — always in bloom.'),
  p('925-sterling-silver-starlight-heart-studs','925 Sterling Silver Starlight Heart Studs','Rs. 1,349.00','IMG_4511.jpg?v=1762364788','studds','Heart studs dusted with starlight — in 925 sterling silver.'),
]

// ─── BEST SELLERS ───────────────────────────────────────────────────────────
export const bestSellers = [
  pendants.find(x => x.id === '925-sterling-silver-wing-butterfly-pendant'),
  pendants.find(x => x.id === '925-sterling-silver-falling-petals-pendant'),
  pendants.find(x => x.id === '925-sterling-silver-galaxy-line-pendant'),
  bracelets.find(x => x.id === '925-sterling-silver-sparkline-tennis-bracelet'),
  pendants.find(x => x.id === '925-sterling-silver-two-souls-one-heart-pendant'),
  bracelets.find(x => x.id === '925-sterling-silver-forever-you-me-bracelet'),
  studs.find(x => x.id === '925-sterling-silver-royal-spark-studs'),
].filter(Boolean)

// ─── ALL PRODUCTS MAP (for product page lookup) ─────────────────────────────
export const allProducts = [
  ...anklets,
  ...earrings,
  ...bracelets,
  ...pendants,
  ...pendantSets,
  ...studs,
]

export const productMap = Object.fromEntries(allProducts.map(p => [p.id, p]))

export const collectionMap = {
  'anklet':      { title: 'Anklets',      products: anklets },
  'braclets':    { title: 'Bracelets',    products: bracelets },
  'earings':     { title: 'Earings',      products: earrings },
  'pendant':     { title: 'Pendants',     products: pendants },
  'pendant-set': { title: 'Pendant Sets', products: pendantSets },
  'studds':      { title: 'Studs',        products: studs },
  'best-seller': { title: 'Best Sellers', products: bestSellers },
  'all':         { title: 'All Products', products: allProducts },
}
