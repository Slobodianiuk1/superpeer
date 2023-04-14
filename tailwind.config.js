/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"], theme: {
		screens: {
			lg: {'max': '1301.99px'},
			md: {'max': '1089.99px'},
			sm: {'max': '767.99px'},
			as: {'max': '587.99px'},
			xs: {'max': '479.99px'},
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				superpeer:{
					golden: '#FFD338',
					hoverGolden: '#FFD338B0',
					lightGolden: '#FFF9E7',
					dark: '#222222',
					gray: '#555555',
					middleGray: '#666666',
					lightedGray: '#999999',
					lightGray: '#EEEEEE',
				}
			},
			fontSize:{
				3.25: '3.25rem',
				3.5: '3.5rem',
				4.25: '4.25rem',

			},
			lineHeight: {
				'h2': '4.6875rem',
				'h2Mobile': '3rem',
				'h4':'1.8125rem'
			},
			letterSpacing: {
				'1px': '0.0625rem'
			},
			transitionProperty: {
				bg: 'background'
			},
			minHeight: {
				footer: '3.5rem',
			},
			backgroundImage: {
				'video-call-section': "url('../assets/img/video-call-section.svg')",
			},
			boxShadow: {
				"features-icon": '4px 4px 0px #EEEEEE',
				"price-bg" : '4px 4px 0px #FFD338'
			},
			transitionDuration: {
				'.3s': '.3s',
			}
		},
	}, plugins: [],
}

