export default function SignUp() {
	return (
		<>
			<div className=" bg-black min-h-screen py-36">
				<div className="relative flex flex-col  container sm:mx-auto px-4  items-center">
					<div className="relative h-full w-full md:w-2/5  md:shadow-md p-8 gap-6 flex flex-col bg-secondary bg-opacity-80  rounded-md py-16">
						<form className="flex flex-col gap-4 font-poppins">
							<div className="flex flex-row gap-2">
								<input
									type="text"
									className="input py-3 focus:outline-primary outline-primary-shade text-primary-tint"
									placeholder="First Name"
								/>
								<input
									type="text"
									className="input py-3 focus:outline-primary outline-primary-shade text-primary-tint"
									placeholder="Last Name"
								/>
							</div>
							<input
								type="text"
								className="input py-3 focus:outline-primary outline-primary-shade text-primary-tint"
								placeholder="Email"
							/>
							<input
								type="password"
								className="input py-3 focus:outline-primary outline-primary-shade text-primary-tint"
								placeholder="Password"
							/>
							<input
								type="password"
								className="input py-3 focus:outline-primary outline-primary-shade text-primary-tint"
								placeholder="Confirm Password"
							/>
							<button
								type="submit"
								className="btn btn-secondary py-3 self-center "
							>
								Sign Up
							</button>
						</form>

						<div className="flex flex-row justify-around items-center">
							<div className="h-1 w-1/3 border-b border-solid border-primary-tint"></div>
							<div className="text-secondary-shade">or</div>
							<div className="h-1  w-1/3 border-b  border-solid border-primary-tint"></div>
						</div>

						
					</div>
				</div>
			</div>
		</>
	);
}
