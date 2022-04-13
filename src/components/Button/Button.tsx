import React, { FC } from "react"
import { ButtonProps } from "./Button.types"

export const Button: FC<ButtonProps> = (props) => {
	const { children, size, variant, styles, leadingIcon } = props

	const className =
		styles !== undefined
			? `${variant}-button-${size}`
			: `${variant}-button-${size} ${styles}`

	if (leadingIcon !== undefined) {
		return (
			<button className={className} {...props}>
				{leadingIcon}
				{children}
			</button>
		)
	}

	return (
		<button className={className} {...props}>
			{children}
		</button>
	)
}
