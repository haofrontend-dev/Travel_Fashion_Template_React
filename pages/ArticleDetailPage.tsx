
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HANDBOOK_ARTICLES, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = HANDBOOK_ARTICLES.find(a => a.id === id) || HANDBOOK_ARTICLES[0];
  
  // Suggested products based on the article category or context
  const suggestedProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Article Header */}
      <header className="pt-12 pb-16 px-4 md:px-8 max-w-[900px] mx-auto text-center">
        <nav className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <Link to="/handbook" className="hover:text-primary transition-colors">Cẩm nang</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-primary-dark">{article.categoryName}</span>
        </nav>

        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-[10px] font-black uppercase tracking-widest mb-6">
          {article.categoryName}
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black text-text-main leading-[1.1] mb-8 tracking-tighter">
          {article.title}
        </h1>

        <div className="flex items-center justify-center gap-6 text-sm font-bold text-text-muted">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-accent-peach/30 flex items-center justify-center text-xs font-black text-orange-700">
              {article.author[0]}
            </div>
            <span>{article.author}</span>
          </div>
          <div className="size-1 rounded-full bg-slate-200"></div>
          <span>{article.date}</span>
          <div className="size-1 rounded-full bg-slate-200"></div>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            {article.readTime}
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-4 md:px-8 mb-16 max-w-[1200px] mx-auto">
        <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src={article.image} 
            className="w-full h-full object-cover" 
            alt={article.title}
          />
        </div>
      </section>

      {/* Article Content Layout */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Main Content */}
        <main className="lg:col-span-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-text-main font-medium mb-8 first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-primary">
              {article.excerpt} Khám phá những bí mật đằng sau những bức ảnh triệu like và cách để tối ưu hóa vali đồ của bạn cho chuyến đi Đảo Ngọc sắp tới.
            </p>

            <h2 className="text-3xl font-black mt-12 mb-6 tracking-tight">1. Lựa chọn chất liệu thông minh</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Thời tiết Phú Quốc mang đặc trưng nhiệt đới gió mùa, vì vậy chất liệu linen hoặc lụa mỏng nhẹ luôn là ưu tiên hàng đầu. Chúng không chỉ giúp bạn thoải mái vận động dưới cái nắng mà còn lên hình cực kỳ "sang chảnh".
            </p>
            
            <div className="my-10 p-8 bg-accent-yellow/20 rounded-[2rem] border-2 border-dashed border-accent-yellow/50 relative">
               <span className="absolute -top-4 -left-4 size-10 bg-accent-yellow flex items-center justify-center rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-text-main">lightbulb</span>
               </span>
               <h4 className="font-bold text-lg mb-2">Mẹo nhỏ từ DuLịchStyle:</h4>
               <p className="text-sm text-text-muted italic">Hãy mang theo một chiếc khăn lụa đa năng, bạn có thể biến tấu nó thành băng đô, buộc túi xách hoặc thậm chí là một chiếc áo yếm gợi cảm khi đi biển.</p>
            </div>

            <h2 className="text-3xl font-black mt-12 mb-6 tracking-tight">2. Bảng màu cho những bức ảnh "triệu like"</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Màu trắng, kem, và các tông màu pastel sẽ giúp bạn nổi bật trên nền xanh của biển và cát trắng. Đừng quên một chút phụ kiện ánh vàng (gold) để bắt nắng hoàng hôn Sunset Sanato nhé!
            </p>

            {/* In-article Suggestion Grid */}
            <div className="my-12">
               <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-dark">shopping_basket</span>
                  Gợi ý Outfit cho bạn
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {suggestedProducts.slice(0, 2).map(prod => (
                    <ProductCard key={prod.id} product={prod} />
                  ))}
               </div>
            </div>

            <h2 className="text-3xl font-black mt-12 mb-6 tracking-tight">3. Đừng quên các trải nghiệm đi kèm</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Ngoài mặc đẹp, việc lên lịch trình tham quan các hòn đảo nhỏ hay khu vui chơi VinWonders cũng vô cùng quan trọng. Hãy đảm bảo bạn đã đặt vé trước để tránh phải xếp hàng lâu dưới nắng.
            </p>
          </div>

          {/* Share & Tags */}
          <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
             <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-widest text-text-muted">Chia sẻ:</span>
                <div className="flex gap-2">
                   {['facebook', 'link', 'mail'].map(icon => (
                     <button key={icon} className="size-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-[18px]">{icon}</span>
                     </button>
                   ))}
                </div>
             </div>
             <div className="flex flex-wrap gap-2">
                {['Phú Quốc', 'Travel Tip', 'Style Guide'].map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-50 text-[10px] font-bold text-text-muted hover:bg-primary/20 hover:text-primary-dark cursor-pointer transition-all">
                    #{tag}
                  </span>
                ))}
             </div>
          </footer>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
           {/* About Author Card */}
           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm text-center">
              <div className="size-20 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center text-3xl font-black text-primary-dark">
                 {article.author[0]}
              </div>
              <h4 className="font-black text-lg mb-1">{article.author}</h4>
              <p className="text-[10px] font-bold text-primary-dark uppercase tracking-widest mb-4">Travel Editor</p>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                 Đam mê du lịch và phong cách sống. Hy vọng những chia sẻ này sẽ giúp bạn có một chuyến đi tuyệt vời nhất!
              </p>
              <button className="w-full py-3 rounded-xl border border-primary text-primary-dark font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                 Theo dõi tác giả
              </button>
           </div>

           {/* More in Category */}
           <div>
              <h4 className="text-lg font-black mb-6 px-2">Bài viết cùng chủ đề</h4>
              <div className="space-y-6">
                 {HANDBOOK_ARTICLES.filter(a => a.id !== article.id).slice(0, 3).map(art => (
                   <Link to={`/handbook/${art.id}`} key={art.id} className="group flex gap-4">
                      <div className="size-20 rounded-2xl overflow-hidden flex-shrink-0">
                         <img src={art.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={art.title} />
                      </div>
                      <div className="flex flex-col justify-center">
                         <h5 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {art.title}
                         </h5>
                         <span className="text-[9px] font-bold text-text-muted mt-1 uppercase tracking-widest">{art.date}</span>
                      </div>
                   </Link>
                 ))}
              </div>
           </div>

           {/* Sticky Newsletter */}
           <div className="sticky top-28 bg-background-dark text-white p-10 rounded-[2.5rem] overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <h4 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Cẩm nang trong <br/> túi của bạn</h4>
              <p className="text-sm text-slate-400 mb-8 relative z-10">Nhận thông báo khi có bài viết review mới nhất.</p>
              <div className="space-y-3 relative z-10">
                 <input className="w-full bg-white/10 border-white/20 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary text-white" placeholder="Email của bạn" type="email" />
                 <button className="w-full bg-primary text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 hover:brightness-110">Đăng ký ngay</button>
              </div>
           </div>
        </aside>
      </div>

      {/* Recommended for you footer grid */}
      <section className="mt-20 py-20 bg-[#f0f4ef]">
         <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-black tracking-tight">Dành riêng cho bạn</h2>
               <p className="text-text-muted mt-2 font-medium">Lựa chọn hàng đầu từ cộng đồng DuLịchStyle</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {PRODUCTS.slice(2, 6).map(prod => (
                 <ProductCard key={prod.id} product={prod} />
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;
