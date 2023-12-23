export default function SignIn() {
	return (
		<>
			<div className=" bg-black min-h-screen py-36">
				<div className="relative flex flex-col  container sm:mx-auto px-4  items-center">
					<div className="relative h-full w-full md:w-1/3  md:shadow-md p-8 gap-6 flex flex-col border border-solid border-secondary-tint bg-secondary-tint bg-opacity-20  rounded-md py-16">
						<form
							className="flex flex-col gap-4"
						
						>
							
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
							<button
								type="submit"
								className="btn btn-secondary py-3 "
							>
								Login
							</button>
						</form>

						<div className="flex flex-row justify-around items-center">
							<div className="h-1 w-1/3 border-b border-solid border-primary-tint"></div>
							<div className="text-secondary-shade">or</div>
							<div className="h-1  w-1/3 border-b  border-solid border-primary-tint"></div>
						</div>

						<form
							className="flex flex-col gap-4"
							method="post"
							action="/api/auth/signin/email"
						>
							<input name="csrfToken" type="hidden" />
							<input
								type="text"
								className="input py-3"
								placeholder="Email"
							/>

							<button
								type="submit"
								className="btn btn-secondary-outline py-3 "
							>
								Login with email
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
