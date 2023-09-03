import {store} from "@/store/index.ts"
import {Button} from "antd"

export function LayoutContent() {
	const incr = () => {
		store.dispatch({
			type: "counter/increment"
		})
	}
	const decr = () => {
		store.dispatch({
			type: "counter/decrement"
		})
	}
	return (
		<div className="layout-content">
			<span>{store.getState().counter.value}</span>
			<Button type="primary" onClick={incr}>+</Button>
			<Button type="primary" onClick={decr}>-</Button>
		</div>
	)
}