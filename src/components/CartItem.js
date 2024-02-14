import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const CartItem = ({ item }) => {
	const { id, title, image, price, amount } = item;
	return (
		<div className='flex'>
			{/* image */}
			<div className='w-full min-h-[150px] flex items-center gap-x-4'>
				<Link to={`/product/${id}`}>
					<img
						className='max-w-[80px]'
						src={image}
						alt={title}
					/>
				</Link>
			</div>
			{/* title and remove icon */}
			<div>
				<Link
					to={`/product/${id}`}
					className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
					{title}
				</Link>
			</div>
		</div>
	);
};

export default CartItem;
