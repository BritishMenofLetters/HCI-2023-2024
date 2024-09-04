"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

const roboto = Roboto({ subsets: ['latin'], weight: "400" });

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'Custom 404 page for unregistered routes'
};

export default function Custom404() {
  return (
    <main className={`${roboto.className} flex min-h-screen flex-col items-center justify-between p-4`}>
      <div className="w-full max-w-4xl mx-auto text-center">
        <p className="text-2xl mt-4">Oops! The furniture you are looking for doesnt exist.</p>
        
        <div className="mt-8 inline-block px-6 py-3 text-lg font-medium text-white bg-slate-800 rounded-md hover:bg-slate-700">
          <Link href="/">
                Go back to Home
          </Link>
          </div>

        <div className="mt-8">
          <Image src="/404-image.png" alt="Page Not Found" width={600} height={400} className="mx-auto rounded-lg shadow-lg" />
        </div>

      </div>
      <Footer />
    </main>
  );
}