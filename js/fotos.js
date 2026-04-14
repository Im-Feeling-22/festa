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
        // Resenha & Jogos
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776123663/ccfbmx13gwyrl6aa6wqf.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776123285/mlyz4kmaqn494bjjcpb6.jpg",  
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123134/tjayuuceexyxtl5hotom.mp4",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776122917/t7qcpz2cy7txfcpysdis.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776122907/zhuizwstdl3qxokwnif3.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776122895/aqxk33vtnduihpw55a2z.jpg",
        //Declarações
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123127/dpolluv2zrzslv2scpum.mp4",
        //Karaoke
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123206/pqnspqmygfa7yt1k9y1j.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123038/dce4oejnrht3fvtfrvjj.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123003/ppvtekqrtvovi1lnc69n.mp4",
        //Awards  
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776123314/mapegh4ph9lcdebbirzx.jpg",
        //Decoração
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776123384/nuev7inzhp6tpypsnu8p.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776123372/t6e0wtbsd9tcttc9btya.jpg",
        //Parabéns
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123280/w6pbnat5gy5p6jq3rvvk.mp4",
        //Foto com Aniversariante
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776123398/wgyeyhfqd4lnnnvieiba.jpg"  
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