"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProductContainer from '@/productContainer';
import Footer from '@/Footer';

// Define the types
interface TypeProductListItem {
  id: string;
  room: string;
  object: string;
  price: string;
  description: string;
  image: string;
}

// GraphQL query to fetch products
const gqlAllProductsQuery = `query ProductList {
  productCollection {
    items {
      sys {
        id
      }
      room
      object
      price
      description
      image {
        url
        title
      }
    }
  }
}`;

// Hardcoded Contentful tokens
const CONTENTFUL_SPACE_ID = 'rkc03tkyhx6b';
const CONTENTFUL_ACCESS_TOKEN = 'b9bsy7LUL36c7OYMVEIuuIHttPaOgRf6IY89_SU2OQc';

// Function to fetch products from Contentful
const getAllProducts = async (): Promise<TypeProductListItem[]> => {
  const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`;

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: gqlAllProductsQuery }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const body = (await response.json()) as {
      data: {
        productCollection: {
          items: {
            sys: { id: string };
            room: string;
            object: string;
            price: string;
            description: string;
            image: { url: string; title: string };
          }[];
        };
      };
    };

    const products: TypeProductListItem[] = body.data.productCollection.items.map((item) => ({
      id: item.sys.id,
      room: item.room,
      object: item.object,
      price: item.price,
      description: item.description,
      image: item.image.url,
    }));

    return products;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
};

// React component to display products
const Products: React.FC = () => {
  const [products, setProducts] = useState<TypeProductListItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ProductContainer products={products} />
      <Footer />
    </div>
  );
};

export default Products;