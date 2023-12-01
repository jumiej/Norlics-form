import { Formik , Form, Field, ErrorMessage  } from 'formik'
import * as Yup from "yup";

const initialValues = {
		name: "",
		email: "",
		channel: "",
		comments:"",
		address:''
	},
	onSubmit = (values) => {
		console.log("form data", values);
	};

	// if (!values.name) {
	// 	errors.name = "Required";
	// }

	// if (!values.email) {
	// 	errors.email = "Required";
	// } else if (
	// 	/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(values.email)
	// ) {
	// 	errors.email = "Invalid email format";
	// }

	// if (!values.channel) {
	// 	errors.channel = "Required";
	// }
	// return errors;


const validationSchema = Yup.object({
	name: Yup.string().required("reqiured"),
	email: Yup.string().email("Invalid email format").required("Required"),
	channel: Yup.string().required("Required"),
});

const Newform = () => {
	// console.log("visited Field ", formik.touched);
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>

			
			<Form>
				<div className="mb-5 bg-red-800">
					<label>Name</label>
					<Field type="text" id="name" name="name" className="border border-green-800" />
					<ErrorMessage  name="name"/>
				</div>

				<div className="mb-5">
					<label className="text-red">Email</label>
					<Field
						type="text"
						id="email"
						name="email"
						placeholder='name'
						className="border border-green-800"
					/>
					<ErrorMessage name="email"/>
				</div>

				<div className="mb-5">
					<label>Channel</label>
					<Field
						type="text"
						id="channel"
						name="channel"
						className="border border-green-800"
					/>
					<ErrorMessage name='channel'/>
				</div>

				<div className="mb-5">
					<label>Comments</label>
					<Field as='textarea' id='comments' name='comments' className='border border-green-800' />
				</div>

				<div className="mb-5">
					<label>Address</label>
					<Field name='address' className='border border-green-800' >
							{
								(props) => {
									console.log('Render prpos', props)
									return <input id='address'/>
								}
							}
					</Field>
				</div>

				<button type="submit"> Submit</button>
			</Form>
		</Formik>
	);
};

export default Newform;
