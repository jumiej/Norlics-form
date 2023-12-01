// import { useState } from "react";
// import axios from "axios";

// const NorlicsForm = () => {
// 	const [loading, setLoading] = useState(false);
// 	const [feedback, setFeedback] = useState({ msg: "", success: false });
// 	const apiUrl = "https://services-api-dev.enugustate.gov.ng/v1/api/get_in_touch";

// 	const [formData, setFormData] = useState({
// 		ESBN: "",
// 		BillNumber: "",
// 		Name: "",
// 		Amount: "",
// 	});

// 	const [errors, setErrors] = useState({
// 		ESBN: "",
// 		BillNumber: "",
// 		Name: "",
// 		Amount: "",
// 	});

// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({ ...formData, [name]: value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();

// 		let formValid = true;
// 		const newErrors = {
// 			ESBN: "",
// 			BillNumber: "",
// 			Name: "",
// 			Amount: "",
// 		};

// 		if (!formData.ESBN.trim()) {
// 			formValid = false;
// 			newErrors.ESBN = "ESBN PIN required.";
// 		}

// 		if (!formData.BillNumber.trim()) {
// 			formValid = false;
// 			newErrors.BillNumber = "BillNumber is required";
// 		}

// 		if (!formData.Name.trim()) {
// 			formValid = false;
// 			newErrors.Name = "Name is required.";
// 		}

// 		if (!formData.Amount.trim()) {
// 			formValid = false;
// 			newErrors.Amount = "Amount is required.";
// 		}

// 		if (formValid) {
// 			setLoading(true);

// 			try {
//                     const response = await axios.post(apiUrl, {
//                         ESBN: formData.ESBN,
//                         BillNumber: formData.BillNumber,
//                         Name: formData.Name,
//                         Amount: formData.Amount,
//                       });
                      
// 				console.log("response: ", response.data);
// 				if (response.data.status === 200) {
// 					setFeedback({ msg: "Message Sent Successfully.", success: true });
// 					setTimeout(() => {
// 						setFeedback({ msg: "", success: false });
// 					}, 2000);
// 				} else {
// 					setFeedback({ msg: "Failed.", success: false });
// 					setTimeout(() => {
// 						setFeedback({ msg: "", success: false });
// 					}, 2000);
// 				}
// 				setLoading(false);
// 			} catch (error) {
// 				setLoading(false);
// 				setFeedback({ msg: "Failed.", success: false });
// 				setTimeout(() => {
// 					setFeedback({ msg: "", success: false });
// 				}, 2000);
// 			}
// 		} else {
// 			setLoading(false);
// 			setErrors(newErrors);
// 			setTimeout(() => {
// 				setErrors({ ESBN: "", BillNumber: "", Name: "", Amount: "" });
// 			}, 2000);
// 		}

// 		setFormData({
// 			ESBN: "",
// 			BillNumber: "",
// 			Name: "",
// 			Amount: "",
// 		});
// 	};

// 	return (
// 		<section className="">
// 			<h1 className="text-center mt-10">Norlics Test</h1>
// 			<section className=" px-[200px]">
// 				<div className="">
// 					<div className="flex justify-center bg-[#164782] ">
// 						<img src={`/images/interswitchLog.svg`} alt="interswitchLog.svg " />
// 					</div>
// 				</div>
// 				<main className="bg-[#FFFF]">
// 					<div>
// 						<fieldset>
// 							<div className="flex gap-4  ml-10 mt-10">
// 								<input
// 									id="PaywithESBN"
// 									className="peer/PaywithESBN"
// 									type="radio"
// 									name="status"
// 									checked
// 								/>
// 								<label
// 									htmlFor="PaywithESBN"
// 									className="peer-checked/PaywithESBN:text-sky-500"
// 								>
// 									Pay with ESBN
// 								</label>

// 								<input
// 									id="PaywithoutESBN"
// 									className="peer/PaywithoutESBN"
// 									type="radio"
// 									name="status"
// 								/>
// 								<label
// 									htmlFor="PaywithoutESBN"
// 									className="peer-checked/PaywithoutESBN:text-sky-500"
// 								>
// 									Pay without ESBN
// 								</label>
// 							</div>

