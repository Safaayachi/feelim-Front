import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="h-16 bg-transparent fixed z-30 font-poppins  w-full ">
			<nav className="flex flex-row justify-between h-full items-center container sm:mx-auto px-6">
				<Link to="/">
					<div className="text-white font-dancingscript text-2xl">
						Feelim
					</div>
				</Link>
				<div className="flex flex-row gap-6 text-white items-center">
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
						<div className=" items-center justify-center hidden">
							<div className="h-8 w-full rounded-full bg-gradient-to-r from-primary to-secondary-tint p-0.5">
								<div className="flex h-full w-full items-center justify-center rounded-full bg-black back p-2 px-4">
									<h1 className="text-xxs font-black text-white">
										Sign In
									</h1>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</nav>
		</header>
	);
};
export default Header;
