import React, { useState } from "react";
import {
	Box,
	Button,
	TextField,
	Paper,
	Grid,
	Typography,
	Divider,
	FormControl,
	InputLabel,
	MenuItem
} from "@mui/material";
import { purple } from "@mui/material/colors";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import Joi from "joi-browser";

const Login = props => {
	const [customer, setCustomer] = useState({
		email: "",
		password: "",
		role: ""
	});

	const [roles, setRoles] = useState(["admin", "customer", "employee"]);

	const [errors, setErrors] = useState({});

	const navigate = useNavigate();

	//Step1:  Define schema to validate email and password
	const schema = {
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
			.required(),
		password: Joi.string().alphanum().min(6).max(30).required(),
		name: Joi.string().min(3).required(),
		phoneNumber: Joi.string()
			// .length(10)
			// .pattern(/^[0-9]+$/)
			.required()
	};

	// Step 2: Validate
	const validate = () => {
		const errors = {}; //object type local variable
		const result = Joi.validate(customer, schema, {
			abortEarly: false
		});
		console.log(result);
		// setting error messages to error properties
		// ex: errors[username] = "username is required";
		// ex: errors[password] = "password is required";
		if (result.error != null)
			for (let item of result.error.details) {
				errors[item.path[0]] = item.message;
			}
		return Object.keys(errors).length === 0 ? null : errors;
	};

	const handleChange = event => {
		let newCustomer = { ...customer };
		newCustomer[event.target.name] = event.target.value;
		setCustomer(newCustomer);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(customer);

		// Step3: Call validate function
		// validate login details with schema
		setErrors(validate());
		if (errors != null) return;

		// logic to send login details to backend for authentication

		console.log("No form field errors");
		// if (!customer.email.includes('@')) {
		//     console.log("Enter valid email address");
		//     let newErrors = { ...errors };
		//     newErrors['email'] = 'Enter valid email address';
		//     setErrors(newErrors);
		// }
		// if (customer.password.length < 4) {
		//     console.log("Password length should be min 4 chars");
		//     let newErrors = { ...errors };
		//     newErrors['password'] = 'Password length should be min 4 chars';
		//     setErrors(newErrors);
		// }
	};
	return (
		<div
			style={{
				background: "black",
				width: "100vw",
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			{console.log("errors", errors)}
			<Grid container spacing={2}>
				<Grid
					component={Paper}
					item
					p={3}
					xs={4}
					sx={{ marginLeft: "auto", marginRight: "auto", marginTop: "25px" }}
				>
					<Typography
						variant="h6"
						sx={{
							color: "green",
							marginBottom: "10px",
							fontFamily: "serif",
							textAlign: "center"
						}}
					>
						REGISTER
					</Typography>
					<hr />
					<Box
						component="form"
						noValidate
						autoComplete="off"
						onSubmit={handleSubmit}
					>
						<Box mb={2}>
							<TextField
								value={customer.email}
								name="email"
								onChange={handleChange}
								id="email"
								label="Email"
								variant="filled"
								fullWidth
							/>
						</Box>
						<small>{errors && errors.email}</small>
						<Box mb={2}>
							<TextField
								value={customer.password}
								name="password"
								onChange={handleChange}
								id="password"
								label="Password"
								variant="filled"
								type="password"
								fullWidth
							/>
						</Box>
						<small>{errors && errors.password}</small>
						<FormControl
							fullWidth
							variant="filled"
							sx={{ mb: 2, minWidth: 120 }}
						>
							<TextField
								placeholder="Name"
								value={customer.name}
								name="name"
								onChange={handleChange}
								id="name"
								label="Name"
								variant="filled"
								type="text"
								fullWidth
							/>
						</FormControl>
						<small>{errors && errors.name}</small>
						<FormControl
							fullWidth
							variant="filled"
							sx={{ mb: 2, minWidth: 120 }}
						>
							<TextField
								placeholder="Phone number"
								value={customer.phoneNumber}
								name="phoneNumber"
								onChange={handleChange}
								id="phoneNumber"
								label="Phone number"
								variant="filled"
								type="text"
								fullWidth
							/>
						</FormControl>
						<small>{errors && errors.phoneNumber}</small>
						<Button type="submit" variant="contained" fullWidth>
							REGISTER
						</Button>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default Login;
