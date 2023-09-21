//blob 文件下载
function downloadBlob(response, name) {
    if (window.Blob && window.navigator.msSaveOrOpenBlob) {
        // let blobObject = new Blob(response);
        window.navigator.msSaveOrOpenBlob(response, encodeURI(name));
    } else {
        let url = window.URL.createObjectURL(response);
        let link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.setAttribute("download", name);
        document.body.appendChild(link);
        link.click();
        document.querySelector('body').removeChild(link)
    }
}

export default downloadBlob