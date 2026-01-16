
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const CategoryPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [styleFilter, setStyleFilter] = useState('All');
  
  const filteredProducts = PRODUCTS.filter(p => 
    type === 'destination' ? p.category === 'activity' : p.category === type
  );

  const isFashion = type === 'fashion';

  if (isFashion) {
    return (
      <div className="bg-[#faf8f5] min-h-screen">
        {/* Editorial Hero Section */}
        <section className="px-4 md:px-20 pt-8 pb-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden rounded-[2.5rem] h-[340px] bg-white flex items-center shadow-sm">
              {/* Editorial Gradient */}
              <div className="absolute inset-0 editorial-gradient opacity-20"></div>
              
              <div className="relative z-10 px-12 md:w-2/3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  Summer Collection 2024
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-text-main leading-tight mb-4 tracking-tighter">
                  Thời Trang Du Lịch:<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-emerald-500 italic">Mặc Đẹp Mỗi Điểm Đến</span>
                </h1>
                <p className="text-base text-text-muted max-w-lg font-medium">
                  Khám phá những bộ cánh tối ưu cho từng chuyến đi, từ biển xanh nắng vàng đến phố núi mờ sương.
                </p>
              </div>

              {/* Editorial Image */}
              <div className="absolute right-0 top-0 h-full w-1/3 bg-cover bg-center hidden md:block" 
                style={{ 
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWbJld_Apxak49dQTCF1gY8uh8bfcKSVvaaMOpZXLbLF6_X8xwryml65Y4jRhOumlDIq60oxw-tfsCKwXmpvyKs9INMbW04DX3guMwlSgzBKXZZs65q0sQaLuKP-gSQHcJt8Zu2sjr78iTUO3_jwMQhWINPW3q2qq7XYsXBjn2r0lAIxTh4NApTXHWAZJpfo2Gfk0vxAGlRyg9BoT00WlmbZXg86dqdIJlOWzIr0dg8LMvi-3Ih1CJA0kd4CUSOxqm8lkSifTQqxju")',
                  clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
                }}>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="px-4 md:px-20 py-4 sticky top-[64px] z-40 bg-[#faf8f5]/80 backdrop-blur-md">
          <div className="max-w-[1200px] mx-auto border-y border-[#ebf1ea] py-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-bold text-text-muted mr-2">Phong cách:</span>
                {['All', 'Minimalist', 'Boho Chic', 'Beachwear'].map(style => (
                  <button 
                    key={style}
                    onClick={() => setStyleFilter(style)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      styleFilter === style 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-white text-text-main hover:bg-primary/10'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-4 md:px-20 py-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        </section>

        {/* Suggestion Section */}
        <section className="px-4 md:px-20 py-16 bg-[#f0f4ef]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-black mb-6">Mặc gì khi đi <span className="text-primary-dark italic">VinWonders?</span></h2>
                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                  Để có một ngày vui chơi trọn vẹn tại VinWonders, bạn cần sự kết hợp giữa phong cách năng động và chất liệu thoáng mát.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { title: 'Set Đồ Thể Thao', price: 'Từ 350.000đ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADn3KMGXkx3qpiEOir2aUs-CG9Av7yerdXGEIyzisMA0mZrR7_euZidKbW3-yiWI348g9kh-tJARpsqSFaX-xxWHn7bYuOJ6tbULdTnEL-Jtm2tzKzmL7tHQaWn9t_z8z5o9Vk6VhF0sshBfhkMOrOly4ZqOtsjsj8iDjDVZv79z4Mi7Jf08mOaOqBy-0VsxXtDSvASBHQpqJs9_AbN_Gcl8fBCLaE31QvXAYVI2CIDZvaRULS9jyN_haOK7Vfqlo6upebBwLELDGF' },
                    { title: 'Túi Đeo Chống Nước', price: '125.000đ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlrD33IpKA2tqIRT6NiTeav5u_UpKzXYUkCKQZsXtINkcvhODKWsLU6QQC-jKbtRjIRFIOUcsMR3UE-tMJoMIKCDBXqbgg60O-b9zu97f7Onn0q4m80KhYmY61_OmoVH11W4VWVn2Q0ctdJXJ3Azrt3DCptJbyrBHA9U3TeLbyWF-PvITeLA3yCCPTkCu3FDnfFi-etUjOKKAL1g21kltiq75zb7QcGBWdMptWZCW1XlGi7jQcr00KTOy-GItas2thZK8alkHQX2KY' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                      <img src={item.img} className="size-16 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-bold text-text-main">{item.title}</h4>
                        <p className="text-sm font-bold text-primary-dark mt-1">{item.price}</p>
                      </div>
                      <button className="ml-auto material-symbols-outlined text-primary-dark">arrow_forward</button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-3xl bg-cover bg-center shadow-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7yztOcHLRF7hNMhZBJepJpUQCwktdZhrj9BGW4wyXyQ1ryuyi4KzocscBvnHiTTGyByRPVlmbNF8hTfX5ZLugtjDyf03rbbNP5ATJQDaqwKw1Vllhz4minqyq2HYFjEGUOeOJqxkzNCEKt765vXI5cO1wr9M2tsT5XFjbVpTz03Nt6pIM9SKZezIcryq1u2Xzyxjnob9S6xZb6Lnt8o8D8ZusqXHC1Khjxt9-AFBD6sAu54amTFir92kHL3miozc6g5sqHkGVYQEy")' }}></div>
                <div className="aspect-square rounded-3xl bg-primary flex flex-col items-center justify-center p-6 text-white text-center shadow-lg transform rotate-2">
                  <span className="material-symbols-outlined text-4xl mb-2">auto_awesome</span>
                  <p className="font-bold text-xs uppercase">Tips: Luôn mang theo kem chống nắng!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8 lg:px-8">
      <h1 className="text-3xl font-black mb-8 capitalize">{type === 'activity' ? 'Tour & Vé Trải Nghiệm' : 'Điểm Đến Phổ Biến'}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(prod => <ProductCard key={prod.id} product={prod} />)}
      </div>
    </div>
  );
};

export default CategoryPage;
