import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { TypeProductListItem } from '@/types';

interface ProductContainerProps {
  products: TypeProductListItem[];
}

const ProductContainer: React.FC<ProductContainerProps> = ({ products }) => {
  const [selectedRoom, setSelectedRoom] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleRoomChange = (room: string) => {
    setSelectedRoom(room);
  };

  const handleFavoriteToggle = (productId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const filteredProducts = selectedRoom === 'All' ? products : products.filter(product => product.room === selectedRoom);

  const uniqueRooms = ['All', ...new Set(products.map(product => product.room))];

  return (
    <div>
      <div className="flex flex-wrap justify-center mt-4 mb-4 space-x-2">
        {uniqueRooms.map(room => (
          <button
            key={room}
            onClick={() => handleRoomChange(room)}
            className={`px-4 py-2 m-1 rounded ${
              selectedRoom === room ? 'bg-gray-900 text-white' : 'text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {room}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="shadow-lg rounded-lg p-4 w-full bg-slate-700 max-w-xs min-w-[250px] mx-auto">
              <div className="flex flex-col space-y-4">
                <div className="h-64 rounded relative overflow-hidden">
                  <Image src={product.image} alt={product.object} className="rounded-t-lg" width={400} height={400} />
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-white">{product.price}</div>
                  <div
                    className="h-10 w-10 flex items-center justify-center cursor-pointer"
                    onClick={() => handleFavoriteToggle(product.id)}
                  >
                    {favorites.includes(product.id) ? (
                      <FaHeart className="text-red-500 hover:text-red-700" />
                    ) : (
                      <FaRegHeart className="text-white hover:text-red-500" />
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-400">{product.description}</div>
                <div className="text-xs text-gray-500">
                  <span className="inline-block bg-gray-700 text-white rounded-sm px-2 py-1">{product.room}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;