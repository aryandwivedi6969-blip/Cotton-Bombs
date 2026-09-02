import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

/* ── Products ── */
export const getProducts = (params = {}) => api.get("/api/products", { params });
export const getProduct = (slug) => api.get(`/api/products/${slug}`);

/* ── Deals ── */
export const getDeals = () => api.get("/api/deals");

/* ── Cart ── */
export const getCart = (sessionId) => api.get(`/api/cart/${sessionId}`);
export const addToCart = (item) => api.post("/api/cart", item);
export const updateCartItem = (itemId, data) => api.patch(`/api/cart/${itemId}`, data);
export const removeFromCart = (itemId) => api.delete(`/api/cart/${itemId}`);

/* ── Admin ── */
export const getAdminStats = () => api.get("/api/admin/stats");

export default api;
