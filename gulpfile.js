const gulp = require("gulp");
const pug = require("gulp-pug");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const glob = require("glob");
const uglify = require("gulp-uglify");

const levels = [
    "common.blocks",
    "desktop.blocks"
]

function getDeclarationBlocks() {
    const decl = require("./page.decl.garfield.js")
    return decl.blocks
}

function buildCSS_garfield() {
    const blocks = getDeclarationBlocks();

    let files = [];
    blocks.forEach(block => {
        levels.forEach(level => {
            files = files.concat(glob.sync(`${level}/${block.name}/**/*.css`))
        })
    });

    if (files.length == 0) return

    return gulp.src(files)
    .pipe(concat("bundle.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist"))
}

function buildHTML() {
    return gulp.src("src/pug/pages/index.pug")
        .pipe(
            pug({
                pretty:true
            })
        )
        .pipe(concat("index.html"))
        .pipe(gulp.dest("./"));
}

function watch() {
    levels.forEach(level => {
        gulp.watch(`${level}/**/*.css`, buildCSS_garfield)
    })
    gulp.watch("page.decl.garfield.js", buildCSS_garfield)
}

function build() {
    return gulp.parallel(buildCSS_garfield, buildHTML)();
}

exports.watch = watch;
exports.buildCSS = buildCSS_garfield;
exports.buildHTML = buildHTML;
exports.build = build;