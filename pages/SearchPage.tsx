
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS, HANDBOOK_ARTICLES } from '../constants';
import ProductCard from '../components/ProductCard';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const productResults = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || 
    (p.location && p.location.toLowerCase().includes(query.toLowerCase()))
  );

  const articleResults = HANDBOOK_ARTICLES.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults = productResults.length + articleResults.length;

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-12 lg:px-8">
      <div className="mb-12 border-b border-slate-100 pb-8">
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">
          <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span>Tìm kiếm</span>
        </nav>
        <h1 className="text-4xl font-black text-text-main tracking-tight">
          Kết quả cho: <span className="text-primary-dark italic">"{query}"</span>
        </h1>
        <p className="text-text-muted font-medium mt-2">
          Tìm thấy <span className="text-text-main font-black">{totalResults}</span> kết quả phù hợp trên toàn hệ thống
        </p>
      </div>

      {totalResults > 0 ? (
        <div className="space-y-20">
          
          {/* Product Results Section */}
          {productResults.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary-dark">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </div>
                <h2 className="text-2xl font-black text-text-main">Sản phẩm & Dịch vụ ({productResults.length})</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productResults.map(prod => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>
          )}

          {/* Article Results Section */}
          {articleResults.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="size-10 rounded-xl bg-accent-peach/20 flex items-center justify-center text-orange-700">
                  <span className="material-symbols-outlined">auto_stories</span>
                </div>
                <h2 className="text-2xl font-black text-text-main">Bài viết cẩm nang ({articleResults.length})</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articleResults.map(article => (
                  <Link 
                    to={`/handbook/${article.id}`} 
                    key={article.id} 
                    className="group flex gap-6 p-4 rounded-[2rem] bg-white border border-slate-50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden flex-shrink-0">
                      <img 
                        src={article.image} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        alt={article.title} 
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded">
                          {article.categoryName}
                        </span>
                        <span className="text-[10px] text-slate-300 font-bold">{article.date}</span>
                      </div>
                      <h3 className="text-lg font-black leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-text-main group-hover:gap-2 transition-all">
                        Xem chi tiết <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
           <div className="size-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-slate-200 text-5xl">search_off</span>
           </div>
           <h2 className="text-2xl font-black text-text-main mb-2">Không tìm thấy kết quả</h2>
           <p className="text-text-muted max-w-sm mx-auto font-medium">
              Rất tiếc, chúng tôi không tìm thấy nội dung nào khớp với từ khóa của bạn. Hãy thử từ khóa khác nhé!
           </p>
           <div className="mt-10 flex justify-center gap-4">
              <Link to="/" className="bg-primary text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:brightness-105 transition-all">
                Về trang chủ
              </Link>
           </div>
        </div>
      )}

      {/* Recommended Section */}
      <section className="mt-32 pt-16 border-t border-slate-100">
         <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-black">Có thể bạn quan tâm</h2>
            <Link to="/category/fashion" className="text-xs font-black uppercase tracking-widest text-primary-dark hover:underline">Xem thêm</Link>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
         </div>
      </section>
    </div>
  );
};

export default SearchPage;
