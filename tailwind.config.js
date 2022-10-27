module.exports = {

	content: [
		'./components/**/*.{html,js}',
		'./pages/**/*.{html,js}',
		'./index.html', './find-job.html', './job-details.html', './company.html', './company-profile.html', './all-category.html', './candidate.html', 'candidate-profile.html',
	],
	darkMode: 'class', // or 'media' or 'class'
	mode: 'jit',
	theme: {
		fontFamily: {
			body: ['Jost', 'serif']
		},
		extend: {
			colors: {
				"prm": "#8e9cce",
				"green": "#1CAF57",
				"arsenic": "#36414C",
				"black": "#13161C",
				"gray": "#D5DDE5",
				"deep": "#66737F",
				"light": "#F2F5F8",
				"grayLight": "#8F9CA9",
				"greenLight": "#E8F7EE",
				"greenLight2": "#D2EFDD",
				"whiteLight": "#B8B9BB",
				"red": "#FF4646",
				"yellow": "#FFA621",
				"yellowLight": "#FFF6E9",
			},
			fontSize: {
				'xsss': '12px',
				'xss': '13px',
				'xss1': '14px',
				'xs': '16px',
				'xxs': '18px',
				'lg2': '20px',
				'lg': '24px',
				'xl': '32px',
				'xxl2': '40px',
				'xxl': '45px',
				'xxxl': '64px',
			},
		},
		variants: {
			extend: {
				display: ['group-hover'],
				visibility: ['group-hover'],
				transform: ['group-hover'],
				scale: ['group-hover'],
				witdh: ['group-hover'],
			  },
		}
		
	}
}