import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
	return (
		<>
			<div className=" bg-black max-h-screen">
				
				<div className="relative flex flex-col  container sm:mx-auto px-4">
					<div className="py-32 px-24 text-white font-poppins text-sm w-3/4">
						<div className="font-extrabold text-transparent text-3xl md:text-8xl  bg-clip-text bg-gradient-to-r from-primary to-secondary-tint">
							Unlock the magic of movies
						</div>
						<h1 className="py-6 tracking-widest leading-relaxed italic inline-block text-xs">
							Dive into a world where your emotions shape your
							film experience. navigate your cinematic dreams with
							personalized recommendations, save your favorites,
							and embrace the power of feeling every frame.
						</h1>
						<Link to="/MovieSearch">
							<div className="flex justify-start py-2">
								<div className="py-12">
									<div className="grid gap-8 items-start justify-center">
										<div className="relative group">
											<div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-tint to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
											<button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
												<span className="flex items-center space-x-5">
													<span className="pr-6 text-gray-100">
														your movie adventure
														starts now!
													</span>
												</span>
												<span className="pl-6 text-primary group-hover:text-gray-100 transition duration-200">
													Get Started Now &rarr;
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
