import { useState, useEffect } from "react";
import axios from "axios";

const NorlicsSecond = () => {
	// const [loading, setLoading] = useState(false);
	// const [feedback, setFeedback] = useState({ msg: "", success: false });
	// const apiUrl = process.env.VITE_NORLICS_URL
	

	const [formData, setFormData] = useState({
		Name: "",
		Amount: "",
		Email: "",
		PhoneNumber: "",
		RevenueHead: "",
	});

	// const [errors, setErrors] = useState({
	// 	Name: "",
	// 	Amount: "",
	// 	Email: "",
	// 	PhoneNumber: "",
	// 	RevenueHead: "",
	// });

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};


	useEffect(()=>{
		const BASE_URL = import.meta.env.VITE_NORLICS_URL;
		const handleGetRequest = async () => {
			try {
				// setLoading(true);
				const response = await axios.get(`${BASE_URL}/users/shortanssidverticals?anssid=3510300880`);
				console.log({response})
				const data = response?.data?.data;
				// console.log({data})

	
				setFormData(prev=>({
					...prev,
					Name: data?.name,
					
					Email: data?.email,
					PhoneNumber: data?.phone,
				}));
	
				// setLoading(false);
			} catch (error) {
				// setLoading(false);
				console.error("Error fetching data:", error);
			}
		};	

		handleGetRequest()
	},[])

	// const handleSubmit = async (e) => {
	//   Your existing handleSubmit logic
	// };

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	let formValid = true;
	// 	const newErrors = {
	// 		Name: "",
	// 		Amount: "",
	// 		Email: "",
	// 		PhoneNumber: "",
	// 		RevenueHead: "",
	// 	};

	// 	if (!formData.Name.trim()) {
	// 		formValid = false;
	// 		newErrors.Name = "Name  PIN required.";
	// 	}

	// 	if (!formData.Amount.trim()) {
	// 		formValid = false;
	// 		newErrors.Amount = "Amount is required";
	// 	}

	// 	if (!formData.Email.trim()) {
	// 		formValid = false;
	// 		newErrors.Email = "Email is required.";
	// 	}

	// 	if (!formData.PhoneNumber.trim()) {
	// 		formValid = false;
	// 		newErrors.PhoneNumber = "Phone Number is required.";
	// 	}

	// 	if (!formData.RevenueHead.trim()) {
	// 		formValid = false;
	// 		newErrors.RevenueHead = " Revenue Head is required.";
	// 	}

	// 	if (formValid) {
			// setLoading(true);

	// 		try {
	// 			const response = await axios.post(apiUrl, {
	// 				Name: formData.Name,
	// 				Amount: formData.Amount,
	// 				Email: formData.Email,
	// 				PhoneNumber: formData.PhoneNumber,
	// 				RevenueHead: formData.RevenueHead,
	// 			});

	// 			console.log("response: ", response.data);
	// 			if (response.data.status === 200) {
	// 				setFeedback({ msg: "Message Sent Successfully.", success: true });
	// 				setTimeout(() => {
	// 					setFeedback({ msg: "", success: false });
	// 				}, 2000);
	// 			} else {
	// 				setFeedback({ msg: "Failed.", success: false });
	// 				setTimeout(() => {
	// 					setFeedback({ msg: "", success: false });
	// 				}, 2000);
	// 			}
				// setLoading(false);
	// 		} catch (error) {
				// setLoading(false);
	// 			setFeedback({ msg: "Failed.", success: false });
	// 			setTimeout(() => {
	// 				setFeedback({ msg: "", success: false });
	// 			}, 2000);
	// 		}
	// 	} else {
			// setLoading(false);
	// 		setErrors(newErrors);
	// 		setTimeout(() => {
	// 			setErrors({ Name: "", Amount: "", Email: "", PhoneNumber: "", RevenueHead: "" });
	// 		}, 2000);
	// 	}

	// 	setFormData({
	// 		Name: "",
	// 		Amount: "",
	// 		Email: "",
	// 		PhoneNumber: "",
	// 		RevenueHead: "",
	// 	});
	// };

	return (
		<section className="md:px-[200px] mt-5 border border-red-900">
			<div className=" border border-yellow-900">
				<div className="flex justify-center bg-[#164782] ">
					<img src={`/images/interswitchLog.svg`} alt="interswitchLog.svg " />
				</div>
			</div>
			<main className="bg-[#FFFF]  ">
				<div>
					<fieldset>
						<div className="flex gap-4  ml-10 mt-10 border border-red-900">
							<input
								id="PaywithESBNs "
								className="peer/PaywithESBN"
								type="radio"
								name="status"
								// onChange={''}

							/>
							<label
								htmlFor="PaywithESBN"
								className="peer-checked/PaywithESBN:text-sky-500"
							>
								Pay with ESBN
							</label>

							<input
								id="PaywithoutESBN"
								className="peer/PaywithoutESBN"
								type="radio"
								name="status"
								// onChange={handleInputChange}

							/>
							<label
								htmlFor="PaywithoutESBN"
								className="peer-checked/PaywithoutESBN:text-sky-500"
							>
								Pay without ESBN
							</label>
						</div>

						{/* <div className="hidden peer-checked/PaywithESBN:block">
								Pay with ESBN
							</div>
							<div className="hidden peer-checked/PaywithoutESBN:block">
								Pay without ESBN
							</div> */}
					</fieldset>
				</div>
				<div className="bg-[#ECECEC]  text-[#ECECEC]  h-0.5  m-10"></div>
				<form className=" flex flex-col gap-6 ">
					<div className="md:flex justify-between px-10">
						<div className="">
							<label className="block">
								<span className="after:content-[''] after:ml-0.5 after:text-red-500 block text-sm font-semibold text-slate-700">
									Name
								</span>
								{/* <span
									className={`${
										errors.Name ? "visible" : "invisible"
									} text-red-500 text-[0.8rem] block  h-4`}
								>
									{errors.Name}
								</span> */}
								<input
									type="text"
									name="Name"
									value={formData.Name}
									onChange={handleInputChange}
									placeholder="enter Name"
									className="mt-1 p-3 border border-[#5E7687] outline-none rounded-md w-[300px] md:w-[400px]" // Adjust the width using the w-xx classes
								/>
							</label>
						</div>

						<div className="mt-5 md:mt-0">
							<label className="block">
								<span className="after:content-[''] after:ml-0.5 after:text-red-500 block text-sm font-semibold  text-slate-700">
									Amount
								</span>
								{/* <span
									className={`${
										errors.Amount ? "visible" : "invisible"
									} text-red-500 text-[0.8rem] block  h-4`}
								>
									{errors.Amount}
								</span> */}
								<input
									type="text"
									name="Amount"
									value={formData.Amount}
									onChange={handleInputChange}
									placeholder="Enter Amount"
									className="mt-1 p-3 border border-[#5E7687] outline-none rounded-md w-[300px] md:w-[400px]" // Adjust the width using the w-xx classes
								/>
							</label>
						</div>
					</div>

					<div className="md:flex justify-between px-10">
						<div>
							<label className="block">
								<span className="after:content-[''] after:ml-0.5 after:text-red-500 block text-sm font-semibold text-slate-700">
									Email
								</span>
								{/* <span
									className={`${
										errors.Email ? "visible" : "invisible"
									} text-red-500 text-[0.8rem] block  h-4`}
								>
									{errors.Email}
								</span> */}
								<input
									type="text"
									name="Email"
									value={formData.Email}
									onChange={handleInputChange}
									placeholder="enter email"
									className="mt-1 p-3 border border-[#5E7687] outline-none rounded-md w-[300px] md:w-[400px]" // Adjust the width using the w-xx classes
								/>
							</label>
						</div>

						<div className="mt-5 md:mt-0">
							<label className="block">
								<span className="after:content-[''] after:ml-0.5 after:text-red-500 block text-sm font-semibold text-slate-700">
									Phone Number
								</span>
								{/* <span
									className={`${
										errors.PhoneNumber ? "visible" : "invisible"
									} text-red-500 text-[0.8rem] block  h-4`}
								>
									{errors.PhoneNumber}
								</span> */}
								<input
									type="text"
									name="PhoneNumber"
									value={formData.PhoneNumber}
									onChange={handleInputChange}
									placeholder="enter phone number"
									className="mt-1 p-3 border border-[#5E7687] outline-none rounded-md w-[300px] md:w-[400px]" // Adjust the width using the w-xx classes
								/>
							</label>
						</div>
					</div>
					<div className="px-10">
						<label className="block">
							<span className="after:content-[''] after:ml-0.5 after:text-red-500 block text-sm font-semibold text-slate-700">
								Revenue Head
							</span>
							{/* <span
								className={`${
									errors.RevenueHead ? "visible" : "invisible"
								} text-red-500 text-[0.8rem] block  h-4`}
							>
								{errors.RevenueHead}
							</span> */}
							<input
								type="text"
								name="RevenueHead"
								value={formData.RevenueHead}
								onChange={handleInputChange}
								placeholder="enter revenue head  "
								className="mt-1 p-3 border border-[#5E7687] outline-none rounded-md w-[300px] md:w-[400px]" // Adjust the width using the w-xx classes
							/>
						</label>
					</div>
				</form>
			</main>
			<div className="flex justify-end mr-10">
				<button
					className=" mt-14 px-14 py-4 bg-[#34AA63] text-[#ffff] rounded-md "
					// onClick={handleGetRequest}
				>
					Fetch Data
				</button>
			</div>
		</section>
	);
};

export default NorlicsSecond;
