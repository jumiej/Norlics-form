import { useFormik } from "formik";
import * as Yup from "yup";


const initialValues = {
		name: "",
		email: "",
		channel: "",
	},
	onSubmit = (values) => {
		console.log("form data", values);
	};

// const validate = (values) => {
// 	let errors = {};

// 	if (!values.name) {
// 		errors.name = "Required";
// 	}

// 	if (!values.email) {
// 		errors.email = "Required";
// 	} else if (
// 		/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(values.email)
// 	) {
// 		errors.email = "Invalid email format";
// 	}

// 	if (!values.channel) {
// 		errors.channel = "Required";
// 	}
// 	return errors;
// };

const validationSchema = Yup.object({
	name:Yup.string().required("reqiured"),
	email:Yup.string()
	.email('Invalid email format')
	.required('Required'),
	channel:Yup.string().required('Required')

})

const Form = () => {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema
		// validate,
	});

	console.log("visited Field ", formik.touched);
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="mb-5">
					<label>Name</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
						className="border border-green-800"
					/>
					{formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
				</div>
				<div className="mb-5"> 
					<label className="text-red">Email</label>
					<input
						type="text"
						id="email"
						name="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						className="border border-green-800"
					/>
					{formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
				</div>

				<div className="mb-5">
					<label>Channel</label>
					<input
						type="text"
						id="channel"
						name="channel"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.channel}
						className="border border-green-800"
					/>
						{formik.touched.channel && formik.errors.channel ? <div className="text-red-500">{formik.errors.channel}</div> : null}
				</div>


				<button type="submit"> Submit</button>
			</form>
		</div>
	);
};

export default Form;
