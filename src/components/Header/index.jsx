import { ScrollRestoration } from 'react-router';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <div className='content flex justify-center flex-col items-center h-[70%] text-white'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='font-bold lg:text-[25px]  text-center text-[18px] lg:w-[75%]'>
                        TOVARLAR VA TRANSPORT VOSITALARINING RENTGEN TASVIRLARI
                        TAHLILI BOʻYICHA ANIQLANAYOTGAN HOLATLAR VA SHU KABI
                        KUZATILISHI MUMKIN BOʻLGAN TOVARLAR YUZASIDAN elektron
                        uslubiy qoʻllanma
                    </div>
                    <p className='text-center lg:text-[20px]  lg:w-[75%]'>
                        Oʻzbekiston Respublikasi bojxona organlarida rentgen
                        qurilmalari yordamida aniqlangan BQB holatlari tahlili
                    </p>
                    <button className='h-[50px] w-[277px] bg-[#007bff] cursor-pointer '>
                        Sign up and get a 7-day free trial
                    </button>
                </div>
            </div>
            <ScrollRestoration />
        </div>
    );
};
export default Header;
