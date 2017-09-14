const gulp = require('gulp');
const sass   = require('gulp-sass');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

//sass
gulp.task('sass', function () {
	gulp.src(['css/styles.scss'])
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('css/min'));
});

gulp.task('js', () => {
	return gulp.src('js/main.js')
			   .pipe(babel({
				   presets: ['es2015']
			   }))
			   .pipe(uglify())
		.pipe(gulp.dest('js/min'))
});

// Default task
gulp.task('default', ['sass', 'js']);
