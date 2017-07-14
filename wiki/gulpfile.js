var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('styles', function(){
	return gulp.src('./css/style.css')
		.pipe()
		.pipe(gulp.dest('./build/style.css'));
});

gulp.task('watch', function() {
	
	watch("index.html", function(){
		gulp.start('html');
	});

	watch('./css/style.css', function(){
		gulp.start('styles');
	});
})