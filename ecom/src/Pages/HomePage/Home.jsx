import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../apis";
import { ToastContainer, toast } from "react-toastify";
import ProductCard from "../../component/ProductCard/ProductCard";
 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchProducts();
  }, []);

  const onProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const renderProducts = () => {
    return products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onClick={() => onProductClick(product.id)}
      />
    ));
  };

  return (
    <div className="flex flex-wrap gap-6 mx-auto justify-center bg-zinc-50">
      {renderProducts()}
      <ToastContainer />
    </div>
  );
};

export default Home;
