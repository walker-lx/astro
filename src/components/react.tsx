import { useEffect } from "react";

export default function (props: any) {
	useEffect(() => {
		console.log("hello world", props);
	}, [])
	return <div>react page</div>;
}
