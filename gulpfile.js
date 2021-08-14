const gulp    = require('gulp'),
  scss        = require('gulp-sass')(require('sass')),
  del         = require('del'),
  fileinclude = require('gulp-file-include'),
  browserSync = require('browser-sync').create();

const src = 'src';
const dist = 'dist';

gulp.task('scss', () => {
  return gulp.src(src + '/scss/style.scss')
    .pipe(scss({outputStyle: 'expanded'}).on('error', scss.logError))
    .pipe(gulp.dest(dist + '/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', () => {
  return gulp.src(src + '/html/*.html')
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest(dist + '/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('images', () => {
  return gulp.src(src + '/images/**/*.*')
    .pipe(gulp.dest(dist + '/images'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', () => {
  return del([dist + '/']);
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
        baseDir: dist
    },
    notify: false
  });
});

gulp.task('watch', () => {
  gulp.watch(src + '/scss/**/*.scss', ['scss', browserSync.reload]);
  gulp.watch(src + '/html/**/*.html', ['html', browserSync.reload]);
  gulp.watch(src + '/images/**/*.*', ['images', browserSync.reload]);
});

gulp.task('default', ['watch', 'scss', 'html', 'images', 'browser-sync']);
