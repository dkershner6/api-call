const getCurrentScript = (): HTMLScriptElement => {
    if (!document.currentScript) {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    }
    return document.currentScript as HTMLScriptElement;
};

export default getCurrentScript;
