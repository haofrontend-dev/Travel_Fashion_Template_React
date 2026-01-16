
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../constants';

const DestinationsPage: React.FC = () => {
  const [activeVibe, setActiveVibe] = useState('All');
  
  const vibes = [
    { id: 'All', label: 'Tất cả', icon: 'explore' },
    { id: 'Beach', label: 'Biển xanh', icon: 'beach_access' },
    { id: 'Mountain', label: 'Núi rừng', icon: 'landscape' },
    { id: 'City', label: 'Phố cổ', icon: 'home_pin' },
    { id: 'Luxury', label: 'Nghỉ dưỡng', icon: 'hotel_class' },
  ];

  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-24">
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArhvfdlFmN25APxCrgLI8Ne9W1W0BJwYGwj1Ii1HlszZguG6AzXeFufqoq0MPcMpzrnr8mG0L8hX3rCphoqjEJggR7WGA38hf7EvXdTMp1-Adr5mPC_oPfEc8w0E7j0THhb-nx6LZ2FOwxa5T-OZk_Pw7qO4wtMNvGyRVqkJ97ij1vSReTE8N5332IdZQ24y8ztJFUsr64E7K0VZAGxScr5XVggDGmUYhrDXxt_XFkUx5yNr8kEMtRzMHTqu1haA5blb8iqikM4FnC")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#fcfbf9]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-text-main text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-xl animate-bounce">
            Khám phá Việt Nam
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter drop-shadow-2xl">
            Điểm Đến <br/> <span className="italic font-serif text-primary">Của Cảm Hứng</span>
          </h1>
          
          <div className="flex bg-white/90 backdrop-blur-xl rounded-[2rem] p-2 shadow-2xl max-w-2xl mx-auto border border-white/50">
            <div className="flex items-center pl-6 text-text-muted">
               <span className="material-symbols-outlined">map</span>
            </div>
            <input 
              className="flex-1 border-none focus:ring-0 text-sm font-bold bg-transparent placeholder:text-text-muted/50 px-4" 
              placeholder="Bạn muốn đi đâu hôm nay?..." 
            />
            <button className="bg-text-main text-white px-8 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-text-main transition-all">
              Tìm kiếm
            </button>
          </div>
        </div>
      </section>

      {/* Vibe Selection Bar */}
      <section className="relative z-20 -mt-10 px-4">
        <div className="max-w-[1000px] mx-auto bg-white rounded-[3rem] p-4 shadow-xl border border-slate-50">
          <div className="flex items-center justify-around overflow-x-auto scrollbar-hide py-2">
            {vibes.map(vibe => (
              <button
                key={vibe.id}
                onClick={() => setActiveVibe(vibe.id)}
                className={`flex flex-col items-center gap-2 px-8 transition-all group ${
                  activeVibe === vibe.id ? 'text-primary-dark scale-110' : 'text-text-muted hover:text-primary'
                }`}
              >
                <div className={`size-12 rounded-2xl flex items-center justify-center transition-all ${
                  activeVibe === vibe.id ? 'bg-primary text-white shadow-lg' : 'bg-slate-50 group-hover:bg-primary/10'
                }`}>
                  <span className="material-symbols-outlined text-[24px]">{vibe.icon}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">{vibe.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Destinations */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-8 mt-24">
        <div className="flex items-end justify-between mb-12">
           <div>
              <h2 className="text-4xl font-black tracking-tight mb-2">Đề xuất <span className="text-primary italic">Hot nhất</span></h2>
              <p className="text-text-muted font-medium">Những địa điểm đang "làm mưa làm gió" trên bản đồ du lịch.</p>
           </div>
           <div className="hidden md:flex gap-4">
              <button className="size-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary/10 transition-colors">
                 <span className="material-symbols-outlined">west</span>
              </button>
              <button className="size-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary/10 transition-colors">
                 <span className="material-symbols-outlined">east</span>
              </button>
           </div>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6 h-auto md:h-[800px]">
          
          {/* Feature Card - Big */}
          <Link to={`/destination/${DESTINATIONS[0].id}`} className="md:col-span-7 md:row-span-2 group relative rounded-[3rem] overflow-hidden shadow-lg">
             <img src={DESTINATIONS[0].image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={DESTINATIONS[0].name} />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                <span className="bg-primary text-text-main px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest mb-4 inline-block">Trending #1</span>
                <h3 className="text-5xl font-black mb-4 tracking-tighter">{DESTINATIONS[0].name}</h3>
                <p className="text-white/70 max-w-md mb-8 font-medium line-clamp-2">{DESTINATIONS[0].description}</p>
                <div className="flex items-center gap-4">
                   <div className="flex -space-x-3">
                      {[1,2,3].map(i => <div key={i} className="size-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=${i+10}`} /></div>)}
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest">1,200+ người đã check-in</span>
                </div>
             </div>
          </Link>

          {/* Side Card 1 */}
          <Link to={`/destination/${DESTINATIONS[1].id}`} className="md:col-span-5 md:row-span-1 group relative rounded-[2.5rem] overflow-hidden shadow-md">
             <img src={DESTINATIONS[1].image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={DESTINATIONS[1].name} />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
             <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-3xl font-black mb-1">{DESTINATIONS[1].name}</h3>
                <p className="text-white/80 text-sm font-medium">{DESTINATIONS[1].tagline}</p>
             </div>
          </Link>

          {/* Side Card 2 & 3 - Small */}
          <div className="md:col-span-5 md:row-span-1 grid grid-cols-2 gap-6">
             {DESTINATIONS.slice(2, 4).map((dest, i) => (
                <Link key={dest.id} to={`/destination/${dest.id}`} className="group relative rounded-[2rem] overflow-hidden shadow-md">
                   <img src={dest.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={dest.name} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-lg font-black leading-tight">{dest.name}</h4>
                      <p className="text-[9px] font-bold uppercase opacity-60 tracking-widest">Khám phá ngay</p>
                   </div>
                </Link>
             ))}
          </div>

        </div>
      </section>

      {/* Region Discovery Section */}
      <section className="py-24 bg-white mt-24">
         <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               {[
                 { region: 'Miền Bắc', count: '12 điểm đến', desc: 'Vẻ đẹp hùng vĩ của núi rừng và những nét văn hóa ngàn năm văn hiến.', color: 'bg-emerald-50' },
                 { region: 'Miền Trung', count: '15 điểm đến', desc: 'Con đường di sản với những bãi biển xanh ngắt và phố cổ rêu phong.', color: 'bg-amber-50' },
                 { region: 'Miền Nam', count: '10 điểm đến', desc: 'Sự năng động của phố thị và nét bình dị của miền sông nước cửu long.', color: 'bg-sky-50' }
               ].map((reg, idx) => (
                 <div key={idx} className={`${reg.color} p-12 rounded-[3rem] border border-slate-100 group hover:-translate-y-2 transition-all duration-500`}>
                    <div className="size-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                       <span className="material-symbols-outlined text-text-main">travel_explore</span>
                    </div>
                    <h3 className="text-2xl font-black mb-2">{reg.region}</h3>
                    <p className="text-primary-dark font-black text-[10px] uppercase tracking-widest mb-6">{reg.count}</p>
                    <p className="text-text-muted leading-relaxed mb-8 font-medium">{reg.desc}</p>
                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                       Xem danh sách <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Seasonal Recommendation */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-24">
         <div className="bg-text-main rounded-[4rem] p-12 md:p-20 relative overflow-hidden group">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 transform translate-x-20"></div>
            <div className="absolute -bottom-20 -left-20 size-80 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="text-white">
                  <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">Kế hoạch mùa hè</span>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Mùa Hè Này <br/> Đi Đâu <span className="text-primary italic">Mặc Đẹp?</span></h2>
                  <p className="text-slate-400 text-lg mb-10 font-medium">Chúng tôi đã tổng hợp những điểm đến có thời tiết đẹp nhất trong tháng 6, 7, 8 kèm theo gợi ý outfit cực chuẩn cho từng nơi.</p>
                  <button className="bg-white text-text-main px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-all shadow-xl shadow-primary/20">
                     Tải Travel Guide miễn phí
                  </button>
               </div>
               <div className="relative">
                  <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHrdvNAPJ7hDddLT9Mo1kyHVokQGhKdKpka-3WaZDHXjGyqmWMwHZ3moljUYsWz04I0EGEpG8I4feAxzFUg73g4-2YWH5-KwS332YbDMkRZydDHldCDtCHvdttrVYL3yglmkRy0v425_FAVkNbdYtyhGx0x0hM2GqRngmMDHLTDFut_Yq_N0ihKi9IKGXpicKO44xlOzru0wC0kDe6pvHhW7b9DfxI2ovfQCcwbX9_NHuTVacZtixzoHMS8dzOutXqtr68O2I-vBfT" className="w-full h-full object-cover" alt="Summer" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-primary size-40 rounded-full flex items-center justify-center p-8 text-center rotate-12 shadow-2xl">
                     <p className="text-text-main font-black text-sm uppercase leading-tight">Mã Giảm 20% Vé Klook</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
