/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
 (function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 
      'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      'primeng':                   'npm:primeng',
      'angular2-datatable': 'npm:angular2-datatable',
      'lodash': 'npm:lodash/lodash.js',
      'ng2-pdf-viewer': 'npm:ng2-pdf-viewer',
      'pdfjs-dist': 'npm:pdfjs-dist',
      'moment': 'npm:moment',
      'ng2-modal': 'npm:ng2-modal',
      'ng2-file-upload': 'npm:ng2-file-upload',
      'ng2-bootstrap': 'npm:ng2-bootstrap',
      // 'crypto-js': 'npm:crypto-js',
      'js-sha256': 'npm:js-sha256',
      // 'emailjs': 'npm:emailjs',
      // 'angular2-modal': 'npm:angular2-modal',
      'jquery':'npm:jquery'/*,
      'ng2-bootstrap': 'npm:ng2-bootstrap'*/
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      primeng: {
        defaultExtension: 'js'
      },
      'angular2-datatable': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'ng2-pdf-viewer': { 
        // main: 'dist/pdf-viewer.component.js', 
        main: 'dist/index.js', 

        defaultExtension: 'js' 
      },
      'ng2-modal': { 
        main: 'index.js', 
        defaultExtension: 'js' 
      },
      'ng2-bootstrap': { 
        main: 'index.js', 
        defaultExtension: 'js' 
      },
      'pdfjs-dist': { 
        main: 'build/pdf.js',
        defaultExtension: 'js' 
      },
      'ng2-file-upload': {
        main: 'ng2-file-upload.js',
        defaultExtension: 'js'
      },
      // 'crypto-js': { 
      //   main: 'crypto-js.js', 
      //   defaultExtension: 'js' 
      // },
      'js-sha256': { 
        main: 'src/sha256.js', 
        defaultExtension: 'js' 
      },
      // 'emailjs': {
      //   main: 'email',
      //   defaultExtension: 'js'
      // },
      /*
      'angular2-modal': { 
        main: 'bundles/angular2-modal.umd',
        // main: 'esm/index.js',
        defaultExtension: 'js' 
      },
      'ng2-bootstrap': {
       main: 'index.js',
       defaultExtension: 'js'
     },*/
     'moment':{
       main: 'moment.js', 
       type: 'cjs',
       defaultExtension: 'js'
       // format: 'cjs'

     },
     'jquery': { 
      main: 'dist/jquery.js',
      defaultExtension: 'js' 
    }
  }
});
})(this);
