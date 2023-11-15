import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
	const service = useLoaderData();
	const { title, _id, price, img } = service;
	const { user } = useContext(AuthContext);

	const handleBookService = (event) => {
		event.preventDefault();

		const form = event.target;

		const name = form.name.value;
		const date = form.date.value;
		const email = form.email.value;

		const order = {
			customerName: name,
			email,
			date,
			service_id: _id,
			service: title,
			price: price,
			img,
		};

		fetch("http://localhost:5000/bookings", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((res) => res.json())
			.then((data) => {
                console.log(data);
                if (data.insertedId) {
                    alert('service book successfully')
                }
			});

		console.log(order);
	};

	return (
		<div>
			<h4 className="text-3xl font-bold text-center">
				Checkout :{title}
			</h4>

			<div className="bg-zinc-100 p-5 mt-5">
				<form onSubmit={handleBookService}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								defaultValue={user?.name}
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Date</span>
							</label>
							<input
								type="date"
								name="date"
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
								name="email"
								defaultValue={user?.email}
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Due amount</span>
							</label>
							<input
								type="text"
								defaultValue={"$" + price}
								className="input input-bordered"
								required
								readOnly
							/>
						</div>
					</div>
					<div className="form-control mt-6">
						<input
							type="submit"
							className=" btn btn-block hover:bg-orange-500 bg-orange-600"
							value="Submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CheckOut;
