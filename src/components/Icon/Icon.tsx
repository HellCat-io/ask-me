import React, { FC } from "react"
import { IconProps } from "./Icon.types"

const Icon: FC<IconProps> = (props) => {
	const { styles, nestingLevel, href } = props

	return (
		<svg className={styles} aria-hidden="true">
			<use xlinkHref={`${nestingLevel}${href}`} />
		</svg>
	)
}

export default Icon
