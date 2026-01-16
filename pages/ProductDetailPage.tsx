
import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  // Fixed: changed class to className
  if (!product) return <div className="p-20 text-center font-bold">Product not found.</div>;

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl custom-serif font-black mb-4">{product.title}</h1>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-1 text-yellow-500 font-bold">
            <span className="material-symbols-outlined fill-current">star</span>
            <span>4.8</span>
            <span className="text-text-sub font-normal ml-1">(1,250 reviews)</span>
          </div>
          <div className="flex items-center gap-1 text-text-sub">
            <span className="material-symbols-outlined text-[20px]">location_on</span>
            <span>{product.location || 'Việt Nam'}</span>
          </div>
          <div className="flex items-center gap-1 text-text-sub">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <span>Đối tác chính thức</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[65%]">
          <div className="grid grid-cols-4 grid-rows-2 gap-3 mb-10 h-[450px]">
            <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-lg">
              <img src={product.image} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 rounded-2xl overflow-hidden shadow-lg">
              <img src="https://picsum.photos/seed/detail1/400/300" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 rounded-2xl overflow-hidden shadow-lg bg-black/20 relative cursor-pointer">
              <img src="https://picsum.photos/seed/detail2/400/300" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">+15 ảnh</div>
            </div>
          </div>

          <section className="space-y-6">
             <h2 className="text-2xl font-bold font-serif italic border-l-4 border-primary pl-4">Khám phá chi tiết</h2>
             <p className="text-text-sub leading-relaxed">
               Trải nghiệm hành trình tuyệt vời với dịch vụ chuyên nghiệp. Chúng tôi cam kết mang lại giá trị tốt nhất thông qua các đối tác tin cậy. 
               Sản phẩm được lựa chọn kỹ lưỡng để phù hợp với phong cách của bạn.
             </p>
             <div className="bg-accent-cream/30 p-8 rounded-3xl border border-accent-cream/60">
                <h3 className="font-bold mb-4">Ưu đãi độc quyền tại Klook</h3>
                <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 mb-3">
                   <div className="font-bold">Vé Người Lớn</div>
                   <div className="text-right">
                      <p className="text-xs text-gray-400 line-through">880.000₫</p>
                      <p className="text-lg font-bold text-primary">800.000₫</p>
                   </div>
                </div>
                <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-hover shadow-lg shadow-primary/20">
                   Săn ưu đãi ngay
                </button>
             </div>
          </section>
        </div>

        <div className="lg:w-[35%] relative">
          <div className="sticky top-28 space-y-6">
             <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-50">
                <h3 className="font-bold text-xl mb-6">Lựa chọn sàn mua sắm</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 rounded-xl border border-orange-100 bg-orange-50/50 hover:bg-orange-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-10 bg-white rounded-lg flex items-center justify-center font-black text-orange-600 italic">S</div>
                      <span className="font-bold">Shopee</span>
                    </div>
                    <span className="font-bold text-primary">{product.price.toLocaleString('vi-VN')}₫</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-4 rounded-xl border border-blue-100 bg-blue-50/50 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-10 bg-white rounded-lg flex items-center justify-center font-black text-blue-600 italic">L</div>
                      <span className="font-bold">Lazada</span>
                    </div>
                    <span className="font-bold text-primary">{(product.price - 5000).toLocaleString('vi-VN')}₫</span>
                  </button>
                </div>
                <p className="text-[10px] text-center text-gray-400 italic mt-4">* Link chứa tiếp thị liên kết từ DuLịchStyle</p>
             </div>

             <div className="bg-accent-peach/20 rounded-3xl p-6 border border-accent-peach/40">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                   <span className="material-symbols-outlined text-orange-600">checkroom</span> Gợi ý Outfit
                </h4>
                <p className="text-sm text-text-sub">Sắm trọn bộ sưu tập phong cách Resort để có những bức ảnh triệu like.</p>
                <button className="text-primary font-bold text-xs mt-3 hover:underline">Xem bộ sưu tập →</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
