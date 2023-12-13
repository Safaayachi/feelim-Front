import React from "react";

const Footer = () => {
	return (
		<footer className="w-full bg-black text-white font-poppins border-t ">
			<div className="w-full container sm:mx-auto  md:px-10 px-6 py-16 lg:pt-10 flex flex-col items-center border-solid border-primary-shade border-opacity-40">
				<div className="flex flex-row  items-center py-4 space-x-4">
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
						<i className="icon-github text-white text-xs"></i>
					</div>
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
						<i className="icon-linkedin text-white text-xs"></i>
					</div>
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
						<i className="icon-stackoverflow text-white text-xs flex justify-center items-center"></i>
					</div>
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
						<i className="icon-skype text-white text-xs"></i>
					</div>
				</div>
				<div className="text-xxs text-primary-tint tracking-widest font-light">
					Feelim <span>&copy;</span> 2023 All rights reserved
				</div>
			</div>
		</footer>
	);
};
export default Footer;
