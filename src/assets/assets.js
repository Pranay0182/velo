import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
import p_img31 from './p_img31.png'
import p_img32 from './p_img32.png'
import p_img33 from './p_img33.png'
import p_img34 from './p_img34.png'
import p_img35 from './p_img35.png'
import p_img36 from './p_img36.png'
import p_img37 from './p_img37.png'
import p_img38 from './p_img38.png'
import p_img39 from './p_img39.png'
import p_img40 from './p_img40.png'
import p_img41 from './p_img41.png'
import p_img42 from './p_img42.png'
import p_img43 from './p_img43.png'
import p_img44 from './p_img44.png'
import p_img45 from './p_img45.png'
import p_img46 from './p_img46.png'
import p_img47 from './p_img47.png'
import p_img48 from './p_img48.png'
import p_img49 from './p_img49.png'
import p_img50 from './p_img50.png'
import p_img51 from './p_img51.png'
import p_img52 from './p_img52.png'


import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.jpg'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import banner_02 from './banner_02.jpg'
import banner_arduino from './banner_arduino.png'
import banner_robotics from './banner_robotics.png'
import banner_raspberry from './banner_raspberry.png'
import grid_raspberry from './grid_raspberry.png'
import grid_drones from './grid_drones.png'
import grid_printers from './grid_printers.png'
import grid_wireless from './grid_wireless.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "e_001",
        name: "Raspberry Pi 5 (8GB RAM)",
        description: "The latest generation of Raspberry Pi: everything you love about your favourite PC, but faster, cooler, and smoother.",
        price: 7500,
        image: [grid_raspberry],
        category: "Development Boards",
        subCategory: "SBCs",
        sizes: [],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "e_002",
        name: "Arduino Uno R3",
        description: "The classic Arduino board. Perfect for beginners and experts alike. Robust, reliable, and easy to use.",
        price: 1800,
        image: [banner_arduino],
        category: "Development Boards",
        subCategory: "Microcontrollers",
        sizes: [],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "e_003",
        name: "DJI Mini 4 Pro Drone",
        description: "Mini-sized, mega-capable. The most advanced mini camera drone to date.",
        price: 75000,
        image: [grid_drones],
        category: "Robotics",
        subCategory: "Drones",
        sizes: [],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "e_004",
        name: "Ender-3 V3 SE 3D Printer",
        description: "Easy to use, easy to assemble. The perfect entry-level 3D printer for hobbyists.",
        price: 18000,
        image: [grid_printers],
        category: "Components",
        subCategory: "3D Printers",
        sizes: [],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "e_005",
        name: "ESP32 WiFi + Bluetooth Module",
        description: "A feature-rich MCU with integrated Wi-Fi and Bluetooth connectivity for a wide range of applications.",
        price: 450,
        image: [grid_wireless],
        category: "Development Boards",
        subCategory: "Microcontrollers",
        sizes: [],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "e_006",
        name: "Ultrasonic Sensor HC-SR04",
        description: "Provides 2cm - 400cm non-contact measurement function, the ranging accuracy can reach to 3mm.",
        price: 80,
        image: [banner_arduino], // Placeholder
        category: "Sensors",
        subCategory: "Modules",
        sizes: [],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "e_007",
        name: "SG90 Micro Servo Motor",
        description: "Tiny and lightweight with high output power. Servo can rotate approximately 180 degrees (90 in each direction).",
        price: 120,
        image: [banner_robotics],
        category: "Robotics",
        subCategory: "Motors",
        sizes: [],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "e_008",
        name: "0.96 inch OLED Display",
        description: "128x64 resolution, I2C interface. Perfect for adding a small display to your projects.",
        price: 250,
        image: [banner_arduino], // Placeholder
        category: "Components",
        subCategory: "Displays",
        sizes: [],
        date: 1716622235448,
        bestseller: false,
        newLaunch: true
    },
    {
        _id: "e_009",
        name: "Raspberry Pi Zero 2 W",
        description: "The tiny, affordable, and connected computer. Perfect for IoT projects.",
        price: 2500,
        image: [grid_raspberry],
        category: "Development Boards",
        subCategory: "SBCs",
        sizes: [],
        date: 1716623345448,
        bestseller: false,
        newLaunch: true
    },
    {
        _id: "e_010",
        name: "L298N Motor Driver Module",
        description: "Dual H-Bridge motor driver, allows you to drive two DC motors or one stepper motor.",
        price: 150,
        image: [banner_robotics],
        category: "Components",
        subCategory: "Modules",
        sizes: [],
        date: 1716624445448,
        bestseller: false,
        newLaunch: true
    },
    {
        _id: "e_011",
        name: "Arduino Nano V3.0",
        description: "A small, complete, and breadboard-friendly board based on the ATmega328.",
        price: 400,
        image: [banner_arduino],
        category: "Development Boards",
        subCategory: "Microcontrollers",
        sizes: [],
        date: 1716625545448,
        bestseller: false,
        newLaunch: true
    },
    {
        _id: "e_012",
        name: "DHT11 Temperature & Humidity Sensor",
        description: "A basic, low-cost digital temperature and humidity sensor.",
        price: 90,
        image: [banner_arduino], // Placeholder
        category: "Sensors",
        subCategory: "Modules",
        sizes: [],
        date: 1716626645448,
        bestseller: false,
        newLaunch: true
    }
]

