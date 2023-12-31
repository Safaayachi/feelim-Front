import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
export default function Search() {
	const [active, setActive] = React.useState(1);

	const next = () => {
		if (active === 10) return;

		setActive(active + 1);
	};

	const prev = () => {
		if (active === 1) return;

		setActive(active - 1);
	};
	return (
		<>
			<div className=" bg-black py-24">
				<div className=" flex flex-col  container sm:mx-auto px-4">
					<div className=" flex flex-col-reverse md:flex-col gap-16 items-center px-2 md:px-32">
						<div className="py-10 px-16 md:px-8 md:w-2/3 w-full  border border-solid rounded-md h-full md:h-[600px]">
							<div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 p-6 ">
								<Link to="/MovieDetails">
									<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
										<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
										<div className="absolute z-20  h-14 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold"></div>
									</div>
								</Link>
								<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
									<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
									<div className="absolute z-20  h-14 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold"></div>
								</div>
								<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
									<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
									<div className="absolute z-20  h-14 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold"></div>
								</div>
								<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
									<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
									<div className="absolute z-20  h-14 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold"></div>
								</div>
								<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
									<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
									<div className="absolute z-20  h-14 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold"></div>
								</div>
								<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
									<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
									<div className="absolute z-20  h-14 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold"></div>
								</div>
							</div>
							<div className="flex flex-row gap-4 justify-center items-center py-4">
								<div className="flex items-center justify-center gap-8">
									<IconButton
										size="sm"
										variant="outlined"
										onClick={prev}
										disabled={active === 1}
										className="flex justify-center items-center bg-secondary-tint cursor-pointer"
									>
										<ArrowLeftIcon
											strokeWidth={2}
											className="h-4 w-4 text-primary "
										/>
									</IconButton>
									<Typography
										color="gray"
										className="font-normal text-primary-tint"
									>
										Page{" "}
										<strong className="text-primary">
											{active}
										</strong>{" "}
										of{" "}
										<strong className="text-primary">
											10
										</strong>
									</Typography>
									<IconButton
										size="sm"
										variant="outlined"
										onClick={next}
										disabled={active === 10}
										className="flex justify-center items-center bg-secondary-tint cursor-pointer "
									>
										<ArrowRightIcon
											strokeWidth={2}
											className="h-4 w-4 text-primary "
										/>
									</IconButton>
								</div>
							</div>
						</div>
						<div className="relative w-full md:w-2/3">
							<form
								action=""
								className="flex flex-row items-center justify-end group shadow-md relative bg-black rounded-full"
							>
								<input
									type="text"
									className="bg-shade px-4 text-white focus:outline-primary font-poppins"
									placeholder="Type anything"
								/>
								<div className="absolute px-3 py-2 rounded-full h-3/4 flex items-center bg-secondary-tint font-poppins text-xs cursor-pointer mr-1 text-white">
									Search
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
