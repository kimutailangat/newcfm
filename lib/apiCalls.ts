import axios from "axios";
import { Category, Product } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// Fetch a single product by ID
export async function getProduct(productId: string): Promise<Product> {
  console.log("Fetching product with BASE_URL:", BASE_URL);
  try {
    const res = await axios.get(`${BASE_URL}/api/product/${productId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

// Fetch all products within a category
export async function getCategoryProducts(category: string): Promise<Product[]> {
  console.log("Fetching category products with BASE_URL:", BASE_URL);
  try {
    const res = await axios.get(`${BASE_URL}/api/product/category/${category}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching category products:", error);
    throw error;
  }
}

// Fetch all categories
export const getCategories = async (): Promise<Category[]> => {
  console.log("Fetching categories with BASE_URL:", BASE_URL);
  if (!BASE_URL) {
    throw new Error("API URL is not defined. Check NEXT_PUBLIC_API_URL.");
  }

  try {
    const res = await axios.get(`${BASE_URL}/api/categories`);
    return res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Fetch a single category by name or ID
export const getCategory = async (category: string): Promise<Category> => {
  console.log("Fetching single category with BASE_URL:", BASE_URL);
  try {
    const res = await axios.get(`${BASE_URL}/api/categories/edit/${category}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
};

// Fetch all products
export async function getAllProducts(): Promise<Product[]> {
  console.log("Fetching all products with BASE_URL:", BASE_URL);
  try {
    const res = await axios.get(`${BASE_URL}/api/product`);
    return res.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
}

// Fetch featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  console.log("Fetching featured products with BASE_URL:", BASE_URL);
  try {
    const res = await axios.get(`${BASE_URL}/api/product`);
    const featured = res.data.filter((product: Product) => product.featured);
    return featured;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw error;
  }
}
console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
