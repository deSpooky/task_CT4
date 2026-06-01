const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const glob = require("glob");

const levels = [
    "common.blocks",
    "desktop.blocks"
]

function getDeclarationBlocks() {
    const decl = require("./page.decl.js")
    return decl.blocks
}

function buildCSS() {
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

function watch() {
    levels.forEach(level => {
        gulp.watch(`${level}/**/*.css`, buildCSS)
    })
    gulp.watch("page.decl.js", buildCSS)
}

exports.buildCSS = buildCSS;
exports.watch = watch;
exports.default = buildCSS;