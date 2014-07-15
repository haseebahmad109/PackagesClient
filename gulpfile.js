var gulp = require('gulp')
  , less = require('gulp-less')
  , jade = require('gulp-jade')
  , prefix = require('gulp-autoprefixer')

  , BASE_DIR = __dirname + '/src'
  , DEST = __dirname + '/packages/www'

gulp.task('less', function () {
  gulp.src(BASE_DIR + '/less/app.less')
    .pipe(less())
    .pipe(prefix())
    .pipe(gulp.dest(DEST + '/css'))
})

gulp.task('jade', function () {
  gulp.src(BASE_DIR + '/views/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest(DEST + '/views'))

  gulp.src(BASE_DIR + '/index.jade')
    .pipe(jade({
        locals: {
          stylesheet: 'css/app.css'
          , libs: 'js/libs.js'
          , app_scripts: [
              , 'cordova.js'
              , 'js/angular.js'
              , 'js/angular-route.js'
              , 'js/controllers.js'
              , 'js/directives.js'
              , 'js/models.js'
              , 'js/services.js'
              , 'js/app.js'
          ]
      }
    }))
    .pipe(gulp.dest(DEST + '/'))
})

gulp.task('copy', function () {
  gulp.src(BASE_DIR + '/img/**/*')
    .pipe(gulp.dest(DEST + '/img'))

  gulp.src(BASE_DIR + '/res/**/*')
    .pipe(gulp.dest(DEST + '/res'))

  gulp.src(BASE_DIR + '/config.xml')
    .pipe(gulp.dest(DEST + '/'))

  gulp.src(BASE_DIR + '/js/**/*.js')
    .pipe(gulp.dest(DEST + '/js'))
})

gulp.task('watch', function () {
  gulp.watch(BASE_DIR + '/less/**/*', ['less'])
  gulp.watch(BASE_DIR + '/views/*.jade', ['jade'])
  gulp.watch(BASE_DIR + '/js/**/*.js', ['copy'])

});

gulp.task('default', ['less', 'jade', 'copy', 'watch'])
gulp.task('build', ['less', 'jade', 'copy'])