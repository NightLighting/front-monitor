export default class Reporter {
    constructor(appId, url) {
        this.appId = appId;
        this.url = url;
    }
    report(records) {
        const queryString = `?appId=${encodeURIComponent(this.appId)}&ua=${encodeURIComponent(navigator.userAgent)}&records=${encodeURIComponent(JSON.stringify(records))}`;
        let img = new Image();
        img.onload = () => {
            img = null;
        };
        img.src = `${this.url}${queryString}`;
    }
}