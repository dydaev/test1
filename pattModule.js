var greeting = (function () {
    var module = {};
    var helloInLang = {
        en: 'Hello world!',
        es: '¡Hola mundo!',
        ru: 'Привет, мир!'
    };

    module.getello = function (lang) {
        return helloInLang[lang];
    };

    module.writeHello = function (lang) {
        document.write(module.getHello(lang));
	console.log("bla bla");
    };

    return module;
}());
