//!======================================= All Products Component Data =================================

interface titleOurProductsProps {
  title: string;
}

export const titleOurProducts: titleOurProductsProps = {
  title: "Our Products"
};

const optimizeImage = (url: string) =>
  url.includes("res.cloudinary.com") ? `${url}?f_auto,q_auto` : url;

interface ProductType {
  id: number;
  name: string;
  Desc: string;
  category: string;
  subCategory?: string;
  img: string;
  availableColors: string[];
  After_Discount: number;
  Pre_Discount: number | null;
  quantity: string;
  imgHover: string;
  video: string;
}

export const allProducts: ProductType[] = [
  {
    id: 1,
    name: "Running Shoes",
    Desc: "Level up your run with our lightweight running shoes – designed for everyday training and built to go the distance. Whether you're hitting the pavement for a quick jog or grinding through long weekend runs, these shoes move with you, not against you.",
    category: "Men's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578418/ka7ghahrzip03bfbzpqd.png"
    ),
    availableColors: ["#FDA4AF", "#FFFFFF", "#000000", "#4B5563"],
    After_Discount: 99,
    Pre_Discount: 120,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/61TfQ7mnh-L._AC_SX625_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748632482/lepw9ewglqyfqlgyeeqg.mp4"
    )
  },
  {
    id: 2,
    name: "Red Compact Single Door Mini Fridge",
    Desc: `20L AC/DC Mini Fridge – Cooling & Warming | Portable for Bedroom, Hotel & Travel A sleek, portable mini fridge with a 20L capacity, featuring dual cooling and warming functionality. Works with both AC and DC power sources. Perfect for bedrooms, hotels, offices, and travel. Efficient cooling and warming with dual-core system. Works on both AC power and car adapter (DC). Quiet operation and energy-efficient. Compact and easy to carry. Ideal for beverages, cosmetics, medications, or baby food.`,
    category: "Home Appliances",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748676184/xnpk1vxpetoszqf0fjrj.png"
    ),
    availableColors: ["#DC143C", "#000000", "#6B7280"],
    After_Discount: 699,
    Pre_Discount: 849,
    quantity: "In Stock",
    imgHover:
      "https://p.globalsources.com/IMAGES/PDT/B5791164633/mini-fridge.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748686309/etpugbwogcimvvwbxvp0.mp4"
    )
  },
  {
    id: 3,
    name: "Retro Cotton Linen Set — Plus Size",
    Desc: "Effortless Elegance Meets Everyday Comfort. Step into style with this chic 2-piece set, featuring a relaxed-fit shirt and high-waisted loose trousers crafted from breathable cotton-linen blend. Perfect for sunny days or casual outings, this set combines modern flair with all-day comfort. Dress it up or down—either way, you’ll look and feel effortlessly put-together.",
    category: "Women's Tops",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748676646/evxxjukvj4pk01taglfl.png"
    ),
    availableColors: ["#E4E4E7", "#93C5FD"],
    After_Discount: 319,
    Pre_Discount: 399,
    quantity: "In Stock",
    imgHover:
      "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/l/12/39824d4f-b33c-43a4-a39f-3116742033cd.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748689181/d43rtr9cltt60eakm8im.mp4"
    )
  },
  {
    id: 4,
    name: "Luxury PU Leather Handbag for Women",
    Desc: "Timeless Elegance in Every Detail. Turn heads with this elegant PU leather handbag, featuring a unique custom design that blends sophistication and functionality. Whether you're heading to the office, out for brunch, or attending a special event, this bag adds the perfect finishing touch to any outfit. Durable, chic, and versatile — your new everyday essential.",
    category: "Women's Bags",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748676451/ui1lafbg8fi06qrfdjho.png"
    ),
    availableColors: ["#6B4F1F", "#FFFFFF"],
    After_Discount: 149,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://s.alicdn.com/@sc04/kf/H8ec2ebccffb44bd5bab4da7c1d4e1b55e.jpg_720x720q50.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748677696/ed7yybklsvha70c9zjme.mp4"
    )
  },
  {
    id: 5,
    name: "Gaming Laptop Xtreme 16GB RAM",
    Desc: "High-performance gaming laptop with Intel i7 processor, 16GB RAM, 1TB SSD, and dedicated RTX graphics. Designed for gamers seeking smooth FPS and immersive gameplay with RGB backlit keyboard.",
    category: "Electronics",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578178/sixgyokcrxsjwsn6bibk.png"
    ),
    availableColors: ["#000000", "#1F2937"],
    After_Discount: 1500,
    Pre_Discount: 1700,
    quantity: "In Stock",
    imgHover: "https://images.technews.com/laptop-hover.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748781806/vocekcocatnho8hpvdmv.mp4"
    )
  },
  {
    id: 6,
    name: "Casual Sneakers",
    Desc: "Step Into Effortless Style. These stylish sneakers are your go-to choice for casual hangouts and everyday comfort. With a clean design and versatile vibe, they blend perfectly with any outfit — whether you're out with friends or running errands. Comfy. Cool. Always on point.",
    category: "Men's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578115/ef8iqgx3pdxkqwaaatn7.png"
    ),
    availableColors: ["#000000", "#FFFFFF"], // black, White
    After_Discount: 399,
    Pre_Discount: 440,
    quantity: "In Stock",
    imgHover:
      "https://images.pexels.com/photos/6412694/pexels-photo-6412694.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748789158/l26twcvaqkvixczmz64z.mp4"
    )
  },
  {
    id: 7,
    name: "Performance Sports Shoes",
    Desc: "Durable sports shoes designed for maximum grip and performance.",
    category: "Men's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578400/z7xqtzl6fi4nvnhyov7l.png"
    ),
    availableColors: ["#000000", "#FFFFFF"], // black, White
    After_Discount: 199,
    Pre_Discount: 260,
    quantity: "In Stock",
    imgHover:
      "https://images.pexels.com/photos/6540998/pexels-photo-6540998.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748604743/wnib9utl6a44gj6c52n5.mp4"
    )
  },
  {
    id: 8,
    name: "Formal Leather Shoes",
    Desc: "Command the Room with Every Step. These elegant leather shoes are crafted for formal events and sharp business looks. With premium materials and a refined silhouette, they offer the perfect balance of style, sophistication, and confidence. Ideal for those who dress to impress.",
    category: "Men's Shoes",
    img: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578210/krcyjmu47isocxisxail.png",
    availableColors: ["#FBBF24", "#FFFFFF", "#8B0000"], // yellow-500, white, red-900
    After_Discount: 499,
    Pre_Discount: 550,
    quantity: "Out Of Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/6a/P00971102_d1.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748581353/lemp3dbh14jzlaz0ukjk.mp4"
    )
  },
  {
    id: 9,
    name: "MacBook Air — Portable Productivity",
    Desc: "A sleek and powerful laptop designed to elevate your workflow. With high-speed performance, long battery life, and a lightweight build, it’s perfect for professionals, students, and creatives who need top-tier productivity on the go. Whether you're working from a café, commuting, or traveling, this device keeps up with your pace — no compromises.",
    category: "Electronics",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578359/kcz5toxrohcozoh0ilii.png"
    ),
    availableColors: ["#4B5563", "#D1D5DB"], // zinc-200, gray-700
    After_Discount: 1199,
    Pre_Discount: null,
    quantity: "Out of Stock",
    imgHover: "https://m.media-amazon.com/images/I/71qArNmCH8L._AC_SX679_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748846276/jhp7afxxlp3ljbxp9upx.mp4"
    )
  },
  {
    id: 10,
    name: "Training Gym Shoes",
    Desc: "Sporty and breathable athletic shoes designed for everyday training, gym workouts, and high-performance fitness routines. Lightweight construction, flexible design, and cushioned support keep you comfortable and agile from warm-up to cooldown.",
    category: "Men's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748676650/g3endlqljdwa3rljanht.png"
    ),
    availableColors: ["#000000", "#FFFFFF", "#4A5568"], // black, white, gray-700
    After_Discount: 99,
    Pre_Discount: 130,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71SxQQwcqaL._AC_SY625_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748677098/k2v38xu1q9bkvvcwglny.mp4"
    )
  },
  {
    id: 11,
    name: "Bold Color Sneakers",
    Desc: "Turn every sidewalk into your runway with bold, head-turning sneakers that explode with color and energy — made to electrify your look and fuel your vibe. Step loud, live proud — these kicks don’t whisper, they roar.",
    category: "Men's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578106/bqfgsbkixs7dhyrgf2qo.png"
    ),
    availableColors: ["#FB923C", "#6B4226"], // orange-500, brown-500
    After_Discount: 249,
    Pre_Discount: 300,
    quantity: "In Stock",
    imgHover:
      "https://images.pexels.com/photos/12601007/pexels-photo-12601007.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748684254/by36wyxamnbkz1jc2zlo.mp4"
    )
  },
  {
    id: 12,
    name: "Comfort All-Day Shoes",
    Desc: "Meet your new everyday essential – Comfort All-Day Shoes. Built for movement, made for comfort. Whether you're powering through a busy workday, strolling the city, or running errands, these shoes keep you going without compromise. With shock-absorbing soles, ergonomic cushioning, and a breathable design, every detail is made to support your feet from morning till night. Forget foot fatigue—experience smooth, lightweight steps that feel like walking on air.",
    category: "Men's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578163/fyvjewmizxljfe5pj0xl.png"
    ),
    availableColors: ["#FFFFFF", "#000000"], // white, black
    After_Discount: 529,
    Pre_Discount: 600,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/41/P00971103_d1.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748580123/sdnymbajd2ov3xbtvm8d.mp4"
    )
  },
  {
    id: 13,
    name: "Classic High-Top Shoes",
    Desc: "Classic High-Top Shoes – Where timeless style meets functional support. Engineered with a sleek silhouette and elevated ankle coverage, these shoes deliver the perfect balance of streetwear cool and everyday comfort. The high-top design offers added ankle support, while the durable sole provides reliable traction. Whether you're hitting the pavement or just flexing your fit, this pair keeps your look fresh and your steps steady.",
    category: "Men's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578157/mibfzfc8bm0ctamf0509.png"
    ),
    availableColors: ["#000000", "#800000"], // black, red-900
    After_Discount: 799,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/15/P00436217_d1.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748677002/tnaqnxnlvnmu7sbkooet.mp4"
    )
  },
  {
    id: 14,
    name: "MacBook Air – Creative Edition",
    Desc: "Redefining mobility and performance. Experience the perfect fusion of ultra-thin sophistication and raw power — built for those who create, innovate, and lead. Whether you're editing 4K videos, designing high-end graphics, or managing complex workflows, this machine keeps up with your vision — without weighing you down.",
    category: "Electronics",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578369/kxcrwuy1exoi993ilvwr.png"
    ),
    availableColors: ["#F5CBA7", "#B0B0B0"], // rose-300, gray-400
    After_Discount: 2999,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://www.smartgeneration.it/wp-content/uploads/2022/02/MBA13-4.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748609424/ec2gqin85kdf9tuk5edk.mp4"
    )
  },
  {
    id: 15,
    name: "Baby Milton Quilted Baby Sweatshirt",
    Desc: "Designed for everyday ease and all-day comfort — this piece features a relaxed, roomy fit that moves with you, not against you. Made from soft, lightweight yet durable fabric that’s gentle on the skin and breathable to keep you fresh. No more worries about wrinkles, shrinkage, or fading — it's made to last wash after wash. Whether you're chilling, working, or on the move, it’s built to support your lifestyle with unrestricted freedom and effortless style.",
    category: "Kids Clothing",
    subCategory: "Kids Boys",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578122/vf3txu3wgmni71sae0ps.png"
    ),
    availableColors: ["#60A5FA", "#A67B5B"], // blue-400, amber-500
    After_Discount: 99,
    Pre_Discount: 119,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71slm3l5fxL._AC_SX569_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748678163/s6odq70ompp0uv5k0jam.mp4"
    )
  },
  {
    id: 16,
    name: "Straight-Leg Couture Cotton Trousers",
    Desc: "Refine your style with our straight-leg couture trousers — expertly tailored from premium cotton to deliver structure without sacrificing comfort. Perfectly versatile for both laid-back days and polished nights, these trousers are your go-to for effortless sophistication.",
    category: "Women's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748676650/dgqq6ddmms6dwqbnltrs.png"
    ),
    availableColors: ["#004D4D", "#808080"], // Dark Teal, gray-700
    After_Discount: 559,
    Pre_Discount: 649,
    quantity: "In Stock",
    imgHover:
      "https://images.pexels.com/photos/7205905/pexels-photo-7205905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748685010/ja7lk0z90yfdtu8ynclr.mp4"
    )
  },
  {
    id: 17,
    name: "Men's Infinity Insulated Cargo Pant",
    Desc: "The Men's Infinity Insulated Cargo Pant is designed to keep you warm and comfortable in cold conditions. With durable insulation and a relaxed fit, it offers freedom of movement and all-day wearability. Multiple cargo pockets provide ample storage for essentials on the go. Ideal for winter sports, outdoor adventures, or everyday use in chilly weather.",
    category: "Men's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578379/knecpffe9xqwvf9i7ipy.png"
    ),
    availableColors: ["#A65E2E", "#000000"], // orange-400, black
    After_Discount: 329,
    Pre_Discount: 399,
    quantity: "In Stock",
    imgHover: "https://i.ebayimg.com/images/g/L8QAAOSwXoFlG~hO/s-l1600.webp",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748604346/mtnmhjy8xp60n9ccfufy.mp4"
    )
  },
  {
    id: 18,
    name: "QUIKSILVER Men's PORTER Snow Pants",
    Desc: "Stay warm and dry with the QUIKSILVER Men's PORTER Snow Pants, designed for ultimate performance in cold conditions. Crafted with waterproof fabric, they keep you protected from snow and moisture. The lightweight insulation provides comfort without adding bulk, while the adjustable waist ensures a perfect fit. Ideal for skiing, snowboarding, or any winter activity, these pants offer both style and function for your snowy adventures.",
    category: "Men's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748676550/bhqzzjf6ddxkry5dchez.png"
    ),
    availableColors: ["#7a9a79", "#000000"], //green-400, black
    After_Discount: 129,
    Pre_Discount: 219,
    quantity: "In Stock",
    imgHover: "https://i.ebayimg.com/images/g/CasAAOSwgJpiFT-u/s-l1600.webp",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748686149/edmrlsfpsqymcpb4pcdt.mp4"
    )
  },
  {
    id: 19,
    name: "Hugo Boss T-shirt For mens",
    Desc: "Elevate your everyday style with the Hugo Boss T-shirt for Men, a perfect blend of comfort and sophistication. Made from soft, breathable cotton, this tee ensures all-day comfort with a premium feel. The sleek design is finished with the iconic BOSS logo, adding a touch of modern class. Whether you're dressing it down for a casual day out or layering it for a more polished look, this T-shirt delivers effortless style with a refined edge.",
    category: "Men's T-shirts",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578253/pgq3bnum3ne8833vlv9a.png"
    ),
    availableColors: ["#000000", "#FFFFFF", "#D1D5DB"], // black, white, gray-400
    After_Discount: 49,
    Pre_Discount: 69,
    quantity: "In Stock",
    imgHover: "https://i.ebayimg.com/images/g/FAcAAOSwXGln9SiC/s-l1600.webp",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748685985/ntgwavemflk0yygixah6.mp4"
    )
  },
  {
    id: 20,
    name: "Security Polo T-Shirt Men High-Quality Uniform Workwear Short Sleeve Black",
    Desc: "Elevate your team’s look with the Security Polo T-Shirt for Men — a perfect blend of comfort, durability, and sharp style. Crafted from premium fabric, this black short-sleeve polo is designed to keep you cool and professional through demanding shifts. Ideal for security personnel, uniformed teams, and anyone seeking dependable, smart-looking workwear.",
    category: "Men's T-shirts",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578424/bwcj2busn1snntni9hsp.png"
    ),
    availableColors: ["#000000", "#FFFFFF"], // black, white
    After_Discount: 29,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover: "https://images.puma.net/images/677463/01/bv/fnd/PNA/.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748666361/q9zagtwkhv1mlpb4xv73.mp4"
    )
  },
  {
    id: 21,
    name: "High Quality RGB Light Gaming Mouse",
    Desc: "High Quality RGB Light Gaming Mouse – Precision Meets Style. Unleash next-level performance with the High Quality RGB Light Gaming Mouse — your ultimate weapon for victory. Designed for hardcore gamers and creative warriors alike, this mouse brings together pinpoint accuracy, ergonomic comfort, and breathtaking RGB lighting that turns every desk into a battlestation.",
    category: "Electronics",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578242/elnwdewrohtw1udv6471.png"
    ),
    availableColors: ["#00FFFF", "#FF073A"], // blue, red
    After_Discount: 15,
    Pre_Discount: 25,
    quantity: "In Stock",
    imgHover:
      "https://s.alicdn.com/@sc04/kf/H32e8a6229e8e4559ba8b79ed739d930dY.jpg_720x720q50.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748602389/qfqjqgm0ez5yrpzifoon.mp4"
    )
  },
  {
    id: 22,
    name: "High Quality RGB Light Gaming Keyboard",
    Desc: "High Quality RGB Light Gaming Keyboard – Dominate with Precision & Power. Step into the arena with the High Quality RGB Light Gaming Keyboard — engineered for elite performance and built to impress. Whether you're raiding dungeons, crushing leaderboards, or coding the future, this keyboard delivers lightning-fast response, all-day comfort, and vivid RGB brilliance that transforms your setup into a next-gen control hub.",
    category: "Electronics",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578237/jookhosmllc37b21v2ni.png"
    ),
    availableColors: ["#000000"], // Black
    After_Discount: 40,
    Pre_Discount: 55,
    quantity: "In Stock",
    imgHover:
      "https://cdn.shopify.com/s/files/1/0601/4369/8116/products/keyboard_3802x2534_crop_center.png?v=1653499584",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748635240/pfemksifiusqkdwxu2wf.mp4"
    )
  },
  {
    id: 23,
    name: "Apple iMac 21.5 4K Retina 2017",
    Desc: "Apple iMac 21.5 4K Retina (2017) – Power Meets Elegance Experience stunning performance and sleek design with the Apple iMac 21.5-inch 4K Retina Display (2017) — perfect for creatives, professionals, and everyday users who demand clarity, speed, and reliability.",
    category: "Electronics",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578105/xzsx5wgwculxniaavoc3.png"
    ),
    availableColors: ["#D3D3D3"], // Silver
    After_Discount: 999,
    Pre_Discount: 1100,
    quantity: "In Stock",
    imgHover:
      "https://www.australiancomputertraders.com.au/assets/alt_1/iMac21.52017i52-r.jpg?20240521050908",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748688298/xi5ucsy1b9joqekj26pt.mp4"
    )
  },
  {
    id: 24,
    name: "SanDisk Cruzer Blade – Trusted Storage in Your Pocket",
    Desc: "Apple iMac 21.5 4K Retina (2017) – Power Meets Elegance Experience stunning performance and sleek design with the Apple iMac 21.5-inch 4K Retina Display (2017) — perfect for creatives, professionals, and everyday users who demand clarity, speed, and reliability.",
    category: "Electronics",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578416/eqrsekdyya7mj0na35rl.png"
    ),
    availableColors: ["#000000", "#FF0000"], // Black, Red
    After_Discount: 10,
    Pre_Discount: 13,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71a48sSdYqL._AC_SL1500_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748687696/nnqxxthtuaihshwyprmh.mp4"
    )
  },
  {
    id: 25,
    name: "HUAWEI WATCH FIT 3 Smartwatch",
    Desc: "Stay ahead in fitness, fashion, and functionality with the HUAWEI WATCH FIT 3 — a sleek, lightweight smartwatch that combines bold design with next-gen health tracking and all-day battery life. Whether you're hitting the gym, running errands, or taking calls, this watch keeps up with your hustle.",
    category: "Electronics",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578247/net0zmdrvhh35jefeqgs.png"
    ),
    availableColors: ["#FAFAFA", "#90EE90", "#000000"], // Moon White, Light Green, Black
    After_Discount: 449,
    Pre_Discount: 500,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71a48sSdYqL._AC_SL1500_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748687321/w5atuikaxc2mr1otmytj.mp4"
    )
  },
  {
    id: 26,
    name: "iPhone 14 Pro - Second Hand Phones",
    Desc: "iPhone 14 Pro – Unleash Premium Performance in Every Touch Discover the power and elegance of the iPhone 14 Pro — now available as a second-hand phone, offering the same cutting-edge features and sophisticated design at a fraction of the price. With its stunning 6.1-inch Super Retina XDR display, ultra-fast performance, and incredible camera system, the iPhone 14 Pro is your gateway to seamless technology without compromise.",
    category: "Electronics",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578264/yvkydyemihqzkjtirkts.png"
    ),
    availableColors: ["#4B2C7F", "#C0C0C0", "#87CEFA"], // Deep Purple, Light Green, Sky Blue
    After_Discount: 599,
    Pre_Discount: 650,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71a48sSdYqL._AC_SL1500_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748609254/vdnglwcy8xchberirmnm.mp4"
    )
  },
  {
    id: 27,
    name: "HOOVER Washer Fully Automatic",
    Desc: "HOOVER Fully Automatic Washer – Powerful Cleaning, Hassle-Free Living Upgrade your laundry game with the HOOVER Fully Automatic Washing Machine, engineered to deliver deep cleaning with zero effort. Whether you're washing daily loads or handling tough stains, HOOVER combines smart technology, powerful performance, and elegant design to make your laundry routine smoother and smarter.",
    category: "Home Appliances",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578242/w4rggkqwp7qdavh3snbj.png"
    ),
    availableColors: ["#000000", "#A5A29E"], // Black, Morandi Grey
    After_Discount: 550,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71c9LzNoNRL._AC_SL1500_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748688753/dvf4a8byyslbbictmojy.mp4"
    )
  },
  {
    id: 28,
    name: "Unionaire iCook Smart Stainless Steel Cooker",
    Desc: "Unionaire iCook Smart Cooker – Precision Meets Power in the Heart of Your Kitchen Cook like a pro with the Unionaire iCook Smart Cooker, crafted from premium stainless steel and loaded with smart features that bring flavor, control, and elegance to your kitchen. Whether you're searing, simmering, or slow cooking, this cooker delivers consistent performance, sleek design, and next-gen functionality for modern chefs.",
    category: "Home Appliances",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578458/nlqwj6aspvqodznvwbzh.png"
    ),
    availableColors: ["#000000", "#C0C0C0"], // Black, Silver
    After_Discount: 499,
    Pre_Discount: 540,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71CfEmmoeBL._AC_SL1500_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748671605/hfa32y9vp5wf9ibuhslz.mp4"
    )
  },
  {
    id: 29,
    name: "Electric Oven with Timer & Temp Control – 1800W Multi-Use",
    Desc: "Multi-Use Electric Oven – Cook Smarter, Faster, Tastier! Simplify your kitchen routine with this powerful 1800W Electric Oven, designed for versatility and precision. Whether you're baking, grilling, toasting, or reheating, this oven gives you full control with adjustable temperature settings from 65°C to 230°C and a built-in timer for perfect results every time.",
    category: "Home Appliances",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578200/lpj145lazf47l5j75lv3.png"
    ),
    availableColors: ["#000000", "#C0C0C0"], // Black, Silver
    After_Discount: 149,
    Pre_Discount: 200,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71CfEmmoeBL._AC_SL1500_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748581656/vrk0groq8tpgoftrwmuf.mp4"
    )
  },
  {
    id: 30,
    name: "Espresso Machine – Barista-Style Coffee",
    Desc: "Espresso Maker – Barista Vibes at Home Start every day with a bold shot of café-quality espresso — right from your kitchen. This Espresso Maker is designed to give you the rich flavor, smooth crema, and powerful aroma you love, all in a compact and stylish design that fits any countertop.",
    category: "Home Appliances",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578207/tbtcypke2x7pk3wt79ab.png"
    ),
    availableColors: ["#000000", "#C0C0C0"], // Black, Silver
    After_Discount: 149,
    Pre_Discount: 200,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71CfEmmoeBL._AC_SL1500_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748581293/blerynqehg1v7tjkljvb.mp4"
    )
  },
  {
    id: 31,
    name: "Nutricook 2 Slice Smart Toaster with Touch Screen",
    Desc: "Nutricook Smart Toaster – The Future of Toasting is Here! Upgrade your breakfast game with the Nutricook 2 Slice Smart Toaster, featuring a sleek touch screen interface and intelligent browning controls for the perfect toast every time. Whether you like it lightly golden or extra crispy, this toaster delivers precision, style, and smart performance all in one.",
    category: "Home Appliances",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578375/homibnxjosr0q24upxkt.png"
    ),
    availableColors: ["#C0C0C0", "#000000"], // Silver, Black
    After_Discount: 75,
    Pre_Discount: 85,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/61E8aCWunEL._AC_SL1500_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748689358/luz6fh5wgriwbqjedmws.mp4"
    )
  },
  {
    id: 32,
    name: "Versuni Philips steam iron",
    Desc: "Versuni Philips Steam Iron – Power, Precision & Effortless Glide Say goodbye to wrinkles and hello to flawless fabrics with the Versuni Philips Steam Iron. Engineered for speed and comfort, this iron combines powerful steam performance with smooth glide technology to make ironing faster, easier, and more effective than ever.",
    category: "Home Appliances",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578458/zbsmhxqzb7rxwxcdzyc7.png"
    ),
    availableColors: ["#000000", "#6FB7D6"], // Black, Sky Blue
    After_Discount: 149,
    Pre_Discount: 190,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71op3ATU5JL._AC_SL1500_.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748666728/rekxo9lsbjzoo9wixeck.mp4"
    )
  },
  {
    id: 33,
    name: "Relaxed Fit T-Shirt",
    Desc: "Stay effortlessly cool and comfortable with our Relaxed Fit T-Shirt — where casual meets refined. Crafted from soft, breathable cotton, this tee features a loose silhouette that drapes naturally for all-day ease. Whether you're layering it up or rocking it solo, its laid-back vibe and clean lines make it a versatile essential for any wardrobe. Pre-shrunk and built to last, it's the go-to choice for everyday wear, weekend lounging, or street-ready style.",
    category: "Men's T-shirts",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578404/ryjgm5f7wsv1d5tk21pi.png"
    ),
    availableColors: ["#B22222", "#000000"], // Maroon, Black
    After_Discount: 39,
    Pre_Discount: 45,
    quantity: "In Stock",
    imgHover:
      "https://mobaco.com/wp-content/uploads/2025/01/ST427_0198_2-640x640.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748665898/rqmrqqwfnlrrrztzysky.mp4"
    )
  },
  {
    id: 34,
    name: "Relaxed Fit Pique & Jersey T-Shirt",
    Desc: "Elevate your everyday style with this Relaxed Fit Piqué & Jersey T-Shirt — a perfect blend of comfort and texture. Designed with a soft jersey back and breathable piqué front, this tee offers a unique contrast in feel and function. The relaxed silhouette ensures freedom of movement, while the fabric mix gives it a refined yet laid-back edge. Ideal for both casual outings and smart-casual layering, this piece bridges the gap between sporty and polished with effortless cool.",
    category: "Men's T-shirts",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578408/znwwqllr17weq0gocrfe.png"
    ),
    availableColors: ["#FFA500", "#90EE90", "#D3D3D3"], // Orange, Light Green, Light Gray
    After_Discount: 24.5,
    Pre_Discount: 30,
    quantity: "In Stock",
    imgHover:
      "https://mobaco.com/wp-content/uploads/2025/02/ST387_0126_2-768x768.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748691378/opflyhnoe6vnoy9dnhus.mp4"
    )
  },
  {
    id: 35,
    name: "Relaxed Fit Cotton T-Shirt",
    Desc: "Keep it classic and effortlessly cool with our Relaxed Fit Cotton T-Shirt. Made from 100% soft, breathable cotton, this tee delivers ultimate comfort with a laid-back silhouette that moves with you. Whether you’re out and about or just kicking back, its timeless design, durable stitching, and versatile vibe make it a go-to piece for any casual rotation. Easy to wear, easy to style — it’s your everyday essential, upgraded.",
    category: "Men's T-shirts",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578405/ktsbk6ot35pmlkle5zpt.png"
    ),
    availableColors: ["#D9A799", "#D3D3D3"], // Rose Beige, Light Gray
    After_Discount: 15,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2025/02/ST420_0447_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748665898/rqmrqqwfnlrrrztzysky.mp4"
    )
  },
  {
    id: 36,
    name: "CEBE Classic Fit Linen Shirt",
    Desc: "Elevate your casual wardrobe with the CEBE Classic Fit Linen Shirt. Crafted from high-quality, breathable linen, this shirt offers the perfect blend of comfort and sophistication. The classic fit provides a relaxed yet tailored silhouette, making it an ideal choice for both warm weather and stylish layering.",
    category: "Men's T-shirts",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578149/hwtr8danwxl2w8nhu66m.png"
    ),
    availableColors: ["#000080", "#FFFFFF"], // Navy Blue, White
    After_Discount: 99,
    Pre_Discount: 120,
    quantity: "In Stock",
    imgHover:
      "https://mobaco.com/wp-content/uploads/2022/03/CEBE-LIN_0591_FIT1.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748697677/qnkl5lkvft02jmun57xt.mp4"
    )
  },
  {
    id: 37,
    name: "Brushed French Terry Basic T-shirt",
    Desc: "Crafted from soft, brushed French terry fabric, this basic T-shirt delivers a luxurious feel with a casual look. Designed for everyday wear, it offers a relaxed fit that moves with you, while the lightly brushed interior adds warmth and comfort without bulk.",
    category: "Men's T-shirts",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578106/arsuyjm2gldaw6aelgam.png"
    ),
    availableColors: ["#C8AFC8", "#C8DDB2"], // Light Purple, Light Green
    After_Discount: 45,
    Pre_Discount: 50,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2024/11/SW236_0824_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748579998/e1uhexme7acqsks1s1p0.mp4"
    )
  },
  {
    id: 38,
    name: "Sleeveless Interlock Top",
    Desc: "Sleeveless Interlock Top – Sleek. Soft. Effortless. Elevate your basics with this sleeveless interlock top, crafted from ultra-smooth, double-knit fabric that feels as good as it looks. Designed for a clean, structured silhouette, the interlock construction offers gentle stretch, exceptional softness, and a polished finish that flatters every shape. Whether layered or worn solo, it’s your new essential for modern minimalism and all-day ease.",
    category: "Women's Tops",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578435/w7miwb7sjrsise3ahuuz.png"
    ),
    availableColors: ["#000000", "#FF7F7F", "#C0C0C0"], // Black, Light Red, Light Gray
    After_Discount: 29,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://mobaco.com/wp-content/uploads/2025/04/LW374_0020_2-768x768.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748664017/h8l0mv9sf6gyiidyrj9s.mp4"
    )
  },
  {
    id: 39,
    name: "Stretch Jersey V-Neck T-Shirt",
    Desc: "Stretch Jersey V-Neck T-Shirt – Flex Your Style. Own the Comfort. Crafted from soft stretch jersey fabric, this V-neck T-shirt is all about movement, fit, and effortless cool. The slim yet flexible cut hugs your shape without clinging, giving you that clean silhouette with total freedom. Whether you're layering it up or keeping it solo, this tee is made to keep up—at the gym, on the go, or just chillin'.",
    category: "Women's Tops",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578449/dpdnhmc1xra4yn02wsln.png"
    ),
    availableColors: ["#33A1A1", "#1560BD"], // Light Green, Blue
    After_Discount: 49,
    Pre_Discount: 55,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2024/10/LT330_0390_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748754939/iw0ykogka9fhtvezg4ns.mp4"
    )
  },
  {
    id: 40,
    name: "Round Neck Cotton Slub T-Shirt",
    Desc: "Round Neck Cotton Slub T-Shirt – Textured. Timeless. Totally You. This isn’t your average basic tee. Made from 100% cotton slub fabric, this round neck T-shirt brings natural texture and a laid-back vibe to your everyday look. The irregular weave gives it a slightly heathered, vintage feel, while the breathable cotton keeps you cool and comfy all day. Perfect for pairing with jeans, joggers, or layering under a jacket—effortlessly casual, always on point.",
    category: "Women's Tops",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578415/mcvqoostf8azxiczhpbh.png"
    ),
    availableColors: ["#000000", "#EDE8C7"], // Black, Light Beige
    After_Discount: 35,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2024/11/LT650_0020_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748700392/y0t77pkffdjwsy2uckq2.mp4"
    )
  },
  {
    id: 41,
    name: "Oversized Cotton Printed Shirt",
    Desc: "Oversized Cotton Printed Shirt – Bold Comfort. Effortless Cool. Step into laid-back style with this oversized cotton shirt, featuring statement prints that do all the talking. Made from breathable, premium cotton, it delivers a relaxed silhouette that blends streetwear attitude with all-day comfort. Whether layered or worn solo, it's your go-to for standout casual looks.",
    category: "Women's Tops",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578379/gvb2sxlsljaa82acth9t.png"
    ),
    availableColors: ["#FFC0CB", "#D9F7D9"], // Light Pink, Light Green
    After_Discount: 69,
    Pre_Discount: 75,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2024/10/LL628_0103_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748632047/wcr9nuvle8pfsaefu2o6.mp4"
    )
  },
  {
    id: 42,
    name: "Oversized Cotton Shirt",
    Desc: "An Oversized Cotton Shirt is a loose-fitting shirt made from soft, breathable cotton fabric. Its relaxed fit offers comfort and freedom of movement, making it perfect for casual wear. The cotton material ensures it's soft against the skin and keeps you cool. It's designed to give off a trendy, laid-back vibe, and can be paired with jeans, shorts, or leggings for a stylish yet comfortable look.",
    category: "Women's Tops",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578388/z0mwdor1a0oki8hvigfl.png"
    ),
    availableColors: ["#9C835F", "#FFFFFF"], // Muted Caramel, White
    After_Discount: 65,
    Pre_Discount: 70,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2024/11/LL627_0377_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748635347/zekymmpe4ds3smn4dxbo.mp4"
    )
  },
  {
    id: 43,
    name: "Classic Fit Long Sleeves Linen Shirt",
    Desc: "A Classic Fit Long Sleeves Linen Shirt is a timeless wardrobe staple designed for comfort and versatility. Made from breathable, lightweight linen fabric, it features a traditional silhouette with a relaxed fit through the chest and sleeves, providing ease of movement without appearing too loose. The long sleeves offer a polished look, making it suitable for both casual and semi-formal settings. This shirt is ideal for warm weather due to linen's natural moisture-wicking properties and is often styled tucked or untucked with chinos, jeans, or tailored shorts.",
    category: "Women's Tops",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578136/ltrezwlkobqs3wbbainr.png"
    ),
    availableColors: ["#A9A9A9", "#FFA07A"], // Light Gray, Light Orange
    After_Discount: 89,
    Pre_Discount: 95,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2024/11/LL627_0377_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748593350/elahyu5cs3z9yidzuwqj.mp4"
    )
  },
  {
    id: 44,
    name: "Sanders Linen Pants with Elastic Waist",
    Desc: "Sanders Linen Pants with Elastic Waist are the perfect blend of laid-back comfort and refined style. Crafted from lightweight, breathable linen, these pants are designed for all-day wear in warm climates. The elastic waistband offers a flexible, relaxed fit while maintaining a clean, modern silhouette. Ideal for casual outings, beach days, or even smart-casual events when paired with a button-down shirt, these pants provide effortless elegance with minimal effort.",
    category: "Men's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578433/eejvapxotmudtoo8de0n.png"
    ),
    availableColors: ["#000080", "#A9A9A9"], // Navy Blue, Light Gray
    After_Discount: 35,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://mobaco.com/wp-content/uploads/2021/04/SANDERS-LIN_0579_2-768x768.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748768573/wcaimiv5yv43zqvjbdc1.mp4"
    )
  },
  {
    id: 45,
    name: "Straight Fit High Waist Denim Pants For Men",
    Desc: "The Straight Fit High Waist Denim Pants For Men offer a classic and flattering silhouette, combining the timeless style of straight-leg jeans with the elegance of a high waist. Made from durable denim, these pants provide comfort and structure, with a slightly relaxed fit through the thighs that tapers down to the ankle. The high waist creates a longer, more defined look, accentuating the natural shape of the waist while offering a slimming effect.",
    category: "Men's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578436/txqgkugmddrivqbghb8n.png"
    ),
    availableColors: ["#4A6D94"], // Denim Blue
    After_Discount: 105,
    Pre_Discount: 115,
    quantity: "In Stock",
    imgHover:
      "https://mobaco.com/wp-content/uploads/2024/12/SJ054_917B_2-768x768.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748671559/rpyirkraskm1rvl0rz0k.mp4"
    )
  },
  {
    id: 46,
    name: "Dubler Slim Fit Denim",
    Desc: "The Dubler Slim Fit Denim offers a sleek and contemporary look, perfect for a modern, stylish wardrobe. Crafted from high-quality denim, these jeans feature a slim, tailored fit that hugs the legs for a sharp, streamlined silhouette. The slightly tapered design through the ankle enhances the overall slim fit, making them ideal for pairing with both casual and semi-formal outfits. The durable fabric ensures comfort while maintaining its shape throughout the day.",
    category: "Men's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578194/hwmzic4frsoumpmwzxli.png"
    ),
    availableColors: ["#757575"], // Charcoal Black
    After_Discount: 80,
    Pre_Discount: 90,
    quantity: "Out Of Stock",
    imgHover:
      "https://mobaco.com/wp-content/uploads/2025/01/DUBLER-955-DNM_955F_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748779256/rfk0uh1wlw9n9aftya2s.mp4"
    )
  },
  {
    id: 47,
    name: "Regular Fit Twill Cargo Pants With Elastic Waist",
    Desc: "The Regular Fit Twill Cargo Pants with Elastic Waist combine comfort, practicality, and style in one versatile piece. Made from durable twill fabric, these pants offer a relaxed fit with ample room through the thighs and legs, providing freedom of movement. The elastic waistband ensures a snug, adjustable fit for all-day comfort. With multiple functional pockets, including side cargo pockets, these pants are designed to carry your essentials while giving you a laid-back, utilitarian look.",
    category: "Men's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578395/xvc3kdetojszzjzczvzv.png"
    ),
    availableColors: ["#000000"], // Black
    After_Discount: 20,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://mobaco.com/wp-content/uploads/2025/01/DUBLER-955-DNM_955F_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748632147/wq8bsq4xdmgiw6hsqyma.mp4"
    )
  },
  {
    id: 48,
    name: "Denim Jogger",
    Desc: "The Denim Jogger is a modern fusion of streetwear comfort and classic denim style. Designed with a relaxed fit and tapered leg, it offers the laid-back ease of joggers while retaining the rugged appeal of jeans. Made from soft, stretchable denim, it features an elastic waistband with a drawstring for a customized fit, along with elastic cuffs at the ankles for a sporty silhouette.",
    category: "Men's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578187/pzkqlx2vzi9kr136ypac.png"
    ),
    availableColors: ["#4C4C4C"], // Dark Gray
    After_Discount: 50,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2022/12/SJ111_950F_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748779892/fi5pcaj6eoa9zjrildjw.mp4"
    )
  },
  {
    id: 49,
    name: "Poplin Pants For Women",
    Desc: "Poplin Pants for Women combine lightweight comfort with a refined, tailored look. Crafted from smooth, breathable poplin fabric, these pants offer a crisp finish that drapes beautifully and feels soft against the skin. Designed for everyday elegance, they typically feature a mid-to-high waist, a relaxed or tapered leg, and minimal detailing, making them perfect for both casual and semi-formal wear.",
    category: "Women's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578386/a6ta421ci5nfiyhk7leg.png"
    ),
    availableColors: ["#000000", "#FFA07A"], // Black, Light Orange
    After_Discount: 89,
    Pre_Discount: 100,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2025/04/LU210_0020_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748780984/gyg5q09d9plxrtnpx3vn.mp4"
    )
  },
  {
    id: 50,
    name: "Crisp Comfort Trousers",
    Desc: "Crisp Comfort Trousers deliver the perfect balance between structure and softness. Tailored for a flattering fit, these trousers are crafted from lightweight, breathable fabric with a smooth, crisp finish. The design offers all-day comfort without sacrificing style—ideal for workdays, weekends, and everything in between. With clean lines and a versatile silhouette, they’re a wardrobe essential for modern women seeking effortless sophistication.",
    category: "Women's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578176/kvhg5nvbsdtaymr607h3.png"
    ),
    availableColors: ["#C4D0A2", "#BFB987"], // Light Green, Light Beige
    After_Discount: 119,
    Pre_Discount: 130,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2025/03/LU210_0336_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748591180/dounwgmdazmnizbmt2np.mp4"
    )
  },
  {
    id: 51,
    name: "Straight Fit High Waist Denim Pants For Women",
    Desc: "Straight Fit High Waist Denim Pants For Women deliver the perfect balance between structure and softness. Tailored for a flattering fit, these trousers are crafted from lightweight, breathable fabric with a smooth, crisp finish. The design offers all-day comfort without sacrificing style—ideal for workdays, weekends, and everything in between. With clean lines and a versatile silhouette, they’re a wardrobe essential for modern women seeking effortless sophistication.",
    category: "Women's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578451/o0zuj6lweg5nlu7djm1u.png"
    ),
    availableColors: ["#3B5878"], // Denim Blue
    After_Discount: 45,
    Pre_Discount: 50,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2025/03/LU210_0336_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748671559/rpyirkraskm1rvl0rz0k.mp4"
    )
  },
  {
    id: 52,
    name: "Straight Fit High Waist Twill Pants",
    Desc: "Step into timeless elegance with our Straight Fit High Waist Twill Pants — the perfect blend of structure and comfort. Featuring a flattering high-rise waist and a clean straight-leg cut, these pants are crafted from durable, soft-touch twill fabric for a sophisticated look that moves with you.",
    category: "Women's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578433/uqmkjj4nrhse0bd37vlu.png"
    ),
    availableColors: ["#F8FBFD", "#000000"], // Whisper Blue, Black
    After_Discount: 75,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://mobaco.com/wp-content/uploads/2025/02/LJ112-GAB_0070_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748670137/lb4nttcvjkggl25zbjb7.mp4"
    )
  },
  {
    id: 53,
    name: "Stretch Jersey Leggings",
    Desc: "Embrace comfort and style with Stretch Jersey Leggings, the perfect choice for both relaxation and fashion. Crafted from stretchy jersey fabric, these leggings offer high flexibility, ensuring freedom of movement and all-day comfort. Designed to hug the body, they provide a sleek and chic look, making them ideal for workouts or everyday wear.",
    category: "Women's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578443/vjxxwbsjlomak9mnfuno.png"
    ),
    availableColors: ["#000000"], // Black
    After_Discount: 50,
    Pre_Discount: 55,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2025/03/LW356_0593_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748784647/wtuaipcyu09xz9nnwrrd.mp4"
    )
  },
  {
    id: 54,
    name: "Stretch Jersey Wide Leg Leggings",
    Desc: "Experience ultimate comfort and style with the Stretch Jersey Wide Leg Leggings. Designed with a loose, relaxed fit, these leggings are perfect for those who crave both flexibility and a trendy look. Made from stretchy jersey fabric, they offer excellent stretch and breathability, allowing you to move freely while staying chic. Ideal for casual days, lounging, or layering over workout gear.",
    category: "Women's Pants",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578451/v9qaiuxq3tqlo7sjw8qp.png"
    ),
    availableColors: ["#660000", "#000000"], // Dark Red, Black
    After_Discount: 40,
    Pre_Discount: 45,
    quantity: "In Stock",
    imgHover: "https://mobaco.com/wp-content/uploads/2025/01/LW370_0191_2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748785443/vztg8yui1f04zvpmsoj9.mp4"
    )
  },
  {
    id: 55,
    name: "Small Tote Bag",
    Desc: "A compact and stylish tote bag, perfect for daily essentials. Made from durable materials with sturdy handles, it’s ideal for quick errands, casual outings, or a light day at work. Lightweight, easy to carry, and available in a variety of colors to match your vibe.",
    category: "Women's Bags",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578434/hfs9yp54jm4e2jthcvjt.png"
    ),
    availableColors: ["#660000"], // Dark Red
    After_Discount: 105,
    Pre_Discount: 115,
    quantity: "In Stock",
    imgHover:
      "https://mobaco.com/wp-content/uploads/2022/12/LA130_0173_2-768x768.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748787705/ue5y499amkjskdyamnkl.mp4"
    )
  },
  {
    id: 56,
    name: "Gucci Jackie 1961 Small Leather Shoulder Bag",
    Desc: "A timeless icon reimagined — the Gucci Jackie 1961 Small Leather Shoulder Bag blends vintage charm with modern sophistication. Crafted from premium leather, it features the signature piston closure, sleek curves, and a versatile silhouette. Perfect for day-to-night styling, this bag brings a touch of heritage elegance to any outfit.",
    category: "Women's Bags",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578215/hc1nsf2fq9gilllsybpy.png"
    ),
    availableColors: ["#660000"], // Dark Red
    After_Discount: 350,
    Pre_Discount: 400,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/bc/P00979395_d2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748788070/iuxkypw5iqdxgjh3xxq5.mp4"
    )
  },
  {
    id: 57,
    name: "Khaki Escape Bag",
    Desc: "Designed for the free spirit, the Khaki Escape Bag combines rugged style with everyday functionality. Made from durable fabric in a versatile khaki shade, it’s ideal for weekend getaways, gym runs, or daily carry. Spacious, lightweight, and built to move with you — your go-to companion for spontaneous escapes.",
    category: "Women's Bags",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578262/lqjxmdkkjz7grxicfxrl.png"
    ),
    availableColors: ["#4A402D"], // Dark Khaki
    After_Discount: 299,
    Pre_Discount: 350,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/bc/P00979395_d2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748789122/vijghaxvkyjjrp6bprjj.mp4"
    )
  },
  {
    id: 58,
    name: "Dior Mini Saddle Bag",
    Desc: "A fashion icon in compact form — the Dior Mini Saddle Bag brings elegance and edge in one signature silhouette. Crafted from premium materials with the iconic 'D' stirrup magnetic clasp and saddle curves, this mini bag redefines statement luxury. Perfect for carrying just the essentials with bold Parisian flair.",
    category: "Women's Bags",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578193/rwanwpeqiu2dkwiaxmil.png"
    ),
    availableColors: ["#3D0C57", "#8B0000"], // Deep Purple, Dark Red
    After_Discount: 2200,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover: "https://is4.revolveassets.com/images/p4/n/z/FNEF-WY5845_V4.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748789350/mi1ifqdhtoontor05fxk.mp4"
    )
  },
  {
    id: 59,
    name: "Gucci Raffia Jackie 1961 Hobo Bag",
    Desc: "A fresh twist on a timeless icon — the Gucci Raffia Jackie 1961 Hobo Bag blends vintage sophistication with breezy, modern flair. Handcrafted in natural raffia with signature leather trim and the iconic piston closure, this bag offers effortless elegance with a laid-back edge. Lightweight yet luxurious, it’s your perfect companion for sunny days and upscale escapes.",
    category: "Women's Bags",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578230/tletmvrbkx32bezbo2b5.png"
    ),
    availableColors: ["#1B0032"], // Dark Violet
    After_Discount: 1499,
    Pre_Discount: 1600,
    quantity: "In Stock",
    imgHover: "https://is4.revolveassets.com/images/p4/n/z/FNEF-WY5845_V4.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748609349/m55zjgioexmgtrn9jnyz.mp4"
    )
  },
  {
    id: 60,
    name: "Valentino Garavani VSling Mini Shoulder Bag – Iconic Luxury",
    Desc: "Elevate your style with Valentino Garavani's “VSLING” mini shoulder bag, adorned with dazzling rhinestones and VLogo Signature closure. Versatile and chic, it can be worn as a crossbody, shoulder bag, or carried by hand using the top handle.",
    category: "Women's Bags",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578465/wu5tq6px7nfnr1l0bvs6.png"
    ),
    availableColors: ["#C0C0C0"], // Silver
    After_Discount: 3780,
    Pre_Discount: 4000,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/ee/P00839042_d1.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748790314/tqwkvvg12bldqwpf2uto.mp4"
    )
  },
  {
    id: 61,
    name: "Gucci Horsebit GG Canvas Slingback Pumps",
    Desc: "The Gucci Horsebit GG Canvas Slingback Pumps are a perfect blend of classic elegance and contemporary style. Crafted from the iconic GG canvas, these pumps feature a beige and brown design with leather accents, offering a sophisticated and luxurious look. The signature horsebit detail in gold-tone metal adds a touch of opulence to the overall aesthetic.",
    category: "Women's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578208/ntxvuejitpizvvduvltm.png"
    ),
    availableColors: ["#C1A78F"], // Light Copper
    After_Discount: 649,
    Pre_Discount: 700,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/41/P00938059_d1.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748791126/eawr6kzv7usbchrk8v36.mp4"
    )
  },
  {
    id: 62,
    name: "Aquazzura Crystal Crush Satin Slingback Pumps",
    Desc: "The Aquazzura Crystal Crush Satin Slingback Pumps are a glamorous and elegant pair of heels, featuring luxurious satin fabric and sparkling crystal embellishments. These pumps are designed to add a touch of sophistication and sparkle to any outfit. Perfect for formal events or evening wear, the crystal details create an eye-catching effect, while the satin finish gives them a smooth and refined look. The slingback design ensures both comfort and style.",
    category: "Women's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578122/yoc42xm4881xnozfqlch.png"
    ),
    availableColors: ["#000000"], // Black
    After_Discount: 552,
    Pre_Discount: 920,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/65/P00948941_d1.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748791558/ed7hpiufhdypymdnoqb9.mp4"
    )
  },
  {
    id: 63,
    name: "Gucci Re-Motion Suede-Trimmed Sneakers",
    Desc: "Gucci Re-Motion Suede-Trimmed Sneakers offer a refined blend of contemporary design and classic craftsmanship. Constructed using eco-conscious materials, these sneakers feature smooth fabric uppers accented with luxurious suede trims, delivering both style and sustainability. The streamlined silhouette is enhanced with subtle Gucci branding, while the supportive rubber sole ensures day-long comfort and traction.",
    category: "Women's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578226/dvpppuxpliomakdwh4yz.png"
    ),
    availableColors: ["#8B0000"], // Dark Red
    After_Discount: 755,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/123/8/100/8b/P01019223_d1.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748791365/ktbescsyc4x5cmm5szm9.mp4"
    )
  },
  {
    id: 64,
    name: "Prada Brushed Leather Strap Mary Janes",
    Desc: "Prada Brushed Leather Strap Mary Janes offer a refined blend of contemporary design and classic craftsmanship. Constructed using eco-conscious materials, these sneakers feature smooth fabric uppers accented with luxurious suede trims, delivering both style and sustainability. The streamlined silhouette is enhanced with subtle Gucci branding, while the supportive rubber sole ensures day-long comfort and traction.",
    category: "Women's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681981/rdho3vwnuzfv5poijfa9.png"
    ),
    availableColors: ["#000000"], // Black
    After_Discount: 950,
    Pre_Discount: 1000,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/b4/P01004994_d1.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748605185/no81tzwlbleafw4lthax.mp4"
    )
  },
  {
    id: 65,
    name: "Gucci Tennis 1977 Canvas Sneakers",
    Desc: "Gucci Tennis 1977 Canvas Sneakers - Step into heritage and luxury with the Gucci Tennis 1977 canvas sneakers. Blending timeless design with modern streetwear flair, these sneakers feature the iconic GG monogram canvas, contrasted by vintage-inspired web stripes and a durable rubber sole. Crafted in Italy, they offer superior comfort and standout style — a bold nod to Gucci’s athletic archives. Perfect for elevating casual outfits with a touch of classic Italian sophistication.",
    category: "Women's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578231/ch0qiaf87t6e2tlrkua6.png"
    ),
    availableColors: ["#C1A78F"], // Light Copper
    After_Discount: 545,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover: "https://www.mytheresa.com/media/356/402/30/35/P00454447_d2.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748603150/epgocnfouz8ofdxjosjz.mp4"
    )
  },
  {
    id: 66,
    name: "Gucci Jordaan Leather Boots",
    Desc: "Timeless sophistication meets modern edge with the Gucci Jordaan leather boots. Crafted from premium leather, these sleek boots reinterpret the classic equestrian silhouette with a contemporary twist. Featuring the iconic horsebit detail and a streamlined design, they deliver understated luxury and all-day comfort. Whether you're dressing up for a formal occasion or elevating your everyday look, the Jordaan boots are a wardrobe staple that speaks fluent style.",
    category: "Women's Shoes",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578242/wlma7ffecsep06vfqsdv.png"
    ),
    availableColors: ["#000000"], // Light Copper
    After_Discount: 1255,
    Pre_Discount: 1300,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/6b/P01019207_d1.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748631697/eqasqbmmmncyrejfmnz2.mp4"
    )
  },
  {
    id: 67,
    name: "Kids Boys Summer Shorts Set Short Sleeve Striped Top Pant Casual Outfits 0-4T",
    Desc: "This Kids Boys Summer Shorts Set is the perfect casual outfit for little ones during warm weather. It includes a short-sleeve, striped top paired with comfortable shorts, making it a great combination for both playtime and outings. The set is designed for boys aged 0-4T, ensuring a comfortable and breathable fit for Kidss. The vibrant stripes on the top add a fun and stylish touch, while the shorts provide ease of movement. Ideal for casual summer days, this set is a must-have for your Kids's wardrobe.",
    category: "Kids Clothing",
    subCategory: "Kids Boys",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578273/rmujgxnqaesbzy6dpbfw.png"
    ),
    availableColors: ["#4C8C8C", "#5C8DAD", "#8A3324"], // Teal, Baby Blue, Burnt Umber
    After_Discount: 25,
    Pre_Discount: 30,
    quantity: "In Stock",
    imgHover: "https://i.ebayimg.com/images/g/Vh0AAOSw-Exn26wo/s-l1600.webp",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748796983/t3ffe0i6tzjkbhkkpitn.mp4"
    )
  },
  {
    id: 68,
    name: "Baby And Kids Boys Print Poplin Button Up Shirt",
    Desc: "Add a pop of playful style to your little one’s wardrobe with this Baby and Kids Boys Print Poplin Button-Up Shirt. Crafted from soft, breathable poplin cotton, this shirt keeps him comfy all day long — whether it’s a family outing, photo day, or just playtime in style. Featuring a charming all-over print, short sleeves, and a classic button-up front, it's designed for easy dressing and endless cuteness. Perfect for layering or wearing solo, this shirt brings fun and functionality together in one smart look.",
    category: "Kids Clothing",
    subCategory: "Kids Boys",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578215/wqxglcnmwmt9jo3kjtjx.png"
    ),
    availableColors: ["#000080", "#66FFCC", "#D3D3D3"], // Navy Blue, Mint Aqua, Light Gray
    After_Discount: 12,
    Pre_Discount: 24,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3052279/3052279_IV-1.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748796867/kiyoehztbrhaoxnurtoi.mp4"
    )
  },
  {
    id: 69,
    name: "Kids Girls Floral Bow Back Ruffle Dress",
    Desc: "Let your little fashionista shine in this Kids Girls Floral Bow Back Ruffle Dress — a charming blend of sweetness and style. Designed with delicate floral prints, soft ruffle sleeves, and an adorable bow detail at the back, this dress is perfect for special occasions or everyday twirls. Made from lightweight, breathable fabric to keep her comfy and cool all day long. Whether it's a birthday party or a casual day out, this dress brings picture-perfect vibes with every step.",
    category: "Kids Clothing",
    subCategory: "Kids Girls",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682272/ufvo35ycuh8mtu5jnxpj.png"
    ),
    availableColors: ["#FFC0CB", "#66FFCC"], // Pink, Mint Aqua
    After_Discount: 15,
    Pre_Discount: 24,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3053221/3053221_K6.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748797882/al4hnxbcjijzt6eyu8l4.mp4"
    )
  },
  {
    id: 70,
    name: "Baby And Kids Girls Chambray Pull On Shorts",
    Desc: "Keep your little one comfy and stylish with these Baby and Kids Girls Chambray Pull-On Shorts. Crafted from lightweight, breathable chambray fabric, these shorts feature a soft elastic waistband for easy dressing and all-day comfort. The relaxed fit and classic denim-like look make them perfect for playtime or casual outings.",
    category: "Kids Clothing",
    subCategory: "Kids Girls",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578241/sw0xkbha9vnmjcdt9lxr.png"
    ),
    availableColors: ["#B0D0F0", "#3D5A80"], // Light Denim, Dark Denim
    After_Discount: 10,
    Pre_Discount: 15,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3044460/3044460_330G.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748849476/rhx4jzgw3oeqkoikhyh4.mp4"
    )
  },
  {
    id: 71,
    name: "Baby And Kids Boys Windbreaker Jacket",
    Desc: "Stay stylish and protected with this Baby and Kids Boys Windbreaker Jacket. Designed to shield your little one from the elements, this lightweight jacket is made from wind-resistant fabric, ensuring they stay warm and cozy on breezy days. Featuring a full-zip front, an adjustable hood, and elastic cuffs, it offers both comfort and flexibility. The bright colors and sporty design make it an ideal choice for outdoor adventures or casual outings.",
    category: "Kids Clothing",
    subCategory: "Kids Boys",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578189/a16ztmsats8jtdrdnasj.png"
    ),
    availableColors: ["#000066", "#000000"], // Navy, Black
    After_Discount: 35,
    Pre_Discount: 40,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_plp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3047279/3047279_01.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748804173/gpaonq2bltffzn6wrrq2.mp4"
    )
  },
  {
    id: 72,
    name: "Baby And Kids Boys Pull On Jogger Shorts",
    Desc: "Comfort meets style with these Baby and Kids Boys Pull-On Jogger Shorts. Designed for all-day play, these jogger shorts feature a soft, breathable cotton blend and an easy pull-on waistband with a secure fit. The relaxed cut and sporty look make them perfect for active little explorers. Whether it’s playtime at home or a day out, these shorts offer the freedom to move and the style to stand out.",
    category: "Kids Clothing",
    subCategory: "Kids Boys",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578564/ev9rzotvuvtvivhpj5sl.png"
    ),
    availableColors: ["#D2B48C", "#000080", "#D3D3D3"], // Tan, Navy Blue, Light Gray
    After_Discount: 6.78,
    Pre_Discount: 16.95,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3007377/3007377_FX-3.jpg",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748843671/a6k1dm6f4vzryejxcdur.mp4"
    )
  },
  {
    id: 73,
    name: "Kids Boys Print Slides",
    Desc: "Let your little guy step into comfort and style with these fun printed slides! Made for tiny feet and big adventures, these Kids boys' slides feature playful prints, an easy slip-on design, and a cushioned footbed for all-day comfort. Perfect for beach days, backyard play, or casual outings — these slides are made to move!",
    category: "Kids Shoes",
    subCategory: "Kids Boys",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578336/ncaravjrla7wuwsylwkn.png"
    ),
    availableColors: ["#808000", "#D2B48C"], // Olive, Tan
    After_Discount: 3.45,
    Pre_Discount: 10.45,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3052339/3052339_OG-1.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748843897/jyzhtoqbprxmoytxnkdu.mp4"
    )
  },
  {
    id: 74,
    name: "Kids Girls Colorblock Running Sneakers",
    Desc: "Bright, bold, and built for movement — these colorblock running sneakers are made for Kids girls on the go! Designed with vibrant color combos, a breathable mesh upper, and cushioned sole for all-day play. The easy hook-and-loop closure keeps things secure while your little one runs, jumps, and explores the world in total comfort and confidence!",
    category: "Kids Shoes",
    subCategory: "Kids Girls",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578291/ok4i4uhlvqcta0txyoco.png"
    ),
    availableColors: ["#FFC0CB"], // Pink
    After_Discount: 21.48,
    Pre_Discount: 42.59,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3052240/3052240_87-1.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748844163/w20spamgtjfedxrjl4yw.mp4"
    )
  },
  {
    id: 75,
    name: "Kids Water Shoes",
    Desc: "Kids Water Shoes – Splash-Ready Comfort for Little Feet Keep your Kids's tiny toes safe and stylish with our lightweight, quick-dry Water Shoes. Designed for beach days, pool play, and all their splashy adventures, these shoes feature a breathable mesh upper, non-slip rubber sole, and an easy slip-on design with a secure fit. Whether they're wading in water or running on hot sand, these shoes offer protection, comfort, and flexibility – all in one adorable package.",
    category: "Kids Shoes",
    subCategory: "Kids Both",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578370/cstf7m5cgguanjl704zf.png"
    ),
    availableColors: ["#000080"], // Navy Blue
    After_Discount: 11.48,
    Pre_Discount: 22.95,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3045469/3045469_41-1.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748845277/ujo6ym8ez3ud3twdpydh.mp4"
    )
  },
  {
    id: 76,
    name: "Kids Girls Rainbow Ombre Water Shoes",
    Desc: "Kids Girls Rainbow Ombre Water Shoes – Colorful Comfort for Little Explorers Let her shine with every step! These Rainbow Ombre Water Shoes are designed for Kids girls who love to splash, play, and sparkle. With a soft, flexible design and vibrant rainbow colors that fade beautifully from toe to heel, these shoes are perfect for beach days, poolside fun, or running through sprinklers.",
    category: "Kids Shoes",
    subCategory: "Kids Girls",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578314/bh1xbg0cgknjctngjxaq.png"
    ),
    availableColors: ["#FF1493"], // Deep Pink
    After_Discount: 13.77,
    Pre_Discount: 22.95,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3052067/3052067_32I2-1.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748846867/ago9yxt4pclatrv3b98j.mp4"
    )
  },
  {
    id: 77,
    name: "Kids Girls Striped Flip Flops",
    Desc: "Let your little one step into summer in style with these Kids Girls Striped Flip Flops in a soft tan color. Designed with comfort and cuteness in mind, these flip flops feature a charming multicolor striped footbed that adds a fun, playful vibe to every outfit. The neutral tan straps are made from soft, flexible material that’s gentle on Kids feet, making them perfect for all-day wear — whether at the beach, park, or just out and about.",
    category: "Kids Shoes",
    subCategory: "Kids Girls",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578360/fjwyfhrtm2mscye0ca9n.png"
    ),
    availableColors: ["#D2B48C"], // Tan
    After_Discount: 10.17,
    Pre_Discount: 16.95,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3052054/3052054_WJ-1.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748609898/azgrmalhvbhgc8ke1ksb.mp4"
    )
  },
  {
    id: 78,
    name: "Kids Girls Paint Splatter Buckle Slides",
    Desc: "These open-toe slides for Kids girls feature a stylish and fun design with a vibrant paint splatter pattern, adding a unique artistic touch. The slides are equipped with an adjustable buckle strap for a secure and comfortable fit, ensuring your little one’s feet stay in place while walking. Made from lightweight and durable materials, these slides combine comfort and style, making them perfect for everyday wear.",
    category: "Kids Shoes",
    subCategory: "Kids Girls",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578361/oxwjk9anjulw5nx3e2ft.png"
    ),
    availableColors: ["#FFFFFF"], // White
    After_Discount: 14.96,
    Pre_Discount: 19.95,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3038279/3038279_10-1.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748844717/ltiotyjw64ncqdsblhjd.mp4"
    )
  },
  {
    id: 79,
    name: "Kids Boys Colorblock Low Top Sneakers",
    Desc: "These trendy low-top sneakers for Kids boys feature a fun and bold colorblock design, combining contrasting colors for a sporty and fashionable look. The shoes are made with a soft, breathable upper and a comfortable cushioned insole, perfect for little feet on the move. The rubber outsole provides excellent grip and durability, ensuring stability and support with every step. These sneakers are ideal for casual outings, playtime, and everyday adventures, offering both style and practicality.",
    category: "Kids Shoes",
    subCategory: "Kids Boys",
    img: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748578282/zz7uk05xfth2joleqkvz.png"
    ),
    availableColors: ["#F8F8F0"], // Off-White
    After_Discount: 23.97,
    Pre_Discount: 39.95,
    quantity: "In Stock",
    imgHover:
      "https://assets.theplace.com/image/upload/t_pdp_img_d,f_auto,q_auto,dpr_1.5/v1/ecom/assets/products/tcp/3052025/3052025_10-1.png",
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748846598/ibanlka5x46izmw1ea1j.mp4"
    )
  }
];
