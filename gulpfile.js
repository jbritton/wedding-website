var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var stylus = require('gulp-stylus');
var nib = require('nib');


function buildCss(){
    var src = 'src/stylus/*.styl',
        dest = 'public/css',
        opts = {
            compress: false,
            use: nib(),
            linenos: false
        };

    return gulp.src(src)
        .pipe(stylus(opts))
        .pipe(gulp.dest(dest));
}

function buildNgTemplates(){
    var src = 'src/app/views/**/*.html',
        dest = 'public/app',
        opts = {
            //base: '',             // override base path
            standalone: false,      // create a new module or use existing
            module: 'app',      // module name
            root: ''                // template prefix
        };

    return gulp.src(src)
        .pipe(templateCache(opts))
        .pipe(gulp.dest(dest));
}

function buildNgApp(){
    var src = [
            'src/app/*.js',
            'src/app/directives/**/*.js',
            'src/app/services/**/*.js'
        ],
        dest = 'public/app',
        outFile = 'app.js';

    return gulp.src(src)
        .pipe(concat(outFile))
        .pipe(gulp.dest(dest));
}

gulp.task('build', function(done){

});

gulp.task('develop', function(done){

});