
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'fashion' | 'activity' | 'voucher';
  tag?: string;
  rating?: number;
  reviewCount?: number;
  location?: string;
  platform?: 'Shopee' | 'Lazada' | 'Klook' | 'Traveloka';
  platforms?: { name: 'Shopee' | 'Lazada'; url: string; price?: number }[];
  properties?: string[];
  discount?: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  tagline: string;
}

export interface Voucher {
  id: string;
  brand: string;
  discount: string;
  description: string;
  expiry: string;
  platform: 'Shopee' | 'Lazada' | 'Klook' | 'Grab' | 'Traveloka' | 'Uniqlo' | 'Agoda' | 'TikTokShop' | 'Mytour';
  isHot?: boolean;
  terms?: string;
  category?: 'travel' | 'fashion' | 'food';
}
