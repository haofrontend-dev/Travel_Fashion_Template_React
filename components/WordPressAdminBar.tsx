
import React from 'react';

const WordPressAdminBar: React.FC = () => {
  return (
    <div className="bg-[#1d2327] text-[#c3c4c7] h-8 flex items-center justify-between px-4 text-xs font-medium z-[9999] relative">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-sm">language</span>
          <span>DuLịchStyle</span>
        </div>
        <div className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-sm">update</span>
          <span>2</span>
        </div>
        <div className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-sm">chat_bubble</span>
          <span>0</span>
        </div>
        <div className="flex items-center gap-1 hover:text-[#2271b1] cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-sm">add</span>
          <span>Mới</span>
        </div>
        <div className="flex items-center gap-1 hover:text-[#2271b1] cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-sm">edit</span>
          <span>Sửa trang</span>
        </div>
        <div className="flex items-center gap-1 text-primary hover:text-primary-hover cursor-pointer transition-colors font-bold">
          <span className="material-symbols-outlined text-sm">brush</span>
          <span>UX Builder</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 hover:text-white cursor-pointer">
          <span>Chào, Admin</span>
          <div className="w-5 h-5 rounded-full bg-gray-500 overflow-hidden">
            <img src="https://picsum.photos/seed/admin/20" alt="avatar" />
          </div>
        </div>
        <div className="hover:text-white cursor-pointer">
          <span className="material-symbols-outlined text-sm">search</span>
        </div>
      </div>
    </div>
  );
};

export default WordPressAdminBar;
