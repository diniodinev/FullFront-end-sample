module.exports = function (grunt) {

	grunt.initConfig({
		coffee : {
			options : {
				bare : true
			},
			scripts : {
				expand : true,
				flatten : true,
				cwd : 'coffee/',
				src : ['*.coffee'],
				dest : 'js/',
				ext : '.js'
			}

		},
		sass : {
			dist : {
				files : [{
						expand : true,
						cwd : 'sass/',
						src : ['*.scss'],
						dest : 'css/',
						ext : '.css'
					}
				]
			}
		},
		clean : {
			js : ["js/", "css/"]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Default task(s).
	grunt.registerTask('default', ['clean','coffee','sass']);
}
