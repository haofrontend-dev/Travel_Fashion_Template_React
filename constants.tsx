
import { Destination, Product, Voucher } from './types';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'tip' | 'fashion' | 'food' | 'review';
  categoryName: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
}

export const HANDBOOK_ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Phối đồ đi Phú Quốc: 7 outfit "sống ảo" cực chất cho nàng',
    excerpt: 'Làm thế nào để vừa thoải mái vui chơi vừa có những bức ảnh lung linh tại Đảo Ngọc? Khám phá ngay bí quyết chọn đồ cực chuẩn...',
    category: 'fashion',
    categoryName: 'Thời trang',
    readTime: '5 phút đọc',
    date: '15 Tháng 5, 2024',
    author: 'Minh Thư',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgYEltD1CF13zbK-ZsAa47iffHNcGEXOuY4TicsE6A3xZpE0Y5JaXKnAGj934WbHVNiGreUIBGgReOKrVpR0eyVy-NpX2pm3TCBXWEVgbsvmraEM6LmDEq6DvaYxATEsB6uT58zck9JEwzw1qImRB23BuUHIBASh1xo1LiEfoW5riHPCz1YGqRNqhk1S98jnoVKSt28OW_BtKwyZ_r4-F9tEG1KvBDwY_FloaOHuFE4k89sZS8dSrnZdNgLmmfYjd3l2XVcUSKLKFk'
  },
  {
    id: 'a2',
    title: 'Top 5 quán bún quậy "ngon nhức nách" nhất định phải thử',
    excerpt: 'Bún quậy là đặc sản không thể bỏ qua khi đến Phú Quốc. Nhưng quán nào mới thực sự là chuẩn vị địa phương? Xem ngay review chi tiết...',
    category: 'food',
    categoryName: 'Ẩm thực',
    readTime: '8 phút đọc',
    date: '12 Tháng 5, 2024',
    author: 'Hoàng Nam',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Vna0wmGuzUY9O0UMBe79MoaJdTzj9d2gAAmoawUf0vQ-23-1mo7xpo5Ac7t9YwGYEA4c8ozJ6l1pVXqxRFwWIod4RCYZ6Jc4jxMsnPwpx1nzwENkv559HLMlBgV0Y1pkTlQPwTovFF-D_EpsUFEPRfzUtaYAePH71jZEKxfhq4DD0w71YUfTCt33fltQG2ZojdQ0m1nucLuFlew8n0FmPU1YtapsrCJ15h6fMv16FUImfYPD2IBZmoEdyumOOU_hGsnQFBwi1MQz'
  },
  {
    id: 'a3',
    title: 'Kinh nghiệm đi VinWonders 1 ngày: Chơi gì, ăn đâu?',
    excerpt: 'Lịch trình tối ưu để khám phá trọn vẹn VinWonders và Safari trong 24 giờ. Bí kíp tránh dòng người đông đúc và các trò chơi hấp dẫn nhất...',
    category: 'tip',
    categoryName: 'Mẹo du lịch',
    readTime: '10 phút đọc',
    date: '10 Tháng 5, 2024',
    author: 'Khánh Linh',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLDggQEC0k6YVdOeu7pr2ROPBsBeR6LURtO8EQ38dwFF8diwxL6EOcau_M0HC2r2_TbMqATku1OhoSdt3ObN2bLMLCZyazyQN99i4dRPO0qeboiZqdhRPNNKHjTRmDagdIwJXBK-ieDGfuXuY20Si2VMYHU_iL8XY7PCp8pAYmoWC3-lKxhVYF8VLmdK8YaYYteVHKBnfnYYzDI2_0gJaCg4Ope8B19QIWca2SC4Not-5NDwIpxBTWtjv5rs1THLGAp1cVuCYBOEcw'
  },
  {
    id: 'a4',
    title: '6 món phụ kiện "nhỏ mà có võ" cho chuyến du lịch biển',
    excerpt: 'Đừng để chuyến đi thiếu đi sự hoàn hảo chỉ vì quên mang theo những món đồ nhỏ xinh này. Checklist phụ kiện không thể thiếu...',
    category: 'fashion',
    categoryName: 'Thời trang',
    readTime: '4 phút đọc',
    date: '08 Tháng 5, 2024',
    author: 'An Nhiên',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5pLHwxHwYGzHrBhrpodrkoyv5Jkba45R6zgn5oInSEr2TWfLygYK_CwJI-t4bqb9OWIe57yxJIfwpfpciVEEbevqE2Enl66SKaKzh5BZuhpZFQaWmH68lxPTLwfLrOBYtH8BjSFQYcTEmLQ9iHH-7f7M8wJ_CBzuRRxrU89hOmgcmnUTTkyGv8ZKLzIQy4rh1R_nfgs40VVg5DbP81i_thwTMYdsGHEZv136oba0qdbhnC2ikJr_PZsN0HlX9dvE7F6c-YSzNqa5y'
  }
];

