import { ReactNode } from "react"

export interface ButtonProps {
	children: ReactNode
	variant: "primary" | "secondary" | "danger"
	size: "sm" | "md" | "lg"
	styles?: string
	leadingIcon?: ReactNode
}
