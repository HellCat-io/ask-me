import { ReactNode } from "react"

export interface IconButtonProps {
	variant: "primary" | "secondary" | "tertiary" | "danger"
	size: "sm" | "md" | "lg"
	href: string
	iconSize: "xs" | "sm" | "md" | "lg"
	styles?: string
	nestingLevel: string
}
