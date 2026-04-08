window.addEventListener("load", () => {
    // Elementos do upload
    const fileInput = document.getElementById("fileInput");
    const uploadBtn = document.getElementById("uploadBtn");
    const galeria = document.getElementById("galeria");

    // Modal
    const modal = document.getElementById("modal-foto");
    const modalImg = modal.querySelector("img");
    const fechar = modal.querySelector(".fechar");

    // Fotos já existentes
    const fotosExistentes = [
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1775635198/images_oiqbua.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1775636478/pe6bspgpprcyyjyxxkvv.png",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1775635052/convite_q2kk52.jpg",
    ];

    // Mostrar fotos existentes
    fotosExistentes.forEach(url => mostrarFoto(url));

    function mostrarFoto(url) {
        const img = document.createElement("img");
        img.src = url;
        img.style.width = "200px";
        img.style.margin = "5px";
        galeria.appendChild(img);
    }

    // Upload
    uploadBtn.addEventListener("click", async () => {
        const file = fileInput.files[0];
        if(!file) return alert("Selecione uma foto!");

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "festaLe");

            const res = await fetch(`https://api.cloudinary.com/v1_1/dvpzenktl/upload`, {
                method: "POST",
                body: formData
            });

            const data = await res.json();
            mostrarFoto(data.secure_url);
            fileInput.value = ""; // limpa input
        } catch(err) {
            alert("Erro ao enviar foto!");
            console.error(err);
        }
    });

    // Modal
    galeria.addEventListener("click", e => {
        if(e.target.tagName === "IMG") {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
        }
    });

    fechar.addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", e => {
        if(e.target === modal) modal.style.display = "none";
    });
});