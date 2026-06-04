// ===================================================
//  VehicleHub – script.js
//  3 kategori × 30 araç = 90 araç
//  Fotoğraflar: Unsplash (araç markasına uygun)
//  Fiyatlar: 2025 Türkiye piyasası
// ===================================================

const vehicles = [

  {
    id: 1, cat: "araba",
    name: "BMW M3 Competition",
    price: "5.250.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRakVd2uXS8kGi_OmMShtbgLDFbP6Jw7-whg&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "3.0L 6-Silindir Turbo",
      "Güç": "510 HP", "Vites": "8 İleri Otomatik", "Yakıt": "Benzin",
      "Renk": "Lüksenburg Mavisi", "Garanti": "2 Yıl"
    }
  },
  {
    id: 2, cat: "araba",
    name: "Mercedes-Benz C200",
    price: "3.850.000 ₺",
    img: "https://jarviscdn-prod.azureedge.net/jarvis-files-container/Modified/vehicle/652898/06ard575-1_864_47_4_16_9_4_2026.JPEG",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1.5L 4-Silindir Turbo",
      "Güç": "204 HP", "Vites": "9G-Tronic", "Yakıt": "Benzin",
      "Renk": "Obsidyen Siyah", "Garanti": "2 Yıl"
    }
  },
  {
    id: 3, cat: "araba",
    name: "Audi A4 2.0 TDI",
    price: "3.450.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQne3T-uxpKeobBwp5WuDxQtAVdxAWWaK5vpg&s",
    specs: {
      "Yıl": "2024", "Km": "12.000 km", "Motor": "2.0L Dizel Turbo",
      "Güç": "163 HP", "Vites": "7 İleri S-tronic", "Yakıt": "Dizel",
      "Renk": "Glacier Beyaz", "Garanti": "1 Yıl"
    }
  },
  {
    id: 4, cat: "araba",
    name: "Volkswagen Golf GTI",
    price: "2.200.000 ₺",
    img: "https://cdn.motor1.com/images/mgl/N7Gw9/s1/vw-golf-gti-clubsport-45.webp",
    specs: {
      "Yıl": "2023", "Km": "8.500 km", "Motor": "2.0L TSI Turbo",
      "Güç": "245 HP", "Vites": "7 DSG", "Yakıt": "Benzin",
      "Renk": "Tornado Kırmızı", "Garanti": "1 Yıl"
    }
  },
  {
    id: 5, cat: "araba",
    name: "Porsche 911 Carrera",
    price: "11.900.000 ₺",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "3.0L Boxer-6 Turbo",
      "Güç": "385 HP", "Vites": "8 PDK", "Yakıt": "Benzin",
      "Renk": "GT Gümüşü", "Garanti": "2 Yıl"
    }
  },
  {
    id: 6, cat: "araba",
    name: "Tesla Model 3",
    price: "3.100.000 ₺",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg/1280px-Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "Çift Elektrik Motoru",
      "Güç": "490 HP", "Vites": "Tek Kademe", "Yakıt": "Elektrik",
      "Renk": "Pearl Beyaz", "Batarya": "82 kWh"
    }
  },
  {
    id: 7, cat: "araba",
    name: "Toyota GR86",
    price: "1.950.000 ₺",
    img: "https://cdn.motor1.com/images/mgl/x7GYG/s1/2022-toyota-gr-86.jpg",
    specs: {
      "Yıl": "2023", "Km": "5.200 km", "Motor": "2.4L 4-Silindir",
      "Güç": "234 HP", "Vites": "6 Manuel", "Yakıt": "Benzin",
      "Renk": "Kırmızı", "Garanti": "1 Yıl"
    }
  },
  {
    id: 8, cat: "araba",
    name: "Hyundai Ioniq 5",
    price: "2.750.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcotUw7pJLX65LCCY6o3uCXOfeQ4lxvmvkgg&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "Tek Elektrik Motoru",
      "Güç": "217 HP", "Vites": "Tek Kademe", "Yakıt": "Elektrik",
      "Renk": "Matte Yeşil", "Batarya": "77.4 kWh"
    }
  },
  {
    id: 9, cat: "araba",
    name: "Ford Mustang GT",
    price: "4.200.000 ₺",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2019_Ford_Mustang_GT_5.0_facelift.jpg/1280px-2019_Ford_Mustang_GT_5.0_facelift.jpg",
    specs: {
      "Yıl": "2024", "Km": "2.100 km", "Motor": "5.0L V8",
      "Güç": "450 HP", "Vites": "10 Otomatik", "Yakıt": "Benzin",
      "Renk": "Grabber Mavi", "Garanti": "2 Yıl"
    }
  },
  {
    id: 10, cat: "araba",
    name: "Renault Megane E-Tech",
    price: "1.650.000 ₺",
    img: "https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/megane-e-tech-electrique/megane-bcb-my24/megane-bcb-my24-overview-002-desktop.jpg.ximg.xsmall.jpg/4208fc1548.jpg",
    specs: {
      "Yıl": "2023", "Km": "15.000 km", "Motor": "Elektrik",
      "Güç": "220 HP", "Vites": "Tek Kademe", "Yakıt": "Elektrik",
      "Renk": "Scheelite Sarı", "Batarya": "60 kWh"
    }
  },
  {
    id: 11, cat: "araba",
    name: "Alfa Romeo Giulia",
    price: "3.650.000 ₺",
    img: "https://cdn.otopark.com/wp-content/uploads/2020/03/1583567243_Alfa_Romeo_2-780x470.jpg",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "2.0L Turbo",
      "Güç": "280 HP", "Vites": "8 Otomatik", "Yakıt": "Benzin",
      "Renk": "Alfa Kırmızı", "Garanti": "2 Yıl"
    }
  },
  {
    id: 12, cat: "araba",
    name: "Peugeot 308 GT",
    price: "1.480.000 ₺",
    img: "https://basin.peugeot.com.tr/data/2023/1117/main.jpg",
    specs: {
      "Yıl": "2023", "Km": "22.000 km", "Motor": "1.6L Turbo",
      "Güç": "225 HP", "Vites": "8 EAT8", "Yakıt": "Benzin",
      "Renk": "Olivin Yeşili", "Garanti": "6 Ay"
    }
  },
  {
    id: 13, cat: "araba",
    name: "Kia EV6 GT",
    price: "2.980.000 ₺",
    img: "https://thedriven.io/wp-content/uploads/2024/03/Kia-EV6-feature-image.jpg",
    specs: {
      "Yıl": "2024", "Km": "1.500 km", "Motor": "Çift Elektrik",
      "Güç": "585 HP", "Vites": "Tek Kademe", "Yakıt": "Elektrik",
      "Renk": "Satin Gri", "Batarya": "77.4 kWh"
    }
  },
  {
    id: 14, cat: "araba",
    name: "Mazda MX-5 Miata",
    price: "1.750.000 ₺",
    img: "https://hips.hearstapps.com/hmg-prod/images/2024-mazda-mx-5-miata-red-white-in-motion-65b3c9d045b5a.jpg?crop=0.420xw:0.356xh;0.322xw,0.577xh&resize=1200:*",
    specs: {
      "Yıl": "2023", "Km": "7.800 km", "Motor": "2.0L 4-Silindir",
      "Güç": "184 HP", "Vites": "6 Manuel", "Yakıt": "Benzin",
      "Renk": "Kırmızı Soul", "Garanti": "1 Yıl"
    }
  },
  {
    id: 15, cat: "araba",
    name: "BMW X5 xDrive40i",
    price: "7.800.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jbvBJsFo7mMhVAdtd01ZMQAtTgw72BI95Q&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "3.0L 6-Silindir",
      "Güç": "340 HP", "Vites": "8 Steptronic", "Yakıt": "Benzin",
      "Renk": "Sophisto Gri", "Garanti": "2 Yıl"
    }
  },
  {
    id: 16, cat: "araba",
    name: "Honda Civic Type R",
    price: "2.450.000 ₺",
    img: "https://www.automoli.com/common/vehicles/_assets/img/gallery/f68/honda-civic-type-r-fk8-facelift-2020.jpg",
    specs: {
      "Yıl": "2023", "Km": "4.300 km", "Motor": "2.0L VTEC Turbo",
      "Güç": "330 HP", "Vites": "6 Manuel", "Yakıt": "Benzin",
      "Renk": "Championship Beyaz", "Garanti": "1 Yıl"
    }
  },
  {
    id: 17, cat: "araba",
    name: "Lamborghini Huracán",
    price: "45.000.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_hUNJ5FuVoGDnRf2oMlWbv7exBlaysduTA&s",
    specs: {
      "Yıl": "2023", "Km": "3.200 km", "Motor": "5.2L V10",
      "Güç": "610 HP", "Vites": "7 PDK", "Yakıt": "Benzin",
      "Renk": "Arancio Borealis", "Garanti": "1 Yıl"
    }
  },
  {
    id: 18, cat: "araba",
    name: "Volvo XC90 Recharge",
    price: "5.950.000 ₺",
    img: "https://wizz.volvocars.com/images/2027/256/exterior/location/threeQuartersFrontRight/exterior-location-threeQuartersFrontRight_CEA82143B27DCD189B0FE99E4D343644F2647A25.png?client=pdps&w=3840",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "2.0L + Elektrik (Plug-in)",
      "Güç": "455 HP", "Vites": "8 Otomatik", "Yakıt": "Hibrit",
      "Renk": "Crystal White", "Garanti": "2 Yıl"
    }
  },
  {
    id: 19, cat: "araba",
    name: "Seat Leon FR",
    price: "1.320.000 ₺",
    img: "https://arbstorage.mncdn.com/ilanfotograflari/2026/03/30/39184016/9fe9d1b5-1705-4e3a-b8f7-b1a3ee114c75_image_for_silan_39184016_580x435.jpg",
    specs: {
      "Yıl": "2023", "Km": "18.000 km", "Motor": "2.0L TSI",
      "Güç": "190 HP", "Vites": "7 DSG", "Yakıt": "Benzin",
      "Renk": "Magnetic Tech", "Garanti": "6 Ay"
    }
  },
  {
    id: 20, cat: "araba",
    name: "Subaru WRX STI",
    price: "2.850.000 ₺",
    img: "https://cdn.motor1.com/images/mgl/G3Al41/s1/subaru-wrx-sti-s210.webp",
    specs: {
      "Yıl": "2022", "Km": "9.800 km", "Motor": "2.5L Boxer Turbo",
      "Güç": "310 HP", "Vites": "6 Manuel", "Yakıt": "Benzin",
      "Renk": "WR Mavisi", "Garanti": "1 Yıl"
    }
  },
  {
    id: 21, cat: "araba",
    name: "Ferrari Roma",
    price: "52.000.000 ₺",
    img: "https://hips.hearstapps.com/hmg-prod/images/ferrari-roma-spider-4-64137a8fda02d.jpg?crop=0.606xw:0.461xh;0.171xw,0.303xh&resize=1200:*",
    specs: {
      "Yıl": "2024", "Km": "500 km", "Motor": "3.9L V8 Biturbo",
      "Güç": "620 HP", "Vites": "8 DCT", "Yakıt": "Benzin",
      "Renk": "Rosso Corsa", "Garanti": "2 Yıl"
    }
  },
  {
    id: 22, cat: "araba",
    name: "Skoda Octavia RS",
    price: "1.180.000 ₺",
    img: "https://cdn.motor1.com/images/mgl/bXL9v/s1/skoda-octavia-rs-iv-2020.jpg",
    specs: {
      "Yıl": "2023", "Km": "28.000 km", "Motor": "2.0L TSI",
      "Güç": "245 HP", "Vites": "7 DSG", "Yakıt": "Benzin",
      "Renk": "Siyah", "Garanti": "6 Ay"
    }
  },
  {
    id: 23, cat: "araba",
    name: "Land Rover Defender",
    price: "8.200.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqR-EBcXtcwwjAT7-tUD0lBZQYC3r_dOHDw&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "3.0L 6 Silindir Mild Hybrid",
      "Güç": "400 HP", "Vites": "8 Otomatik", "Yakıt": "Benzin/Hibrit",
      "Renk": "Yunan Mavisi", "Garanti": "2 Yıl"
    }
  },
  {
    id: 24, cat: "araba",
    name: "Nissan GT-R",
    price: "8.900.000 ₺",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Nissan_GT-R_01.JPG/1280px-Nissan_GT-R_01.JPG",
    specs: {
      "Yıl": "2023", "Km": "6.100 km", "Motor": "3.8L V6 Twin Turbo",
      "Güç": "570 HP", "Vites": "6 DCT", "Yakıt": "Benzin",
      "Renk": "Ultimate Metal Silver", "Garanti": "1 Yıl"
    }
  },
  {
    id: 25, cat: "araba",
    name: "Jeep Wrangler Rubicon",
    price: "4.750.000 ₺",
    img: "https://cdn.motor1.com/images/mgl/JOBW24/s3/2025-jeep-wrangler-392-final-edition.jpg",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "2.0L Turbo",
      "Güç": "272 HP", "Vites": "8 Otomatik", "Yakıt": "Benzin",
      "Renk": "Bright White", "Garanti": "2 Yıl"
    }
  },
  {
    id: 26, cat: "araba",
    name: "Mercedes AMG GT 63",
    price: "18.500.000 ₺",
    img: "https://cdn.motor1.com/images/mgl/3WE28p/s1/2027-mercedes-amg-gt-4-door.jpg",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "4.0L V8 Biturbo",
      "Güç": "630 HP", "Vites": "9G-Tronic", "Yakıt": "Benzin",
      "Renk": "Obsidyen Siyah", "Garanti": "2 Yıl"
    }
  },
  {
    id: 27, cat: "araba",
    name: "Cupra Formentor",
    price: "1.780.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwb8lsTdt1iUJqJY2gbq9jbLdiX4z2CzrXmA&s",
    specs: {
      "Yıl": "2023", "Km": "11.000 km", "Motor": "2.0L TSI 4x4",
      "Güç": "310 HP", "Vites": "7 DSG", "Yakıt": "Benzin",
      "Renk": "Petrol Mavisi", "Garanti": "1 Yıl"
    }
  },
  {
    id: 28, cat: "araba",
    name: "Fiat 500e",
    price: "1.050.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9vAIdMwUn9G_uUfXKHtaVGgBxUrOO3_Gpw&s",
    specs: {
      "Yıl": "2023", "Km": "9.500 km", "Motor": "Elektrik",
      "Güç": "118 HP", "Vites": "Tek Kademe", "Yakıt": "Elektrik",
      "Renk": "Gelato Beyaz", "Batarya": "42 kWh"
    }
  },
  {
    id: 29, cat: "araba",
    name: "Chevrolet Corvette C8",
    price: "12.800.000 ₺",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chevrolet_Corvette_C8_IAA_2021_1X7A0156.jpg/1280px-Chevrolet_Corvette_C8_IAA_2021_1X7A0156.jpg",
    specs: {
      "Yıl": "2024", "Km": "2.400 km", "Motor": "6.2L V8 Mid-Engine",
      "Güç": "502 HP", "Vites": "8 DCT", "Yakıt": "Benzin",
      "Renk": "Torch Red", "Garanti": "2 Yıl"
    }
  },
  {
    id: 30, cat: "araba",
    name: "Toyota Supra GR",
    price: "3.200.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeOv5vS0VPaFql58-i-asRVLw53RhE8oF2Q&s",
    specs: {
      "Yıl": "2023", "Km": "6.700 km", "Motor": "3.0L 6-Silindir BMW",
      "Güç": "387 HP", "Vites": "8 Otomatik", "Yakıt": "Benzin",
      "Renk": "Renaissance Red", "Garanti": "1 Yıl"
    }
  },

  // ===================== TIRLAR (31-60) =====================
  {
    id: 31, cat: "tir",
    name: "Volvo FH 500",
    price: "8.200.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndCTrMs6B8zril-fR2g9RQU3t8LXRgDOfmg&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "13L D13 Dizel",
      "Güç": "500 HP", "Vites": "I-Shift 12", "Dorse": "Frigorifik",
      "Çekiş": "6x2", "Yük": "25 Ton"
    }
  },
  {
    id: 32, cat: "tir",
    name: "Scania R 560",
    price: "9.100.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXerZaQzG1xMulCM6bF4UdTl2eNHrKTYDiTA&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "16.4L V8 Dizel",
      "Güç": "560 HP", "Vites": "12 Otomatik", "Dorse": "Platform",
      "Çekiş": "4x2", "Yük": "24 Ton"
    }
  },
  {
    id: 33, cat: "tir",
    name: "Mercedes-Benz Actros",
    price: "8.750.000 ₺",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Mercedes_Benz_Actros_MP_IV_%281%29.jpg",
    specs: {
      "Yıl": "2024", "Km": "5.000 km", "Motor": "12.8L Dizel",
      "Güç": "510 HP", "Vites": "PowerShift 12", "Dorse": "Tenteli",
      "Çekiş": "4x2", "Yük": "25 Ton"
    }
  },
  {
    id: 34, cat: "tir",
    name: "MAN TGX 480",
    price: "7.850.000 ₺",
    img: "https://media.man.eu/is/image/MAN/man-spezifikation-tgx-stage-16-9?crop=0,428,8192,4608&wid=1600&hei=900&fit=stretch&fmt=webp-alpha",
    specs: {
      "Yıl": "2023", "Km": "45.000 km", "Motor": "12.4L Dizel",
      "Güç": "480 HP", "Vites": "ZF 12 AS", "Dorse": "Kapalı Kasa",
      "Çekiş": "4x2", "Yük": "22 Ton"
    }
  },
  {
    id: 35, cat: "tir",
    name: "DAF XF 530",
    price: "8.400.000 ₺",
    img: "https://www.truck1.com.tr/img/xxl/16310/Cekici-DAF-XF530-Italya_16310_8367777812100.jpg",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "12.9L Dizel",
      "Güç": "530 HP", "Vites": "TraXon 12", "Dorse": "Platform",
      "Çekiş": "4x2", "Yük": "24 Ton"
    }
  },
  {
    id: 36, cat: "tir",
    name: "Iveco S-Way 570",
    price: "7.600.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-hUxxk2viyGECNqIDpObhT_D6GulRKQIig&s",
    specs: {
      "Yıl": "2023", "Km": "18.000 km", "Motor": "12.9L FPT Dizel",
      "Güç": "570 HP", "Vites": "HI-TRONIX 12", "Dorse": "Frigorifik",
      "Çekiş": "4x2", "Yük": "23 Ton"
    }
  },
  {
    id: 37, cat: "tir",
    name: "Renault T 520",
    price: "7.200.000 ₺",
    img: "https://www.renault-trucks.com.tr/sites/default/files/2023-07/Landing_RT_T-High%20%281%29.jpeg",
    specs: {
      "Yıl": "2023", "Km": "30.000 km", "Motor": "11L Dizel",
      "Güç": "520 HP", "Vites": "Optidriver 12", "Dorse": "Tenteli",
      "Çekiş": "4x2", "Yük": "22 Ton"
    }
  },
  {
    id: 38, cat: "tir",
    name: "Volvo FH 460 LNG",
    price: "10.500.000 ₺",
    img: "https://www.truck1.com.tr/img/xxl/570/Cekici-Volvo-FH-460-LNG-Finlandiya_570_2078953001919.jpg",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "13L LNG (Doğalgaz)",
      "Güç": "460 HP", "Vites": "I-Shift 12", "Dorse": "Platform",
      "Çekiş": "4x2", "Yük": "20 Ton"
    }
  },
  {
    id: 39, cat: "tir",
    name: "Scania S 730",
    price: "12.800.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvuWGd96Wmu4iWVpZ0apIOPrzxqVAI0XJGw&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "16.4L V8 Dizel",
      "Güç": "730 HP", "Vites": "Opticruise 12", "Dorse": "Kapalı Kasa",
      "Çekiş": "4x2", "Yük": "24 Ton"
    }
  },
  {
    id: 40, cat: "tir",
    name: "Mercedes Actros 2663",
    price: "11.200.000 ₺",
    img: "https://img.linemedia.com/img/s/truck-tractor-Mercedes-Benz-Actros-2663-LS---1722327042032174513_big--24073011104173834500.jpg",
    specs: {
      "Yıl": "2024", "Km": "2.000 km", "Motor": "15.6L OM 473 V8",
      "Güç": "630 HP", "Vites": "PowerShift 3", "Dorse": "Frigorifik",
      "Çekiş": "6x2", "Yük": "26 Ton"
    }
  },
  {
    id: 41, cat: "tir",
    name: "MAN TGS 8x4 Damper",
    price: "6.900.000 ₺",
    img: "https://img.linemedia.com/img/s/dump-truck-MAN-TGS-41-440---1768293768256505295_common--26011310374763417900.jpg",
    specs: {
      "Yıl": "2023", "Km": "22.000 km", "Motor": "12.4L Dizel",
      "Güç": "400 HP", "Vites": "ZF 8 AS", "Dorse": "Damper Kasa",
      "Çekiş": "8x4", "Yük": "30 Ton"
    }
  },
  {
    id: 42, cat: "tir",
    name: "Ford F-MAX 500",
    price: "7.100.000 ₺",
    img: "https://img.linemedia.com/img/s/truck-tractor-Ford-F-MAX-500---1732692915902522863_big--24112709303120031300.jpg",
    specs: {
      "Yıl": "2023", "Km": "38.000 km", "Motor": "12.7L Ecotorq",
      "Güç": "500 HP", "Vites": "ZF 12 AS", "Dorse": "Tenteli",
      "Çekiş": "4x2", "Yük": "23 Ton"
    }
  },
  {
    id: 43, cat: "tir",
    name: "Iveco Stralis NP (LNG)",
    price: "9.800.000 ₺",
    img: "https://d1grzqaobpv15j.cloudfront.net/pa/750-560/1850980/44130012/44130012_1709129250_631.jpg?index",
    specs: {
      "Yıl": "2023", "Km": "12.000 km", "Motor": "8.7L LNG",
      "Güç": "460 HP", "Vites": "Hi-Tronix 12", "Dorse": "Platform",
      "Çekiş": "4x2", "Yük": "20 Ton"
    }
  },
  {
    id: 44, cat: "tir",
    name: "Volvo FH Aero",
    price: "9.500.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26v-GOm7mWKVGWkax74VrPElwlHYX4H5g1w&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "13L D13 SCR",
      "Güç": "540 HP", "Vites": "I-Shift 12", "Dorse": "Frigorifik",
      "Çekiş": "4x2", "Yük": "25 Ton"
    }
  },
  {
    id: 45, cat: "tir",
    name: "Scania R 450 Etanol",
    price: "8.900.000 ₺",
    img: "https://www.truck1.com.tr/img/xxl/46183/Cekici-Scania-R-450-STREAMLINE-Polonya_46183_5422218358880.jpg",
    specs: {
      "Yıl": "2024", "Km": "5.500 km", "Motor": "13L Etanol",
      "Güç": "450 HP", "Vites": "Opticruise 12", "Dorse": "Tenteli",
      "Çekiş": "4x2", "Yük": "22 Ton"
    }
  },
  {
    id: 46, cat: "tir",
    name: "DAF CF 340",
    price: "5.600.000 ₺",
    img: "https://www.lectura-specs.com/models/renamed/orig/tarktor-parcalari-cf-340-ft-daf.jpg",
    specs: {
      "Yıl": "2022", "Km": "85.000 km", "Motor": "10.8L Dizel",
      "Güç": "340 HP", "Vites": "TraXon 12", "Dorse": "Kapalı Kasa",
      "Çekiş": "4x2", "Yük": "20 Ton"
    }
  },
  {
    id: 47, cat: "tir",
    name: "Mercedes Arocs 4145",
    price: "8.100.000 ₺",
    img: "https://www.lectura-specs.com/models/renamed/detail_max_retina/kati-sasiler-arocs-4145-k-8x4-mercedes-benz.jpg",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "10.7L Dizel",
      "Güç": "450 HP", "Vites": "PowerShift 3", "Dorse": "Beton Mikseri",
      "Çekiş": "8x4", "Yük": "28 Ton"
    }
  },
  {
    id: 48, cat: "tir",
    name: "Renault Premium 460",
    price: "4.800.000 ₺",
    img: "https://arbstorage.mncdn.com/ilanfotograflari/2025/06/21/30385401/b070121e-15a1-4bd8-a60d-7cee24850bd9_image_for_silan_30385401_1920x1080.jpg",
    specs: {
      "Yıl": "2021", "Km": "120.000 km", "Motor": "11L DXi Dizel",
      "Güç": "460 HP", "Vites": "Optidriver 12", "Dorse": "Tenteli",
      "Çekiş": "4x2", "Yük": "22 Ton"
    }
  },
  {
    id: 49, cat: "tir",
    name: "Scania P 280 Tıbbi",
    price: "6.400.000 ₺",
    img: "https://www.lectura-specs.com/models/renamed/orig/kati-sasiler-p-280-b4x2na-scania(1).jpg",
    specs: {
      "Yıl": "2022", "Km": "62.000 km", "Motor": "9.3L Dizel",
      "Güç": "280 HP", "Vites": "Opticruise 12", "Dorse": "Kapalı Kasa",
      "Çekiş": "4x2", "Yük": "12 Ton"
    }
  },
  {
    id: 50, cat: "tir",
    name: "MAN TGX 680 V8",
    price: "14.500.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7k7ssSE5Ct0ZybLAzOFIZXkCBhLM5OgcrA&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "16.2L V8 Dizel",
      "Güç": "680 HP", "Vites": "ZF 12 AS", "Dorse": "Özel Kasa",
      "Çekiş": "4x2", "Yük": "24 Ton"
    }
  },
  {
    id: 51, cat: "tir",
    name: "Volvo FMX 460 6x6",
    price: "11.800.000 ₺",
    img: "https://cdn.truckscout24.com/data/listing/img/vga/ts/14/26/21913763-02.jpg?v=1778602670",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "13L D13 Dizel",
      "Güç": "460 HP", "Vites": "I-Shift 12", "Dorse": "Damper",
      "Çekiş": "6x6", "Yük": "32 Ton"
    }
  },
  {
    id: 52, cat: "tir",
    name: "Scania G 410 XT",
    price: "8.600.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqR-0G7ikBQX-BpJEA8pKcFZT3IEwkycS9g&s",
    specs: {
      "Yıl": "2023", "Km": "14.000 km", "Motor": "13L Dizel",
      "Güç": "410 HP", "Vites": "Opticruise 12", "Dorse": "Platform",
      "Çekiş": "4x2", "Yük": "22 Ton"
    }
  },
  {
    id: 53, cat: "tir",
    name: "Iveco T-Way 570",
    price: "9.200.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsint9B030Fk4AO63JMLcVV-1KARErHVcqSQ&s",
    specs: {
      "Yıl": "2024", "Km": "3.000 km", "Motor": "12.9L Dizel",
      "Güç": "570 HP", "Vites": "Hi-Tronix 12", "Dorse": "Damper",
      "Çekiş": "6x4", "Yük": "30 Ton"
    }
  },
  {
    id: 54, cat: "tir",
    name: "Ford Trucks 3542 S",
    price: "6.100.000 ₺",
    img: "https://img.linemedia.com/img/s/chassis-truck-Ford-Trucks-3542---1541622048709350461_big--18110722195795062200.jpg",
    specs: {
      "Yıl": "2022", "Km": "55.000 km", "Motor": "12.7L Ecotorq",
      "Güç": "420 HP", "Vites": "ZF 12", "Dorse": "Kapalı Kasa",
      "Çekiş": "4x2", "Yük": "22 Ton"
    }
  },
  {
    id: 55, cat: "tir",
    name: "MAN TGS 6x4 Vinçli",
    price: "9.900.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaggk4YiEAWZ3BMXDWUsc88w9Te0vjtyyuLQ&s",
    specs: {
      "Yıl": "2023", "Km": "10.000 km", "Motor": "12.4L Dizel",
      "Güç": "440 HP", "Vites": "ZF 12 AS", "Dorse": "Vinçli Platform",
      "Çekiş": "6x4", "Yük": "28 Ton"
    }
  },
  {
    id: 56, cat: "tir",
    name: "DAF XG+ 530",
    price: "10.100.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-c5VhVDsYhE2J3_idRVvLHfaldnFi5bbrwA&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "12.9L PACCAR MX-13",
      "Güç": "530 HP", "Vites": "TraXon 12", "Dorse": "Frigorifik",
      "Çekiş": "4x2", "Yük": "25 Ton"
    }
  },
  {
    id: 57, cat: "tir",
    name: "Mercedes Actros eActros",
    price: "18.000.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4X2wto9l1O054PVOv9pJBcKJb9uEyrOp0RQ&s",
    specs: {
      "Yıl": "2024", "Km": "500 km", "Motor": "Elektrik (3 Motor)",
      "Güç": "536 HP", "Vites": "Tek Kademe", "Dorse": "Kapalı Kasa",
      "Çekiş": "4x2", "Yük": "18 Ton"
    }
  },
  {
    id: 58, cat: "tir",
    name: "Scania P 360 8x4",
    price: "8.300.000 ₺",
    img: "https://img.linemedia.com/img/s/dump-truck-Scania-P360-Kipper-8x4-TOPZUSTAND---1776772806395741706_big--23092210183783122700.jpg",
    specs: {
      "Yıl": "2023", "Km": "20.000 km", "Motor": "9.3L Dizel",
      "Güç": "360 HP", "Vites": "Opticruise 12", "Dorse": "Beton",
      "Çekiş": "8x4", "Yük": "30 Ton"
    }
  },
  {
    id: 59, cat: "tir",
    name: "Volvo FH 4x2 Euro 6",
    price: "7.700.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfdeJ9NWYyjTCte8BYpDFl9OaFiWW3Mh9Aw&s",
    specs: {
      "Yıl": "2022", "Km": "78.000 km", "Motor": "13L D13 Dizel Euro6",
      "Güç": "500 HP", "Vites": "I-Shift 12", "Dorse": "Tenteli",
      "Çekiş": "4x2", "Yük": "24 Ton"
    }
  },
  {
    id: 60, cat: "tir",
    name: "Renault T High 520",
    price: "8.050.000 ₺",
    img: "https://cdn.truckscout24.com/data/listing/img/vga/ts/00/81/20172055-01.jpg?v=1759757346",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "11L DT13 Dizel",
      "Güç": "520 HP", "Vites": "Optidriver 12", "Dorse": "Frigorifik",
      "Çekiş": "4x2", "Yük": "23 Ton"
    }
  },

  // ===================== MOTORLAR (61-90) =====================
  {
    id: 61, cat: "motor",
    name: "Honda CBR1000RR Fireblade",
    price: "1.250.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYWehK_G6uXnR2wnf8ka0XrpUcbm9rOc5Ng&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "999cc 4-Silindir",
      "Güç": "214 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Repsol", "Garanti": "2 Yıl"
    }
  },
  {
    id: 62, cat: "motor",
    name: "Yamaha YZF-R1M",
    price: "1.450.000 ₺",
    img: "https://platincdn.com/1209/dosyalar/images/motosikletler/Yamaha/Yamaha%20YZF-R1M.jpg",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "998cc Crossplane 4-Silindir",
      "Güç": "200 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "MotoGP Mavi", "Garanti": "2 Yıl"
    }
  },
  {
    id: 63, cat: "motor",
    name: "Ducati Panigale V4",
    price: "2.100.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGdH74B5M3oPn7sVaAHSZMOYycNBW6oVxXA&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1103cc Desmosedici V4",
      "Güç": "215 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Ducati Kırmızı", "Garanti": "2 Yıl"
    }
  },
  {
    id: 64, cat: "motor",
    name: "Kawasaki Ninja ZX-10R",
    price: "1.180.000 ₺",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Kwasaki_ZX-10R_tokyo.JPG/1280px-Kwasaki_ZX-10R_tokyo.JPG",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "998cc 4-Silindir",
      "Güç": "203 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Lime Green", "Garanti": "2 Yıl"
    }
  },
  {
    id: 65, cat: "motor",
    name: "BMW S1000RR",
    price: "1.750.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_jGXR3DPgofc1dyoMfiw-ICL6WvG7RLjPg&s",
    specs: {
      "Yıl": "2024", "Km": "1.500 km", "Motor": "999cc ShiftCam 4-Silindir",
      "Güç": "210 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "M Motorsport", "Garanti": "1 Yıl"
    }
  },
  {
    id: 66, cat: "motor",
    name: "Suzuki GSX-R1000R",
    price: "980.000 ₺",
    img: "https://www.globalsuzuki.com/globalnews/2025/img/0731b.jpg",
    specs: {
      "Yıl": "2023", "Km": "4.200 km", "Motor": "999cc 4-Silindir",
      "Güç": "202 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Metallic Triton Mavi", "Garanti": "1 Yıl"
    }
  },
  {
    id: 67, cat: "motor",
    name: "Aprilia RSV4 Factory",
    price: "1.980.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWz_FdGnro3usBWTCZcuQBkYOib9PGX33JXQ&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1077cc V4",
      "Güç": "217 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Lava Kırmızı", "Garanti": "2 Yıl"
    }
  },
  {
    id: 68, cat: "motor",
    name: "Triumph Speed Triple RS",
    price: "1.150.000 ₺",
    img: "https://media.triumphmotorcycles.co.uk/image/upload/t_triumph_square/c_limit,w_3840/f_auto/q_auto:eco/v1736762051/OE_SpeedTriple1200RS_MY25_19101_JP_f8czoo?_a=BAVMn6ID0",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1160cc 3-Silindir",
      "Güç": "180 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Crystal White", "Garanti": "2 Yıl"
    }
  },
  {
    id: 69, cat: "motor",
    name: "Harley-Davidson Fat Boy",
    price: "1.680.000 ₺",
    img: "https://www.harley-davidson.com/ctfasset/5vy1mse9fkav/2lB59WYe0DLIWpzGy5hIOR/c1eb29c439e4862178429596071347fe/2026-fat-boy-beauty-ls-1.jpg",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1868cc Milwaukee-Eight 114",
      "Güç": "95 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Vivid Black", "Garanti": "2 Yıl"
    }
  },
  {
    id: 70, cat: "motor",
    name: "KTM 1290 Super Duke R",
    price: "1.350.000 ₺",
    img: "https://www.motosikletonline.com/shop/do/14/myassets/blogs/blog-56.jpg?revision=1684746440",
    specs: {
      "Yıl": "2024", "Km": "800 km", "Motor": "1301cc V-Twin",
      "Güç": "180 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Turuncu", "Garanti": "2 Yıl"
    }
  },
  {
    id: 71, cat: "motor",
    name: "MV Agusta F4 Claudio",
    price: "8.500.000 ₺",
    img: "https://www.motoplanete.com/mv-agusta/zoom-700px/MV-Agusta-1000-F4-Caudio-2019-700px.webp",
    specs: {
      "Yıl": "2019", "Km": "500 km", "Motor": "998cc Radyal 4-Silindir",
      "Güç": "212 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Yarış Gümüşü", "Garanti": "1 Yıl"
    }
  },
  {
    id: 72, cat: "motor",
    name: "Yamaha MT-09 SP",
    price: "620.000 ₺",
    img: "https://ridermagazine.com/wp-content/uploads/2024/10/2024-Yamaha-MT-09-SP-review-5.jpg",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "890cc Crossplane 3-Silindir",
      "Güç": "119 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Power Black", "Garanti": "2 Yıl"
    }
  },
  {
    id: 73, cat: "motor",
    name: "Honda Africa Twin",
    price: "780.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAhesdvW5M3wpEe35sSXItPBrzW4PcQqLww&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1084cc 2-Silindir",
      "Güç": "102 HP", "Vites": "6 Manuel / DCT", "Yakıt": "Benzin",
      "Renk": "Grand Prix Red", "Garanti": "2 Yıl"
    }
  },
  {
    id: 74, cat: "motor",
    name: "BMW R 1250 GS Adventure",
    price: "1.100.000 ₺",
    img: "https://makinavadi.com//img/araclar/27397/4.jpg",
    specs: {
      "Yıl": "2024", "Km": "2.800 km", "Motor": "1254cc Boxer 2-Silindir",
      "Güç": "136 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Kaolin Grey", "Garanti": "1 Yıl"
    }
  },
  {
    id: 75, cat: "motor",
    name: "Ducati Monster SP",
    price: "890.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJJ2q_zFUrqyMMWEnYRMzXCPBMUcFj8To8Q&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "937cc Testastretta V2",
      "Güç": "111 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Arctic White", "Garanti": "2 Yıl"
    }
  },
  {
    id: 76, cat: "motor",
    name: "Kawasaki Z H2",
    price: "1.050.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKrwfms7jn6RiyUMAcS0eS9mNMQG5pQSQSw&s",
    specs: {
      "Yıl": "2024", "Km": "1.200 km", "Motor": "998cc Süperşarjlı 4-Silindir",
      "Güç": "200 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Metallic Spark Black", "Garanti": "2 Yıl"
    }
  },
  {
    id: 77, cat: "motor",
    name: "Suzuki V-Strom 1050 XT",
    price: "720.000 ₺",
    img: "https://www.motoron.com.tr/wp-content/uploads/2020/05/V-Strom-1050-XT-1024x683.jpg",
    specs: {
      "Yıl": "2023", "Km": "6.300 km", "Motor": "1037cc V-Twin",
      "Güç": "107 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Pearl Brilliant White", "Garanti": "1 Yıl"
    }
  },
  {
    id: 78, cat: "motor",
    name: "Indian Scout Bobber",
    price: "950.000 ₺",
    img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1133cc Thunder Stroke V-Twin",
      "Güç": "100 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Black Metallic", "Garanti": "2 Yıl"
    }
  },
  {
    id: 79, cat: "motor",
    name: "Yamaha TMAX 560",
    price: "520.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EHLaQtYtuGVNb2CLIurYSTPZ2P0_Xhg9BQ&s",
    specs: {
      "Yıl": "2024", "Km": "3.400 km", "Motor": "562cc 2-Silindir",
      "Güç": "47 HP", "Vites": "CVT Otomatik", "Yakıt": "Benzin",
      "Renk": "Graphite Grey", "Garanti": "1 Yıl"
    }
  },
  {
    id: 80, cat: "motor",
    name: "Honda CB650R",
    price: "480.000 ₺",
    img: "https://www.motorcyclistonline.com/resizer/sVnn49EyzoNejDiIKLr0BpEyEFA=/arc-photo-octane/arc3-prod/public/U5XLPUHU2JCVFFGJA5UH5KPVCA.jpg",
    specs: {
      "Yıl": "2023", "Km": "8.100 km", "Motor": "649cc 4-Silindir",
      "Güç": "95 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Mat Gunpowder Black", "Garanti": "1 Yıl"
    }
  },
  {
    id: 81, cat: "motor",
    name: "Ducati Streetfighter V4",
    price: "1.850.000 ₺",
    img: "https://images5.1000ps.net/images_bikekat/2025/5-Ducati/9920-Streetfighter_V4_S/001-638684613228458257-ducati-streetfighter-v4-s.jpg",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1103cc Desmosedici V4",
      "Güç": "208 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Dark Stealth", "Garanti": "2 Yıl"
    }
  },
  {
    id: 82, cat: "motor",
    name: "KTM 890 Duke R",
    price: "580.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRFrntfG2ciCE1QuPSQjiqOS6DaLhM4Rw7g&s",
    specs: {
      "Yıl": "2023", "Km": "5.600 km", "Motor": "889cc 2-Silindir",
      "Güç": "121 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Turuncu", "Garanti": "1 Yıl"
    }
  },
  {
    id: 83, cat: "motor",
    name: "BMW M1000RR",
    price: "2.900.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVALgveAXMipCa8HnGPhmJgcP_-YSoWCR6Nw&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "999cc ShiftCam 4-Silindir",
      "Güç": "212 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "M Motorsport", "Garanti": "2 Yıl"
    }
  },
  {
    id: 84, cat: "motor",
    name: "Triumph Bonneville T120",
    price: "680.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf4YIiqIX3bHNzW_vfI6H1IkAhSdJHO8VaA&s",
    specs: {
      "Yıl": "2023", "Km": "3.200 km", "Motor": "1200cc Parallel Twin",
      "Güç": "80 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Jet Black", "Garanti": "1 Yıl"
    }
  },
  {
    id: 85, cat: "motor",
    name: "Harley-Davidson Street Glide",
    price: "2.200.000 ₺",
    img: "https://cdn.room58.com/2022/08/05/ce6fa49d9e39e88db6423fe415790e1f_85eba918f03cd510.png",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1923cc Milwaukee-Eight 117",
      "Güç": "105 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Vivid Black", "Garanti": "2 Yıl"
    }
  },
  {
    id: 86, cat: "motor",
    name: "Aprilia Tuono V4 Factory",
    price: "1.650.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrUyV_pj5XRvkreunp6vgjLyuyW6rZizRWg&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1077cc V4",
      "Güç": "175 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Gris", "Garanti": "2 Yıl"
    }
  },
  {
    id: 87, cat: "motor",
    name: "Yamaha XSR900",
    price: "450.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQBkl7YKdGPAk022WxUT85G2tGmxfjJlaWw&s",
    specs: {
      "Yıl": "2023", "Km": "7.700 km", "Motor": "890cc Crossplane 3-Silindir",
      "Güç": "119 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Tech Black", "Garanti": "1 Yıl"
    }
  },
  {
    id: 88, cat: "motor",
    name: "Kawasaki Versys 1000 SE",
    price: "820.000 ₺",
    img: "https://www.kawasaki.com.tr/Photos/Motosiklet/versys1000se/kcmf.png",
    specs: {
      "Yıl": "2024", "Km": "2.100 km", "Motor": "1043cc 4-Silindir",
      "Güç": "120 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Metallic Flat Raw", "Garanti": "2 Yıl"
    }
  },
  {
    id: 89, cat: "motor",
    name: "Ducati Multistrada V4 S",
    price: "1.750.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzfkxVWe9tyl8MemIizRHEaHTkojHf_Bh5Q&s",
    specs: {
      "Yıl": "2024", "Km": "1.900 km", "Motor": "1158cc V4",
      "Güç": "170 HP", "Vites": "6 İleri", "Yakıt": "Benzin",
      "Renk": "Aviator Grey", "Garanti": "2 Yıl"
    }
  },
  {
    id: 90, cat: "motor",
    name: "Honda Gold Wing Tour",
    price: "1.900.000 ₺",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxXdapw5MqF0FKDHJ_c7uwUnEjQg_VePykA&s",
    specs: {
      "Yıl": "2024", "Km": "0 km", "Motor": "1833cc Flat-6",
      "Güç": "126 HP", "Vites": "7 DCT", "Yakıt": "Benzin",
      "Renk": "Pearl Glare White", "Garanti": "2 Yıl"
    }
  }
];


