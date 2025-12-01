//!========================================== For Size Guide =============================================
interface sizeTableProps {
  title: string;
  data: string[][];
}

export const sizeTableForShoes: sizeTableProps[] = [
  {
    title: "Men's Shoe Sizes (cm)",
    data: [
      ["24.5", "39"],
      ["25", "40"],
      ["25.5 – 26", "41"],
      ["26.5", "42"],
      ["27", "43"],
      ["27.5 – 28", "44"],
      ["28.5", "45"]
    ]
  },
  {
    title: "Women's Shoe Sizes (cm)",
    data: [
      ["22.5", "36"],
      ["23", "37"],
      ["23.5", "38"],
      ["24", "39"],
      ["24.5", "40"],
      ["25", "41"]
    ]
  },
  {
    title: "Kidss Shoe Sizes (cm)",
    data: [
      ["12", "20"],
      ["12.5", "21"],
      ["13", "22"],
      ["13.5", "23"],
      ["14", "24"],
      ["14.5", "25"],
      ["15", "26"],
      ["16", "27"],
      ["16.5", "28"],
      ["17", "29"],
      ["17.5", "30"],
      ["18", "31"],
      ["18.5", "32"],
      ["19", "33"],
      ["20", "34"],
      ["20.5", "35"]
    ]
  }
];

interface sizeTableForTop_BottomProps {
  title: string;
  subTitle: string;
  headers: string[];
  data: string[][];
}

export const sizeTableForTop_Bottom: sizeTableForTop_BottomProps[] = [
  {
    title: "Men's Clothing Sizes (cm)",
    subTitle: "(Shirts, Polos, Jackets, Trousers)",
    headers: [
      "Size",
      "US",
      "UK",
      "EUR",
      "China",
      "Chest (cm)",
      "Waist (cm)",
      "Hips (cm)",
      "Leg Length (cm)",
      "Neck (cm)",
      "Sleeve (cm)"
    ],
    data: [
      [
        "XXS",
        "30",
        "30",
        "40",
        "-",
        "76-81.5",
        "66",
        "-",
        "-",
        "33-34",
        "77-79"
      ],
      [
        "XS",
        "32",
        "32",
        "42",
        "160",
        "84-86",
        "68-71",
        "88",
        "82.5",
        "33-34",
        "80-81"
      ],
      [
        "S",
        "34-36",
        "34-36",
        "44-46",
        "165/88-90",
        "89-94",
        "73-79",
        "88-96",
        "82.5",
        "36-37",
        "82-84"
      ],
      [
        "M",
        "38-40",
        "38-40",
        "48-50",
        "170/96-98",
        "96-102",
        "81-86",
        "96-104",
        "83",
        "38-39",
        "85-86"
      ],
      [
        "L",
        "42-44",
        "42-44",
        "52-54",
        "175/108-110",
        "107-112",
        "91-97",
        "104-112",
        "83.5",
        "40-42",
        "87-89"
      ],
      [
        "XL",
        "46",
        "46",
        "56",
        "180/118-122",
        "116-122",
        "101-107",
        "112-120",
        "84",
        "43-45",
        "90-91"
      ],
      [
        "2XL",
        "48",
        "48",
        "58",
        "185/126-130",
        "127-132",
        "111-117",
        "120-128",
        "84.5",
        "46-47",
        "91-93"
      ],
      [
        "3XL",
        "50",
        "50",
        "60",
        "-",
        "137-140",
        "127-132",
        "128-136",
        "85",
        "48-49",
        "93-94"
      ]
    ]
  },
  {
    title: "Women's Clothing Sizes (cm)",
    subTitle: "(Dresses, Tops, Shirts, Jackets, Trousers)",
    headers: [
      "Size",
      "US",
      "UK",
      "EU",
      "China",
      "Chest (cm)",
      "Waist (cm)",
      "Hips (cm)"
    ],
    data: [
      ["XS", "0", "4", "32", "-", "78-80", "60-62", "84-86"],
      ["S", "2", "6", "34", "S", "81-83", "63-65", "87-89"],
      ["S", "4", "8", "36", "M", "84-86", "66-68", "90-92"],
      ["L", "6", "10", "38", "L", "87-89", "69-71", "93-95"],
      ["L", "8", "12", "40", "XL", "90-93", "72-75", "96-99"],
      ["M", "10", "14", "42", "XXL", "94-98", "76-80", "100-104"],
      ["M", "12", "16", "44", "XXXL", "99-103", "81-85", "105-109"],
      ["XL", "14", "18", "46", "4XL", "104-108", "86-90", "110-114"],
      ["XL", "16", "20", "48", "5XL", "109-114", "91-96", "115-120"],
      ["2XL", "18", "22", "50", "-", "115-120", "97-102", "121-125"],
      ["2XL", "20", "24", "52", "-", "121-126", "103-108", "126-132"],
      ["3XL", "22", "26", "54", "-", "127-132", "109-114", "133-138"],
      ["3XL", "24", "28", "56", "-", "133-139", "115-121", "139-145"],
      ["4XL", "26", "30", "58", "-", "140-146", "122-128", "146-152"]
    ]
  },
  {
    title: "Kid's Clothing (Boys/Girls)",
    subTitle: "(Tops, Tees, Sets, Hoodies)",
    headers: [
      "Age",
      "Size",
      "US Size",
      "UK Size",
      "EU Size",
      "China Size",
      "Height (cm)",
      "Chest (cm)",
      "Waist (cm)",
      "Hips (cm)"
    ],
    data: [
      [
        "2-3 years",
        "XXS",
        "2T/3T",
        "2-3",
        "92-98",
        "90-100",
        "92-98",
        "52-54",
        "51-52",
        "56"
      ],
      [
        "3-4 years",
        "XS",
        "4T",
        "3-4",
        "98-104",
        "100-110",
        "98-104",
        "54-56",
        "52-53",
        "58"
      ],
      [
        "4-5 years",
        "XS",
        "5",
        "4-5",
        "104-110",
        "110-120",
        "104-110",
        "56-58",
        "53-54",
        "61"
      ],
      [
        "5-6 years",
        "S",
        "6",
        "5-6",
        "110-116",
        "120-130",
        "110-116",
        "58-60",
        "54-55",
        "64"
      ],
      [
        "6-7 years",
        "S",
        "6X/7",
        "6-7",
        "116-122",
        "130-140",
        "116-122",
        "60-62",
        "55-56",
        "66"
      ],
      [
        "7-8 years",
        "M",
        "8",
        "7-8",
        "122-128",
        "140-150",
        "122-128",
        "62-64",
        "56-57",
        "70"
      ],
      [
        "8-9 years",
        "M",
        "10",
        "9-10",
        "128-134",
        "150-160",
        "128-134",
        "64-68",
        "57-59",
        "72"
      ],
      [
        "9-10 years",
        "L",
        "12",
        "11-12",
        "134-140",
        "160-165",
        "134-140",
        "68-72",
        "59-61",
        "76"
      ],
      [
        "10-11 years",
        "L",
        "14",
        "13-14",
        "140-146",
        "165-170",
        "140-146",
        "72-76",
        "61-64",
        "80"
      ],
      [
        "11-12 years",
        "XL",
        "16",
        "14-15",
        "146-152",
        "170-175",
        "146-152",
        "76-80",
        "64-66",
        "84"
      ],
      [
        "12-13 years",
        "XL",
        "18",
        "15-16",
        "152-158",
        "175-180",
        "152-158",
        "80-84",
        "66-68",
        "86"
      ]
    ]
  }
];

const optimizeImage = (url: string) =>
  url.includes("res.cloudinary.com") ? `${url}?f_auto,q_auto` : url;

//!========================================= For Product Details =========================================
//!----------------------------------------- For Title ---------------------------------------------------
interface titleProductDetailsProps {
  title: string;
}

export const titleProductDetails: titleProductDetailsProps = {
  title: "Product Details"
};

//!----------------------------------------- For Product Details Data ------------------------------------
export interface productDetailsProps {
  id: number;
  name: string;
  Desc: string;
  category: string;
  subCategory?: string;
  After_Discount: string;
  Pre_Discount: string | null;
  quantity: string;
  images: {
    id: number;
    color: string;
    colorHexa: string;
    quantity: string;
    img: string;
    alt: string;
    size: {
      id: number;
      size?: string;
      width?: number;
      height?: number;
      available: boolean;
    }[];
  }[];
  video: string;
}

