const gulp = require("gulp");
const iconfont = require("gulp-iconfont");
const iconfontCss = require("gulp-iconfont-css");
const iconfontHtml = require("gulp-iconfont-template");
const runTimestamp = Math.round(Date.now()/1000);
const fontName = "matrix_newicon";
gulp.task("Iconfont", () => {
	return gulp.src(["./icons/*.svg"])
		.pipe(iconfontHtml({
			fontName: fontName,
			path: "./temp.html",
			targetPath: "../index.html",
			fontPath: "./fonts/"
		}))
		.pipe(iconfontCss({
			fontName: fontName,
			path: "./_icons.css",
			fontPath: "./fonts/",
			targetPath: "../style.css"
		}))
		.pipe(iconfont({
			fontName: fontName,
			prependUnicode: false,
			formats: ["ttf", "eot", "woff", "svg"],
			timestamp: runTimestamp
		}))
		.pipe(gulp.dest("./dist/fonts/"));
});
