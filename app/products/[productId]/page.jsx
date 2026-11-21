import { categories } from "@/Data2";
import ProductPageClient from "./ProductPageClient";

export async function generateMetadata({ params }) {
  const { productId } = await params;
  const product = categories
    .flatMap((category) => [
      ...(category.products || []),
      ...(category.subcategory || []).flatMap((subcategory) => subcategory.products || []),
    ])
    .find((item) => item.id === productId);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "Product not found",
    };
  }

  return {
    title: product.metaTitle || `${product.name} | Vands Engineering Solutions`,
    description: product.metaDescription || product.description?.[0]?.text || "",
  };
}

export default async function Page({ params }) {
  const { productId } = await params;
  return <ProductPageClient productId={productId} />;
}