export const productDetails: productDetailsProps[] = [
  {
    id: 1,
    name: "Running Shoes",
    Desc: "Level up your run with our lightweight running shoes – designed for everyday training and built to go the distance. Whether you're hitting the pavement for a quick jog or grinding through long weekend runs, these shoes move with you, not against you.",
    category: "Men's Shoes",
    After_Discount: "$99",
    Pre_Discount: "$120",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Rose",
        colorHexa: "#FDA4AF",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679710/konixdluyl6rqj737ukv.png"
        ),
        alt: "Running Shoes - Red",
        size: [
          { id: 1, size: "39", available: true },
          { id: 2, size: "40", available: false },
          { id: 3, size: "41", available: false },
          { id: 4, size: "42", available: true },
          { id: 5, size: "43", available: true },
          { id: 6, size: "44", available: true },
          { id: 7, size: "45", available: false }
        ]
      },
      {
        id: 2,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679716/crzta4cv7t9eqpsdr2sa.png"
        ),
        alt: "Running Shoes - White",
        size: [
          { id: 8, size: "39", available: false },
          { id: 9, size: "40", available: false },
          { id: 10, size: "41", available: false },
          { id: 11, size: "42", available: false },
          { id: 12, size: "43", available: false },
          { id: 13, size: "44", available: false },
          { id: 14, size: "45", available: false }
        ]
      },
      {
        id: 3,
        color: "Black",
        colorHexa: "#000000",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679723/r68hgqehh4rdrw8jlhcp.png"
        ),
        alt: "Running Shoes - Black",
        size: [
          { id: 15, size: "39", available: false },
          { id: 16, size: "40", available: false },
          { id: 17, size: "41", available: false },
          { id: 18, size: "42", available: false },
          { id: 19, size: "43", available: false },
          { id: 20, size: "44", available: false },
          { id: 21, size: "45", available: false }
        ]
      },
      {
        id: 4,
        color: "Gray",
        colorHexa: "#4B5563",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679736/b4pavyhhfo3dclafe9ts.png"
        ),
        alt: "Running Shoes - Gray",
        size: [
          { id: 22, size: "39", available: true },
          { id: 23, size: "40", available: false },
          { id: 24, size: "41", available: true },
          { id: 25, size: "42", available: true },
          { id: 26, size: "43", available: true },
          { id: 27, size: "44", available: false },
          { id: 28, size: "45", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748683916/sd2pcveyknj9izw0my3a.mp4"
    )
  },
  {
    id: 2,
    name: "Red Compact Single Door Mini Fridge",
    Desc: `20L AC/DC Mini Fridge – Cooling & Warming | Portable for Bedroom, Hotel & Travel A sleek, portable mini fridge with a 20L capacity, featuring dual cooling and warming functionality. Works with both AC and DC power sources. Perfect for bedrooms, hotels, offices, and travel. Efficient cooling and warming with dual-core system. Works on both AC power and car adapter (DC). Quiet operation and energy-efficient. Compact and easy to carry. Ideal for beverages, cosmetics, medications, or baby food.`,
    category: "Home Appliances",
    subCategory: "Fridge",
    After_Discount: "$699",
    Pre_Discount: "$849",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Red",
        colorHexa: "#DC143C",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679756/fpzcn5mkemoqkfclgnhe.png"
        ),
        alt: "Compact Single Door Mini Fridge - Red",
        size: [
          { id: 1, width: 13, height: 55, available: true },
          { id: 2, width: 15, height: 63, available: false },
          { id: 3, width: 20, height: 70, available: false }
        ]
      },
      {
        id: 2,
        color: "Black",
        colorHexa: "#000000",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679767/vjzyjaz8qvhbxgorenj3.png"
        ),
        alt: "Compact Single Door Mini Fridge - Black",
        size: [
          { id: 4, width: 13, height: 55, available: false },
          { id: 5, width: 15, height: 63, available: false },
          { id: 6, width: 20, height: 70, available: false }
        ]
      },
      {
        id: 3,
        color: "Gray",
        colorHexa: "#6B7280",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679772/fsds4qkemyd2xie7zrfk.png"
        ),
        alt: "Compact Single Door Mini Fridge - Gray",
        size: [
          { id: 7, width: 13, height: 55, available: false },
          { id: 8, width: 15, height: 63, available: false },
          { id: 8, width: 20, height: 70, available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748686309/etpugbwogcimvvwbxvp0.mp4"
    )
  },
  {
    id: 3,
    name: "Retro Cotton Linen Set — Plus Size",
    Desc: "Effortless Elegance Meets Everyday Comfort. Step into style with this chic 2-piece set, featuring a relaxed-fit shirt and high-waisted loose trousers crafted from breathable cotton-linen blend. Perfect for sunny days or casual outings, this set combines modern flair with all-day comfort. Dress it up or down—either way, you’ll look and feel effortlessly put-together.",
    category: "Women's Tops",
    After_Discount: "$319",
    Pre_Discount: "$399",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Soft Gray",
        colorHexa: "#E4E4E7",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679785/ht1m94ygg0ecc7cpjkhu.png"
        ),
        alt: "Retro Cotton Linen Set – Plus Size - Soft Gray",
        size: [
          { id: 1, size: "XS", available: false },
          { id: 2, size: "S", available: false },
          { id: 3, size: "L", available: false },
          { id: 4, size: "M", available: false },
          { id: 5, size: "XL", available: false },
          { id: 6, size: "2XL", available: false },
          { id: 7, size: "3XL", available: false },
          { id: 8, size: "4XL", available: false }
        ]
      },
      {
        id: 2,
        color: "Baby Blue",
        colorHexa: "#93C5FD",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679802/vlqibm014yuqjaaw8sig.png"
        ),
        alt: "Retro Cotton Linen Set – Plus Size - Baby Blue",
        size: [
          { id: 9, size: "XS", available: false },
          { id: 10, size: "S", available: true },
          { id: 11, size: "L", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "XL", available: false },
          { id: 14, size: "2XL", available: true },
          { id: 15, size: "3XL", available: true },
          { id: 16, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748689181/d43rtr9cltt60eakm8im.mp4"
    )
  },
  {
    id: 4,
    name: "Luxury PU Leather Handbag for Women",
    Desc: "Timeless Elegance in Every Detail. Turn heads with this elegant PU leather handbag, featuring a unique custom design that blends sophistication and functionality. Whether you're heading to the office, out for brunch, or attending a special event, this bag adds the perfect finishing touch to any outfit. Durable, chic, and versatile — your new everyday essential.",
    category: "Women's Bags",
    After_Discount: "$149",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Brown",
        colorHexa: "#6B4F1F",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679820/iilbtytitekrubdsxpv5.png"
        ),
        alt: "Luxury PU Leather Handbag - Brown",
        size: [
          { id: 1, width: 15, height: 10, available: true },
          { id: 2, width: 16, height: 11, available: false },
          { id: 3, width: 17, height: 12, available: true }
        ]
      },
      {
        id: 2,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679829/iroa2tsmjssj7hrmwgyw.png"
        ),
        alt: "Luxury PU Leather Handbag - White",
        size: [
          { id: 4, width: 15, height: 10, available: false },
          { id: 5, width: 16, height: 11, available: false },
          { id: 6, width: 17, height: 12, available: false },
          { id: 7, width: 18, height: 13, available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748700491/jf4rcpsjvm6bnpfysk3f.mp4"
    )
  },
  {
    id: 5,
    name: "Dark Green Women's Top Shoes",
    Desc: "Bold Moves Start from the Ground Up. Make a statement with these dark green women’s shoes, designed for the modern trendsetter. With a sleek silhouette and all-day comfort, they’re the perfect blend of style and practicality. Whether you're dressing up or keeping it casual, these shoes add a bold, confident edge to any look.",
    category: "Women's Shoes",
    After_Discount: "$799",
    Pre_Discount: "$859",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Green",
        colorHexa: "#22543D",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679839/m7ufzsp03ceiyzlj5n2y.png"
        ),
        alt: "Dark Green Women's Top Shoes - Green",
        size: [
          { id: 1, size: "38", available: true },
          { id: 2, size: "40", available: false },
          { id: 3, size: "41", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748781806/vocekcocatnho8hpvdmv.mp4"
    )
  },
  {
    id: 6,
    name: "Casual Sneakers",
    Desc: "Step Into Effortless Style. These stylish sneakers are your go-to choice for casual hangouts and everyday comfort. With a clean design and versatile vibe, they blend perfectly with any outfit — whether you're out with friends or running errands. Comfy. Cool. Always on point.",
    category: "Men's Shoes",
    After_Discount: "$399",
    Pre_Discount: "$440",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679849/fj1pf7xhbc6eck91lk3d.png"
        ),
        alt: "Casual Sneakers - Black",
        size: [
          { id: 1, size: "39", available: true },
          { id: 2, size: "40", available: true },
          { id: 3, size: "41", available: true },
          { id: 4, size: "42", available: true },
          { id: 5, size: "43", available: true },
          { id: 6, size: "44", available: true },
          { id: 7, size: "45", available: false }
        ]
      },
      {
        id: 2,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679870/kpdvtucns2r1oui00ahx.png"
        ),
        alt: "Casual Sneakers - White",
        size: [
          { id: 8, size: "39", available: false },
          { id: 9, size: "40", available: false },
          { id: 10, size: "41", available: false },
          { id: 11, size: "42", available: false },
          { id: 12, size: "43", available: false },
          { id: 13, size: "44", available: false },
          { id: 14, size: "45", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748789158/l26twcvaqkvixczmz64z.mp4"
    )
  },
  {
    id: 7,
    name: "Performance Sports Shoes",
    Desc: "Step Into Effortless Style. These stylish sneakers are your go-to choice for casual hangouts and everyday comfort. With a clean design and versatile vibe, they blend perfectly with any outfit — whether you're out with friends or running errands. Comfy. Cool. Always on point.",
    category: "Men's Shoes",
    After_Discount: "$199",
    Pre_Discount: "$260",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679882/m4ch8qhhrcfic61i5zed.png"
        ),
        alt: "Performance Sports Shoes - Black",
        size: [
          { id: 1, size: "39", available: false },
          { id: 2, size: "40", available: true },
          { id: 3, size: "41", available: true },
          { id: 4, size: "42", available: true },
          { id: 5, size: "43", available: false },
          { id: 6, size: "44", available: true },
          { id: 7, size: "45", available: true }
        ]
      },
      {
        id: 2,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679894/ecs7lca1pukazvsfntyv.png"
        ),
        alt: "Performance Sports Shoes - White",
        size: [
          { id: 8, size: "39", available: false },
          { id: 9, size: "40", available: false },
          { id: 10, size: "41", available: false },
          { id: 11, size: "42", available: false },
          { id: 12, size: "43", available: false },
          { id: 13, size: "44", available: false },
          { id: 14, size: "45", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748797089/rqhqjnez1k5grthc3bl2.mp4"
    )
  },
  {
    id: 8,
    name: "Formal Leather Shoes",
    Desc: "Step Into Effortless Style. These stylish sneakers are your go-to choice for casual hangouts and everyday comfort. With a clean design and versatile vibe, they blend perfectly with any outfit — whether you're out with friends or running errands. Comfy. Cool. Always on point.",
    category: "Men's Shoes",
    After_Discount: "$499",
    Pre_Discount: "$550",
    quantity: "Out Of Stock",
    images: [
      {
        id: 1,
        color: "Yellow",
        colorHexa: "#FBBF24",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679953/jsdfwhehp0itfrpyt0i4.png"
        ),
        alt: "Formal Leather Shoes - Yellow",
        size: [
          { id: 1, size: "39", available: false },
          { id: 2, size: "40", available: false },
          { id: 3, size: "41", available: false },
          { id: 4, size: "42", available: false },
          { id: 5, size: "43", available: false },
          { id: 6, size: "44", available: false },
          { id: 7, size: "45", available: false }
        ]
      },
      {
        id: 2,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679958/haijnfrvxwyowrtkqbtg.png"
        ),
        alt: "Formal Leather Shoes - White",
        size: [
          { id: 8, size: "39", available: false },
          { id: 9, size: "40", available: false },
          { id: 10, size: "41", available: false },
          { id: 11, size: "42", available: false },
          { id: 12, size: "43", available: false },
          { id: 13, size: "44", available: false },
          { id: 14, size: "45", available: false }
        ]
      },
      {
        id: 3,
        color: "Dark Red",
        colorHexa: "#8B0000",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679969/kifmosf1skibqbvpw9uh.png"
        ),
        alt: "Formal Leather Shoes - Dark Red",
        size: [
          { id: 15, size: "39", available: false },
          { id: 16, size: "40", available: false },
          { id: 17, size: "41", available: false },
          { id: 18, size: "42", available: false },
          { id: 19, size: "43", available: false },
          { id: 20, size: "44", available: false },
          { id: 21, size: "45", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748846317/lzclu4stnjrqzhhluvuc.mp4"
    )
  },
  {
    id: 9,
    name: "MacBook Air — Portable Productivity",
    Desc: "A sleek and powerful laptop designed to elevate your workflow. With high-speed performance, long battery life, and a lightweight build, it’s perfect for professionals, students, and creatives who need top-tier productivity on the go. Whether you're working from a café, commuting, or traveling, this device keeps up with your pace — no compromises.",
    category: "Electronics",
    subCategory: "LapTop",
    After_Discount: "$1199",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Gray",
        colorHexa: "#4B5563",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748679986/mlzifksrmnunbmqdyt6f.png"
        ),
        alt: "MacBook Air — Portable Productivity - Dark Gray",
        size: [
          { id: 1, size: "13.5", available: false },
          { id: 2, size: "14.1", available: true },
          { id: 3, size: "15.5", available: true }
        ]
      },
      {
        id: 2,
        color: "Light Gray",
        colorHexa: "#D1D5DB",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680001/yk5yeh2w8ofnkosygihb.png"
        ),
        alt: "MacBook Air — Portable Productivity - Light Gray",
        size: [
          { id: 4, size: "13.5", available: false },
          { id: 5, size: "14.1", available: false },
          { id: 6, size: "14.3", available: false },
          { id: 7, size: "15.5", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748846276/jhp7afxxlp3ljbxp9upx.mp4"
    )
  },
  {
    id: 10,
    name: "Training Gym Shoes",
    Desc: "Sporty and breathable athletic shoes designed for everyday training, gym workouts, and high-performance fitness routines. Lightweight construction, flexible design, and cushioned support keep you comfortable and agile from warm-up to cooldown.",
    category: "Men's Shoes",
    After_Discount: "$99",
    Pre_Discount: "$130",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680005/emrc2pexoqo459hm8jum.png"
        ),
        alt: "Training Gym Shoes - Black",
        size: [
          { id: 1, size: "39", available: false },
          { id: 2, size: "40", available: true },
          { id: 3, size: "41", available: true },
          { id: 4, size: "42", available: true },
          { id: 5, size: "43", available: false },
          { id: 6, size: "44", available: true },
          { id: 7, size: "45", available: true }
        ]
      },
      {
        id: 2,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680011/zuqpzsxsur59u5l222hs.png"
        ),
        alt: "Training Gym Shoes - White",
        size: [
          { id: 8, size: "39", available: false },
          { id: 9, size: "40", available: false },
          { id: 10, size: "41", available: false },
          { id: 11, size: "42", available: false },
          { id: 12, size: "43", available: false },
          { id: 13, size: "44", available: false },
          { id: 14, size: "45", available: false }
        ]
      },
      {
        id: 3,
        color: "Dark Gray",
        colorHexa: "#4A5568",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680018/ilxx8xv7strcjyi3065j.png"
        ),
        alt: "Training Gym Shoes - Dark Gray",
        size: [
          { id: 15, size: "39", available: true },
          { id: 16, size: "40", available: true },
          { id: 17, size: "41", available: true },
          { id: 18, size: "42", available: false },
          { id: 19, size: "43", available: true },
          { id: 20, size: "44", available: true },
          { id: 21, size: "45", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748684001/tbvzqeiygvbnhjhbq0zb.mp4"
    )
  },
  {
    id: 11,
    name: "Bold Color Sneakers",
    Desc: "Turn every sidewalk into your runway with bold, head-turning sneakers that explode with color and energy — made to electrify your look and fuel your vibe. Step loud, live proud — these kicks don’t whisper, they roar.",
    category: "Men's Shoes",
    After_Discount: "$249",
    Pre_Discount: "$300",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Brown",
        colorHexa: "#6B4226",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680024/p4jlpeyrr06fy1k1mzzp.png"
        ),
        alt: "Bold Color Sneakers - Dark Brown",
        size: [
          { id: 1, size: "39", available: true },
          { id: 2, size: "40", available: true },
          { id: 3, size: "41", available: false },
          { id: 4, size: "42", available: true },
          { id: 5, size: "43", available: true },
          { id: 6, size: "44", available: true },
          { id: 7, size: "45", available: true }
        ]
      },
      {
        id: 2,
        color: "Orange",
        colorHexa: "#FB923C",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680029/nzusyyftdu9ojbvrr3jq.png"
        ),
        alt: "Bold Color Sneakers - Orange",
        size: [
          { id: 8, size: "39", available: true },
          { id: 9, size: "40", available: true },
          { id: 10, size: "41", available: true },
          { id: 11, size: "42", available: true },
          { id: 12, size: "43", available: true },
          { id: 13, size: "44", available: true },
          { id: 14, size: "45", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748684254/by36wyxamnbkz1jc2zlo.mp4"
    )
  },
  {
    id: 12,
    name: "Comfort All-Day Shoes",
    Desc: "Meet your new everyday essential – Comfort All-Day Shoes. Built for movement, made for comfort. Whether you're powering through a busy workday, strolling the city, or running errands, these shoes keep you going without compromise. With shock-absorbing soles, ergonomic cushioning, and a breathable design, every detail is made to support your feet from morning till night. Forget foot fatigue—experience smooth, lightweight steps that feel like walking on air.",
    category: "Men's Shoes",
    After_Discount: "$529",
    Pre_Discount: "$600",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680113/pzzbbi5gdjylsngrp76z.png"
        ),
        alt: "Comfort All-Day Shoes - White",
        size: [
          { id: 1, size: "39", available: true },
          { id: 2, size: "40", available: true },
          { id: 3, size: "41", available: true },
          { id: 4, size: "42", available: true },
          { id: 5, size: "43", available: true },
          { id: 6, size: "44", available: true },
          { id: 7, size: "45", available: true }
        ]
      },
      {
        id: 2,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680123/oamcpldci0kpeofhcxp5.png"
        ),
        alt: "Comfort All-Day Shoes - Black",
        size: [
          { id: 8, size: "39", available: true },
          { id: 9, size: "40", available: true },
          { id: 10, size: "41", available: true },
          { id: 11, size: "42", available: false },
          { id: 12, size: "43", available: true },
          { id: 13, size: "44", available: false },
          { id: 14, size: "45", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748684455/nryd8dea7uch39bcjbpc.mp4"
    )
  },
  {
    id: 13,
    name: "Classic High-Top Shoes",
    Desc: "Classic High-Top Shoes – Where timeless style meets functional support. Engineered with a sleek silhouette and elevated ankle coverage, these shoes deliver the perfect balance of streetwear cool and everyday comfort. The high-top design offers added ankle support, while the durable sole provides reliable traction. Whether you're hitting the pavement or just flexing your fit, this pair keeps your look fresh and your steps steady.",
    category: "Men's Shoes",
    After_Discount: "$799",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Deep Maroon",
        colorHexa: "#800000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680133/sgvej33hwdpbumzyustn.png"
        ),
        alt: "Classic High-Top Shoes - Deep Maroon",
        size: [
          { id: 1, size: "39", available: true },
          { id: 2, size: "40", available: true },
          { id: 3, size: "41", available: false },
          { id: 4, size: "42", available: false },
          { id: 5, size: "43", available: true },
          { id: 6, size: "44", available: true },
          { id: 7, size: "45", available: true }
        ]
      },
      {
        id: 2,
        color: "Black",
        colorHexa: "Black",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680138/wysbpj9cdaobusb4edvy.png"
        ),
        alt: "Classic High-Top Shoes - Black",
        size: [
          { id: 8, size: "39", available: false },
          { id: 9, size: "40", available: false },
          { id: 10, size: "41", available: false },
          { id: 11, size: "42", available: false },
          { id: 12, size: "43", available: false },
          { id: 13, size: "44", available: false },
          { id: 14, size: "45", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748684429/o9rxprfvhf08gzvlzuzy.mp4"
    )
  },
  {
    id: 14,
    name: "MacBook Air – Creative Edition",
    Desc: "Redefining mobility and performance. Experience the perfect fusion of ultra-thin sophistication and raw power — built for those who create, innovate, and lead. Whether you're editing 4K videos, designing high-end graphics, or managing complex workflows, this machine keeps up with your vision — without weighing you down.",
    category: "Electronics",
    subCategory: "LapTop",
    After_Discount: "$2999",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Soft Apricot",
        colorHexa: "#F5CBA7",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680168/zmjmcfusvgczmtgbe1yp.png"
        ),
        alt: "MacBook Air – Creative Edition - Soft Apricot",
        size: [
          { id: 1, size: "13.3", available: true },
          { id: 2, size: "14.5", available: false },
          { id: 3, size: "15.1", available: true }
        ]
      },
      {
        id: 2,
        color: "Silver",
        colorHexa: "#B0B0B0",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680190/pfzcvpyfd6fvsnffrhxd.png"
        ),
        alt: "MacBook Air – Creative Edition - Silver",
        size: [
          { id: 4, size: "13.3", available: false },
          { id: 5, size: "13.7", available: false },
          { id: 6, size: "14.5", available: false },
          { id: 7, size: "15.1", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748684965/haklhabhjzz6heodaseo.mp4"
    )
  },
  {
    id: 15,
    name: "Baby Milton Quilted Baby Sweatshirt",
    Desc: "Designed for everyday ease and all-day comfort — this piece features a relaxed, roomy fit that moves with you, not against you. Made from soft, lightweight yet durable fabric that’s gentle on the skin and breathable to keep you fresh. No more worries about wrinkles, shrinkage, or fading — it's made to last wash after wash. Whether you're chilling, working, or on the move, it’s built to support your lifestyle with unrestricted freedom and effortless style.",
    category: "Kids Clothing",
    subCategory: "Kids Boys",
    After_Discount: "$99",
    Pre_Discount: "$119",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Sky Blue",
        colorHexa: "#60A5FA",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680225/eoaqb38zxh6zbzlq6m9d.png"
        ),
        alt: "Baby Milton Quilted Baby Sweatshirt - Sky Blue",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: false },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: false },
          { id: 5, size: "L", available: false },
          { id: 6, size: "XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Light Brown",
        colorHexa: "#A67B5B",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680232/sm8tiye0tojatgzjyrmq.png"
        ),
        alt: "Baby Milton Quilted Baby Sweatshirt - Light Brown",
        size: [
          { id: 7, size: "XXS", available: false },
          { id: 8, size: "XS", available: true },
          { id: 9, size: "S", available: false },
          { id: 10, size: "M", available: true },
          { id: 11, size: "L", available: false },
          { id: 12, size: "XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748685256/vkejwkrfolq7isrrwmze.mp4"
    )
  },
  {
    id: 16,
    name: "Straight-Leg Couture Cotton Trousers",
    Desc: "Refine your style with our straight-leg couture trousers — expertly tailored from premium cotton to deliver structure without sacrificing comfort. Perfectly versatile for both laid-back days and polished nights, these trousers are your go-to for effortless sophistication.",
    category: "Women's Pants",
    After_Discount: "$559",
    Pre_Discount: "$649",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Teal",
        colorHexa: "#004D4D",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680245/wsopewqblzs9wziswpiz.png"
        ),
        alt: "Straight-Leg Couture Cotton Trousers - Dark Teal",
        size: [
          { id: 1, size: "XS", available: false },
          { id: 2, size: "S", available: false },
          { id: 3, size: "M", available: false },
          { id: 4, size: "L", available: false },
          { id: 5, size: "XL", available: false },
          { id: 6, size: "2XL", available: false },
          { id: 7, size: "3XL", available: false },
          { id: 8, size: "4XL", available: false }
        ]
      },
      {
        id: 2,
        color: "Dark Gray",
        colorHexa: "#808080",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680254/tfomryhljgtfry1kgygj.png"
        ),
        alt: "Straight-Leg Couture Cotton Trousers - Dark Gray",
        size: [
          { id: 9, size: "XS", available: true },
          { id: 10, size: "S", available: false },
          { id: 11, size: "M", available: true },
          { id: 12, size: "L", available: false },
          { id: 13, size: "XL", available: true },
          { id: 14, size: "2XL", available: true },
          { id: 15, size: "3XL", available: true },
          { id: 16, size: "4XL", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748685010/ja7lk0z90yfdtu8ynclr.mp4"
    )
  },
  {
    id: 17,
    name: "Men's Infinity Insulated Cargo Pant",
    Desc: "The Men's Infinity Insulated Cargo Pant is designed to keep you warm and comfortable in cold conditions. With durable insulation and a relaxed fit, it offers freedom of movement and all-day wearability. Multiple cargo pockets provide ample storage for essentials on the go. Ideal for winter sports, outdoor adventures, or everyday use in chilly weather.",
    category: "Men's Pants",
    After_Discount: "$329",
    Pre_Discount: "$399",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Cinnamon Brown",
        colorHexa: "#A65E2E",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680270/nbti95et6lmf0amzv989.png"
        ),
        alt: "Men's Infinity Insulated Cargo Pant - Cinnamon Brown",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: false },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true },
          { id: 7, size: "2XL", available: false },
          { id: 8, size: "3XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680277/ikq4clkx0xwem3loagyi.png"
        ),
        alt: "Men's Infinity Insulated Cargo Pant - Black",
        size: [
          { id: 9, size: "XXS", available: false },
          { id: 10, size: "XS", available: true },
          { id: 11, size: "S", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "L", available: false },
          { id: 14, size: "XL", available: true },
          { id: 15, size: "2XL", available: true },
          { id: 16, size: "3XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748685340/geenxfhtxhi3zksk7yop.mp4"
    )
  },
  {
    id: 18,
    name: "QUIKSILVER Men's PORTER Snow Pants",
    Desc: "Stay warm and dry with the QUIKSILVER Men's PORTER Snow Pants, designed for ultimate performance in cold conditions. Crafted with waterproof fabric, they keep you protected from snow and moisture. The lightweight insulation provides comfort without adding bulk, while the adjustable waist ensures a perfect fit. Ideal for skiing, snowboarding, or any winter activity, these pants offer both style and function for your snowy adventures.",
    category: "Men's Pants",
    After_Discount: "$129",
    Pre_Discount: "$219",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Olive Green",
        colorHexa: "#7a9a79",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680354/d09cja0apakiopgzksbm.png"
        ),
        alt: "QUIKSILVER Men's PORTER Snow Pants - Olive Green",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: false },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: false },
          { id: 7, size: "2XL", available: true },
          { id: 8, size: "3XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680364/nfrok8imcqudczrfevgb.png"
        ),
        alt: "QUIKSILVER Men's PORTER Snow Pants - Black",
        size: [
          { id: 9, size: "XXS", available: true },
          { id: 10, size: "XS", available: true },
          { id: 11, size: "S", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "L", available: true },
          { id: 14, size: "XL", available: true },
          { id: 15, size: "2XL", available: true },
          { id: 16, size: "3XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748686149/edmrlsfpsqymcpb4pcdt.mp4"
    )
  },
  {
    id: 19,
    name: "Hugo Boss T-shirt For mens",
    Desc: "Elevate your everyday style with the Hugo Boss T-shirt for Men, a perfect blend of comfort and sophistication. Made from soft, breathable cotton, this tee ensures all-day comfort with a premium feel. The sleek design is finished with the iconic BOSS logo, adding a touch of modern class. Whether you're dressing it down for a casual day out or layering it for a more polished look, this T-shirt delivers effortless style with a refined edge.",
    category: "Men's T-shirts",
    After_Discount: "$129",
    Pre_Discount: "$219",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680375/omtjqiitnc8izt9tie0p.png"
        ),
        alt: "Hugo Boss T-shirt For mens - Black",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: false },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: false },
          { id: 6, size: "XL", available: true },
          { id: 7, size: "2XL", available: true },
          { id: 8, size: "3XL", available: true }
        ]
      },
      {
        id: 2,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680388/atncwf6czjis6ezcz11v.png"
        ),
        alt: "Hugo Boss T-shirt For mens - White",
        size: [
          { id: 9, size: "XXS", available: true },
          { id: 10, size: "XS", available: true },
          { id: 11, size: "S", available: true },
          { id: 12, size: "M", available: false },
          { id: 13, size: "L", available: true },
          { id: 14, size: "XL", available: true },
          { id: 15, size: "2XL", available: false },
          { id: 16, size: "3XL", available: true }
        ]
      },
      {
        id: 3,
        color: "Light Gray",
        colorHexa: "#D1D5DB",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680395/uhslrbdgisfaytkcfb2v.png"
        ),
        alt: "Hugo Boss T-shirt For mens - Light Gray",
        size: [
          { id: 17, size: "XXS", available: false },
          { id: 18, size: "XS", available: false },
          { id: 19, size: "S", available: false },
          { id: 20, size: "M", available: false },
          { id: 21, size: "L", available: false },
          { id: 22, size: "XL", available: false },
          { id: 23, size: "2XL", available: false },
          { id: 24, size: "3XL", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748685985/ntgwavemflk0yygixah6.mp4"
    )
  },
  {
    id: 20,
    name: "Security Polo T-Shirt Men High-Quality Uniform Workwear Short Sleeve Black",
    Desc: "Elevate your team’s look with the Security Polo T-Shirt for Men — a perfect blend of comfort, durability, and sharp style. Crafted from premium fabric, this black short-sleeve polo is designed to keep you cool and professional through demanding shifts. Ideal for security personnel, uniformed teams, and anyone seeking dependable, smart-looking workwear.",
    category: "Men's T-shirts",
    After_Discount: "$29",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680412/vt1qey88ppgnivgdyrfw.png"
        ),
        alt: "Security Polo T-Shirt Men High-Quality Uniform Workwear Short Sleeve Black - Black",
        size: [
          { id: 1, size: "XXS", available: false },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true },
          { id: 7, size: "2XL", available: true },
          { id: 8, size: "3XL", available: true }
        ]
      },
      {
        id: 2,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680424/fkvqby1ljt3g0lg31k6t.png"
        ),
        alt: "Security Polo T-Shirt Men High-Quality Uniform Workwear Short Sleeve Black - White",
        size: [
          { id: 9, size: "XXS", available: false },
          { id: 10, size: "XS", available: false },
          { id: 11, size: "S", available: false },
          { id: 12, size: "M", available: false },
          { id: 13, size: "L", available: false },
          { id: 14, size: "XL", available: false },
          { id: 15, size: "2XL", available: false },
          { id: 16, size: "3XL", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748686183/y9gmrxlxhjfyjyqb4wif.mp4"
    )
  },
  {
    id: 21,
    name: "High Quality RGB Light Gaming Mouse",
    Desc: "High Quality RGB Light Gaming Mouse – Precision Meets Style. Unleash next-level performance with the High Quality RGB Light Gaming Mouse — your ultimate weapon for victory. Designed for hardcore gamers and creative warriors alike, this mouse brings together pinpoint accuracy, ergonomic comfort, and breathtaking RGB lighting that turns every desk into a battlestation.",
    category: "Electronics",
    subCategory: "Mouse",
    After_Discount: "$15",
    Pre_Discount: "$25",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Neon Blue",
        colorHexa: "#00FFFF",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680433/uzftsaeaojwexcaec0hs.png"
        ),
        alt: "High Quality RGB Light Gaming Mouse - Neon Blue",
        size: [
          { id: 1, width: 6.6, height: 15, available: false },
          { id: 2, width: 6.7, height: 16, available: true },
          { id: 3, width: 6.8, height: 17, available: true }
        ]
      },
      {
        id: 2,
        color: "Neon Red",
        colorHexa: "#FF073A",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680444/jpie3cbpcc0tdrk0h0us.png"
        ),
        alt: "High Quality RGB Light Gaming Mouse - Red",
        size: [
          { id: 4, width: 6.6, height: 15, available: false },
          { id: 5, width: 6.7, height: 16, available: false },
          { id: 6, width: 6.8, height: 17, available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748685476/fha9jkkayzmlgskrd5xm.mp4"
    )
  },
  {
    id: 22,
    name: "High Quality RGB Light Gaming Keyboard",
    Desc: "High Quality RGB Light Gaming Keyboard – Dominate with Precision & Power. Step into the arena with the High Quality RGB Light Gaming Keyboard — engineered for elite performance and built to impress. Whether you're raiding dungeons, crushing leaderboards, or coding the future, this keyboard delivers lightning-fast response, all-day comfort, and vivid RGB brilliance that transforms your setup into a next-gen control hub.",
    category: "Electronics",
    subCategory: "Keyboard",
    After_Discount: "$40",
    Pre_Discount: "$55",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680459/agnuxeq9qsxknknf2ygh.png"
        ),
        alt: "High Quality RGB Light Gaming Keyboard - Black",
        size: [
          { id: 1, width: 25, height: 15, available: true },
          { id: 2, width: 26, height: 16, available: true },
          { id: 3, width: 27, height: 17, available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748687755/hj3yxliy8pas6ny6dyzn.mp4"
    )
  },
  {
    id: 23,
    name: "Apple iMac 21.5 4K Retina 2017",
    Desc: "Apple iMac 21.5 4K Retina 2017 – Precision Meets Style. Unleash next-level performance with the Apple iMac 21.5 4K Retina 2017 — your ultimate weapon for victory. Designed for hardcore gamers and creative warriors alike, this mouse brings together pinpoint accuracy, ergonomic comfort, and breathtaking RGB lighting that turns every desk into a battlestation.",
    category: "Electronics",
    subCategory: "Computer Monitor",
    After_Discount: "$999",
    Pre_Discount: "$1100",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Silver",
        colorHexa: "#D3D3D3",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680471/utqt6vl980vuuztl82a9.png"
        ),
        alt: "Apple iMac 21.5 4K Retina 2017 - Silver",
        size: [
          { id: 1, size: "21.5", available: true },
          { id: 2, size: "23.1", available: false },
          { id: 3, size: "24.3", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748688298/xi5ucsy1b9joqekj26pt.mp4"
    )
  },
  {
    id: 24,
    name: "SanDisk Cruzer Blade – Trusted Storage in Your Pocket",
    Desc: "SanDisk Cruzer Blade – Trusted Storage in Your Pocket – Precision Meets Style. Unleash next-level performance with the SanDisk Cruzer Blade – Trusted Storage in Your Pocket — your ultimate weapon for victory. Designed for hardcore gamers and creative warriors alike, this mouse brings together pinpoint accuracy, ergonomic comfort, and breathtaking RGB lighting that turns every desk into a battlestation.",
    category: "Electronics",
    subCategory: "Flash Disk",
    After_Discount: "$10",
    Pre_Discount: "$13",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680477/xvwznrn2abrrgoj1e5yw.png"
        ),
        alt: "SanDisk Cruzer Blade – Trusted Storage in Your Pocket - Black",
        size: [
          { id: 1, size: "64", available: false },
          { id: 2, size: "128", available: true },
          { id: 3, size: "256", available: true }
        ]
      },
      {
        id: 2,
        color: "Red",
        colorHexa: "#FF0000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680490/glvfywpodjiqgizjhxy7.png"
        ),
        alt: "SanDisk Cruzer Blade – Trusted Storage in Your Pocket - Red",
        size: [
          { id: 4, size: "64", available: true },
          { id: 5, size: "128", available: false },
          { id: 6, size: "256", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748687696/nnqxxthtuaihshwyprmh.mp4"
    )
  },
  {
    id: 25,
    name: "HUAWEI WATCH FIT 3 Smartwatch",
    Desc: "Stay ahead in fitness, fashion, and functionality with the HUAWEI WATCH FIT 3 — a sleek, lightweight smartwatch that combines bold design with next-gen health tracking and all-day battery life. Whether you're hitting the gym, running errands, or taking calls, this watch keeps up with your hustle.",
    category: "Electronics",
    subCategory: "Apple Watch",
    After_Discount: "$449",
    Pre_Discount: "$500",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Moon White",
        colorHexa: "#FAFAFA",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680510/hroreuvbqvluuxsl634y.png"
        ),
        alt: "HUAWEI WATCH FIT 3 Smartwatch - Moon White",
        size: [
          { id: 1, size: "1.54", available: false },
          { id: 2, size: "1.65", available: true },
          { id: 3, size: "1.82", available: true }
        ]
      },
      {
        id: 2,
        color: "Light Green",
        colorHexa: "#90EE90",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680521/nj97uotrnarzj4gf5dzb.png"
        ),
        alt: "HUAWEI WATCH FIT 3 Smartwatch - Light Green",
        size: [
          { id: 4, size: "1.54", available: true },
          { id: 5, size: "1.65", available: false },
          { id: 6, size: "1.82", available: true }
        ]
      },
      {
        id: 3,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680530/cdopikfvnegpvls66zb9.png"
        ),
        alt: "HUAWEI WATCH FIT 3 Smartwatch - Black",
        size: [
          { id: 7, size: "1.54", available: true },
          { id: 8, size: "1.65", available: true },
          { id: 9, size: "1.82", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748687321/w5atuikaxc2mr1otmytj.mp4"
    )
  },
  {
    id: 26,
    name: "iPhone 14 Pro - Second Hand Phones",
    Desc: "iPhone 14 Pro – Unleash Premium Performance in Every Touch Discover the power and elegance of the iPhone 14 Pro — now available as a second-hand phone, offering the same cutting-edge features and sophisticated design at a fraction of the price. With its stunning 6.1-inch Super Retina XDR display, ultra-fast performance, and incredible camera system, the iPhone 14 Pro is your gateway to seamless technology without compromise.",
    category: "Electronics",
    subCategory: "Mobile",
    After_Discount: "$599",
    Pre_Discount: "$650",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Deep Purple",
        colorHexa: "#4B2C7F",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680547/cfvgrkllgolnlok9zbzm.png"
        ),
        alt: "iPhone 14 Pro - Second Hand Phones - Deep Purple",
        size: [
          { id: 1, size: "128", available: false },
          { id: 2, size: "256", available: true },
          { id: 3, size: "512", available: true }
        ]
      },
      {
        id: 2,
        color: "Silver",
        colorHexa: "#C0C0C0",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680551/lwxvucotctwbp5tpwdlf.png"
        ),
        alt: "iPhone 14 Pro - Second Hand Phones - Silver",
        size: [
          { id: 4, size: "128", available: true },
          { id: 5, size: "256", available: false },
          { id: 6, size: "512", available: true }
        ]
      },
      {
        id: 3,
        color: "Sky Blue",
        colorHexa: "#87CEFA",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680564/il6uodbii711hwyhycfc.png"
        ),
        alt: "iPhone 14 Pro - Second Hand Phones - Sky Blue",
        size: [
          { id: 7, size: "128", available: true },
          { id: 8, size: "256", available: true },
          { id: 9, size: "512", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748687458/lx687clh0buyhztziitf.mp4"
    )
  },
  {
    id: 27,
    name: "HOOVER Washer Fully Automatic",
    Desc: "HOOVER Fully Automatic Washer – Powerful Cleaning, Hassle-Free Living Upgrade your laundry game with the HOOVER Fully Automatic Washing Machine, engineered to deliver deep cleaning with zero effort. Whether you're washing daily loads or handling tough stains, HOOVER combines smart technology, powerful performance, and elegant design to make your laundry routine smoother and smarter.",
    category: "Home Appliances",
    subCategory: "Washing Machine",
    After_Discount: "$550",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680574/dhsnu2gffsv1iqrymwah.png"
        ),
        alt: "HOOVER Washer Fully Automatic - Black",
        size: [
          { id: 1, size: "9", available: false },
          { id: 2, size: "12", available: true },
          { id: 3, size: "15", available: true }
        ]
      },
      {
        id: 2,
        color: "Morandi Grey",
        colorHexa: "#A5A29E",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680590/fesdmpcfaqqfvisvaspk.png"
        ),
        alt: "HOOVER Washer Fully Automatic - Morandi Grey",
        size: [
          { id: 4, size: "9", available: false },
          { id: 5, size: "12", available: false },
          { id: 6, size: "15", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748688753/dvf4a8byyslbbictmojy.mp4"
    )
  },
  {
    id: 28,
    name: "Unionaire iCook Smart Stainless Steel Cooker",
    Desc: "Unionaire iCook Smart Cooker – Precision Meets Power in the Heart of Your Kitchen Cook like a pro with the Unionaire iCook Smart Cooker, crafted from premium stainless steel and loaded with smart features that bring flavor, control, and elegance to your kitchen. Whether you're searing, simmering, or slow cooking, this cooker delivers consistent performance, sleek design, and next-gen functionality for modern chefs.",
    category: "Home Appliances",
    subCategory: "Gas Stove",
    After_Discount: "$499",
    Pre_Discount: "$540",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680608/s2xfov7dyveabhil9ytz.png"
        ),
        alt: "Unionaire iCook Smart Stainless Steel Cooker - Black",
        size: [
          { id: 1, width: 50, height: 65, available: false },
          { id: 2, width: 55, height: 70, available: true },
          { id: 3, width: 60, height: 75, available: true }
        ]
      },
      {
        id: 2,
        color: "Silver",
        colorHexa: "#C0C0C0",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680618/ow88waoa4x5ybt7vgukv.png"
        ),
        alt: "Unionaire iCook Smart Stainless Steel Cooker - Silver",
        size: [
          { id: 4, width: 50, height: 65, available: false },
          { id: 5, width: 55, height: 70, available: true },
          { id: 6, width: 60, height: 75, available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748688301/zupk3agdpafx8jxkaikf.mp4"
    )
  },
  {
    id: 29,
    name: "Electric Oven with Timer & Temp Control – 1800W Multi-Use",
    Desc: "Multi-Use Electric Oven – Cook Smarter, Faster, Tastier! Simplify your kitchen routine with this powerful 1800W Electric Oven, designed for versatility and precision. Whether you're baking, grilling, toasting, or reheating, this oven gives you full control with adjustable temperature settings from 65°C to 230°C and a built-in timer for perfect results every time.",
    category: "Home Appliances",
    subCategory: "Microwave",
    After_Discount: "$149",
    Pre_Discount: "$200",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680624/idfrep1tcrobqs53tm9s.png"
        ),
        alt: "Electric Oven with Timer & Temp Control – 1800W Multi-Use - Black",
        size: [
          { id: 1, width: 31, height: 25, available: false },
          { id: 2, width: 33, height: 27, available: true },
          { id: 3, width: 35, height: 29, available: true }
        ]
      },
      {
        id: 2,
        color: "Silver",
        colorHexa: "#C0C0C0",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680637/fpe09ljotaxuv73zav8l.png"
        ),
        alt: "Electric Oven with Timer & Temp Control – 1800W Multi-Use - Silver",
        size: [
          { id: 4, width: 31, height: 25, available: true },
          { id: 5, width: 33, height: 27, available: true },
          { id: 6, width: 35, height: 29, available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748688887/ypsjfvm3y2hdwqfqbhbd.mp4"
    )
  },
  {
    id: 30,
    name: "Espresso Machine – Barista-Style Coffee",
    Desc: "Espresso Maker – Barista Vibes at Home Start every day with a bold shot of café-quality espresso — right from your kitchen. This Espresso Maker is designed to give you the rich flavor, smooth crema, and powerful aroma you love, all in a compact and stylish design that fits any countertop.",
    category: "Home Appliances",
    subCategory: "Espresso Maker",
    After_Discount: "$149",
    Pre_Discount: "$200",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680652/nv09qcu6xf68myevkgh9.png"
        ),
        alt: "Espresso Machine – Barista-Style Coffee - Black",
        size: [
          { id: 1, size: "1.1", available: false },
          { id: 2, size: "1.3", available: true },
          { id: 3, size: "1.5", available: true }
        ]
      },
      {
        id: 2,
        color: "Silver",
        colorHexa: "#C0C0C0",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680659/qj4xo3ganoz66ubbtivc.png"
        ),
        alt: "Espresso Machine – Barista-Style Coffee - Silver",
        size: [
          { id: 4, size: "1.1", available: true },
          { id: 5, size: "1.3", available: true },
          { id: 6, size: "1.5", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748689262/manwalgbeglgclrq6xmn.mp4"
    )
  },
  {
    id: 31,
    name: "Nutricook 2 Slice Smart Toaster with Touch Screen",
    Desc: "Nutricook Smart Toaster – The Future of Toasting is Here! Upgrade your breakfast game with the Nutricook 2 Slice Smart Toaster, featuring a sleek touch screen interface and intelligent browning controls for the perfect toast every time. Whether you like it lightly golden or extra crispy, this toaster delivers precision, style, and smart performance all in one.",
    category: "Home Appliances",
    subCategory: "Toaster",
    After_Discount: "$75",
    Pre_Discount: "$85",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Silver",
        colorHexa: "#C0C0C0",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680671/ootolyfa5paebmrgvhyg.png"
        ),
        alt: "Nutricook 2 Slice Smart Toaster with Touch Screen - Silver",
        size: [
          { id: 1, width: 35, height: 25, available: false },
          { id: 2, width: 36, height: 26, available: true },
          { id: 3, width: 37, height: 27, available: true }
        ]
      },
      {
        id: 2,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680678/cesrqcsdfifipnwj6kza.png"
        ),
        alt: "Nutricook 2 Slice Smart Toaster with Touch Screen - Black",
        size: [
          { id: 4, width: 35, height: 25, available: true },
          { id: 5, width: 36, height: 26, available: false },
          { id: 6, width: 37, height: 27, available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748689358/luz6fh5wgriwbqjedmws.mp4"
    )
  },
  {
    id: 32,
    name: "Versuni Philips steam iron",
    Desc: "Nutricook Smart Toaster – The Future of Toasting is Here! Upgrade your breakfast game with the Nutricook 2 Slice Smart Toaster, featuring a sleek touch screen interface and intelligent browning controls for the perfect toast every time. Whether you like it lightly golden or extra crispy, this toaster delivers precision, style, and smart performance all in one.",
    category: "Home Appliances",
    subCategory: "Toaster",
    After_Discount: "$149",
    Pre_Discount: "$190",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680691/vfteyrkwwgv8lirdkbwk.png"
        ),
        alt: "Versuni Philips steam iron - Black",
        size: [
          { id: 1, width: 35, height: 15, available: true },
          { id: 2, width: 36, height: 16, available: true },
          { id: 3, width: 37, height: 17, available: false }
        ]
      },
      {
        id: 2,
        color: "Sky Blue",
        colorHexa: "#6FB7D6",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680698/sofdyjwkuy2f5ece4aod.png"
        ),
        alt: "Versuni Philips steam iron - Sky Blue",
        size: [
          { id: 4, width: 35, height: 15, available: true },
          { id: 5, width: 36, height: 16, available: false },
          { id: 6, width: 37, height: 17, available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748690172/zqisfmrycy2fmomgzxlk.mp4"
    )
  },
  {
    id: 33,
    name: "Relaxed Fit T-Shirt",
    Desc: "Stay effortlessly cool and comfortable with our Relaxed Fit T-Shirt — where casual meets refined. Crafted from soft, breathable cotton, this tee features a loose silhouette that drapes naturally for all-day ease. Whether you're layering it up or rocking it solo, its laid-back vibe and clean lines make it a versatile essential for any wardrobe. Pre-shrunk and built to last, it's the go-to choice for everyday wear, weekend lounging, or street-ready style.",
    category: "Men's T-shirts",
    After_Discount: "$39",
    Pre_Discount: "$45",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Maroon",
        colorHexa: "#B22222",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680718/vymnmdgvojcze1mrg7nk.png"
        ),
        alt: "Relaxed Fit T-Shirt - Maroon",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: false },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true },
          { id: 7, size: "2XL", available: true },
          { id: 8, size: "3XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680727/no5n8oam4gatgorkrxik.png"
        ),
        alt: "Relaxed Fit T-Shirt - Black",
        size: [
          { id: 9, size: "XXS", available: true },
          { id: 10, size: "XS", available: true },
          { id: 11, size: "S", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "L", available: true },
          { id: 14, size: "XL", available: true },
          { id: 15, size: "2XL", available: true },
          { id: 16, size: "3XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748691121/pj6bojcbrxb1wp3pg3af.mp4"
    )
  },
  {
    id: 34,
    name: "Relaxed Fit Pique & Jersey T-Shirt",
    Desc: "Elevate your everyday style with this Relaxed Fit Piqué & Jersey T-Shirt — a perfect blend of comfort and texture. Designed with a soft jersey back and breathable piqué front, this tee offers a unique contrast in feel and function. The relaxed silhouette ensures freedom of movement, while the fabric mix gives it a refined yet laid-back edge. Ideal for both casual outings and smart-casual layering, this piece bridges the gap between sporty and polished with effortless cool.",
    category: "Men's T-shirts",
    After_Discount: "$24.50",
    Pre_Discount: "$30",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Orange",
        colorHexa: "#FFA500",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680735/uwxfpulplfc8bqf5tn1b.png"
        ),
        alt: "Relaxed Fit Pique & Jersey T-Shirt - Orange",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: false },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: false },
          { id: 7, size: "2XL", available: true },
          { id: 8, size: "3XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Light Green",
        colorHexa: "#90EE90",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680747/pjyebufnyqp9bdbethyo.png"
        ),
        alt: "Relaxed Fit Pique & Jersey T-Shirt - Light Green",
        size: [
          { id: 9, size: "XXS", available: true },
          { id: 10, size: "XS", available: true },
          { id: 11, size: "S", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "L", available: true },
          { id: 14, size: "XL", available: true },
          { id: 15, size: "2XL", available: true },
          { id: 16, size: "3XL", available: true }
        ]
      },
      {
        id: 3,
        color: "Light Gray",
        colorHexa: "#D3D3D3",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680756/y55igk3sacowsov0zw24.png"
        ),
        alt: "Relaxed Fit Pique & Jersey T-Shirt - Light Gray",
        size: [
          { id: 17, size: "XXS", available: true },
          { id: 18, size: "XS", available: true },
          { id: 19, size: "S", available: true },
          { id: 20, size: "M", available: true },
          { id: 21, size: "L", available: true },
          { id: 22, size: "XL", available: true },
          { id: 23, size: "2XL", available: true },
          { id: 24, size: "3XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748691378/opflyhnoe6vnoy9dnhus.mp4"
    )
  },
  {
    id: 35,
    name: "Relaxed Fit Cotton T-Shirt",
    Desc: "Keep it classic and effortlessly cool with our Relaxed Fit Cotton T-Shirt. Made from 100% soft, breathable cotton, this tee delivers ultimate comfort with a laid-back silhouette that moves with you. Whether you’re out and about or just kicking back, its timeless design, durable stitching, and versatile vibe make it a go-to piece for any casual rotation. Easy to wear, easy to style — it’s your everyday essential, upgraded.",
    category: "Men's T-shirts",
    After_Discount: "$15",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Maroon",
        colorHexa: "#D9A799",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680769/mxdxhtytwrfibeveoo1m.png"
        ),
        alt: "Relaxed Fit Cotton T-Shirt - Maroon",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true },
          { id: 7, size: "2XL", available: false },
          { id: 8, size: "3XL", available: false }
        ]
      },
      {
        id: 2,
        color: "Light Gray",
        colorHexa: "#D3D3D3",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680779/guarqck8txe0zax41csl.png"
        ),
        alt: "Relaxed Fit Cotton T-Shirt - Light Gray",
        size: [
          { id: 9, size: "XXS", available: false },
          { id: 10, size: "XS", available: false },
          { id: 11, size: "S", available: false },
          { id: 12, size: "M", available: false },
          { id: 13, size: "L", available: false },
          { id: 14, size: "XL", available: false },
          { id: 15, size: "2XL", available: false },
          { id: 16, size: "3XL", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748691034/i7eapafbqivtugxnfggq.mp4"
    )
  },
  {
    id: 36,
    name: "CEBE Classic Fit Linen Shirt",
    Desc: "Elevate your casual wardrobe with the CEBE Classic Fit Linen Shirt. Crafted from high-quality, breathable linen, this shirt offers the perfect blend of comfort and sophistication. The classic fit provides a relaxed yet tailored silhouette, making it an ideal choice for both warm weather and stylish layering.",
    category: "Men's T-shirts",
    After_Discount: "$15",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Navy Blue",
        colorHexa: "#000080",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680792/geedxhjna3p7fh7kep6h.png"
        ),
        alt: "CEBE Classic Fit Linen Shirt - Navy Blue",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: false },
          { id: 7, size: "2XL", available: true },
          { id: 8, size: "3XL", available: true }
        ]
      },
      {
        id: 2,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680799/tcmybw2srmp5zf6vreqs.png"
        ),
        alt: "CEBE Classic Fit Linen Shirt - White",
        size: [
          { id: 9, size: "XXS", available: true },
          { id: 10, size: "XS", available: false },
          { id: 11, size: "S", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "L", available: true },
          { id: 14, size: "XL", available: false },
          { id: 15, size: "2XL", available: true },
          { id: 16, size: "3XL", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748697677/qnkl5lkvft02jmun57xt.mp4"
    )
  },
  {
    id: 37,
    name: "Brushed French Terry Basic T-shirt",
    Desc: "Crafted from soft, brushed French terry fabric, this basic T-shirt delivers a luxurious feel with a casual look. Designed for everyday wear, it offers a relaxed fit that moves with you, while the lightly brushed interior adds warmth and comfort without bulk.",
    category: "Men's T-shirts",
    After_Discount: "$45",
    Pre_Discount: "$50",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Light Purple",
        colorHexa: "#C8AFC8",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680810/b7m7kdj7n8d7bk8qcmlf.png"
        ),
        alt: "Brushed French Terry Basic T-shirt - Light Purple",
        size: [
          { id: 1, size: "XXS", available: false },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true },
          { id: 7, size: "2XL", available: true },
          { id: 8, size: "3XL", available: false }
        ]
      },
      {
        id: 2,
        color: "Light Green",
        colorHexa: "#C8DDB2",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680823/iszw1tzgfy6woggiofqo.png"
        ),
        alt: "Brushed French Terry Basic T-shirt - Light Green",
        size: [
          { id: 9, size: "XXS", available: true },
          { id: 10, size: "XS", available: true },
          { id: 11, size: "S", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "L", available: true },
          { id: 14, size: "XL", available: true },
          { id: 15, size: "2XL", available: true },
          { id: 16, size: "3XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748754102/dxz8ttoit9myvkrpahi9.mp4"
    )
  },
  {
    id: 38,
    name: "Sleeveless Interlock Top",
    Desc: "Sleeveless Interlock Top – Sleek. Soft. Effortless. Elevate your basics with this sleeveless interlock top, crafted from ultra-smooth, double-knit fabric that feels as good as it looks. Designed for a clean, structured silhouette, the interlock construction offers gentle stretch, exceptional softness, and a polished finish that flatters every shape. Whether layered or worn solo, it’s your new essential for modern minimalism and all-day ease.",
    category: "Women's Tops",
    After_Discount: "$29",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680828/lvztvxmpe9n7mpebnvl9.png"
        ),
        alt: "Sleeveless Interlock Top - Black",
        size: [
          { id: 1, size: "XS", available: true },
          { id: 2, size: "S", available: false },
          { id: 3, size: "L", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "XL", available: false },
          { id: 6, size: "2XL", available: true },
          { id: 7, size: "3XL", available: true },
          { id: 8, size: "4XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Light Red",
        colorHexa: "#FF7F7F",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680843/l72cevl7vtgawx8ggs3f.png"
        ),
        alt: "Sleeveless Interlock Top - Light Red",
        size: [
          { id: 9, size: "XS", available: false },
          { id: 10, size: "S", available: false },
          { id: 11, size: "L", available: false },
          { id: 12, size: "M", available: false },
          { id: 13, size: "XL", available: false },
          { id: 14, size: "2XL", available: false },
          { id: 15, size: "3XL", available: false },
          { id: 16, size: "4XL", available: false }
        ]
      },
      {
        id: 3,
        color: "Light Gray",
        colorHexa: "#C0C0C0",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748930514/ud6cx4iymt5hisfdxzgz.png"
        ),
        alt: "Sleeveless Interlock Top - Light Gray",
        size: [
          { id: 17, size: "XS", available: true },
          { id: 18, size: "S", available: false },
          { id: 19, size: "L", available: true },
          { id: 20, size: "M", available: false },
          { id: 21, size: "XL", available: true },
          { id: 22, size: "2XL", available: true },
          { id: 23, size: "3XL", available: false },
          { id: 24, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748754326/bailprindp1qc6fc48nm.mp4"
    )
  },
  {
    id: 39,
    name: "Stretch Jersey V-Neck T-Shirt",
    Desc: "Stretch Jersey V-Neck T-Shirt – Flex Your Style. Own the Comfort. Crafted from soft stretch jersey fabric, this V-neck T-shirt is all about movement, fit, and effortless cool. The slim yet flexible cut hugs your shape without clinging, giving you that clean silhouette with total freedom. Whether you're layering it up or keeping it solo, this tee is made to keep up—at the gym, on the go, or just chillin'.",
    category: "Women's Tops",
    After_Discount: "$49",
    Pre_Discount: "$55",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Teal",
        colorHexa: "#33A1A1",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680880/bzaep9jj1vejwn6n5k5a.png"
        ),
        alt: "Stretch Jersey V-Neck T-Shirt - Teal",
        size: [
          { id: 1, size: "XS", available: false },
          { id: 2, size: "S", available: true },
          { id: 3, size: "L", available: false },
          { id: 4, size: "M", available: true },
          { id: 5, size: "XL", available: true },
          { id: 6, size: "2XL", available: true },
          { id: 7, size: "3XL", available: true },
          { id: 8, size: "4XL", available: false }
        ]
      },
      {
        id: 2,
        color: "Blue",
        colorHexa: "#1560BD",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680886/apy4w1jdr6k5dk1ctorb.png"
        ),
        alt: "Stretch Jersey V-Neck T-Shirt - Blue",
        size: [
          { id: 9, size: "XS", available: true },
          { id: 10, size: "S", available: true },
          { id: 11, size: "L", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "XL", available: true },
          { id: 14, size: "2XL", available: true },
          { id: 15, size: "3XL", available: true },
          { id: 16, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748754939/iw0ykogka9fhtvezg4ns.mp4"
    )
  },
  {
    id: 40,
    name: "Round Neck Cotton Slub T-Shirt",
    Desc: "Round Neck Cotton Slub T-Shirt – Flex Your Style. Own the Comfort. Crafted from soft stretch jersey fabric, this V-neck T-shirt is all about movement, fit, and effortless cool. The slim yet flexible cut hugs your shape without clinging, giving you that clean silhouette with total freedom. Whether you're layering it up or keeping it solo, this tee is made to keep up—at the gym, on the go, or just chillin'.",
    category: "Women's Tops",
    After_Discount: "$49",
    Pre_Discount: "$55",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681039/jarveanz5zfhq1pifxkx.png"
        ),
        alt: "Round Neck Cotton Slub T-Shirt - Black",
        size: [
          { id: 1, size: "XS", available: true },
          { id: 2, size: "S", available: false },
          { id: 3, size: "L", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "XL", available: false },
          { id: 6, size: "2XL", available: false },
          { id: 7, size: "3XL", available: true },
          { id: 8, size: "4XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Light Beige",
        colorHexa: "#EDE8C7",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680911/l2vqv5cs4jxp794jfmkt.png"
        ),
        alt: "Round Neck Cotton Slub T-Shirt - Light Beige",
        size: [
          { id: 9, size: "XS", available: true },
          { id: 10, size: "S", available: true },
          { id: 11, size: "L", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "XL", available: true },
          { id: 14, size: "2XL", available: true },
          { id: 15, size: "3XL", available: false },
          { id: 16, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748700392/y0t77pkffdjwsy2uckq2.mp4"
    )
  },
  {
    id: 41,
    name: "Oversized Cotton Printed Shirt",
    Desc: "Oversized Cotton Printed Shirt – Bold Comfort. Effortless Cool. Step into laid-back style with this oversized cotton shirt, featuring statement prints that do all the talking. Made from breathable, premium cotton, it delivers a relaxed silhouette that blends streetwear attitude with all-day comfort. Whether layered or worn solo, it's your go-to for standout casual looks.",
    category: "Women's Tops",
    After_Discount: "$69",
    Pre_Discount: "$75",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Light Pink",
        colorHexa: "#FFC0CB",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680917/vwx8lg7seacl5twtl7ik.png"
        ),
        alt: "Oversized Cotton Printed Shirt - Light Pink",
        size: [
          { id: 1, size: "XS", available: false },
          { id: 2, size: "S", available: true },
          { id: 3, size: "L", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "XL", available: true },
          { id: 6, size: "2XL", available: true },
          { id: 7, size: "3XL", available: false },
          { id: 8, size: "4XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Light Green",
        colorHexa: "#D9F7D9",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680923/fpkldshpaj73u53bvjdl.png"
        ),
        alt: "Oversized Cotton Printed Shirt - Light Green",
        size: [
          { id: 9, size: "XS", available: true },
          { id: 10, size: "S", available: true },
          { id: 11, size: "L", available: true },
          { id: 12, size: "M", available: false },
          { id: 13, size: "XL", available: true },
          { id: 14, size: "2XL", available: true },
          { id: 15, size: "3XL", available: true },
          { id: 16, size: "4XL", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748700527/ujyvpbepdylyirciwqgx.mp4"
    )
  },
  {
    id: 42,
    name: "Oversized Cotton Shirt",
    Desc: "An Oversized Cotton Shirt is a loose-fitting shirt made from soft, breathable cotton fabric. Its relaxed fit offers comfort and freedom of movement, making it perfect for casual wear. The cotton material ensures it's soft against the skin and keeps you cool. It's designed to give off a trendy, laid-back vibe, and can be paired with jeans, shorts, or leggings for a stylish yet comfortable look.",
    category: "Women's Tops",
    After_Discount: "$65",
    Pre_Discount: "$70",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Muted Caramel",
        colorHexa: "#9C835F",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680932/kjcbuyyudaseejoo1isx.png"
        ),
        alt: "Oversized Cotton Shirt - Muted Caramel",
        size: [
          { id: 1, size: "XS", available: true },
          { id: 2, size: "S", available: false },
          { id: 3, size: "L", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "XL", available: true },
          { id: 6, size: "2XL", available: false },
          { id: 7, size: "3XL", available: true },
          { id: 8, size: "4XL", available: true }
        ]
      },
      {
        id: 2,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681048/rc16whinzl5chhh34xqh.png"
        ),
        alt: "Oversized Cotton Shirt - White",
        size: [
          { id: 9, size: "XS", available: false },
          { id: 10, size: "S", available: true },
          { id: 11, size: "L", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "XL", available: true },
          { id: 14, size: "2XL", available: false },
          { id: 15, size: "3XL", available: true },
          { id: 16, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748767185/ji0uoncc3zkjddq1siqr.mp4"
    )
  },
  {
    id: 43,
    name: "Classic Fit Long Sleeves Linen Shirt",
    Desc: "A Classic Fit Long Sleeves Linen Shirt is a timeless wardrobe staple designed for comfort and versatility. Made from breathable, lightweight linen fabric, it features a traditional silhouette with a relaxed fit through the chest and sleeves, providing ease of movement without appearing too loose. The long sleeves offer a polished look, making it suitable for both casual and semi-formal settings. This shirt is ideal for warm weather due to linen's natural moisture-wicking properties and is often styled tucked or untucked with chinos, jeans, or tailored shorts.",
    category: "Women's Tops",
    After_Discount: "$89",
    Pre_Discount: "$95",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Light Gray",
        colorHexa: "#A9A9A9",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680981/zqiaeq0du7ratdyg318e.png"
        ),
        alt: "Classic Fit Long Sleeves Linen Shirt - Light Gray",
        size: [
          { id: 1, size: "XS", available: true },
          { id: 2, size: "S", available: true },
          { id: 3, size: "L", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "XL", available: true },
          { id: 6, size: "2XL", available: true },
          { id: 7, size: "3XL", available: true },
          { id: 8, size: "4XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Light Orange",
        colorHexa: "#FFA07A",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680988/mgjtzavbfofm5va2xigu.png"
        ),
        alt: "Classic Fit Long Sleeves Linen Shirt - Light Orange",
        size: [
          { id: 9, size: "XS", available: true },
          { id: 10, size: "S", available: true },
          { id: 11, size: "L", available: true },
          { id: 12, size: "M", available: true },
          { id: 13, size: "XL", available: true },
          { id: 14, size: "2XL", available: false },
          { id: 15, size: "3XL", available: true },
          { id: 16, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748767999/f6qwvxlownj6snwnbbss.mp4"
    )
  },
  {
    id: 44,
    name: "Sanders Linen Pants with Elastic Waist",
    Desc: "Sanders Linen Pants with Elastic Waist are the perfect blend of laid-back comfort and refined style. Crafted from lightweight, breathable linen, these pants are designed for all-day wear in warm climates. The elastic waistband offers a flexible, relaxed fit while maintaining a clean, modern silhouette. Ideal for casual outings, beach days, or even smart-casual events when paired with a button-down shirt, these pants provide effortless elegance with minimal effort.",
    category: "Men's Pants",
    After_Discount: "$35",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Navy Blue",
        colorHexa: "#000080",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748680995/fre9s4g2lhkso0ye7lrq.png"
        ),
        alt: "Sanders Linen Pants with Elastic Waist - Navy Blue",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: false },
          { id: 7, size: "2XL", available: true },
          { id: 8, size: "3XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Light Gray",
        colorHexa: "#A9A9A9",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681007/gtcgrpzvj0khds3jnvjv.png"
        ),
        alt: "Sanders Linen Pants with Elastic Waist - Light Gray",
        size: [
          { id: 9, size: "XXS", available: false },
          { id: 10, size: "XS", available: true },
          { id: 11, size: "S", available: true },
          { id: 12, size: "M", available: false },
          { id: 13, size: "L", available: true },
          { id: 14, size: "XL", available: true },
          { id: 15, size: "2XL", available: true },
          { id: 16, size: "3XL", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748768573/wcaimiv5yv43zqvjbdc1.mp4"
    )
  },
  {
    id: 45,
    name: "Straight Fit High Waist Denim Pants For Men",
    Desc: "Straight Fit High Waist Denim Pants For Men are the perfect blend of laid-back comfort and refined style. Crafted from lightweight, breathable linen, these pants are designed for all-day wear in warm climates. The elastic waistband offers a flexible, relaxed fit while maintaining a clean, modern silhouette. Ideal for casual outings, beach days, or even smart-casual events when paired with a button-down shirt, these pants provide effortless elegance with minimal effort.",
    category: "Men's Pants",
    After_Discount: "$35",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Denim Blue",
        colorHexa: "#4A6D94",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681021/kpouzyrexryfdqgay7ya.png"
        ),
        alt: "Straight Fit High Waist Denim Pants For Men - Denim Blue",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true },
          { id: 7, size: "2XL", available: true },
          { id: 8, size: "3XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748779256/rfk0uh1wlw9n9aftya2s.mp4"
    )
  },
  {
    id: 46,
    name: "Dubler Slim Fit Denim",
    Desc: "Dubler Slim Fit Denim are the perfect blend of laid-back comfort and refined style. Crafted from lightweight, breathable linen, these pants are designed for all-day wear in warm climates. The elastic waistband offers a flexible, relaxed fit while maintaining a clean, modern silhouette. Ideal for casual outings, beach days, or even smart-casual events when paired with a button-down shirt, these pants provide effortless elegance with minimal effort.",
    category: "Men's Pants",
    After_Discount: "$80",
    Pre_Discount: "$90",
    quantity: "Out Of Stock",
    images: [
      {
        id: 1,
        color: "Charcoal Black",
        colorHexa: "#757575",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681025/qfhqnnxoqpqqm8j6vp2l.png"
        ),
        alt: "Dubler Slim Fit Denim - Charcoal Black",
        size: [
          { id: 1, size: "XXS", available: false },
          { id: 2, size: "XS", available: false },
          { id: 3, size: "S", available: false },
          { id: 4, size: "M", available: false },
          { id: 5, size: "L", available: false },
          { id: 6, size: "XL", available: false },
          { id: 7, size: "2XL", available: false },
          { id: 8, size: "3XL", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748779256/rfk0uh1wlw9n9aftya2s.mp4"
    )
  },
  {
    id: 47,
    name: "Regular Fit Twill Cargo Pants With Elastic Waist",
    Desc: "The Regular Fit Twill Cargo Pants with Elastic Waist combine comfort, practicality, and style in one versatile piece. Made from durable twill fabric, these pants offer a relaxed fit with ample room through the thighs and legs, providing freedom of movement. The elastic waistband ensures a snug, adjustable fit for all-day comfort. With multiple functional pockets, including side cargo pockets, these pants are designed to carry your essentials while giving you a laid-back, utilitarian look.",
    category: "Men's Pants",
    After_Discount: "$20",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681029/dr6musqnoqlks7l4brq9.png"
        ),
        alt: "Regular Fit Twill Cargo Pants With Elastic Waist - Black",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: false },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true },
          { id: 7, size: "2XL", available: true },
          { id: 8, size: "3XL", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748779783/lrz5y6diigr7ldsoyfbn.mp4"
    )
  },
  {
    id: 48,
    name: "Denim Jogger",
    Desc: "The Denim Jogger is a modern fusion of streetwear comfort and classic denim style. Designed with a relaxed fit and tapered leg, it offers the laid-back ease of joggers while retaining the rugged appeal of jeans. Made from soft, stretchable denim, it features an elastic waistband with a drawstring for a customized fit, along with elastic cuffs at the ankles for a sporty silhouette.",
    category: "Men's Pants",
    After_Discount: "$50",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Gray",
        colorHexa: "#4C4C4C",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681121/u7jplenh56fpoh3f6kpk.png"
        ),
        alt: "Denim Jogger - Dark Gray",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: false },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true },
          { id: 7, size: "2XL", available: false },
          { id: 8, size: "3XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748779892/fi5pcaj6eoa9zjrildjw.mp4"
    )
  },
  {
    id: 49,
    name: "Poplin Pants For Women",
    Desc: "Poplin Pants for Women combine lightweight comfort with a refined, tailored look. Crafted from smooth, breathable poplin fabric, these pants offer a crisp finish that drapes beautifully and feels soft against the skin. Designed for everyday elegance, they typically feature a mid-to-high waist, a relaxed or tapered leg, and minimal detailing, making them perfect for both casual and semi-formal wear.",
    category: "Women's Pants",
    After_Discount: "$89",
    Pre_Discount: "$100",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681148/tsckc4d4ja0w1im7vzid.png"
        ),
        alt: "Poplin Pants For Women - Black",
        size: [
          { id: 1, size: "XS", available: false },
          { id: 2, size: "S", available: true },
          { id: 3, size: "M", available: true },
          { id: 4, size: "L", available: true },
          { id: 5, size: "XL", available: true },
          { id: 6, size: "2XL", available: true },
          { id: 7, size: "3XL", available: true },
          { id: 8, size: "4XL", available: false }
        ]
      },
      {
        id: 2,
        color: "Light Orange",
        colorHexa: "#FFA07A",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681156/mc331ee958xkkkc4t3tc.png"
        ),
        alt: "Poplin Pants For Women - Light Orange",
        size: [
          { id: 9, size: "XS", available: true },
          { id: 10, size: "S", available: true },
          { id: 11, size: "M", available: false },
          { id: 12, size: "L", available: true },
          { id: 13, size: "XL", available: true },
          { id: 14, size: "2XL", available: true },
          { id: 15, size: "3XL", available: false },
          { id: 16, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748780984/gyg5q09d9plxrtnpx3vn.mp4"
    )
  },
  {
    id: 50,
    name: "Crisp Comfort Trousers",
    Desc: "Crisp Comfort Trousers combine lightweight comfort with a refined, tailored look. Crafted from smooth, breathable poplin fabric, these pants offer a crisp finish that drapes beautifully and feels soft against the skin. Designed for everyday elegance, they typically feature a mid-to-high waist, a relaxed or tapered leg, and minimal detailing, making them perfect for both casual and semi-formal wear.",
    category: "Women's Pants",
    After_Discount: "$119",
    Pre_Discount: "$130",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Light Green",
        colorHexa: "#C4D0A2",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681171/jgwd3dhm0s9lzldkq2z8.png"
        ),
        alt: "Crisp Comfort Trousers - Light Green",
        size: [
          { id: 1, size: "XS", available: true },
          { id: 2, size: "S", available: true },
          { id: 3, size: "M", available: false },
          { id: 4, size: "L", available: true },
          { id: 5, size: "XL", available: true },
          { id: 6, size: "2XL", available: true },
          { id: 7, size: "3XL", available: true },
          { id: 8, size: "4XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Light Beige",
        colorHexa: "#BFB987",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681185/xxhy7dr92luutyibxdx9.png"
        ),
        alt: "Crisp Comfort Trousers - Light Beige",
        size: [
          { id: 9, size: "XS", available: true },
          { id: 10, size: "S", available: true },
          { id: 11, size: "M", available: true },
          { id: 12, size: "L", available: true },
          { id: 13, size: "XL", available: true },
          { id: 14, size: "2XL", available: true },
          { id: 15, size: "3XL", available: true },
          { id: 16, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748781980/lczufe8sjvxvt4c7vldw.mp4"
    )
  },
  {
    id: 51,
    name: "Straight Fit High Waist Denim Pants For Women",
    Desc: "Straight Fit High Waist Denim Pants For Women deliver the perfect balance between structure and softness. Tailored for a flattering fit, these trousers are crafted from lightweight, breathable fabric with a smooth, crisp finish. The design offers all-day comfort without sacrificing style—ideal for workdays, weekends, and everything in between. With clean lines and a versatile silhouette, they’re a wardrobe essential for modern women seeking effortless sophistication.",
    category: "Women's Pants",
    After_Discount: "$45",
    Pre_Discount: "$50",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Denim Blue",
        colorHexa: "#3B5878",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681210/rc2mz0axii5h7o4atu55.png"
        ),
        alt: "Straight Fit High Waist Denim Pants For Women - Denim Blue",
        size: [
          { id: 1, size: "XS", available: true },
          { id: 2, size: "S", available: false },
          { id: 3, size: "M", available: true },
          { id: 4, size: "L", available: true },
          { id: 5, size: "XL", available: true },
          { id: 6, size: "2XL", available: true },
          { id: 7, size: "3XL", available: false },
          { id: 8, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748783451/u2qtem8fay5shthnzcqi.mp4"
    )
  },
  {
    id: 52,
    name: "Straight Fit High Waist Twill Pants",
    Desc: "Step into timeless elegance with our Straight Fit High Waist Twill Pants — the perfect blend of structure and comfort. Featuring a flattering high-rise waist and a clean straight-leg cut, these pants are crafted from durable, soft-touch twill fabric for a sophisticated look that moves with you.",
    category: "Women's Pants",
    After_Discount: "$75",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Whisper Blue",
        colorHexa: "#F8FBFD",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681217/uhuv4j3zhmld7jmzoviq.png"
        ),
        alt: "Straight Fit High Waist Twill Pants - Whisper Blue",
        size: [
          { id: 1, size: "XS", available: true },
          { id: 2, size: "S", available: true },
          { id: 3, size: "M", available: true },
          { id: 4, size: "L", available: true },
          { id: 5, size: "XL", available: false },
          { id: 6, size: "2XL", available: true },
          { id: 7, size: "3XL", available: true },
          { id: 8, size: "4XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681224/nyzpxndgcu7d2zvaewbi.png"
        ),
        alt: "Straight Fit High Waist Twill Pants - Black",
        size: [
          { id: 9, size: "XS", available: true },
          { id: 10, size: "S", available: true },
          { id: 11, size: "M", available: false },
          { id: 12, size: "L", available: false },
          { id: 13, size: "XL", available: true },
          { id: 14, size: "2XL", available: true },
          { id: 15, size: "3XL", available: true },
          { id: 16, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748784684/kuoshqbwmzu3ex5gfozo.mp4"
    )
  },
  {
    id: 53,
    name: "Stretch Jersey Leggings",
    Desc: "Embrace comfort and style with Stretch Jersey Leggings, the perfect choice for both relaxation and fashion. Crafted from stretchy jersey fabric, these leggings offer high flexibility, ensuring freedom of movement and all-day comfort. Designed to hug the body, they provide a sleek and chic look, making them ideal for workouts or everyday wear.",
    category: "Women's Pants",
    After_Discount: "$40",
    Pre_Discount: "$55",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681281/mzhitmj5giwanvmxcswi.png"
        ),
        alt: "Stretch Jersey Leggings - Black",
        size: [
          { id: 1, size: "XS", available: true },
          { id: 2, size: "S", available: true },
          { id: 3, size: "M", available: true },
          { id: 4, size: "L", available: true },
          { id: 5, size: "XL", available: false },
          { id: 6, size: "2XL", available: true },
          { id: 7, size: "3XL", available: true },
          { id: 8, size: "4XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748784647/wtuaipcyu09xz9nnwrrd.mp4"
    )
  },
  {
    id: 54,
    name: "Stretch Jersey Wide Leg Leggings",
    Desc: "Experience ultimate comfort and style with the Stretch Jersey Wide Leg Leggings. Designed with a loose, relaxed fit, these leggings are perfect for those who crave both flexibility and a trendy look. Made from stretchy jersey fabric, they offer excellent stretch and breathability, allowing you to move freely while staying chic. Ideal for casual days, lounging, or layering over workout gear.",
    category: "Women's Pants",
    After_Discount: "$40",
    Pre_Discount: "$45",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Red",
        colorHexa: "#660000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681299/qqxvbrin5l5laxmcpdrg.png"
        ),
        alt: "Stretch Jersey Wide Leg Leggings - Dark Red",
        size: [
          { id: 1, size: "XS", available: true },
          { id: 2, size: "S", available: true },
          { id: 3, size: "M", available: true },
          { id: 4, size: "L", available: true },
          { id: 5, size: "XL", available: true },
          { id: 6, size: "2XL", available: true },
          { id: 7, size: "3XL", available: true },
          { id: 8, size: "4XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681313/qtvmqqufb3m7nlmhyyh6.png"
        ),
        alt: "Stretch Jersey Wide Leg Leggings - Black",
        size: [
          { id: 9, size: "XS", available: true },
          { id: 10, size: "S", available: true },
          { id: 11, size: "M", available: true },
          { id: 12, size: "L", available: true },
          { id: 13, size: "XL", available: true },
          { id: 14, size: "2XL", available: true },
          { id: 15, size: "3XL", available: true },
          { id: 16, size: "4XL", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748785443/vztg8yui1f04zvpmsoj9.mp4"
    )
  },
  {
    id: 55,
    name: "Small Tote Bag",
    Desc: "A compact and stylish tote bag, perfect for daily essentials. Made from durable materials with sturdy handles, it’s ideal for quick errands, casual outings, or a light day at work. Lightweight, easy to carry, and available in a variety of colors to match your vibe.",
    category: "Women's Bags",
    After_Discount: "$105",
    Pre_Discount: "$115",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Red",
        colorHexa: "#660000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681324/hxxcmvgwk73cjzyr8iul.png"
        ),
        alt: "Small Tote Bag - Dark Red",
        size: [
          { id: 1, width: 20, height: 15, available: false },
          { id: 2, width: 22, height: 16, available: true },
          { id: 3, width: 22.5, height: 17, available: true },
          { id: 4, width: 23, height: 18, available: true },
          { id: 5, width: 23.5, height: 18.5, available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748787705/ue5y499amkjskdyamnkl.mp4"
    )
  },
  {
    id: 56,
    name: "Gucci Jackie 1961 Small Leather Shoulder Bag",
    Desc: "A timeless icon reimagined — the Gucci Jackie 1961 Small Leather Shoulder Bag blends vintage charm with modern sophistication. Crafted from premium leather, it features the signature piston closure, sleek curves, and a versatile silhouette. Perfect for day-to-night styling, this bag brings a touch of heritage elegance to any outfit.",
    category: "Women's Bags",
    After_Discount: "$350",
    Pre_Discount: "$400",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Red",
        colorHexa: "#660000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681340/ul3z9wzf2gdmqvauvqil.png"
        ),
        alt: "Gucci Jackie 1961 Small Leather Shoulder Bag - Dark Red",
        size: [
          { id: 1, width: 25, height: 15, available: false },
          { id: 2, width: 26, height: 16, available: true },
          { id: 3, width: 27, height: 17, available: false },
          { id: 4, width: 28, height: 18, available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748788070/iuxkypw5iqdxgjh3xxq5.mp4"
    )
  },
  {
    id: 57,
    name: "Khaki Escape Bag",
    Desc: "Designed for the free spirit, the Khaki Escape Bag combines rugged style with everyday functionality. Made from durable fabric in a versatile khaki shade, it’s ideal for weekend getaways, gym runs, or daily carry. Spacious, lightweight, and built to move with you — your go-to companion for spontaneous escapes.",
    category: "Women's Bags",
    After_Discount: "$299",
    Pre_Discount: "$350",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Khaki",
        colorHexa: "#4A402D",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681831/c0gft7296zk2oq8eld2u.png"
        ),
        alt: "Khaki Escape Bag - Dark Khaki",
        size: [
          { id: 1, width: 35, height: 28, available: false },
          { id: 2, width: 37, height: 28, available: true },
          { id: 3, width: 38, height: 28.5, available: true },
          { id: 4, width: 39, height: 29, available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748789122/vijghaxvkyjjrp6bprjj.mp4"
    )
  },
  {
    id: 58,
    name: "Dior Mini Saddle Bag",
    Desc: "A fashion icon in compact form — the Dior Mini Saddle Bag brings elegance and edge in one signature silhouette. Crafted from premium materials with the iconic 'D' stirrup magnetic clasp and saddle curves, this mini bag redefines statement luxury. Perfect for carrying just the essentials with bold Parisian flair.",
    category: "Women's Bags",
    After_Discount: "$2200",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Navy",
        colorHexa: "#3D0C57",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681391/zf2kwktowzelzgmob2ng.png"
        ),
        alt: "Dior Mini Saddle Bag - Dark Navy",
        size: [
          { id: 1, width: 25, height: 15, available: false },
          { id: 2, width: 26, height: 16, available: true },
          { id: 3, width: 27, height: 17, available: false },
          { id: 4, width: 28, height: 18, available: true }
        ]
      },
      {
        id: 2,
        color: "Dark Red",
        colorHexa: "#8B0000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681402/h1llg8fubitkqkbmv5k7.png"
        ),
        alt: "Dior Mini Saddle Bag - Dark Red",
        size: [
          { id: 5, width: 25, height: 15, available: true },
          { id: 6, width: 26, height: 16, available: true },
          { id: 7, width: 27, height: 17, available: true },
          { id: 8, width: 28, height: 18, available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748789350/mi1ifqdhtoontor05fxk.mp4"
    )
  },
  {
    id: 59,
    name: "Gucci Raffia Jackie 1961 Hobo Bag",
    Desc: "A fresh twist on a timeless icon — the Gucci Raffia Jackie 1961 Hobo Bag blends vintage sophistication with breezy, modern flair. Handcrafted in natural raffia with signature leather trim and the iconic piston closure, this bag offers effortless elegance with a laid-back edge. Lightweight yet luxurious, it’s your perfect companion for sunny days and upscale escapes.",
    category: "Women's Bags",
    After_Discount: "$1499",
    Pre_Discount: "$1600",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Violet",
        colorHexa: "#1B0032",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681864/rmbajhsdgkazf1pkuwfk.png"
        ),
        alt: "Gucci Raffia Jackie 1961 Hobo Bag - Dark Violet",
        size: [
          { id: 1, width: 25, height: 18, available: true },
          { id: 2, width: 26, height: 18, available: true },
          { id: 3, width: 27, height: 19, available: true },
          { id: 4, width: 28, height: 19, available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748789649/dznspovmj5rqm2fdo4wj.mp4"
    )
  },
  {
    id: 60,
    name: "Valentino Garavani VSling Mini Shoulder Bag – Iconic Luxury",
    Desc: "Elevate your style with Valentino Garavani's “VSLING” mini shoulder bag, adorned with dazzling rhinestones and VLogo Signature closure. Versatile and chic, it can be worn as a crossbody, shoulder bag, or carried by hand using the top handle.",
    category: "Women's Bags",
    After_Discount: "$3780",
    Pre_Discount: "$4000",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Silver",
        colorHexa: "#C0C0C0",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681912/izdzdvcrg2sqjbdvdvkp.png"
        ),
        alt: "Valentino Garavani VSling Mini Shoulder Bag – Iconic Luxury - Silver",
        size: [
          { id: 1, width: 18, height: 14, available: true },
          { id: 2, width: 19, height: 15, available: true },
          { id: 3, width: 20, height: 16, available: false },
          { id: 4, width: 21, height: 17, available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748790314/tqwkvvg12bldqwpf2uto.mp4"
    )
  },
  {
    id: 61,
    name: "Gucci Horsebit GG Canvas Slingback Pumps",
    Desc: "The Gucci Horsebit GG Canvas Slingback Pumps are a perfect blend of classic elegance and contemporary style. Crafted from the iconic GG canvas, these pumps feature a beige and brown design with leather accents, offering a sophisticated and luxurious look. The signature horsebit detail in gold-tone metal adds a touch of opulence to the overall aesthetic.",
    category: "Women's Shoes",
    After_Discount: "$649",
    Pre_Discount: "$700",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Light Copper",
        colorHexa: "#C1A78F",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681926/vtja7pagnwl1mr7nma10.png"
        ),
        alt: "Gucci Horsebit GG Canvas Slingback Pumps - Light Copper",
        size: [
          { id: 1, size: "36", available: true },
          { id: 2, size: "37", available: true },
          { id: 3, size: "38", available: false },
          { id: 4, size: "39", available: true },
          { id: 5, size: "40", available: false },
          { id: 6, size: "41", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748791126/eawr6kzv7usbchrk8v36.mp4"
    )
  },
  {
    id: 62,
    name: "Aquazzura Crystal Crush Satin Slingback Pumps",
    Desc: "The Aquazzura Crystal Crush Satin Slingback Pumps are a glamorous and elegant pair of heels, featuring luxurious satin fabric and sparkling crystal embellishments. These pumps are designed to add a touch of sophistication and sparkle to any outfit. Perfect for formal events or evening wear, the crystal details create an eye-catching effect, while the satin finish gives them a smooth and refined look. The slingback design ensures both comfort and style.",
    category: "Women's Shoes",
    After_Discount: "$552",
    Pre_Discount: "$920",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681947/lclfgrijezpbwxvhfi9p.png"
        ),
        alt: "Aquazzura Crystal Crush Satin Slingback Pumps - Black",
        size: [
          { id: 1, size: "36", available: false },
          { id: 2, size: "37", available: true },
          { id: 3, size: "38", available: true },
          { id: 4, size: "39", available: true },
          { id: 5, size: "40", available: true },
          { id: 6, size: "41", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748791558/ed7hpiufhdypymdnoqb9.mp4"
    )
  },
  {
    id: 63,
    name: "Gucci Re-Motion Suede-Trimmed Sneakers",
    Desc: "Gucci Re-Motion Suede-Trimmed Sneakers offer a refined blend of contemporary design and classic craftsmanship. Constructed using eco-conscious materials, these sneakers feature smooth fabric uppers accented with luxurious suede trims, delivering both style and sustainability. The streamlined silhouette is enhanced with subtle Gucci branding, while the supportive rubber sole ensures day-long comfort and traction.",
    category: "Women's Shoes",
    After_Discount: "$755",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Dark Red",
        colorHexa: "#8B0000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681954/uf9lftvmiwdxsqots9m3.png"
        ),
        alt: " Gucci Re-Motion Suede-Trimmed Sneakers - Dark Red",
        size: [
          { id: 1, size: "36", available: true },
          { id: 2, size: "37", available: true },
          { id: 3, size: "38", available: false },
          { id: 4, size: "39", available: true },
          { id: 5, size: "40", available: true },
          { id: 6, size: "41", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748791365/ktbescsyc4x5cmm5szm9.mp4"
    )
  },
  {
    id: 64,
    name: "Prada Brushed Leather Strap Mary Janes",
    Desc: "Prada Brushed Leather Strap Mary Janes offer a refined blend of contemporary design and classic craftsmanship. Constructed using eco-conscious materials, these sneakers feature smooth fabric uppers accented with luxurious suede trims, delivering both style and sustainability. The streamlined silhouette is enhanced with subtle Gucci branding, while the supportive rubber sole ensures day-long comfort and traction.",
    category: "Women's Shoes",
    After_Discount: "$950",
    Pre_Discount: "$1000",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748681981/rdho3vwnuzfv5poijfa9.png"
        ),
        alt: "Prada Brushed Leather Strap Mary Janes - Black",
        size: [
          { id: 1, size: "36", available: true },
          { id: 2, size: "37", available: true },
          { id: 3, size: "38", available: false },
          { id: 4, size: "39", available: true },
          { id: 5, size: "40", available: false },
          { id: 6, size: "41", available: false }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748791003/urk4wmrutobscueli4dd.mp4"
    )
  },
  {
    id: 65,
    name: "Gucci Tennis 1977 Canvas Sneakers",
    Desc: "Gucci Tennis 1977 Canvas Sneakers offer a refined blend of contemporary design and classic craftsmanship. Constructed using eco-conscious materials, these sneakers feature smooth fabric uppers accented with luxurious suede trims, delivering both style and sustainability. The streamlined silhouette is enhanced with subtle Gucci branding, while the supportive rubber sole ensures day-long comfort and traction.",
    category: "Women's Shoes",
    After_Discount: "$545",
    Pre_Discount: null,
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Light Copper",
        colorHexa: "#C1A78F",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682000/fm1qqibodcg2ms1ekxob.png"
        ),
        alt: "Gucci Tennis 1977 Canvas Sneakers - Light Copper",
        size: [
          { id: 1, size: "36", available: false },
          { id: 2, size: "37", available: true },
          { id: 3, size: "38", available: true },
          { id: 4, size: "39", available: false },
          { id: 5, size: "40", available: true },
          { id: 6, size: "41", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748791434/bjappvuqb2or7cy6cgc4.mp4"
    )
  },
  {
    id: 66,
    name: "Gucci Jordaan Leather Boots",
    Desc: "Timeless sophistication meets modern edge with the Gucci Jordaan leather boots. Crafted from premium leather, these sleek boots reinterpret the classic equestrian silhouette with a contemporary twist. Featuring the iconic horsebit detail and a streamlined design, they deliver understated luxury and all-day comfort. Whether you're dressing up for a formal occasion or elevating your everyday look, the Jordaan boots are a wardrobe staple that speaks fluent style.",
    category: "Women's Shoes",
    After_Discount: "$1255",
    Pre_Discount: "$1300",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Black",
        colorHexa: "#000000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682083/uvoj20irq6rvw8dbwoih.png"
        ),
        alt: "Gucci Jordaan Leather Boots - Black",
        size: [
          { id: 1, size: "36", available: true },
          { id: 2, size: "37", available: true },
          { id: 3, size: "38", available: true },
          { id: 4, size: "39", available: true },
          { id: 5, size: "40", available: true },
          { id: 6, size: "41", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748794990/p1lro9pgpr2q4qogl2ou.mp4"
    )
  },
  {
    id: 67,
    name: "Kids Boys Summer Shorts Set Short Sleeve Striped Top Pant Casual Outfits 0-4T",
    Desc: "This Kids Boys Summer Shorts Set is the perfect casual outfit for little ones during warm weather. It includes a short-sleeve, striped top paired with comfortable shorts, making it a great combination for both playtime and outings. The set is designed for boys aged 0-4T, ensuring a comfortable and breathable fit for Kidss. The vibrant stripes on the top add a fun and stylish touch, while the shorts provide ease of movement. Ideal for casual summer days, this set is a must-have for your Kids's wardrobe.",
    category: "Kids Clothing",
    subCategory: "Kids Boys",
    After_Discount: "$25",
    Pre_Discount: "$30",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Teal",
        colorHexa: "#4C8C8C",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682130/a72hwl0kf9vcteck9bie.png"
        ),
        alt: "Kids Boys Summer Shorts Set Short Sleeve Striped Top Pant Casual Outfits 0-4 - Teal",
        size: [
          { id: 1, size: "XXS", available: true },
          { id: 2, size: "XS", available: false },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: false },
          { id: 6, size: "XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Blue",
        colorHexa: "#5C8DAD",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682147/rzdc037dnnubbiv279b6.png"
        ),
        alt: "Kids Boys Summer Shorts Set Short Sleeve Striped Top Pant Casual Outfits 0-4 - Blue",
        size: [
          { id: 7, size: "XXS", available: true },
          { id: 8, size: "XS", available: true },
          { id: 9, size: "S", available: true },
          { id: 10, size: "M", available: true },
          { id: 11, size: "L", available: true },
          { id: 12, size: "XL", available: true }
        ]
      },
      {
        id: 3,
        color: "Burnt Umber",
        colorHexa: "#8A3324",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682162/xdkorjnyq9mexfywzosn.png"
        ),
        alt: "Kids Boys Summer Shorts Set Short Sleeve Striped Top Pant Casual Outfits 0-4 - Burnt Umber",
        size: [
          { id: 13, size: "XXS", available: true },
          { id: 14, size: "XS", available: false },
          { id: 15, size: "S", available: true },
          { id: 16, size: "M", available: true },
          { id: 17, size: "L", available: true },
          { id: 18, size: "XL", available: false }
        ]
      }
    ],
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
    After_Discount: "$12",
    Pre_Discount: "$24",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Navy Blue",
        colorHexa: "#000080",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682237/mlghruwluguddsw69hex.png"
        ),
        alt: "Baby And Kids Boys Print Poplin Button Up Shirt - Navy Blue",
        size: [
          { id: 1, size: "XXS", available: false },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: false },
          { id: 6, size: "XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Mint Aqua",
        colorHexa: "#66FFCC",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682240/uvmmu3n4ixwq3dg6abrz.png"
        ),
        alt: "Baby And Kids Boys Print Poplin Button Up Shirt - Mint Aqua",
        size: [
          { id: 7, size: "XXS", available: true },
          { id: 8, size: "XS", available: true },
          { id: 9, size: "S", available: true },
          { id: 10, size: "M", available: false },
          { id: 11, size: "L", available: true },
          { id: 12, size: "XL", available: true }
        ]
      },
      {
        id: 3,
        color: "Light Gray",
        colorHexa: "#D3D3D3",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682257/per20kozzyvgavzambtu.png"
        ),
        alt: "Baby And Kids Boys Print Poplin Button Up Shirt - Light Gray",
        size: [
          { id: 13, size: "XXS", available: true },
          { id: 14, size: "XS", available: false },
          { id: 15, size: "S", available: true },
          { id: 16, size: "M", available: true },
          { id: 17, size: "L", available: true },
          { id: 18, size: "XL", available: false }
        ]
      }
    ],
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
    After_Discount: "$15",
    Pre_Discount: "$24",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Pink",
        colorHexa: "#FFC0CB",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682272/ufvo35ycuh8mtu5jnxpj.png"
        ),
        alt: "Kids Girls Floral Bow Back Ruffle Dress - Pink",
        size: [
          { id: 1, size: "XXS", available: false },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: false },
          { id: 6, size: "XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Mint Aqua",
        colorHexa: "#66FFCC",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682284/rbbn0m3sdhl9e0o2ibfi.png"
        ),
        alt: "Kids Girls Floral Bow Back Ruffle Dress - Mint Aqua",
        size: [
          { id: 7, size: "XXS", available: true },
          { id: 8, size: "XS", available: true },
          { id: 9, size: "S", available: true },
          { id: 10, size: "M", available: false },
          { id: 11, size: "L", available: true },
          { id: 12, size: "XL", available: false }
        ]
      }
    ],
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
    After_Discount: "$10",
    Pre_Discount: "$15",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Light Denim",
        colorHexa: "#B0D0F0",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682310/nk3knjiq3s22fx8sqeb2.png"
        ),
        alt: "Baby And Kids Girls Chambray Pull On Shorts - Light Denim",
        size: [
          { id: 1, size: "XXS", available: false },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: false },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Dark Denim",
        colorHexa: "#3D5A80",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682327/yzrhnpo1dn1op9hkbz95.png"
        ),
        alt: "Baby And Kids Girls Chambray Pull On Shorts - Dark Denim",
        size: [
          { id: 7, size: "XXS", available: true },
          { id: 8, size: "XS", available: false },
          { id: 9, size: "S", available: true },
          { id: 10, size: "M", available: false },
          { id: 11, size: "L", available: true },
          { id: 12, size: "XL", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748797700/dkc37cspdeixh8twmrzx.mp4"
    )
  },
  {
    id: 71,
    name: "Baby And Kids Boys Windbreaker Jacket",
    Desc: "Stay stylish and protected with this Baby and Kids Boys Windbreaker Jacket. Designed to shield your little one from the elements, this lightweight jacket is made from wind-resistant fabric, ensuring they stay warm and cozy on breezy days. Featuring a full-zip front, an adjustable hood, and elastic cuffs, it offers both comfort and flexibility. The bright colors and sporty design make it an ideal choice for outdoor adventures or casual outings.",
    category: "Kids Clothing",
    subCategory: "Kids Boys",
    After_Discount: "$35",
    Pre_Discount: "$40",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Navy Blue",
        colorHexa: "#000066",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682368/gqwir9g3asfzbbea4mhl.png"
        ),
        alt: "Baby And Kids Boys Windbreaker Jacket - Navy Blue",
        size: [
          { id: 1, size: "XXS", available: false },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Black",
        colorHexa: "#000000",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682381/hqctsx5wqukcuasknfen.png"
        ),
        alt: "Baby And Kids Boys Windbreaker Jacket - Black",
        size: [
          { id: 7, size: "XXS", available: false },
          { id: 8, size: "XS", available: false },
          { id: 9, size: "S", available: false },
          { id: 10, size: "M", available: false },
          { id: 11, size: "L", available: false },
          { id: 12, size: "XL", available: false }
        ]
      }
    ],
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
    After_Discount: "$6.78",
    Pre_Discount: "$16.95",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Tan",
        colorHexa: "#D2B48C",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682405/ik3ki4lczssfsbvkvit5.png"
        ),
        alt: "Baby And Kids Boys Pull On Jogger Shorts - Tan",
        size: [
          { id: 1, size: "XXS", available: false },
          { id: 2, size: "XS", available: true },
          { id: 3, size: "S", available: true },
          { id: 4, size: "M", available: true },
          { id: 5, size: "L", available: true },
          { id: 6, size: "XL", available: true }
        ]
      },
      {
        id: 2,
        color: "Navy Blue",
        colorHexa: "#000080",
        quantity: "Out Of Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682420/vew3sm6adc6usfewiklf.png"
        ),
        alt: "Baby And Kids Boys Pull On Jogger Shorts - Navy Blue",
        size: [
          { id: 7, size: "XXS", available: false },
          { id: 8, size: "XS", available: false },
          { id: 9, size: "S", available: false },
          { id: 10, size: "M", available: false },
          { id: 11, size: "L", available: false },
          { id: 12, size: "XL", available: false }
        ]
      },
      {
        id: 3,
        color: "Light Gray",
        colorHexa: "#D3D3D3",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682448/wsmwne0jtrpsunephxo2.png"
        ),
        alt: "Baby And Kids Boys Pull On Jogger Shorts - Light Gray",
        size: [
          { id: 13, size: "XXS", available: true },
          { id: 14, size: "XS", available: true },
          { id: 15, size: "S", available: true },
          { id: 16, size: "M", available: false },
          { id: 17, size: "L", available: true },
          { id: 18, size: "XL", available: true }
        ]
      }
    ],
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
    After_Discount: "$3.45",
    Pre_Discount: "$10.45",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Olive",
        colorHexa: "#808000",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682462/kubfnkzqsnuuk32naxf3.png"
        ),
        alt: "Kids Boys Print Slides - Olive",
        size: [
          { id: 1, size: "20", available: true },
          { id: 2, size: "21", available: true },
          { id: 3, size: "22", available: false },
          { id: 4, size: "23", available: true },
          { id: 5, size: "24", available: true },
          { id: 6, size: "25", available: true },
          { id: 7, size: "26", available: false },
          { id: 8, size: "27", available: true },
          { id: 9, size: "28", available: true },
          { id: 10, size: "29", available: true },
          { id: 11, size: "30", available: true },
          { id: 12, size: "31", available: false },
          { id: 13, size: "32", available: true },
          { id: 14, size: "33", available: true },
          { id: 15, size: "34", available: false },
          { id: 16, size: "35", available: true }
        ]
      },
      {
        id: 2,
        color: "Tan",
        colorHexa: "#D2B48C",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682475/unmjm4mhqbgv8vzkhlic.png"
        ),
        alt: "Kids Boys Print Slides - Tan",
        size: [
          { id: 17, size: "20", available: true },
          { id: 18, size: "21", available: true },
          { id: 19, size: "22", available: false },
          { id: 20, size: "23", available: true },
          { id: 21, size: "24", available: true },
          { id: 22, size: "25", available: true },
          { id: 23, size: "26", available: false },
          { id: 24, size: "27", available: true },
          { id: 25, size: "28", available: false },
          { id: 26, size: "29", available: true },
          { id: 27, size: "30", available: true },
          { id: 28, size: "31", available: true },
          { id: 29, size: "32", available: false },
          { id: 30, size: "33", available: true },
          { id: 31, size: "34", available: true },
          { id: 32, size: "35", available: true }
        ]
      }
    ],
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
    After_Discount: "$21.48",
    Pre_Discount: "$42.59",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Pink",
        colorHexa: "#FFC0CB",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682477/pefkhnpfdxv9szewvpm2.png"
        ),
        alt: "Kids Girls Colorblock Running Sneakers - Pink",
        size: [
          { id: 1, size: "20", available: true },
          { id: 2, size: "21", available: false },
          { id: 3, size: "22", available: true },
          { id: 4, size: "23", available: false },
          { id: 5, size: "24", available: false },
          { id: 6, size: "25", available: true },
          { id: 7, size: "26", available: false },
          { id: 8, size: "27", available: true },
          { id: 9, size: "28", available: true },
          { id: 10, size: "29", available: true },
          { id: 11, size: "30", available: true },
          { id: 12, size: "31", available: false },
          { id: 13, size: "32", available: true },
          { id: 14, size: "33", available: true },
          { id: 15, size: "34", available: false },
          { id: 16, size: "35", available: true }
        ]
      }
    ],
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
    After_Discount: "$11.48",
    Pre_Discount: "$22.95",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Navy Blue",
        colorHexa: "#000080",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682488/rbexwwszmkbrju2sly9d.png"
        ),
        alt: "Kids Water Shoes - Navy Blue",
        size: [
          { id: 1, size: "20", available: false },
          { id: 2, size: "21", available: true },
          { id: 3, size: "22", available: false },
          { id: 4, size: "23", available: false },
          { id: 5, size: "24", available: true },
          { id: 6, size: "25", available: true },
          { id: 7, size: "26", available: false },
          { id: 8, size: "27", available: true },
          { id: 9, size: "28", available: true },
          { id: 10, size: "29", available: true },
          { id: 11, size: "30", available: true },
          { id: 12, size: "31", available: true },
          { id: 13, size: "32", available: false },
          { id: 14, size: "33", available: true },
          { id: 15, size: "34", available: true },
          { id: 16, size: "35", available: false }
        ]
      }
    ],
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
    After_Discount: "$13.77",
    Pre_Discount: "$22.95",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Deep Pink",
        colorHexa: "#FF1493",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682498/bu3iienbeaeqchwbm9p7.png"
        ),
        alt: "Kids Girls Rainbow Ombre Water Shoes - Deep Pink",
        size: [
          { id: 1, size: "20", available: false },
          { id: 2, size: "21", available: true },
          { id: 3, size: "22", available: false },
          { id: 4, size: "23", available: false },
          { id: 5, size: "24", available: true },
          { id: 6, size: "25", available: true },
          { id: 7, size: "26", available: false },
          { id: 8, size: "27", available: true },
          { id: 9, size: "28", available: true },
          { id: 10, size: "29", available: true },
          { id: 11, size: "30", available: true },
          { id: 12, size: "31", available: true },
          { id: 13, size: "32", available: false },
          { id: 14, size: "33", available: true },
          { id: 15, size: "34", available: true },
          { id: 16, size: "35", available: false }
        ]
      }
    ],
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
    After_Discount: "$10.17",
    Pre_Discount: "$16.95",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Tan",
        colorHexa: "#D2B48C",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682520/pn4knai90yhii1jjbtsr.png"
        ),
        alt: "Kids Girls Striped Flip Flops - Tan",
        size: [
          { id: 1, size: "20", available: true },
          { id: 2, size: "21", available: true },
          { id: 3, size: "22", available: true },
          { id: 4, size: "23", available: true },
          { id: 5, size: "24", available: false },
          { id: 6, size: "25", available: true },
          { id: 7, size: "26", available: false },
          { id: 8, size: "27", available: true },
          { id: 9, size: "28", available: true },
          { id: 10, size: "29", available: true },
          { id: 11, size: "30", available: true },
          { id: 12, size: "31", available: true },
          { id: 13, size: "32", available: true },
          { id: 14, size: "33", available: true },
          { id: 15, size: "34", available: true },
          { id: 16, size: "35", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748844673/hf08corc1qy3hhzcfg4k.mp4"
    )
  },
  {
    id: 78,
    name: "Kids Girls Paint Splatter Buckle Slides",
    Desc: "These open-toe slides for Kids girls feature a stylish and fun design with a vibrant paint splatter pattern, adding a unique artistic touch. The slides are equipped with an adjustable buckle strap for a secure and comfortable fit, ensuring your little one’s feet stay in place while walking. Made from lightweight and durable materials, these slides combine comfort and style, making them perfect for everyday wear.",
    category: "Kids Shoes",
    subCategory: "Kids Girls",
    After_Discount: "$14.96",
    Pre_Discount: "$19.95",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "White",
        colorHexa: "#FFFFFF",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682528/zvqvpmhtfp24biy8sw9l.png"
        ),
        alt: "Kids Girls Paint Splatter Buckle Slides - White",
        size: [
          { id: 1, size: "20", available: true },
          { id: 2, size: "21", available: false },
          { id: 3, size: "22", available: false },
          { id: 4, size: "23", available: true },
          { id: 5, size: "24", available: true },
          { id: 6, size: "25", available: true },
          { id: 7, size: "26", available: true },
          { id: 8, size: "27", available: true },
          { id: 9, size: "28", available: true },
          { id: 10, size: "29", available: true },
          { id: 11, size: "30", available: true },
          { id: 12, size: "31", available: false },
          { id: 13, size: "32", available: false },
          { id: 14, size: "33", available: true },
          { id: 15, size: "34", available: true },
          { id: 16, size: "35", available: true }
        ]
      }
    ],
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
    After_Discount: "$23.97",
    Pre_Discount: "$39.95",
    quantity: "In Stock",
    images: [
      {
        id: 1,
        color: "Off-White",
        colorHexa: "#F8F8F0",
        quantity: "In Stock",
        img: optimizeImage(
          "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748682552/noi4mdymk000ekxj2tbk.png"
        ),
        alt: "Kids Boys Colorblock Low Top Sneakers - Off-White",
        size: [
          { id: 1, size: "20", available: true },
          { id: 2, size: "21", available: true },
          { id: 3, size: "22", available: true },
          { id: 4, size: "23", available: true },
          { id: 5, size: "24", available: true },
          { id: 6, size: "25", available: true },
          { id: 7, size: "26", available: false },
          { id: 8, size: "27", available: true },
          { id: 9, size: "28", available: true },
          { id: 10, size: "29", available: true },
          { id: 11, size: "30", available: true },
          { id: 12, size: "31", available: true },
          { id: 13, size: "32", available: false },
          { id: 14, size: "33", available: false },
          { id: 15, size: "34", available: true },
          { id: 16, size: "35", available: true }
        ]
      }
    ],
    video: optimizeImage(
      "https://res.cloudinary.com/dkby0jbe3/video/upload/v1748846598/ibanlka5x46izmw1ea1j.mp4"
    )
  }
];
