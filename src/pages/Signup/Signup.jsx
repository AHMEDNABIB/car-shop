import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const Signup = () => {
   
	const handleSignup = (event) => {
		event.preventDefault();
	};
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row">
				<div className="mr-12 w-1/2">
					<img src={img} alt="" />
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<h1 className="text-3xl font-bold text-center mt-5">
						Sign Up
					</h1>
					<form onSubmit={handleSignup} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder=" Name"
								name="name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								name="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">
									Confirm Password
								</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a
									href="#"
									className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<input
								className="btn btn-primary"
								type="submit"
								value="Sign Up"
							/>
						</div>
					</form>
					<p className="text-center mb-10">
                        Already Have an
                        Account?{" "}
						<Link to="/login" className="text-orange-600 font-bold">
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signup;
