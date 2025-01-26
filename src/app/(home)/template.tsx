"use client"
import { Description } from "app/Components/Home/Description";
import { Hero } from "app/Components/Home/Hero";
import { useEffect } from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {


	useEffect(() => {
		console.log('envio de metricas')
	}, [])
	// console.log("HomeLayout");

	return (
		<div>
			<Hero />
			<Description />
			{children}
		</div>
	)
}