export const DESTINATIONS: Destination[] = [
  // ... existing destinations
  {
    id: 'pq',
    name: 'Phú Quốc',
    description: 'Đảo Ngọc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHrdvNAPJ7hDddLT9Mo1kyHVokQGhKdKpka-3WaZDHXjGyqmWMwHZ3moljUYsWz04I0EGEpG8I4feAxzFUg73g4-2YWH5-KwS332YbDMkRZydDHldCDtCHvdttrVYL3yglmkRy0v425_FAVkNbdYtyhGx0x0hM2GqRngmMDHLTDFut_Yq_N0ihKi9IKGXpicKO44xlOzru0wC0kDe6pvHhW7b9DfxI2ovfQCcwbX9_NHuTVacZtixzoHMS8dzOutXqtr68O2I-vBfT',
    tagline: 'Thiên đường nghỉ dưỡng'
  },
  {
    id: 'dn',
    name: 'Đà Nẵng',
    description: 'Thành phố đáng sống',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArhvfdlFmN25APxCrgLI8Ne9W1W0BJwYGwj1Ii1HlszZguG6AzXeFufqoq0MPcMpzrnr8mG0L8hX3rCphoqjEJggR7WGA38hf7EvXdTMp1-Adr5mPC_oPfEc8w0E7j0THhb-nx6LZ2FOwxa5T-OZk_Pw7qO4wtMNvGyRVqkJ97ij1vSReTE8N5332IdZQ24y8ztJFUsr64E7K0VZAGxScr5XVggDGmUYhrDXxt_XFkUx5yNr8kEMtRzMHTqu1haA5blb8iqikM4FnC',
    tagline: 'Cầu Vàng lung linh'
  },
  {
    id: 'sp',
    name: 'Sapa',
    description: 'Thành phố trong sương',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwK_SBJbEl3kagXnGb-dnhsmjSMfgG8juKaJclE5gf8LX8KH7cms6L93ERFIXoEYbzp9yPs_UERr_H7-Vy1sryA9q7Uo4w_CHxPW2xd9HuMZuyc_upizPGiKkTi-pPk0Ki7-UMgWc16vtOXdB7pXNpw2YFFYFiTmxLcWenR-MDaP9JoCAqTNoPMA8Ol7LQO6Ih2yCCdjPMSvKQks-wKK69jse5Aekk-PmT7OsTxECNAkRSAzZgWYZZxdr6aklxWKGebB8SercV3ssF',
    tagline: 'Hùng vĩ núi rừng'
  },
  {
    id: 'ha',
    name: 'Hội An',
    description: 'Phố cổ bình yên',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaCvCYo8tqTitGw193I6BNmnpatSQ9an7JHKjqy1aE9X4feOCNQ3eEEdEwiyG6af2D0c-v8zBsj7yz70WWBtRK9EJLevb69x8ryKttifGCuEfIBW1TvIFA9bKCH3uMK0B2We18OVKW_PXG5zVYcYQdLeBar4ksNjgjLmDqDorJMXXl4a4OPolJz0eKY-hWecIWn2GauWSPumFJWtWsxA8H3-NHBh715UKe6jSAQXS1Zj8dT8IalsQTrhzD8gO9srJocHSbVeER8dHT',
    tagline: 'Ánh sáng lồng đèn'
  }
];

