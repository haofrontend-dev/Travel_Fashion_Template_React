
import React from 'react';
import { useParams } from 'react-router-dom';
import { DESTINATIONS } from '../constants';

const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const destination = DESTINATIONS.find(d => d.id === id) || DESTINATIONS[0];

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Hero Banner */}
          <section className="relative h-[500px] rounded-[2.5rem] overflow-hidden group shadow-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%), url("${destination.image}")` 
              }}
            ></div>
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-text-main px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.2em]">Best Seller</span>
                <span className="text-sm font-bold opacity-90">{destination.name}, Kiên Giang</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tighter">
                {destination.id === 'pq' ? 'Bản Giao Hưởng Đảo Ngọc' : `Hành Trình Khám Phá ${destination.name}`}
              </h1>
              <div className="flex flex-wrap gap-10 border-l-2 border-primary pl-6 py-1">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-60 mb-1">Thời điểm đẹp</p>
                  <p className="text-lg font-bold">Tháng 11 — Tháng 4</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-60 mb-1">Phong cách</p>
                  <p className="text-lg font-bold italic">Tropical Chic</p>
                </div>
              </div>
            </div>
          </section>

          {/* Activities List */}
          <section>
            <div className="flex items-center justify-between mb-8 px-2">
              <h2 className="text-2xl font-black">Vé & Hoạt Động Nổi Bật</h2>
              <button className="text-primary-dark flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:underline">
                Xem tất cả <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'Vé VinWonders Phú Quốc', sub: 'Công viên chủ đề hàng đầu Việt Nam với quy mô hoành tráng.', price: '880.000₫', oldPrice: '950.000₫', partner: 'Klook Partner', discount: 'Giảm 15%', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm3YVSHgtTYwOjkGEGOc2ezXOeR9JuaUys2cdK0XzJTu0k7JrdwqQKNQHPrhATwUrxlGhhKfHlODGBGUkxgwcXtWPkiraevIW4NEwKslW5pGGQWIOBEG42nUqT9Ut7Gb1N64btb5r5PTByzmIfygut1OVLHHyzF6ad9heJ_j5NeRy3UiREXufoqJSqqTmunmXA1CgJ9LUAkgmxfefk0XENqWqLu4ZV2rcn52LAu_2V4hfg-SM_8C1U-4Pg9PCzhkbe-mEaFIkWm1r-' },
                { title: 'Tour 4 Đảo & Cáp Treo', sub: 'Trải nghiệm cáp treo vượt biển dài nhất thế giới.', price: '1.250.000₫', oldPrice: '1.500.000₫', partner: 'Bán chạy nhất', discount: 'Mỗi ngày', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzwk6l2DIzLKXHaDlp-dh3msTTPqKf_rkda3IGpp5jmWF29yAWEDg_cOWPi2keQqU8jzE7NuWqhCGzir7pigVYX--PZip3oj7sFBO2OAUGwW_ouAIlmDFZiERil9sjI8oJW1iVf9Tf1xarc5aLOnhIY2uPUakOhzwDprrWHR0DhyglHtc0rre8x2lh18hVlm5yYWqnLQ0GGDrNZjowKK-P19g5Uj0BtV7zurw2CckyqMFzLMFGcaczqKWsO8BX37ujqS4-_y5aOjPY' }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col md:flex-row gap-6 p-5 rounded-3xl bg-white hover:shadow-md transition-all border border-slate-50">
                  <div className="md:w-60 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase text-primary-dark tracking-widest">
                        <span>{item.partner}</span>
                        <div className="size-1 rounded-full bg-slate-200"></div>
                        <span className="text-slate-400">{item.discount}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-text-muted line-clamp-2 leading-relaxed">{item.sub}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-primary-dark">{item.price}</span>
                        <span className="text-xs text-slate-300 line-through">{item.oldPrice}</span>
                      </div>
                      <button className="bg-primary/10 hover:bg-primary text-text-main px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2">
                        Đặt vé ngay <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lookbook Grid */}
          <section className="bg-[#f0f4ef] rounded-[2.5rem] p-10">
            <h2 className="text-2xl font-black text-center mb-8">Lookbook Điểm Đến</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
              <div className="relative row-span-2 rounded-3xl overflow-hidden group shadow-md">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7B0L6UCg2uBc6t5dhZV-_6DkpefglHjoVWjCEdVJAr-zGTh6ZMwwAdFEhm5abn5ZUGCzoPCBYLD_yXN8o12qm6Xm6mmXYC-5W_i8eQyQEZFjZqxmhSoU3Vn1M2oBGVRGRj31hpvz9gUfWw52Gi1MaqQ6qcvRpo1hjoD2Z6iBFt0CKs_20VpIVUqJly20DBkozsrj_ru5GQ1vIN6QEeF7khWwdg0FL9A4MORB1xDpwu5Egw7wh1Iulcdpep38CiuW2Z_YSas8N5ivn" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">Hoàng Hôn</p>
                  <h4 className="text-lg font-bold mb-3">Váy Maxi Bay Bổng</h4>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-[10px] font-bold hover:bg-white hover:text-text-main transition-all uppercase">Sắm tại Shopee</button>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-sm">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEhPkBxlXw3H7vLGLujQ8Igia3aVU9H-yaFrobHsZYwh5Ns2LIb9NnCojOmlJKzkycv6mw5r7_MmIQF4ZvQC161xvwyw6iibqA_F3lQtqJb2ED4ZW6m2baA1-AhJ5o3LlmY42Q2VVY93f9kDUW5TECE3BSXq7rVniag83uoKKs3w2Z_Sg0C-4dtfclE6EZbEIJymO4AbnRqsSB6QUsIGpz4eqrgYPj5MqRTW75ZzLfXwvhnyf9ueSgEoWByTHQfoRYdz2n7OU4SKu7" className="w-full h-full object-cover" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdsuDxwdRex9YBp5k_eVSnqON3_RTS4MvhoVfzx8kY_OWuaqMwmiEFCQgNe-6d-JKWaqhi4xGObgIU7u_oMdH4VJYDQSkL2ah8_pFuHyc5VZYb3bPUSy64ME44jhrGfijQ_WUcotkiFFghalYYLNRpp92LZUFP0idJOxtM4gY8pZVBwhwuUTy6hxVuoR_-NvVKxPYXQ-T0EcIjWKnf49s3m91OMcuLr4lxbttWVNu5gAJHSFlbntThBNR-dkjcK3qsUPIqijpIL9Xq" className="w-full h-full object-cover" />
              </div>
              <div className="relative col-span-2 rounded-3xl overflow-hidden shadow-sm">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC03D0mQIsJpWehSAZCA0Fok8NbUVgbtw_sPDeJ69lH6THtPykcgvMcen-8mNV5BMqM3xejZ7jMyzwtedzyQ8UO9e9otHvZe2JySrIU2a1vMwh6XGopTDpVEokvqg9YtCkc4tdi0W7w5D7ksQjoIHMfYWuDGo55SD4hKkqVjY5M32uGZV8-o5QmjLFPHzaxFRGhMGu8lEgXUj2x_kh2CvGmGjn8P8BtfWdGRbXAYNnI3cPQhiTvRo8IfYCyOhzrn9K8oJ-aPnN91A3p" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-sm">Lazada Mall</div>
              </div>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          
          {/* Weather Widget */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50">
            <h4 className="font-black text-lg mb-6">Thời Tiết Hiện Tại</h4>
            <div className="flex items-center gap-6 mb-8">
              <span className="text-5xl font-black text-primary-dark">31°C</span>
              <div>
                <p className="font-bold">Nắng đẹp</p>
                <p className="text-xs text-text-muted italic">Lý tưởng để đi đảo</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['MAI', 'T.5', 'T.6'].map((day, i) => (
                <div key={day} className={`p-4 rounded-2xl text-center ${i === 2 ? 'bg-primary/10 border border-primary/20' : 'bg-slate-50'}`}>
                   <p className="text-[10px] font-bold opacity-60 mb-1">{day}</p>
                   <span className="material-symbols-outlined text-sm text-orange-400">wb_sunny</span>
                   <p className="text-xs font-bold mt-1">32°</p>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive Vouchers */}
          <div className="flex flex-col gap-4">
            <h4 className="font-black text-lg px-2">Voucher Độc Quyền</h4>
            
            <div className="relative overflow-hidden bg-primary/10 rounded-2xl p-6 border-2 border-dashed border-primary">
              <p className="text-[10px] font-bold text-primary-dark uppercase tracking-widest mb-1">Khách sạn</p>
              <h5 className="text-2xl font-black mb-1">GIẢM 200K</h5>
              <p className="text-xs text-text-muted mb-4">Đơn từ 2.000.000đ</p>
              <div className="bg-white px-3 py-1.5 rounded-lg text-primary-dark font-black text-[10px] tracking-widest w-fit mb-4">PQHOTEL</div>
              <button className="w-full bg-primary text-white py-3 rounded-xl text-xs font-bold hover:bg-primary-dark transition-all">Lưu mã ngay</button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-background-dark text-white rounded-[2rem] p-8 shadow-xl">
            <h4 className="text-xl font-black mb-4">Nhận Tip Du Lịch</h4>
            <p className="text-sm text-slate-400 mb-6">Đăng ký để nhận những gợi ý thời trang và ưu đãi du lịch mới nhất.</p>
            <div className="space-y-3">
               <input className="w-full bg-white/10 border-white/20 rounded-xl text-sm px-4 py-3 focus:ring-primary focus:border-primary text-white" placeholder="Email của bạn" type="email" />
               <button className="w-full bg-primary text-white py-3 rounded-xl text-xs font-bold hover:bg-primary-dark transition-all">Đăng ký ngay</button>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default DestinationDetailPage;
