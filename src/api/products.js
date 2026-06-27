import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const fetchProducts = async () => {
  const { data: response, error } = await client
    .from("Products")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return response?.data?.list ?? [];
};

export const fetchProductBySlug = async (slug) => {
  const { data: response, error } = await client
    .from("Products")
    .select("*")
    .eq("slug", slug)
    .limit(1);
  if (error) throw error;
  const list = response?.data?.list ?? [];
  return list[0] ?? null;
};

export const fetchBestsellers = async () => {
  const { data: response, error } = await client
    .from("Products")
    .select("*")
    .eq("bestseller", true)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return response?.data?.list ?? [];
};
