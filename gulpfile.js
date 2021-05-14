'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber');

const paths = {
  styles: {
    src: 'src/less/*.less',
    dest: './build/assets/styles/'
  },
  scripts: {
    src: 'src/js/*.js',
    dest: './build/assets/js/',
  },
  pug: {
    src: 'src/pug/*.pug',
    dest: './build/'
  }
}

gulp.task('browser-sync', function(done) {
  browserSync.init({
    server: {
      baseDir: './build'
    },
    port: 3000,
    open: true,
    notify: false
  });

  browserSync.watch('build/').on('change', browserSync.reload);

  done();
});

gulp.task('less', function (done) {
  gulp.src(paths.styles.src)
      .pipe(less())
      .pipe(plumber())
      .pipe(cleanCSS())
      .pipe(autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
      }))
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.reload({stream: true}));

  done();
})

gulp.task('js', function (done) {
  gulp.src(paths.scripts.src)
      .pipe(concat('main.js'))
      .pipe(gulp.dest(paths.scripts.dest))
      .pipe(browserSync.reload({stream: true}));
  done();
})

gulp.task('pug', function (done) {
  gulp.src(paths.pug.src)
      .pipe(pug({
        locals: '',
        pretty: true,
      }))
      .pipe(plumber())
      .pipe(gulp.dest(paths.pug.dest))
      .pipe(browserSync.reload({stream: true}));

  done();
});

gulp.task('watch', gulp.series('less', 'js', 'pug', 'browser-sync', function(done) {
  gulp.watch('src/less/**/*.less', gulp.series('less'));
  gulp.watch(paths.scripts.src, gulp.series('js'));
  gulp.watch('src/pug/**/*.pug', gulp.series('pug'));

  done()
}));

gulp.task('default', gulp.series('watch'));