export type DataType = {
  imageUrl: string;
  title: string;
  address: string;
  beds: number;
  bath: number;
  coveredAreaSQFT: number;
  propertyType: "House" | "Apartment" | "Commercial";
  isCommercial: boolean;
  price: number;
  createdAt: string;
  id: string;
};

// array of all alphabet letters
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

// to be able to sort later
function returnRandomAlphabet() {
  return alphabet[Math.floor(Math.random() * 26)];
}

export const data: DataType[] = Array.from({ length: 100 }, (_, i) => ({
  imageUrl: `https://picsum.photos/seed/${i}/200/300`,
  title: `${returnRandomAlphabet()} Property ${i}`,
  address: `${returnRandomAlphabet()} Address ${i}`,
  beds: Math.floor(Math.random() * 10),
  bath: Math.floor(Math.random() * 10),
  coveredAreaSQFT: Math.floor(Math.random() * 10000),
  propertyType: ["House", "Apartment", "Commercial"][
    Math.floor(Math.random() * 3)
  ] as "House" | "Apartment" | "Commercial",
  isCommercial: Math.random() > 0.5,
  price: Math.floor(Math.random() * 1000000),
  createdAt: new Date().toISOString(),
  id: i.toString(),
}));
