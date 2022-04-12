import React, { FC } from "react"
import { Icon } from "../Icon/Icon"
import { IconButtonProps } from "./IconButton.types"

export const IconButton: FC<IconButtonProps> = (props) => {
	const { variant, size, iconSize, href, nestingLevel, styles } = props

	const className =
		styles !== undefined
			? `${variant}-icon-btn-${size}`
			: `${variant}-icon-btn-${size} ${styles}`

	return (
		<button className={className} {...props}>
			<Icon size={iconSize} href={href} nestingLevel={nestingLevel} />
		</button>
	)
}
