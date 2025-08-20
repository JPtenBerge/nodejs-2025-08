import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert a product
  const newProduct = await prisma.product.create({
    data: {
      name: "Sample Product",
      price: 19.99,
    },
  });
  console.log("Created:", newProduct);

  // Query all products
  const products = await prisma.product.findMany();
  console.log("All products:", products);
}

main()
  .catch((e) => {
    console.error(e);
    // process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });