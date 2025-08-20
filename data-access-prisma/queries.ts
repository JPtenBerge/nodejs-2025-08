import { PrismaClient } from "./generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

// 2
const prisma = new PrismaClient().$extends(withAccelerate());

// 3
async function main() {
  // await prisma.product.create({ data: { name: "Muis", price: 10 } });
  // await prisma.product.create({ data: { name: "Monitor", price: 199 } });
  // await prisma.product.create({ data: { name: "Grill Princess", price: 55 } });

  const allUsers = await prisma.product.findMany();
  console.log(allUsers);
}

// 4
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    // 5
    await prisma.$disconnect();
    // process.exit(1);
  });
