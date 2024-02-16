import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
	const { isOpen, handleClose } = useContext(SidebarContext);
	const { cart, clearCart } = useContext(CartContext);
	return (
		<aside
			className={`${
				isOpen ? 'right-0' : '-right-full'
			} w-full bg-white fixed top-0 h-full shadow-2xl md:2-[35vw] xl:max-w-[30vw] transition-all duartuin-300 z-20 px-4 lg:px-[35px] overflow-auto`}>
			<div className='flex items-center justify-between py-6 border-b'>
				<div className='uppercase text-sm font-semibold'>
					Shoping Bag ({cart.length})
				</div>
				<div
					onClick={handleClose}
					className='cursor-pointer w-8 h-8 flex justify-center items-center'>
					<IoMdArrowForward className='text-2xl' />
				</div>
			</div>
			<div>
				{cart.map((item) => {
					return (
						<CartItem
							key={item.id}
							item={item}
						/>
					);
				})}
			</div>
			<div className='flex flex-col gap-y-3 py-4 mt-4'>
				<div className='flex w-full justify-between items-center'>
					{/* total */}
					<div className='uppercase font-semibold'>
						<span className='mr-2'>Total: </span>$ 1000
					</div>
					{/* clear cart icon */}
					<div
						onClick={clearCart}
						className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
						<FiTrash2 />
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
