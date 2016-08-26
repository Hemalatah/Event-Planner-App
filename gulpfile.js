var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify'); 
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var eslint = require('gulp-eslint');

gulp.task('serve', ['minify-css'], function() {
    browserSync.init({
        server: './'
    });

    gulp.watch('pre.css/*.css', ['minify-css']);
    gulp.watch('pre.css/*.css').on('change', reload);
});

gulp.task('default', ['styles', 'lint'], function() {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/**/*.js', ['lint']);
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('pre.js/**/*.js'),
        uglify(),
        gulp.dest('./js')
    ],
    cb
  );
});

gulp.task('compress-images', function() {
    return gulp.src('pre-images/*')
      .pipe(imagemin({ progressive: true, optimizationLevel: 7 }))
      .pipe(gulp.dest('images'));
});

gulp.task('minify-css', function() {
  return gulp.src('pre.css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'));
});

gulp.task('lint', function () {
    return gulp.src(['js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});