export const VOUCHERS: Voucher[] = [
  { id: 'v1', brand: 'Klook', discount: '20%', description: 'Vé Tham Quan Toàn Cầu', expiry: '31/12/2023', platform: 'Klook', isHot: true, terms: 'Áp dụng toàn sàn Klook', category: 'travel' },
  { id: 'v2', brand: 'Shopee', discount: '100k', description: 'Độc quyền Shopee Live', expiry: '24h hôm nay', platform: 'Shopee', isHot: true, terms: 'Đơn tối thiểu 0đ', category: 'fashion' },
  { id: 'v3', brand: 'Traveloka', discount: '500k', description: 'Ưu đãi thẻ HSBC', expiry: '15/11/2023', platform: 'Traveloka', isHot: true, terms: 'Chủ thẻ Credit HSBC', category: 'travel' },
  { id: 'v4', brand: 'Lazada', discount: '15%', description: 'Thời trang Nam Nữ', expiry: 'Còn 3 ngày', platform: 'Lazada', terms: 'Áp dụng một số shop', category: 'fashion' },
  { id: 'v5', brand: 'Uniqlo', discount: '50k', description: 'Mùa Đông Ấm Áp', expiry: '20/12/2023', platform: 'Uniqlo', terms: 'Đơn từ 499k', category: 'fashion' },
  { id: 'v6', brand: 'Grab', discount: 'Freeship', description: 'GrabFood Giờ Vàng', expiry: '11h - 13h', platform: 'Grab', terms: 'Đơn từ 100k', category: 'food' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'f1',
    title: 'Váy Maxi Lụa Đi Biển Cao Cấp',
    price: 549000,
    originalPrice: 890000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgYEltD1CF13zbK-ZsAa47iffHNcGEXOuY4TicsE6A3xZpE0Y5JaXKnAGj934WbHVNiGreUIBGgReOKrVpR0eyVy-NpX2pm3TCBXWEVgbsvmraEM6LmDEq6DvaYxATEsB6uT58zck9JEwzw1qImRB23BuUHIBASh1xo1LiEfoW5riHPCz1YGqRNqhk1S98jnoVKSt28OW_BtKwyZ_r4-F9tEG1KvBDwY_FloaOHuFE4k89sZS8dSrnZdNgLmmfYjd3l2XVcUSKLKFk',
    category: 'fashion',
    tag: 'Bestseller',
    properties: ['Thoáng khí', 'Nhanh khô'],
    platforms: [
      { name: 'Shopee', url: '#' },
      { name: 'Lazada', url: '#' }
    ]
  },
  {
    id: 'f2',
    title: 'Áo Sơ Mi Linen Unisex Form Rộng',
    price: 320000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5pLHwxHwYGzHrBhrpodrkoyv5Jkba45R6zgn5oInSEr2TWfLygYK_CwJI-t4bqb9OWIe57yxJIfwpfpciVEEbevqE2Enl66SKaKzh5BZuhpZFQaWmH68lxPTLwfLrOBYtH8BjSFQYcTEmLQ9iHH-7f7M8wJ_CBzuRRxrU89hOmgcmnUTTkyGv8ZKLzIQy4rh1R_nfgs40VVg5DbP81i_thwTMYdsGHEZv136oba0qdbhnC2ikJr_PZsN0HlX9dvE7F6c-YSzNqa5y',
    category: 'fashion',
    tag: 'Hot Deal',
    properties: ['Chống nắng'],
    platforms: [
      { name: 'Shopee', url: '#' }
    ]
  },
  {
    id: 'p2',
    title: 'Vé VinWonders & Safari Phú Quốc',
    price: 1150000,
    originalPrice: 1350000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLDggQEC0k6YVdOeu7pr2ROPBsBeR6LURtO8EQ38dwFF8diwxL6EOcau_M0HC2r2_TbMqATku1OhoSdt3ObN2bLMLCZyazyQN99i4dRPO0qeboiZqdhRPNNKHjTRmDagdIwJXBK-ieDGfuXuY20Si2VMYHU_iL8XY7PCp8pAYmoWC3-lKxhVYF8VLmdK8YaYYteVHKBnfnYYzDI2_0gJaCg4Ope8B19QIWca2SC4Not-5NDwIpxBTWtjv5rs1THLGAp1cVuCYBOEcw',
    category: 'activity',
    tag: 'Klook Partner',
    location: 'Phú Quốc',
    rating: 4.9,
    reviewCount: 2400,
    platform: 'Klook',
    discount: 'Giảm 15%',
    properties: ['Xác nhận tức thì', 'Miễn phí hủy']
  },
  {
    id: 'p3',
    title: 'Tour 4 Đảo & Cáp Treo Hòn Thơm',
    price: 1250000,
    originalPrice: 1500000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzwk6l2DIzLKXHaDlp-dh3msTTPqKf_rkda3IGpp5jmWF29yAWEDg_cOWPi2keQqU8jzE7NuWqhCGzir7pigVYX--PZip3oj7sFBO2OAUGwW_ouAIlmDFZiERil9sjI8oJW1iVf9Tf1xarc5aLOnhIY2uPUakOhzwDprrWHR0DhyglHtc0rre8x2lh18hVlm5yYWqnLQ0GGDrNZjowKK-P19g5Uj0BtV7zurw2CckyqMFzLMFGcaczqKWsO8BX37ujqS4-_y5aOjPY',
    category: 'activity',
    tag: 'Bán chạy nhất',
    location: 'Phú Quốc',
    platform: 'Klook',
    discount: 'Giá tốt nhất',
    properties: ['Bao gồm bữa trưa', 'HDV Tiếng Việt']
  },
  {
    id: 'p4',
    title: 'Vé Sun World Bà Nà Hills Đà Nẵng',
    price: 890000,
    originalPrice: 950000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArhvfdlFmN25APxCrgLI8Ne9W1W0BJwYGwj1Ii1HlszZguG6AzXeFufqoq0MPcMpzrnr8mG0L8hX3rCphoqjEJggR7WGA38hf7EvXdTMp1-Adr5mPC_oPfEc8w0E7j0THhb-nx6LZ2FOwxa5T-OZk_Pw7qO4wtMNvGyRVqkJ97ij1vSReTE8N5332IdZQ24y8ztJFUsr64E7K0VZAGxScr5XVggDGmUYhrDXxt_XFkUx5yNr8kEMtRzMHTqu1haA5blb8iqikM4FnC',
    category: 'activity',
    tag: 'Ưu đãi hè',
    location: 'Đà Nẵng',
    platform: 'Klook',
    properties: ['Cầu Vàng', 'Cáp treo']
  },
  {
    id: 'p5',
    title: 'Show Ký Ức Hội An - Vé Xem & Buffet',
    price: 600000,
    originalPrice: 750000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaCvCYo8tqTitGw193I6BNmnpatSQ9an7JHKjqy1aE9X4feOCNQ3eEEdEwiyG6af2D0c-v8zBsj7yz70WWBtRK9EJLevb69x8ryKttifGCuEfIBW1TvIFA9bKCH3uMK0B2We18OVKW_PXG5zVYcYQdLeBar4ksNjgjLmDqDorJMXXl4a4OPolJz0eKY-hWecIWn2GauWSPumFJWtWsxA8H3-NHBh715UKe6jSAQXS1Zj8dT8IalsQTrhzD8gO9srJocHSbVeER8dHT',
    category: 'activity',
    tag: 'Trải nghiệm văn hóa',
    location: 'Hội An',
    platform: 'Klook',
    properties: ['Vị trí VIP', 'Ăn tối']
  }
];
