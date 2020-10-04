const getParameters = (
    currentScript: HTMLScriptElement
): { url: string; init?: RequestInit } => {
    const url = currentScript.getAttribute('data-url');

    const initString = currentScript.getAttribute('data-init');
    const initElementId = currentScript.getAttribute('data-init-element-id');

    if (initString) {
        return { url, init: getInitFromString(initString) };
    }
    if (initElementId) {
        return { url, init: getInitFromElement(initElementId) };
    }
    return { url };
};

const getInitFromString = (initString: string): RequestInit => {
    try {
        return JSON.parse(initString);
    } catch (error) {
        console.error('Not a valid init object to parse', initString, error);
    }
};

const getInitFromElement = (initElementId: string) => {
    const initString = document.getElementById(initElementId).innerHTML;
    return getInitFromString(initString);
};

export default getParameters;
