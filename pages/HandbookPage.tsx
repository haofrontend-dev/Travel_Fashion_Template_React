
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HANDBOOK_ARTICLES } from '../constants';

const HandbookPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'tip', name: 'Mẹo du lịch' },
    { id: 'fashion', name: 'Thời trang' },
    { id: 'food', name: 'Ẩm thực' },
    { id: 'review', name: 'Review' },
  ];

  const filteredArticles = activeCategory === 'all' 
    ? HANDBOOK_ARTICLES 
    : HANDBOOK_ARTICLES.filter(a => a.category === activeCategory);

  const featuredArticle = HANDBOOK_ARTICLES[0];

  return (
    <div className="bg-[#faf8f5] min-h-screen pb-20">
      {/* Hero Section - Featured Post */}
      <section className="px-4 md:px-8 pt-8 max-w-[1280px] mx-auto">
        <Link to={`/handbook/${featuredArticle.id}`} className="block relative h-[480px] rounded-[3rem] overflow-hidden group shadow-2xl">
          <img 
            src={featuredArticle.image} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            alt={featuredArticle.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl text-white">
            <span className="bg-primary text-text-main px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
              Bài viết nổi bật
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tighter">
              {featuredArticle.title}
            </h1>
            <p className="text-white/80 text-lg mb-8 line-clamp-2 font-medium">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center gap-6">
               <span className="bg-white text-text-main px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary transition-all">
                  Đọc ngay
               </span>
               <div className="flex items-center gap-2 text-xs font-bold opacity-70">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  {featuredArticle.readTime}
               </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Categories Bar */}
      <section className="sticky top-[64px] z-40 bg-[#faf8f5]/80 backdrop-blur-md py-6 mt-8 border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-center gap-4 min-w-max">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-text-main text-white shadow-xl' 
                    : 'bg-white text-text-muted hover:text-primary hover:border-primary border border-slate-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid & Sidebar */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map(article => (
                <Link to={`/handbook/${article.id}`} key={article.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-50">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={article.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={article.title} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-primary-dark">
                        {article.categoryName}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-text-muted mb-3">
                      <span>{article.date}</span>
                      <div className="size-1 rounded-full bg-slate-200"></div>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-black mb-4 leading-snug group-hover:text-primary-dark transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-muted line-clamp-3 mb-6 leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                       <div className="flex items-center gap-2">
                          <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary-dark">
                             {article.author[0]}
                          </div>
                          <span className="text-[10px] font-bold text-text-main">{article.author}</span>
                       </div>
                       <span className="material-symbols-outlined text-primary-dark group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center py-8">
               <button className="bg-white border-2 border-primary text-text-main px-12 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">
                  Tải thêm bài viết
               </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            
            {/* Newsletter */}
            <div className="bg-primary/10 rounded-[2.5rem] p-10 border border-primary/20 relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 size-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
               <h4 className="text-2xl font-black mb-4 relative z-10">Nhận Tip <br/> Mỗi Tuần</h4>
               <p className="text-sm text-text-muted mb-8 relative z-10 font-medium">Đăng ký để không bỏ lỡ những kinh nghiệm du lịch và ưu đãi mới nhất từ DuLịchStyle.</p>
               <form className="space-y-3 relative z-10">
                  <input className="w-full bg-white border-none rounded-2xl px-5 py-3.5 text-sm font-medium focus:ring-4 focus:ring-primary/20" placeholder="Email của bạn..." type="email" />
                  <button className="w-full bg-text-main text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-black/10">Đăng ký ngay</button>
               </form>
            </div>

            {/* Trending Articles */}
            <div>
               <h4 className="text-lg font-black mb-6 px-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-dark">trending_up</span>
                  Xu hướng
               </h4>
               <div className="space-y-6">
                  {HANDBOOK_ARTICLES.slice(1, 4).map((art, idx) => (
                    <Link to={`/handbook/${art.id}`} key={idx} className="flex gap-4 group cursor-pointer">
                       <span className="text-2xl font-black text-slate-100 group-hover:text-primary transition-colors italic">0{idx + 1}</span>
                       <div>
                          <h5 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">
                             {art.title}
                          </h5>
                          <p className="text-[10px] text-text-muted mt-1 uppercase font-bold tracking-widest">{art.categoryName}</p>
                       </div>
                    </Link>
                  ))}
               </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-50 shadow-sm">
               <h4 className="text-lg font-black mb-6">Tags phổ biến</h4>
               <div className="flex flex-wrap gap-2">
                  {['Check-in', 'Outfit', 'Budget Travel', 'Ẩm thực biển', 'Mùa Hè', 'Phú Quốc', 'Lịch trình'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-50 text-text-muted text-[10px] font-bold hover:bg-primary/20 hover:text-primary-dark cursor-pointer transition-all">
                       #{tag}
                    </span>
                  ))}
               </div>
            </div>

          </aside>

        </div>
      </section>
    </div>
  );
};

export default HandbookPage;
