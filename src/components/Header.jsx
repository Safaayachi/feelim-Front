import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="relative h-16 bg-black shadow-xl font-poppins border-b border-solid">
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
						<div className="flex  items-center justify-center">
							<div className="h-8 w-full rounded-full bg-gradient-to-r from-secondary-tint to-primary p-0.5">
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
