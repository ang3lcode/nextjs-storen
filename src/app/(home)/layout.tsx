import { Description } from "app/Components/Home/Description";
import { Hero } from "app/Components/Home/Hero";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Hero />
			<Description />
			{children}
		</div>
	)
}