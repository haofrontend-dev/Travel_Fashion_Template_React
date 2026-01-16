
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#f0f4ef] border-b border-slate-100 py-2 hidden md:block">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">local_shipping</span> Miễn phí vận chuyển Shopee</span>
            <span className="flex items-center gap-1.5 text-primary-dark"><span className="material-symbols-outlined text-[14px]">confirmation_number</span> Voucher Klook -20%</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-dark transition-colors">Tải ứng dụng</a>
            <a href="#" className="hover:text-primary-dark transition-colors">Trợ giúp</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/95 backdrop-blur-md py-4 border-b border-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform rotate-3 group-hover:rotate-0 duration-300">
                <span className="material-symbols-outlined text-[24px]">travel_explore</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black leading-none text-text-main tracking-tighter">DuLịch<span className="text-primary-dark">Style</span></span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted mt-1">Check-in Mọi Nơi</span>
              </div>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-xl hidden md:block">
              <form onSubmit={handleSearch} className="relative flex items-center">
                <input 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#f0f4ef] border-none rounded-full pl-6 pr-14 py-2.5 focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium text-text-main placeholder:text-text-muted/50" 
                  placeholder="Tìm kiếm phong cách du lịch..." 
                  type="text" 
                />
                <button type="submit" className="absolute right-1.5 top-1.5 bg-primary hover:bg-primary-dark text-white w-8 h-8 rounded-full flex items-center justify-center transition-all">
                  <span className="material-symbols-outlined text-[18px]">search</span>
                </button>
              </form>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="relative group">
                <span className="material-symbols-outlined text-text-main text-[24px] group-hover:text-primary transition-colors">shopping_bag</span>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">0</span>
              </button>
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-xs font-bold transition-all hidden sm:block">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <nav className="bg-white py-2 hidden md:block">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <ul className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.1em] text-text-main">
            <li><Link to="/destinations" className="hover:text-primary transition-colors">Điểm đến</Link></li>
            <li><Link to="/category/activity" className="hover:text-primary transition-colors">Tour & Vé</Link></li>
            <li><Link to="/category/fashion" className="hover:text-primary transition-colors">Thời trang</Link></li>
            <li className="text-orange-500 font-black"><Link to="/category/voucher" className="hover:text-primary transition-colors">Khuyến mãi hot</Link></li>
            <li><Link to="/handbook" className="hover:text-primary transition-colors">Cẩm nang</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