export const heroSlides = [
    {
        id: "hero-arduino",
        image: banner_arduino,
        badge: "Starter Kits · Plug & Play",
        title: "Kickstart Your DIY Journey with Arduino",
        subtitle:
            "Beginner-friendly Arduino starter kits with sensors, jumper wires, LEDs and more – everything in one box.",
        ctaText: "Browse Arduino Kits",
        ctaLink: "/category/arduino-kits",
    },
    {
        id: "hero-robotics",
        image: banner_robotics,
        badge: "Robotics · Motors · Drivers",
        title: "Build Your Own Robots from Scratch",
        subtitle:
            "DC motors, servo motors, motor driver modules, chassis and wheels – design robots the way you imagine.",
        ctaText: "Shop Robotics Parts",
        ctaLink: "/category/robotics",
    },
    {
        id: "hero-raspberrypi",
        image: banner_raspberry,
        badge: "Raspberry Pi · SBC Projects",
        title: "Turn Ideas into Mini Computers",
        subtitle:
            "Raspberry Pi boards, cases, power supplies and accessories for home automation, media centers and more.",
        ctaText: "Explore Raspberry Pi",
        ctaLink: "/category/raspberry-pi",
    },
    {
        id: "hero-components",
        image: hero_img, // temp image, swap with components collage
        badge: "Resistors · Sensors · Modules",
        title: "All the Components You Need, In One Place",
        subtitle:
            "Resistors, capacitors, sensors, displays, relay modules and power supplies for any electronics project.",
        ctaText: "Shop Components",
        ctaLink: "/category/components",
    }
];

export const shopGridCards = [
    {
        id: "raspberry",
        type: "large",
        title: "Power Your Projects with Raspberry Pi",
        subtitle:
            "Experience next-level performance. Shop the latest boards, complete kits, and essential accessories.",
        image: grid_raspberry,
    },
    {
        id: "drones",
        type: "small",
        title: "Drones",
        subtitle: "from ₹1599*",
        image: grid_drones,
    },
    {
        id: "printers",
        type: "small",
        title: "3D Printers",
        subtitle: "from ₹299*",
        image: grid_printers,
    },
    {
        id: "wireless",
        type: "small",
        title: "Wireless Boards",
        subtitle: "from ₹349*",
        image: grid_wireless,
    },
    {
        id: "sensors",
        type: "small",
        title: "Sensors",
        subtitle: "from ₹199*",
        image: banner_arduino,
    },
];

