import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router';

const data = [
    {
        title: 'Build your Dream Software & Engineering Career',
        img: 'https://preview.colorlib.com/theme/academia/images/image_1.jpg.webp',
        desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
        title: 'Build your Dream Software & Engineering Career',
        img: 'https://preview.colorlib.com/theme/academia/images/image_2.jpg.webp',
        desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
        title: 'Build your Dream Software & Engineering Career',
        img: 'https://preview.colorlib.com/theme/academia/images/image_3.jpg.webp',
        desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
];

const Card = () => {
    return (
        <div className='wrapper ' style={{ paddingBottom: '40px' }}>
            <div className='container'>
                <div className='flex justify-center'>
                    <div
                        className='text-[25px] font-bold text-center lg:w-[75%]'
                        style={{ marginTop: '100px' }}
                    >
                        Oʻzbekiston Respublikasi bojxona organlarida rentgen
                        qurilmalari yordamida aniqlangan BQB holatlari tahlili
                    </div>
                </div>
                <div
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
                    style={{ marginTop: '30px' }}
                >
                    {data.map((item, ind) => {
                        return (
                            <NavLink
                                to={'/category/:7777'}
                                className='bg-white myshadow '
                                key={ind + 1}
                            >
                                <div className='overflow-hidden h-[300px]'>
                                    <img
                                        src={item.img}
                                        className='h-full w-full object-cover'
                                        alt=''
                                    />
                                </div>
                                <div className='' style={{ padding: '30px' }}>
                                    <div className='flex gap-3'>
                                        <div className='flex gap-1 items-center'>
                                            <div className='text-[#1eb2a6]'>
                                                <FaUser />
                                            </div>
                                            <div className='font-bold'>
                                                Admin
                                            </div>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <div className='text-[#1eb2a6]'>
                                                <FaRegCalendarAlt />
                                            </div>
                                            <div className='font-bold'>
                                                Jan. 18, 2021
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className='text-[24px]'
                                        style={{ marginTop: '10px' }}
                                    >
                                        {item.title}
                                    </div>
                                    <div
                                        className='text-[17px] text-[#999999] font-medium'
                                        style={{ marginTop: '10px' }}
                                    >
                                        {item.desc}
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Card;
