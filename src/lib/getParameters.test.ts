import getParameters from './getParameters';

describe('getParameters', () => {
    it('Should get the correct parameters for a simple GET', () => {
        const testURL = 'https://dkershner.com';

        const currentScript = document.createElement('script');
        currentScript.setAttribute('data-url', 'https://dkershner.com');

        const { url } = getParameters(currentScript);

        expect(url).toEqual(testURL);
    });

    it('Should get the correct parameters for a POST with the init object set as a string', () => {
        const testURL = 'https://dkershner.com';
        const testObject = { method: 'POST', data: { test: 123 } };

        const currentScript = document.createElement('script');
        currentScript.setAttribute('data-url', 'https://dkershner.com');
        currentScript.setAttribute('data-init', JSON.stringify(testObject));

        const { url, init } = getParameters(currentScript);

        expect(url).toEqual(testURL);
        expect(init).toEqual(testObject);
    });

    it('Should get the correct parameters for a POST with the init object set as script innerHTML', () => {
        const testURL = 'https://dkershner.com';
        const testObject = { method: 'POST', data: { test: 123 } };

        const jsonElement = document.createElement('script');
        jsonElement.type = 'application/json';
        jsonElement.innerHTML = JSON.stringify(testObject);
        document.body.insertAdjacentElement('afterbegin', jsonElement);
        const currentScript = document.createElement('script');
        currentScript.setAttribute('data-url', 'https://dkershner.com');
        currentScript.setAttribute('data-init', JSON.stringify(testObject));

        const { url, init } = getParameters(currentScript);

        expect(url).toEqual(testURL);
        expect(init).toEqual(testObject);
    });
});
