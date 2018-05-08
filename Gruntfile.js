module.exports = function(grunt) { 
	var option = grunt.option('env');
	grunt.registerTask('greetingsCI', function() {
		console.log('Hello CI class!');
	});

	grunt.registerTask('locationCI', function() {
		console.log('We are located at UPB!');
		console.log(option);
	});

	grunt.registerTask('ciProcess', ['greetingsCI','locationCI']);

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');



	// Project configuration. 

	grunt.initConfig({
	  concat: {
	    js: {
	      src: ['js/1.js', 'js/2.js'],
	      dest: 'build/main.js',
	    },
	    css: {
	      src: ['css/1.css', 'css/2.css'],
	      dest: 'build/main.css',
	    }
	  },
	  watch: {
		  scripts: {
		    files: 'js/*.js',
		    tasks: ['concat:js']
		  },
	  },
	  jasmine: {
	    JS: {
	      src: 'js/*.js',
	      options: {
	        specs: 'spec/*.spec.js'
	      }
	    }
	  }
	});
};
