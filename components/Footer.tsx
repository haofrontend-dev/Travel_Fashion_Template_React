
import React from 'react';

const Footer: React.FC = () => {
  return (
    // Fixed: changed class to className
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-text-main">DuLịch<span className="text-primary">Style</span></span>
            </div>
            <p className="text-text-sub text-sm leading-relaxed">
              Nền tảng affiliate du lịch & thời trang hàng đầu Việt Nam. Tối ưu trải nghiệm chuyển đổi kép giữa du lịch và mua sắm.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-text-main mb-4 uppercase text-xs tracking-widest">Dịch vụ</h4>
            <ul className="space-y-3 text-sm text-text-sub font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Tour trọn gói</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Vé tham quan</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Combo thời trang</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Phụ kiện du lịch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-main mb-4 uppercase text-xs tracking-widest">Thông tin</h4>
            <ul className="space-y-3 text-sm text-text-sub font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Trung tâm trợ giúp</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Điều khoản sử dụng</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Chính sách affiliate</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Liên hệ hợp tác</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-main mb-4 uppercase text-xs tracking-widest">Đăng ký nhận deal</h4>
            <p className="text-sm text-text-sub mb-4">Nhận ngay ưu đãi độc quyền và xu hướng mới nhất.</p>
            <form className="flex gap-2">
              <input className="flex-1 rounded-xl border-gray-100 bg-gray-50 text-sm focus:ring-accent-pastel-green focus:border-accent-pastel-green" placeholder="Email của bạn" type="email" />
              <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-xl font-bold transition-all shadow-md" type="button">Gửi</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 font-medium">
          <p>© 2024 DuLịchStyle Vietnam. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 opacity-50">
             <img src="https://picsum.photos/seed/payment/100/20" alt="Payments" className="h-5 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
