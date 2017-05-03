
	### Introduction

	This is an spa project simulating 'yike', here I can transfer the data from Internet by back-end '.php' file, and will focus on the front-end in SPA format. During building the front-end page, I use the Angular.js to complete the components and data interaction.

	### Project Building

	1. Single-page-application:  index.html
	2. the static source:  public/,  public/less, public/images, public/fonts, public/libs, 
	3. upload files: upload/
	4. all kinds of views: views/, views/author, views/category, .....
	5. deal with the front-end logical control by angular.js: scripts/
	6. back-end in .php files: api/, api/older.php, api/today.php, ...

	### Run

	This project will run in Mac MAMP environment, and the back-end .php files will read the data from 'douban yike' database, and be loaded in the front-end page.

	### Upload

	At last, I use the gulp to deal with the whole files, including compress, encrypt, and finally put the final files in the release directory.

	### Using the gulp plugins

    "gulp-autoprefixer", "gulp-cssmin", "gulp-if", "gulp-imagemin", "gulp-less", "gulp-rename", "gulp-rev", "gulp-rev-collector", "gulp-uglify", "gulp-useref".


	
























