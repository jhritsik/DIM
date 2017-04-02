module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		test_configuration: {
			'dest': '_dist/'
		},
		assemble: {
			options: {
				layoutdir: 'src/docs/layouts'
			},
			build: {
				options: {
					layout: 'default.hbs'
				},

				'src': 'src/docs/helloworld.txt',
				'dest': '_dist/'
			},
			build_blog: {
				options: {
					layout: 'blog_post.hbs'
				},
				'src': 'src/docs/helloworld.txt',
				'dest': '_dist_blog/'
			}
		}
	});
	grunt.loadNpmTasks('grunt-assemble');

 	/* grunt tasks */
 	grunt.registerTask('default',['assemble']);
	grunt.registerTask('createDirectory', function(){
		if (grunt.file.isDir(grunt.config('test_configuration.dest'))){
			grunt.log.writeln('the directory "_dist" exists');
		} else {
			grunt.log.writeln('the directory  "_dist" does NOT exist');
			grunt.file.mkdir(grunt.config('test_configuration.dest'));
		}
	});
};