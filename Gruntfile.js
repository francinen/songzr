module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		 pkg: grunt.file.readJSON('package.json'),
		 sass: {
			 dist: {
				 files: {
					 'dist/css/main.css': 'assets/scss/main.scss'
				 }
			 }
		 },
		 autoprefixer: {
			options: {
				browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
			},
			no_dest: {
				src: 'dist/css/main.css'
			}
		 },
		 uglify: {
		 	my_target: {
		 		files: {
		 			'dist/js/main.min.js':['assets/js/script.js']
		 		}
		 	}
		 },
		 copy: {
		 	main: {
		 		files: [
		 			{expand: true, src: ['assets/js/vendor/*'], dest: 'dist/', filter: 'isFile'},
		 			{expand: true, src: ['assets/img/**'], dest: 'dist/', filter: 'isFile'}
		 		]
		 	}
		 },
		 connect: {
		 	server: {
		 		options: {
		 			port: 8000
		 		}
		 	}
		 },

		 watch: {
			 options: {
				 livereload: true,
			 },
			 css: {
				 files: ['assets/scss/*.scss'],
				 tasks: ['sass'],
			 },
			 js: {
			 	files: ['assets/js/script.js'],
			 	tasks: ['uglify']
			 }
		 },
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'autoprefixer', 'uglify', 'copy', 'connect', 'watch']);

 };