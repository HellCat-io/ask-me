module.exports = {
	content: [
		"./src/pages/**/**/*.{js,ts,jsx,tsx}",
		"./src/core/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			width: {
				170: "170px",
				130: "130px",
				100: "100px",
				18: "18px",
			},
			height: {
				40: "40px",
				35: "35px",
				30: "30px",
				18: "18px",
			},
			colors: {
				accent: "#8156E5",
				dangerDisabled: "#532431",
				tertiaryDisabled: "#293347",
			},
			fontFamily: {
				inter: "Inter, sans-serif",
			},
			boxShadow: {
				focus: "0 0 0 2px rgba(129, 86, 229, .6)",
				hover: "5px 5px 10px rgba(129, 86, 229, .4)",
				active: "inset 0px 2px 10px rgba(0, 0, 0, 0.25)",
				dangerFocus: "0 0 0 2px rgba(239, 68, 68, 0.6)",
				dangerHover: "5px 5px 10px rgba(239, 68, 68, 0.4)",
			},
		},
	},
	plugins: [],
}
