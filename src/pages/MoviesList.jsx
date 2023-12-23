import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
export default function Movies() {
	let [isOpen, setIsOpen] = useState(true);
	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
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
				<Dialog open={isOpen} onClose={closeModal}>
					<div className="absolute inset-0 z-30 text-primary-tint ">
						<div className="flex h-full justify-center items-center py-4 ">
							<Dialog.Panel>
								<div className="bg-black p-10 flex flex-col rounded-md border border-solid border-primary-shade border-opacity-5 shadow-2xl">
									<button
										onClick={closeModal}
										className="self-end py-2"
									>
										Close
									</button>
									<div className="flex flex-col">
										<from className="flex flex-col gap-4">
											<div className="flex flex-row gap-2 items-center justify-center">
												<label className="font-poppins text-xxs w-24">
													List Name
												</label>
												<input
													type="text"
													className="input focus:outline-primary"
												></input>
											</div>
											<button
												className="btn btn-secondary self-end"
												onClick={closeModal}
											>
												Create
											</button>
										</from>
									</div>
								</div>
							</Dialog.Panel>
						</div>
					</div>
				</Dialog>
				<div className=" flex flex-col  container sm:mx-auto px-4 ">
					<div className=" flex flex-col-reverse md:flex-col gap-16 items-center px-2 md:px-32 ">
						<div className="py-10 px-16 md:px-8 md:w-2/3 w-full  border border-solid  rounded-md h-full md:h-[650px] bg-secondary bg-opacity-10 shadow-full">
							<div className="flex justify-end font-poppins ">
								<div
									className="btn btn-secondary text-xxs cursor-pointer"
									onClick={openModal}
								>
									Create
								</div>
							</div>
							<div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 p-6 ">
								<Link to="/MovieDetails">
									<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								</Link>
								<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className="relative h-48 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
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
					</div>
				</div>
			</div>
		</>
	);
}
