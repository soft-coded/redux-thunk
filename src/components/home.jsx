import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = () => (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

const Home = () => {
	const [count, setCount] = useState(0);
	const [isLogin, setIsLogin] = useState(false);

	// increment
	const incr = () => {
		console.log("incr()");
		//setCount(count + 1);
		calc(1);
	};

	// decrement
	const decr = () => {
		console.log("decr()");
		//setCount(count - 1);
		calc(-1);
	};

	const calc = num => {
		setCount(count + num);
	};
	// set login
	const login = () => {
		console.log("login");
		setIsLogin(!isLogin);
	};

	return (
		<div>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Home component
					</Typography>
					<Typography variant="h5" component="div">
						be{bull}nev{bull}o{bull}lent
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						adjective
					</Typography>
					<Typography variant="body2">
						well meaning and kindly.
						<br />
						{'"a benevolent smile"'}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default Home;
