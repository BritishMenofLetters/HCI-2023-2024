"use client";

import Image from 'next/image';
import { Roboto } from 'next/font/google';
import Footer from '@/components/Footer';

const roboto = Roboto({ subsets: ['latin'], weight: "400" });

export default function About() {
  return (
    <main className={`${roboto.className} flex min-h-screen flex-col items-center justify-between p-4`}>
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-8">About Us</h1>
        <div className="mt-8">
          <Image src="/about-us.jpg" alt="About Us" width={1200} height={600} className="rounded-lg shadow-lg" />
        </div>
        <div className="my-8 text-lg leading-relaxed ">
          <p>
            Welcome to Nateo, your number one source for all things furniture. We're dedicated to giving you the very best of furniture, with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="mt-4">
            Founded in 2023, Nateo has come a long way from its beginnings. When we first started out, our passion for eco-friendly and customizable furniture drove us to do tons of research so that Nateo can offer you the world's most advanced furniture. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
          </p>
          <p className="mt-4">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="mt-4">
            Sincerely,
            <br />
            The Nateo Team
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}