
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SearchPage from './pages/SearchPage';
import VoucherPage from './pages/VoucherPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import DestinationsPage from './pages/DestinationsPage';
import HandbookPage from './pages/HandbookPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WordPressAdminBar from './components/WordPressAdminBar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background-light">
        <WordPressAdminBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/category/voucher" element={<VoucherPage />} />
            <Route path="/category/:type" element={<CategoryPage />} />
            <Route path="/destination/:id" element={<DestinationDetailPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/handbook" element={<HandbookPage />} />
            <Route path="/handbook/:id" element={<ArticleDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
