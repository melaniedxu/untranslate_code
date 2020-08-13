(() => {
	const disableTranslation = elem => Array.prototype.slice.call(document.getElementsByTagName(elem)).forEach(item => item.setAttribute('class', 'notranslate'));
	['code', 'pre', 'samp'].forEach((elem) => disableTranslation(elem));
})();