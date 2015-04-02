// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var rename = require("gulp-rename");  //文件更名 
var uglify = require('gulp-uglify');  //压缩代码
var concat = require('gulp-concat');  //合并文件
var jshint = require('gulp-jshint');  //语法检查
var cssmin = require('gulp-minify-css');    

var config = {
    path: {
        js: './js/*.js',
        less: './less/modules/*.less'
    },
    dist: {
        js: './dist/js',
        css: './dist/css'
    }
}
// 检查脚本
gulp.task('lint', function() {
    gulp.src(config.path.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译Less
gulp.task('less', function() {
    gulp.src(config.path.less)
        .pipe(less({
            compress:true //自动压缩单个CSS
        }))
        //.pipe(cssmin())    //加载这个插件也可以自动压缩CSS
        .pipe(gulp.dest(config.dist.css))

});

// 合并文件之后压缩代码
gulp.task('js', function() {
    gulp.src(config.path.js)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(config.dist.js))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.dist.js));
});

gulp.task('watch',function(){
    // 监听文件变化
    gulp.watch('./js/*.js', ['lint','js']);
    gulp.watch('./less/modules/*.less', ['less']);
})

// 默认任务
gulp.task('default',['lint','js','less'],function(){
    gulp.start(['watch'])
});


//清理生产目录文件
gulp.task('clean', function() {
    return gulp.src([config.dist.js, config.dist.css], {
            read: false
        })
        .pipe(clean());
});


/*var gulp = require('glup'),
    uglify = require('gulp-uglify');

gulp.task('minify', function(){
    gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});

gulp.task('js', function(){
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshine.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'));
});*/
/* read files -> JSHint  ->  Minify  ->  Concat  ->  Write files */

/*
gulp.task(name,[,deps], fn)  : 注册任务
gulp.src(globs[, options])   : 指明源文件路径
gulp.dest(path)              :  指明任务处理后的目标输出路径
gulp.watch(glob[, options], tasks)／gulp.watch(glob[, options, cb])   : 监视文件的变化并运行相应的任务 
*/

