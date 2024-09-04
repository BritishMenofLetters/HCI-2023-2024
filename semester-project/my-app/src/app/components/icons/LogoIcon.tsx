import Image from 'next/image';

function LogoIcon() {
    return (
        <Image src="/favicon.png" alt="Logo" width={96} height={96} className='rounded-md'/>

    );
}

export default LogoIcon;