module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compact',
					loadPath: ['node_modules/foundation-sites/scss']
				},
				files: {
					'app/styles/css/main.css': 'app/styles/sass/style.scss'
				}
			}
		},


		// CSS

		css: {
			files: ['css/*.scss'],
			tasks: ['sass'],
			options: {
				spawan: false,
			}
		},

		// WATCH

		watch: {
			css: {
				files: 'app/styles/sass/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true,
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('watchfiles', ['sass', 'watch']);

};
