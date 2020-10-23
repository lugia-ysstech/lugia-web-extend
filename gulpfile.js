const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const ts = require('gulp-typescript');
const merge = require('merge2');

const tsProject = ts.createProject('tsconfig.json');
gulp.task('default', ['js', 'ts', 'css', 'font', 'interface', 'meta']);
gulp.task('ts', () => {
  const tsResult = gulp.src(['src/widgets/**/*.ts', 'src/widgets/**/*.tsx']).pipe(tsProject());
  return merge([
    tsResult.dts.pipe(gulp.dest('dist')),
    tsResult.js
      .pipe(
        babel({
          presets: ['react-app'],
          plugins: [
            'transform-es2015-modules-commonjs',
            [
              'import',
              [
                {
                  libraryName: '@lugia/lugia-web',
                  libraryDirectory: 'dist',
                },
                {
                  libraryName: '@lugia/lugia-mega-ui',
                  libraryDirectory: 'dist',
                },
              ],
            ],
          ],
        })
      )
      .pipe(uglify())
      .pipe(gulp.dest('dist')),
  ]);
});
gulp.task('js', () => {
  return gulp
    .src(['src/widgets/**/*.js'])
    .pipe(
      babel({
        presets: ['react-app'],
        plugins: [
          'transform-es2015-modules-commonjs',
          [
            'import',
            [
              {
                libraryName: '@lugia/lugia-web',
                libraryDirectory: 'dist',
              },
            ],
          ],
        ],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
gulp.task('css', () => {
  return gulp.src('src/widgets/**/*.css').pipe(gulp.dest('dist'));
});
gulp.task('meta', () => {
  return gulp.src('src/widgets/**/*.json').pipe(gulp.dest('dist'));
});
gulp.task('font', () => {
  return gulp
    .src([
      'src/widgets/**/*.ttf',
      'src/widgets/**/*.eot',
      'src/widgets/**/*.svg',
      'src/widgets/**/*.png',
      'src/widgets/**/*.jpg',
      'src/widgets/**/*.woff',
      'src/widgets/**/*.woff2',
    ])
    .pipe(gulp.dest('dist'));
});
gulp.task('interface', () => {
  return gulp.src(['src/interface/*.js', 'src/interface/*.json']).pipe(gulp.dest('interface'));
});
