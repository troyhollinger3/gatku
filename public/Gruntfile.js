module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist : {
                src : [
                    'js/plugins.js',
                    'bower_components/jQuery.mmenu/dist/js/jquery.mmenu.min.js',
                    'js/main.js',
                    'bower_components/angular-cookies/angular-cookies.js',
                    'bower_components/angular-cookie/angular-cookie.js',
                    'bower_components/angular-animate/angular-animate.js',
                    'bower_components/angular-stripe/release/angular-stripe.js',
                    'js/config.js',
                    'js/directives.js',
                    'js/services/*.js',
                    'js/factories.js',
                    'js/controllers/*.js'
                ],
                dest: 'production/app.js'
            }
        },

        uglify: {
            build: {
                src: 'production/app.js',
                dest: 'production/app.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style:'compressed'
                },
                files: {
                    'css/style.css' : 'css/style.scss'
                }
            }
        },
        cssmin : {
            combine : {
                files : {
                    'production/app.css' : ['css/reset.css','css/style.css', 'bower_components/jQuery.mmenu/dist/css/jquery.mmenu.all.css']
                }
            }
        },
        watch: {
            
            scripts: {
                files: [
                    'js/*.js', 
                    'js/controllers/*.js', 
                    'js/services/*.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css : {
                files : ['css/*.scss'],
                tasks : ['sass', 'cssmin'],
                options : {
                    spawn : false
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'watch']);

};