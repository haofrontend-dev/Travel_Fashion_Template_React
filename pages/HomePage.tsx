
import React from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const activityProducts = PRODUCTS.filter(p => p.category === 'activity');

  return (
    <div className="pb-20">
      {/* Section: UX Builder Hero Slider Simulation */}
      <section className="relative px-4 lg:px-8 py-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[500px]">
          {/* Main Large Banner */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden group shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWGZ5FsQZS8i73UGUet5pnYASZAgRqCIjCbOeKk9DIH_qCcqtSZGgwpU-0b-5Nvp1peBFbbDZNHmUJlBqUu80WNx88q8kLKjTJAWI5B8t7E3gRCxmCIAVocq86YqbzpyZhEyhkHZdbGZIS0Za-SHQv5TmZB03NfXXZqHJgAB4iAInHQqpCWcKFAK3LT2w92rFm6xzDLGyN0XK0_ItWZOaRYxqhlUxZUcZP9Dmne26CiU1HEsrDKdvaiGt0aSd4lNdVfieC18NIJbM3")` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
            <div className="relative z-10 h-full flex flex-col justify-center p-12 max-w-lg">
               <span className="bg-primary text-white text-[11px] font-black uppercase px-3 py-1 rounded-full w-fit mb-4 tracking-widest shadow-sm">Mùa hè 2024</span>
               <h1 className="text-white text-5xl font-black mb-6 leading-tight tracking-tighter">
                 Mặc Đẹp <br/> Check-in <br/> <span className="text-primary italic">Mọi Nơi</span>
               </h1>
               <p className="text-white/80 text-lg mb-8 font-medium">Săn trọn bộ sưu tập thời trang du lịch và vé tham quan giá cực hời.</p>
               <div className="flex gap-4">
                  <button className="bg-primary text-white px-8 py-4 rounded-full font-black hover:brightness-110 shadow-xl shadow-primary/20 transition-all flex items-center gap-2 uppercase tracking-widest text-xs">
                     SĂN DEAL NGAY <span className="material-symbols-outlined">bolt</span>
                  </button>
               </div>
            </div>
          </div>
          
          {/* Side Banners */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 relative rounded-3xl overflow-hidden group shadow-xl">
               <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgYEltD1CF13zbK-ZsAa47iffHNcGEXOuY4TicsE6A3xZpE0Y5JaXKnAGj934WbHVNiGreUIBGgReOKrVpR0eyVy-NpX2pm3TCBXWEVgbsvmraEM6LmDEq6DvaYxATEsB6uT58zck9JEwzw1qImRB23BuUHIBASh1xo1LiEfoW5riHPCz1YGqRNqhk1S98jnoVKSt28OW_BtKwyZ_r4-F9tEG1KvBDwY_FloaOHuFE4k89sZS8dSrnZdNgLmmfYjd3l2XVcUSKLKFk")' }}></div>
               <div className="absolute inset-0 bg-black/30"></div>
               <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-black leading-tight mb-2">Đầm Đi Biển <br/> Giảm 50%</h3>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Flash Sale Shopee</p>
               </div>
            </div>
            <div className="flex-1 relative rounded-3xl overflow-hidden group shadow-xl">
               <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLDggQEC0k6YVdOeu7pr2ROPBsBeR6LURtO8EQ38dwFF8diwxL6EOcau_M0HC2r2_TbMqATku1OhoSdt3ObN2bLMLCZyazyQN99i4dRPO0qeboiZqdhRPNNKHjTRmDagdIwJXBK-ieDGfuXuY20Si2VMYHU_iL8XY7PCp8pAYmoWC3-lKxhVYF8VLmdK8YaYYteVHKBnfnYYzDI2_0gJaCg4Ope8B19QIWca2SC4Not-5NDwIpxBTWtjv5rs1THLGAp1cVuCYBOEcw")' }}></div>
               <div className="absolute inset-0 bg-black/30"></div>
               <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-black leading-tight mb-2">Vé Klook <br/> Phú Quốc</h3>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Độc Quyền Tại Đây</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Icon Boxes */}
      <section className="py-12 max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { icon: 'verified', title: 'Uy Tín 100%', sub: 'Sàn Affiliate hàng đầu' },
             { icon: 'sell', title: 'Deal Độc Quyền', sub: 'Mã giảm giá mỗi ngày' },
             { icon: 'camera_enhance', title: 'Mặc Đẹp Check-in', sub: 'Xu hướng mới nhất' },
             { icon: 'support_agent', title: 'Hỗ Trợ 24/7', sub: 'Tận tâm chu đáo' }
           ].map((box, i) => (
             <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-dark group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                   <span className="material-symbols-outlined text-2xl">{box.icon}</span>
                </div>
                <div>
                   <h4 className="font-black text-sm text-text-main leading-tight">{box.title}</h4>
                   <p className="text-[11px] text-text-muted font-medium">{box.sub}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Section 1: Vé & Hoạt Động Nổi Bật (Horizontal Style) */}
      <section className="py-16 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between mb-8 px-2">
           <div className="border-l-4 border-primary pl-6">
              <span className="text-primary-dark font-black tracking-[0.2em] uppercase text-[10px] mb-1 block">Khám phá vui chơi</span>
              <h2 className="text-3xl font-black text-text-main tracking-tight">Vé & Hoạt Động <span className="text-primary italic">Nổi Bật</span></h2>
           </div>
           <Link to="/category/activity" className="text-primary-dark flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:underline">
             Xem tất cả <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
           </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activityProducts.slice(0, 2).map((item, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row gap-6 p-5 rounded-3xl bg-white hover:shadow-xl transition-all duration-300 border border-slate-50 relative overflow-hidden">
              <div className="md:w-52 h-44 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase text-primary-dark tracking-widest">
                    <span>{item.tag}</span>
                    <div className="size-1 rounded-full bg-slate-200"></div>
                    <span className="text-slate-400">{item.discount || 'Khuyên dùng'}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-dark transition-colors">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.properties?.map((p, i) => (
                      <span key={i} className="bg-primary/5 text-text-muted text-[9px] px-2 py-0.5 rounded-full font-bold">{p}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-primary-dark">{item.price.toLocaleString('vi-VN')}₫</span>
                    {item.originalPrice && (
                      <span className="text-xs text-slate-300 line-through">{item.originalPrice.toLocaleString('vi-VN')}₫</span>
                    )}
                  </div>
                  <Link to={`/product/${item.id}`} className="bg-primary/10 hover:bg-primary text-text-main px-5 py-2 rounded-xl text-[10px] font-black transition-all flex items-center gap-1.5 uppercase tracking-wider">
                    Đặt vé <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Top Trải Nghiệm Khám Phá (Grid Style) */}
      <section className="py-16 bg-accent-yellow/10">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
             <span className="text-primary-dark font-black tracking-[0.2em] uppercase text-[10px] mb-2 block">Bắt đầu hành trình</span>
             <h2 className="text-4xl font-black text-text-main font-serif italic tracking-tighter">Trải Nghiệm Địa Phương</h2>
             <p className="text-text-muted mt-2 font-medium">Những hoạt động du lịch độc bản dành cho chuyến đi của bạn</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {activityProducts.slice(0, 4).map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/category/activity" className="inline-flex items-center gap-3 bg-white text-text-main px-8 py-4 rounded-full font-black hover:bg-primary hover:text-white transition-all shadow-md uppercase tracking-widest text-[10px]">
                Xem thêm 50+ hoạt động vui chơi
                <span className="material-symbols-outlined text-sm">explore</span>
             </Link>
          </div>
        </div>
      </section>

      {/* Section: Trending Destinations */}
      <section className="py-16 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="border-l-4 border-primary pl-6">
            <span className="text-primary-dark font-black tracking-[0.2em] uppercase text-xs mb-2 block">Cảm hứng chuyến đi</span>
            <h2 className="text-4xl font-black text-text-main tracking-tight">Điểm Đến <span className="text-primary italic underline decoration-4 underline-offset-8">Hot Nhất</span></h2>
          </div>
          <Link to="/category/destination" className="bg-white hover:bg-primary hover:text-white px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest transition-all border border-slate-100 flex items-center gap-2 shadow-sm uppercase">
            XEM TẤT CẢ <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS.map((dest, i) => (
            <Link to={`/destination/${dest.id}`} key={dest.id} className={`group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${i === 1 ? 'md:mt-8' : i === 3 ? 'md:mt-8' : ''}`}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${dest.image})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-2">
                   <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-bold uppercase tracking-widest">{dest.tagline}</span>
                </div>
                <h3 className="text-white text-3xl font-black mb-1 drop-shadow-md">{dest.name}</h3>
                <div className="flex items-center justify-between overflow-hidden">
                  <span className="text-white/80 text-sm font-medium translate-y-8 group-hover:translate-y-0 transition-transform duration-300">{dest.description}</span>
                  <div className="bg-primary text-white rounded-full p-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section: Shop the Look */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-text-main mb-4 font-serif italic tracking-tighter">#OOTD Travel Style</h2>
              <div className="flex justify-center gap-8 text-[11px] font-black uppercase tracking-widest">
                 <button className="border-b-2 border-primary text-primary-dark pb-2">Đi Biển</button>
                 <button className="text-text-muted hover:text-primary transition-colors pb-2">Phố Cổ</button>
                 <button className="text-text-muted hover:text-primary transition-colors pb-2">Vùng Núi</button>
                 <button className="text-text-muted hover:text-primary transition-colors pb-2">Luxury Resort</button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.filter(p => p.category === 'fashion').slice(0, 4).map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
           </div>
           
           <div className="mt-16 text-center">
              <Link to="/category/fashion" className="bg-text-main text-white px-10 py-4 rounded-full font-black hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/10 uppercase tracking-widest text-[10px]">
                 XEM TOÀN BỘ OUTFIT
              </Link>
           </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 border-t border-slate-100 bg-white">
         <div className="max-w-[1280px] mx-auto px-4 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <span className="text-2xl font-black italic text-orange-600">SHOPEE</span>
            <span className="text-2xl font-black italic text-blue-600">LAZADA</span>
            <span className="text-2xl font-black italic text-pink-500">KLOOK</span>
            <span className="text-2xl font-black italic text-sky-500">TRAVELOKA</span>
            <span className="text-2xl font-black italic text-green-600">GRAB</span>
         </div>
      </section>
    </div>
  );
};

export default HomePage;
