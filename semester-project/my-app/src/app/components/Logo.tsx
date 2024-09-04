import { FC } from "react";
import LogoIcon from "./icons/LogoIcon";
import Link from "next/link";
import Image from 'next/image';

const Logo: FC = () => (

    <Image src="/favicon.png" alt="Logo" width={64} height={64} className='rounded-md'/>


);



export default Logo;