// 							<div className="hidden peer-checked/PaywithESBN:block">
// 								Pay with ESBN
// 							</div>
// 							<div className="hidden peer-checked/PaywithoutESBN:block">
// 								Pay without ESBN
// 							</div>
// 						</fieldset>
// 					</div>
// 					<div className="bg-[#ECECEC]  text-[#ECECEC]  h-0.5  m-10"></div>
// 					<form>
// 						<div className="flex justify-between px-10">
// 							<span
// 								className={` ${feedback.msg ? "visible" : "invisible"} ${
// 									feedback.success ? "text-green-500" : "text-red-500"
// 								}  text-[0.8rem] font-nunito h-4`}
// 							>
// 								{feedback.msg}
// 							</span>
// 							<div>
// 								<label className="block">
// 									<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-semibold text-slate-700">
// 										ESBN
// 									</span>
// 									<span
// 										className={`${
// 											errors.ESBN ? "visible" : "invisible"
// 										} text-red-500 text-[0.8rem] block  h-4`}
// 									>
// 										{errors.ESBN}
// 									</span>
// 									<input
// 										type="text"
// 										name="ESBN"
// 										value={formData.ESBN}
// 										onChange={handleInputChange}
// 										placeholder="enter your ESBN"
// 										className="mt-1 p-3 border border-[#5E7687] outline-none rounded-md w-[400px]" // Adjust the width using the w-xx classes
// 									/>
// 								</label>
// 							</div>

// 							<div>
// 								<label className="block">
// 									<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-semibold  text-slate-700">
// 										Bill Number
// 									</span>
// 									<span
// 										className={`${
// 											errors.BillNumber ? "visible" : "invisible"
// 										} text-red-500 text-[0.8rem] block  h-4`}
// 									>
// 										{errors.BillNumber}
// 									</span>
// 									<input
// 										type="text"
// 										name="BillNumber"
// 										value={formData.BillNumber}
// 										onChange={handleInputChange}
// 										placeholder="Enter Bill Number"
// 										className="mt-1 p-3 border border-[#5E7687] outline-none rounded-md w-[400px]" // Adjust the width using the w-xx classes
// 									/>
// 								</label>
// 							</div>
// 						</div>
// 						<div className="bg-[#ECECEC]  text-[#ECECEC]  h-0.5  m-10"></div>

// 						<div className="flex justify-between px-10">
// 							<div>
// 								<label className="block">
// 									<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-semibold text-slate-700">
// 										Name
// 									</span>
// 									<span
// 										className={`${
// 											errors.Name ? "visible" : "invisible"
// 										} text-red-500 text-[0.8rem] block  h-4`}
// 									>
// 										{errors.Name}
// 									</span>
// 									<input
// 										type="text"
// 										name="Name"
// 										value={formData.Name}
// 										onChange={handleInputChange}
// 										placeholder="Default Name"
// 										className="mt-1 p-3 border border-[#5E7687] outline-none rounded-md w-[400px]" // Adjust the width using the w-xx classes
// 									/>
// 								</label>
// 							</div>

// 							<div>
// 								<label className="block">
// 									<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-semibold text-slate-700">
// 										Amount
// 									</span>
// 									<span
// 										className={`${
// 											errors.Amount ? "visible" : "invisible"
// 										} text-red-500 text-[0.8rem] block  h-4`}
// 									>
// 										{errors.Amount}
// 									</span>
// 									<input
// 										type="text"
// 										name="Amount"
// 										value={formData.Amount}
// 										onChange={handleInputChange}
// 										placeholder="enter amount"
// 										className="mt-1 p-3 border border-[#5E7687] outline-none rounded-md w-[400px]" // Adjust the width using the w-xx classes
// 									/>
// 								</label>
// 							</div>
// 						</div>
// 					</form>
// 					<div className="flex justify-end mr-10">
// 						<button
// 						className=" mt-14 px-14 py-4 bg-[#34AA63] text-[#ffff] rounded-md "
// 						onClick={handleSubmit}
// 					>
// 						Pay now
// 					</button>
// 					</div>

// 					<div className="mt-[30px]">
// 						<button
// 							className="w-full py-3 flex justify-center items-center bg-[#057BB0] text-white rounded"
// 							onClick={handleSubmit}
// 						>
// 							{loading ? (
// 								<AiOutlineLoading3Quarters className="text-white font-bold mx-auto text-2xl animate-spin" />
// 							) : (
// 								"Pay now"
// 							)}
// 						</button>
// 					</div>
// 				</main>
// 			</section>
// 		</section>
// 	);
// };

// export default NorlicsForm;