// ======================================================
//  STATE
// ======================================================
let currentCat = "all";
let currentSearch = "";
let selectedVehicle = null;

// ======================================================
//  RENDER
// ======================================================
function getFiltered() {
  return vehicles.filter(v => {
    const catOk  = currentCat === "all" || v.cat === currentCat;
    const srchOk = v.name.toLowerCase().includes(currentSearch.toLowerCase());
    return catOk && srchOk;
  });
}

function render() {
  const grid = document.getElementById("carGrid");
  const title = document.getElementById("sectionTitle");
  const filtered = getFiltered();

  const labels = { all: "Tüm Araçlar", araba: "Arabalar", tir: "Tırlar", motor: "Motorlar" };
  title.textContent = currentSearch
    ? `"${currentSearch}" için sonuçlar (${filtered.length})`
    : labels[currentCat];

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:#888;padding:60px 0;font-size:18px;">Araç bulunamadı 😢</div>`;
    return;
  }

  grid.innerHTML = filtered.map(v => `
    <div class="card" onclick="openDetail(${v.id})">
      <img class="card-img" src="${v.img}" alt="${v.name}" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'"/>
      <div class="card-body">
        <span class="card-cat cat-${v.cat}">${catLabel(v.cat)}</span>
        <h3>${v.name}</h3>
        <div class="card-price">${v.price}</div>
        <div class="card-meta">
          ${Object.entries(v.specs).slice(0,3).map(([k,val]) =>
            `<span class="tag">${k}: ${val}</span>`
          ).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function catLabel(cat) {
  return { araba: "🚗 Araba", tir: "🚛 Tır", motor: "🏍️ Motor" }[cat];
}

// ======================================================
//  NAV
// ======================================================
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCat = btn.dataset.cat;
    currentSearch = "";
    document.getElementById("searchInput").value = "";
    render();
  });
});

// ======================================================
//  SEARCH
// ======================================================
function filterBySearch() {
  currentSearch = document.getElementById("searchInput").value.trim();
  render();
}

document.getElementById("searchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") filterBySearch();
});

// ======================================================
//  DETAIL MODAL
// ======================================================
function openDetail(id) {
  selectedVehicle = vehicles.find(v => v.id === id);
  if (!selectedVehicle) return;

  document.getElementById("modalImg").src = selectedVehicle.img;
  document.getElementById("modalTitle").textContent = selectedVehicle.name;
  document.getElementById("modalPrice").textContent = selectedVehicle.price;

  const badge = document.getElementById("modalCat");
  badge.textContent = catLabel(selectedVehicle.cat);
  badge.className = "modal-badge cat-" + selectedVehicle.cat;

  const specsEl = document.getElementById("modalSpecs");
  specsEl.innerHTML = Object.entries(selectedVehicle.specs).map(([k, val]) => `
    <div class="spec-item">
      <div class="spec-label">${k}</div>
      <div class="spec-val">${val}</div>
    </div>
  `).join("");

  openModal("detailModal");
}

// ======================================================
//  ORDER MODAL
// ======================================================
function openOrder() {
  if (!selectedVehicle) return;
  document.getElementById("orderVehicleName").textContent =
    `Seçilen araç: ${selectedVehicle.name} — ${selectedVehicle.price}`;
  ["firstName","lastName","tcNo","phone","email"].forEach(id => {
    document.getElementById(id).value = "";
  });
  closeModal("detailModal");
  openModal("orderModal");
}

function submitOrder() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName  = document.getElementById("lastName").value.trim();
  const tcNo      = document.getElementById("tcNo").value.trim();
  const phone     = document.getElementById("phone").value.trim();
  const email     = document.getElementById("email").value.trim();

  if (!firstName || !lastName || !tcNo || !phone || !email) {
    alert("Lütfen tüm alanları doldurunuz.");
    return;
  }
  if (!/^\d{11}$/.test(tcNo)) {
    alert("TC Kimlik No 11 haneli olmalıdır.");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Geçerli bir e-posta adresi giriniz.");
    return;
  }

  const orderNum = "VH-" + Date.now().toString().slice(-6);
  document.getElementById("successMsg").innerHTML =
    `<strong>${firstName} ${lastName}</strong> adına<br/>
     <strong>${selectedVehicle.name}</strong> için sipariş oluşturuldu.<br/><br/>
     📋 Sipariş No: <strong>${orderNum}</strong><br/>
     📞 ${phone}<br/>📧 ${email}`;

  closeModal("orderModal");
  openModal("successModal");
}

// ======================================================
//  MODAL HELPERS
// ======================================================
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}

// Close on overlay click
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// ESC key
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    ["detailModal","orderModal","successModal"].forEach(id => closeModal(id));
  }
});

// ======================================================
//  INIT
// ======================================================
render();
