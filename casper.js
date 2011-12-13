/*!
 * Casper is a navigation utility for PhantomJS.
 *
 * Documentation: http://n1k0.github.com/casperjs/
 * Repository:    http://github.com/n1k0/casperjs
 *
 * Copyright (c) 2011 Nicolas Perriault
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */
var fs = require('fs');

function pathJoin() {
    return Array.prototype.join.call(arguments, fs.separator);
}

var casperLibPath = pathJoin(fs.absolute('.'), 'lib');
phantom.injectJs(pathJoin(casperLibPath, 'casper.js'));
phantom.injectJs(pathJoin(casperLibPath, 'clientutils.js'));
phantom.injectJs(pathJoin(casperLibPath, 'colorizer.js'));
phantom.injectJs(pathJoin(casperLibPath, 'injector.js'));
phantom.injectJs(pathJoin(casperLibPath, 'tester.js'));
phantom.injectJs(pathJoin(casperLibPath, 'utils.js'));
phantom.injectJs(pathJoin(casperLibPath, 'xunit.js'));