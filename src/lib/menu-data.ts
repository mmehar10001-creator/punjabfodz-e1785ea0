import heroPulao from "@/assets/hero-pulao.jpg";
import pulaoSpecial from "@/assets/chicken-pulao-special.jpg";
import channaPulao from "@/assets/channa-pulao.jpg";
import simplePulao from "@/assets/simple-pulao.jpg";
import pulaoKabab from "@/assets/pulao-kabab.jpg";
import channay from "@/assets/channay.jpg";
import salad from "@/assets/salad.jpg";
import raita from "@/assets/raita.jpg";
import roast from "@/assets/chicken-roast.jpg";
import chickenPiece from "@/assets/chicken-piece.jpg";
import kabab from "@/assets/kabab.jpg";
import zarda from "@/assets/zarda.jpg";
import softDrink from "@/assets/soft-drink.jpg";

export type MenuItem = { name: string; urdu?: string; desc?: string; price: string; image?: string };
export type MenuSection = { title: string; urdu?: string; items: MenuItem[] };

export const menu: MenuSection[] = [
  {
    title: "Chicken Pulao",
    urdu: "چکن پلاؤ",
    items: [
      { name: "Chicken Pulao", urdu: "چکن پلاؤ", desc: "Single without kabab", price: "Rs. 430", image: heroPulao },
      { name: "Chicken Pulao", urdu: "چکن پلاؤ", desc: "Single Choice", price: "Rs. 510", image: heroPulao },
      { name: "Chicken Pulao", urdu: "چکن پلاؤ", desc: "Single", price: "Rs. 500", image: heroPulao },
      { name: "Chicken Pulao", urdu: "چکن پلاؤ", desc: "Special without kabab", price: "Rs. 580", image: heroPulao },
      { name: "Chicken Pulao", urdu: "چکن پلاؤ", desc: "Special Choice", price: "Rs. 670", image: pulaoSpecial },
      { name: "Chicken Pulao", urdu: "چکن پلاؤ", desc: "Special", price: "Rs. 650", image: pulaoSpecial },
    ],
  },
  {
    title: "Pulao & Sides",
    urdu: "پلاؤ اور لوازمات",
    items: [
      { name: "Channa Pulao", urdu: "چنا پلاؤ", price: "Rs. 350", image: channaPulao },
      { name: "Simple Pulao", urdu: "سادہ پلاؤ", price: "Rs. 280", image: simplePulao },
      { name: "Pulao Kabab", urdu: "پلاؤ کباب", price: "Rs. 350", image: pulaoKabab },
      { name: "Special Channay", urdu: "اسپیشل چنے", desc: "Full", price: "Rs. 250", image: channay },
      { name: "Salad", urdu: "سلاد", price: "Rs. 40", image: salad },
      { name: "Raita", urdu: "رائتہ", price: "Rs. 40", image: raita },
    ],
  },
  {
    title: "Roast & Kabab",
    urdu: "روسٹ اور کباب",
    items: [
      { name: "Chicken Roast", urdu: "چکن روسٹ", desc: "Half", price: "Rs. 700", image: roast },
      { name: "Chicken Roast", urdu: "چکن روسٹ", desc: "Full", price: "Rs. 1300", image: roast },
      { name: "Chicken Piece", urdu: "چکن پیس", desc: "1/8", price: "Rs. 180", image: chickenPiece },
      { name: "Shami Kabab", urdu: "شامی کباب", desc: "Per Dozen", price: "Rs. 540", image: kabab },
    ],
  },
  {
    title: "Sweets & Drinks",
    urdu: "میٹھا اور مشروبات",
    items: [
      { name: "Zarda", urdu: "زردہ", price: "Rs. 150", image: zarda },
      { name: "Soft Drink", urdu: "کولڈ ڈرنک", desc: "Coke / Nova", price: "Rs. 80", image: softDrink },
    ],
  },
];

export const degMenu: { name: string; urdu: string; qty: string; price: string }[] = [
  { name: "Sada Pulao", urdu: "سادہ پلاؤ", qty: "10 kg chawal", price: "Rs. 10,000" },
  { name: "Channa Pulao", urdu: "چنا پلاؤ", qty: "10 kg chawal + 2 kg channa", price: "Rs. 11,000" },
  { name: "Vegetable Pulao", urdu: "سبزی پلاؤ", qty: "10 kg chawal + 6 kg sabzi", price: "Rs. 13,000" },
  { name: "Chicken Pulao", urdu: "چکن پلاؤ", qty: "10 kg chawal + 6 kg murgh", price: "Rs. 17,000" },
  { name: "Mutton Pulao", urdu: "مٹن پلاؤ", qty: "10 kg chawal + 6 kg gosht", price: "Rs. 22,000" },
  { name: "Beef Pulao", urdu: "بیف پلاؤ", qty: "10 kg chawal + 6 kg gosht", price: "Rs. 19,000" },
  { name: "Chicken Biryani", urdu: "چکن بریانی", qty: "10 kg chawal + 10 kg gosht", price: "Rs. 22,000" },
  { name: "Mutton Biryani", urdu: "مٹن بریانی", qty: "10 kg chawal + 10 kg gosht", price: "Rs. 33,000" },
  { name: "Special Zarda", urdu: "اسپیشل زردہ", qty: "10 kg chawal, kishmish, kheer", price: "Rs. 20,000" },
  { name: "Chicken Qorma", urdu: "چکن قورمہ", qty: "12 kg murgh", price: "Rs. 17,000" },
  { name: "Mutton Qorma", urdu: "مٹن قورمہ", qty: "12 kg gosht", price: "Rs. 36,000" },
  { name: "Beef Qorma", urdu: "بیف قورمہ", qty: "12 kg gosht (with bone)", price: "Rs. 22,000" },
];

export const contact = {
  phones: ["051-5706222", "0343-7117361", "0302-5527361"],
  whatsapp: "0343-7117361",
  whatsappLink: "https://wa.me/923437117361?text=Hello!%20I%27d%20like%20to%20place%20an%20order%20at%20Punjab%20Foods.",
  address: "Sirsyed Chowk, Tipu Road, Near Zafar Honda Service, Rawalpindi.",
  name: "Punjab Foods — Pulao & Kabab",
};
