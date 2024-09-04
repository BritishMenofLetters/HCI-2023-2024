import React from 'react';
import Image from 'next/image';

import { Inter, Libre_Baskerville, Roboto } from "next/font/google";

const libreBaskerville = Libre_Baskerville({subsets: ['latin'], weight: "700"});


function Topbar() {
  return (
    <div className="flex justify-between items-center py-4 px-4 bg-slate-50 text-black {`${libreBaskerville.className} text-4xl`}">
        <div className={`${libreBaskerville.className} text-4xl`}>Logo</div>

        <div className='border-2 border-black w-2/5 h-14 flex items-center py-1'>
            <Image src="/Search.png" alt="Search" width={24} height={24} />
            Search
            </div>
        
        <div className="flex">
            <div className="size-11 hover:bg-gray-300 rounded-full flex justify-center items-center">
                <Image src="/Heart.png" alt="Heart" width={24} height={24} />
            </div>
            <div className="size-11 hover:bg-gray-300 rounded-full flex justify-center items-center">
                <Image src="/Cart.png" alt="cart" width={24} height={24} />
            </div>
        </div>
    </div>
  );
}

export default Topbar;