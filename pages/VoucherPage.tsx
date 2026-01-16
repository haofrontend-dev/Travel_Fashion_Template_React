
import React, { useState } from 'react';
import { VOUCHERS } from '../constants';
import { Voucher } from '../types';

const VoucherPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'travel' | 'fashion'>('all');
  const [platformFilter, setPlatformFilter] = useState<string | null>(null);

  const filteredVouchers = VOUCHERS.filter(v => {
    const categoryMatch = filter === 'all' || v.category === filter;
    const platformMatch = !platformFilter || v.platform === platformFilter;
    return categoryMatch && platformMatch;
  });

  const hotVouchers = filteredVouchers.filter(v => v.isHot);
  const normalVouchers = filteredVouchers.filter(v => !v.isHot);

  const TicketCard: React.FC<{ voucher: Voucher }> = ({ voucher }) => {
    const isHot = voucher.isHot;
    
    return (
      <div className={`relative flex h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group bg-white border-2 ${isHot ? 'border-brand-peach' : 'border-gray-50'}`}>
        {/* Serrated Line Effect */}
        <div className="absolute left-[30%] top-0 bottom-0 w-[1px] border-l-2 border-dashed border-gray-100 z-10"></div>
        <div className="absolute left-[30%] -top-3 size-6 bg-background-light rounded-full -ml-3 z-20"></div>
        <div className="absolute left-[30%] -bottom-3 size-6 bg-background-light rounded-full -ml-3 z-20"></div>

        {/* Left Side - Discount */}
        <div className={`w-[30%] flex flex-col items-center justify-center p-4 text-center ${isHot ? 'bg-brand-peach/10' : 'bg-gray-50'}`}>
          <span className={`text-[10px] font-black uppercase tracking-wider mb-1 ${isHot ? 'text-orange-800' : 'text-gray-400'}`}>
            {voucher.brand}
          </span>
          <div className={`text-3xl font-black ${isHot ? 'text-orange-900' : 'text-text-main'}`}>
            {voucher.discount}
          </div>
          {voucher.terms && (
            <div className={`text-[8px] font-bold mt-2 uppercase ${isHot ? 'text-orange-800/60' : 'text-gray-400'}`}>
              {voucher.terms.split(' ')[0]} {voucher.terms.split(' ')[1]}
            </div>
          )}
        </div>

        {/* Right Side - Details */}
        <div className="flex-1 p-6 flex flex-col justify-between relative">
          {isHot && (
            <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest">
              HOT
            </div>
          )}
          <div>
            <h4 className="font-black text-lg text-text-main leading-tight mb-1 group-hover:text-primary transition-colors">
              {voucher.description}
            </h4>
            <p className="text-[11px] text-gray-500 font-medium">Hạn dùng: {voucher.expiry}</p>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-[10px] font-bold text-gray-400 italic">
              * {voucher.terms || 'Áp dụng một số sản phẩm'}
            </span>
            <button className={`px-4 py-2 rounded-xl text-xs font-black transition-all active:scale-95 whitespace-nowrap ${isHot ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20' : 'bg-gray-100 text-text-main hover:bg-primary hover:text-white'}`}>
              {isHot ? 'Sao chép & Đến sàn' : 'Lấy mã'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background-light pb-20">
      {/* Hero Search Section */}
      <section className="relative h-[380px] rounded-b-[40px] overflow-hidden flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmK8iBzJa4NnOPw-6XthkmO33wYmBSepKlTh-RFgzhjQT2eujhoypXvIpwfQITptiSQEfuThP4XVogJGjAmJNYKvbkPWbqFapBEtbQOVtTAsIea704UUYjfAwBuVFFVlf-djRYieDlcf5cc-DJGDUUqnCcmVXjHmCN6IUB57kffXg5suyRLj9HKt1UmbaYszoKBHIRUababaFKR41o-30KmkIFw8GChLCH-Czd0mujb5pC5xs1uvM2ot2JoMCOlugt2A18Yif7bX1U")' }}
        ></div>
        <div className="relative z-10 text-center max-w-2xl w-full">
          <h1 className="text-white text-4xl md:text-5xl font-black mb-4 leading-tight">
            Kho Voucher Ưu Đãi <br/><span className="text-primary italic">Độc Quyền</span>
          </h1>
          <p className="text-white/80 font-medium mb-8">Săn ngay mã giảm giá Klook, Traveloka, Shopee, Lazada mới nhất hôm nay</p>
          <div className="flex bg-white rounded-2xl p-2 shadow-2xl max-w-xl mx-auto border-4 border-white/20">
            <div className="flex items-center pl-4 text-gray-400">
               <span className="material-symbols-outlined">search</span>
            </div>
            <input className="flex-1 border-none focus:ring-0 text-sm font-bold" placeholder="Tìm mã theo thương hiệu (ví dụ: Shopee)..." />
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-black hover:bg-primary-hover transition-all">Tìm kiếm</button>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 mt-12">
        {/* Filters Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6 text-text-main font-black">
             <span className="material-symbols-outlined text-primary">tune</span>
             <h2 className="text-xl">Phân loại theo ngành hàng & Sàn</h2>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full text-sm font-black transition-all ${filter === 'all' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-text-main border border-gray-100 hover:border-primary'}`}
            >
              Tất cả
            </button>
            <button 
              onClick={() => setFilter('travel')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black transition-all ${filter === 'travel' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-text-main border border-gray-100 hover:border-primary'}`}
            >
              <span className="material-symbols-outlined text-sm">flight_takeoff</span> Du lịch
            </button>
            <button 
              onClick={() => setFilter('fashion')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black transition-all ${filter === 'fashion' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-text-main border border-gray-100 hover:border-primary'}`}
            >
              <span className="material-symbols-outlined text-sm">checkroom</span> Thời trang
            </button>
            
            <div className="w-[1px] h-8 bg-gray-200 mx-2"></div>

            {['Shopee', 'Lazada', 'Klook'].map(p => (
              <button 
                key={p}
                onClick={() => setPlatformFilter(platformFilter === p ? null : p)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black transition-all border ${platformFilter === p ? 'bg-text-main text-white border-text-main' : 'bg-white text-text-main border-gray-100 hover:border-primary'}`}
              >
                <div className={`size-6 rounded flex items-center justify-center text-[10px] text-white font-black ${p === 'Shopee' ? 'bg-orange-500' : p === 'Lazada' ? 'bg-blue-600' : 'bg-pink-500'}`}>
                  {p[0]}
                </div>
                {p}
              </button>
            ))}
          </div>
        </section>

        {/* Hot Vouchers Section */}
        {hotVouchers.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 bg-brand-peach/20 rounded-xl flex items-center justify-center text-orange-800">
                <span className="material-symbols-outlined animate-pulse">local_fire_department</span>
              </div>
              <h2 className="text-2xl font-black text-text-main uppercase tracking-widest">Voucher Hot nhất hôm nay</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotVouchers.map(v => <TicketCard key={v.id} voucher={v} />)}
            </div>
          </section>
        )}

        {/* Normal Vouchers Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-black text-text-main mb-8">Tất cả Voucher</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {normalVouchers.map(v => <TicketCard key={v.id} voucher={v} />)}
          </div>
        </section>

        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-10 py-4 bg-white rounded-2xl font-black text-text-main border-2 border-primary hover:bg-primary hover:text-white transition-all shadow-sm">
            Xem thêm Voucher <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoucherPage;
