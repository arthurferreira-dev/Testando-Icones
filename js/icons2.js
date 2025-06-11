function Folder() {
    let folder = document.getElementById('folder')

    folder.src = '/icons/opened-folder.svg'
}
function UnFolder() {
    let folder = document.getElementById('folder')

    folder.src = '/icons/folder.svg'
}

// Resolvou um error de encontrar o arquivo opened-folder.svg e folder.svg