
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-[#f0f4ef]">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            alt={product.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src={product.image} 
          />
        </Link>
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.tag && (
            <div className={`px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider shadow-sm ${
              product.tag === 'Bestseller' ? 'bg-white text-text-main' : 'bg-accent-yellow text-text-main'
            }`}>
              {product.tag}
            </div>
          )}
        </div>

        <button className="absolute top-4 right-4 size-8 rounded-full bg-white/90 flex items-center justify-center hover:text-red-500 shadow-sm transition-colors">
          <span className="material-symbols-outlined text-[18px]">favorite</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {product.properties && product.properties.length > 0 && (
          <div className="flex gap-2 mb-3">
            {product.properties.map((prop, idx) => (
              <span key={idx} className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                idx === 0 ? 'bg-primary/20 text-text-muted' : 'bg-accent-peach/30 text-orange-700'
              }`}>
                {prop}
              </span>
            ))}
          </div>
        )}

        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-base text-text-main mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-black text-primary-dark">
            {product.price.toLocaleString('vi-VN')}đ
          </span>
          {product.originalPrice && (
            <span className="text-xs text-slate-400 line-through">
              {product.originalPrice.toLocaleString('vi-VN')}đ
            </span>
          )}
        </div>

        {/* Platform Buttons */}
        <div className="mt-auto">
          {product.platforms ? (
            <div className="grid grid-cols-2 gap-2">
              {product.platforms.map((plat, idx) => (
                <button 
                  key={idx}
                  className={`flex items-center justify-center gap-1 h-9 rounded-xl text-[9px] font-black uppercase transition-all hover:brightness-110 ${
                    plat.name === 'Shopee' ? 'bg-[#ee4d2d] text-white' : 'bg-[#00008b] text-white'
                  }`}
                >
                  {plat.name}
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </button>
              ))}
            </div>
          ) : (
            <button className="w-full flex items-center justify-center gap-2 h-10 rounded-xl bg-primary text-white text-xs font-bold uppercase transition-all hover:bg-primary-dark shadow-sm">
               Xem tại {product.platform || 'Sàn'}
               <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
