import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	
	return (
		<header className="relative h-16 bg-black shadow-xl font-poppins border-b border-solid">
			<nav className="flex flex-row justify-between h-full items-center container sm:mx-auto">
				<Link to="/">
					<div className="text-white font-dancingscript text-2xl">Feelim</div>
				</Link>
				<div className="flex flex-row gap-6 text-white">
					<Link to="/MovieDetails">
						<div className="cursor-pointer w-full font-semibold text-xs">
							MyLists
						</div>
					</Link>
					<Link to="/">
						<div className="cursor-pointer w-full font-semibold text-xs">
							About
						</div>
					</Link>

					<Link to="/SignIn">
						<div className="cursor-pointer w-full font-semibold text-xs ">
							SigIn
						</div>
					</Link>
				</div>
			</nav>
		</header>
	);
};
export default Header;
