

const BookingRow = ({ booking }) => {
    const { _id, customerName, img, email, date, service_id, service ,price} = booking;
    return (
		<tr>
			<th>
				<label>
					<input type="checkbox" className="checkbox" />
				</label>
			</th>
			<td>
				<div className="flex items-center gap-3">
					<div className="avatar">
						<div className=" w-24 h-24 rounded">
							<img
								src={img}
								alt="Service Image"
							/>
						</div>
					</div>
					
				</div>
			</td>
			<td>
				{" "}
				<div className="font-bold">{customerName}</div>
			</td>
			<td>{service}</td>
			<td>{email}</td>
			<td>${price}</td>
			<th>
				<button className="btn btn-ghost btn-xs">details</button>
			</th>
		</tr>
	);
};

export default BookingRow;