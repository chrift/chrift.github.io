const gulp = require('gulp')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('sass', function () {
  return gulp.src(['css/styles.scss'])
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('css/min'))
})

gulp.task('js', () => {
  return gulp.src('js/main.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/min'))
})

// Default task
gulp.task('default', gulp.parallel(['sass', 'js']))
