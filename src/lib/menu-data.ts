export type MenuItem = { name: string; urdu?: string; desc?: string; price: string };
export type MenuSection = { title: string; items: MenuItem[] };

export const menu: MenuSection[] = [
  {
    title: "Chicken Pulao",
    items: [
      { name: "Chicken Pulao", desc: "Single without kabab", price: "Rs. 430" },
      { name: "Chicken Pulao", desc: "Single Choice", price: "Rs. 510" },
      { name: "Chicken Pulao", desc: "Single", price: "Rs. 500" },
      { name: "Chicken Pulao", desc: "Special without kabab", price: "Rs. 580" },
      { name: "Chicken Pulao", desc: "Special Choice", price: "Rs. 670" },
      { name: "Chicken Pulao", desc: "Special", price: "Rs. 650" },
    ],
  },
  {
    title: "Pulao & Sides",
    items: [
      { name: "Channa Pulao", price: "Rs. 350" },
      { name: "Simple Pulao", price: "Rs. 280" },
      { name: "Pulao Kabab", price: "Rs. 350" },
      { name: "Special Channay", desc: "Full", price: "Rs. 250" },
      { name: "Salad", price: "Rs. 40" },
      { name: "Raita", price: "Rs. 40" },
    ],
  },
  {
    title: "Roast & Kabab",
    items: [
      { name: "Chicken Roast", desc: "Half", price: "Rs. 700" },
      { name: "Chicken Roast", desc: "Full", price: "Rs. 1300" },
      { name: "Chicken Piece", desc: "1/8", price: "Rs. 180" },
      { name: "Shami Kabab", desc: "Per Dozen", price: "Rs. 540" },
    ],
  },
  {
    title: "Sweets & Drinks",
    items: [
      { name: "Zarda", price: "Rs. 150" },
      { name: "Soft Drink", desc: "Coke / Nova", price: "Rs. 80" },
    ],
  },
];

export const degMenu: { name: string; qty: string; price: string }[] = [
  { name: "Sada Pulao", qty: "10 kg chawal", price: "Rs. 10,000" },
  { name: "Channa Pulao", qty: "10 kg chawal + 2 kg channa", price: "Rs. 11,000" },
  { name: "Vegetable Pulao", qty: "10 kg chawal + 6 kg sabzi", price: "Rs. 13,000" },
  { name: "Chicken Pulao", qty: "10 kg chawal + 6 kg murgh", price: "Rs. 17,000" },
  { name: "Mutton Pulao", qty: "10 kg chawal + 6 kg gosht", price: "Rs. 22,000" },
  { name: "Beef Pulao", qty: "10 kg chawal + 6 kg gosht", price: "Rs. 19,000" },
  { name: "Chicken Biryani", qty: "10 kg chawal + 10 kg gosht", price: "Rs. 22,000" },
  { name: "Mutton Biryani", qty: "10 kg chawal + 10 kg gosht", price: "Rs. 33,000" },
  { name: "Special Zarda", qty: "10 kg chawal, kishmish, kheer", price: "Rs. 20,000" },
  { name: "Chicken Qorma", qty: "12 kg murgh", price: "Rs. 17,000" },
  { name: "Mutton Qorma", qty: "12 kg gosht", price: "Rs. 36,000" },
  { name: "Beef Qorma", qty: "12 kg gosht (with bone)", price: "Rs. 22,000" },
];

export const contact = {
  phones: ["051-5706222", "0343-7117361", "0302-5527361"],
  address: "Sirsyed Chowk, Tipu Road, Near Zafar Honda Service, Rawalpindi.",
  name: "Punjab Foods — Pulao & Kabab",
};
