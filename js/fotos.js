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
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776127004/h0cdfv0zojdxtecjfhmi.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776127030/zkzeggpzmbuhscvyiakf.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776127049/q652cke7snf5gib9ojd8.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776127064/qdhnekpfr9flfwtpqpio.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776127070/bafm8vtbyooahrbh0rsu.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776130777/ngxjdkxko2nuqyxr6v9q.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776135225/hp363r8t3hcwsk0hbvvx.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776135269/vl6wodhzq6loigblv4qt.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776135279/w0qtnzriuyym2p7kzojn.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776135413/rn0hb2migywgsucjpuu2.jpg",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776135435/qfjl6quadcsqzfzuvohv.mov",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137353/IMG-20260413-WA0209_mn1kks.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137353/IMG-20260413-WA0207_s8rvwk.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137353/IMG-20260413-WA0210_g1lj7h.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137354/IMG-20260413-WA0204_gjsit5.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137354/IMG-20260413-WA0203_amuxs2.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137360/IMG-20260413-WA0202_dyblsx.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137360/IMG-20260413-WA0201_atffvh.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137361/IMG-20260413-WA0193_bn1hh7.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137357/IMG-20260413-WA0192_zxalom.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137424/IMG-20260413-WA0132_lcj14u.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137425/IMG-20260413-WA0131_ygcnj1.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137424/IMG-20260413-WA0130_wmac8t.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137426/IMG-20260413-WA0128_itlcnv.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137426/IMG-20260413-WA0129_yuubtn.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137427/IMG-20260413-WA0125_cckktv.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137429/IMG-20260413-WA0118_zk96r5.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137430/IMG-20260413-WA0117_p4g1fc.jpg",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139250/VID-20260413-WA0206_zxuw97.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139265/VID-20260413-WA0214_thf6ze.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139273/VID-20260413-WA0216_ybm9du.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139279/VID-20260413-WA0172_mz20xf.mp4",
        //Declarações
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123127/dpolluv2zrzslv2scpum.mp4",
        //Just Dance
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137353/IMG-20260413-WA0208_lmtlbk.jpg",  
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137429/IMG-20260413-WA0120_czgvxi.jpg",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139282/VID-20260413-WA0171_vngmmc.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139286/VID-20260413-WA0173_m9p7bi.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139308/VID-20260414-WA0002_y9qwwr.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139312/VID-20260414-WA0001_mir40s.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139282/VID-20260413-WA0170_rwb31f.mp4",
         //Karaoke
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123206/pqnspqmygfa7yt1k9y1j.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123038/dce4oejnrht3fvtfrvjj.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123003/ppvtekqrtvovi1lnc69n.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776135398/mfyxgzqfyeemddmlnmq5.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139254/VID-20260413-WA0215_mwgkuy.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139268/VID-20260413-WA0188_urfykt.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139275/VID-20260413-WA0183_dufyqf.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139278/VID-20260413-WA0176_tyeqxl.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139279/VID-20260413-WA0178_kbw4ab.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139280/VID-20260413-WA0179_vwjjig.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139282/VID-20260413-WA0168_y67lj7.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139282/VID-20260413-WA0167_b7ebm4.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139282/VID-20260413-WA0167_b7ebm4.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139283/VID-20260413-WA0165_jhdlwc.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139287/VID-20260413-WA0177_d9t7mp.mp4",
        //Awards
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139282/VID-20260413-WA0169_fdh2sn.mp4",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137356/IMG-20260413-WA0198_pu6d4e.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137356/IMG-20260413-WA0196_nyoikr.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137357/IMG-20260413-WA0194_dfnwdz.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137357/IMG-20260413-WA0190_ogmxoc.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137358/IMG-20260413-WA0189_j0pypk.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137358/IMG-20260413-WA0191_z0rpla.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137359/IMG-20260413-WA0197_rxflzs.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137359/IMG-20260413-WA0195_wnurvd.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137361/IMG-20260413-WA0187_gbdgml.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137362/IMG-20260413-WA0184_yuqfhj.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137362/IMG-20260413-WA0180_jeag4e.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137363/IMG-20260413-WA0166_e3nnoj.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137363/IMG-20260413-WA0175_ubrt2b.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137364/IMG-20260413-WA0164_ysefbv.jpg",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139299/VID-20260413-WA0185_mjvhdt.mp4",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137364/IMG-20260413-WA0159_wgqteh.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137365/IMG-20260413-WA0160_z7xzf4.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137365/IMG-20260413-WA0161_mjmwjp.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137365/IMG-20260413-WA0162_ywutsr.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137366/IMG-20260413-WA0158_dorf8u.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137366/IMG-20260413-WA0157_cazvwa.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137415/IMG-20260413-WA0154_ovqz7d.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137416/IMG-20260413-WA0155_kgu9h4.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137366/IMG-20260413-WA0153_zfldyf.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137416/IMG-20260413-WA0152_id6ion.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137416/IMG-20260413-WA0151_m5ipnz.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137417/IMG-20260413-WA0149_vujcme.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137418/IMG-20260413-WA0150_teyuwo.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137419/IMG-20260413-WA0148_szwhhj.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137419/IMG-20260413-WA0147_dr9wqm.jpg",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139275/VID-20260413-WA0181_fch14o.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139281/VID-20260413-WA0174_oigtd3.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139282/VID-20260413-WA0182_wkgsji.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139274/VID-20260413-WA0186_apfnmc.mp4",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776135408/fe9jnqzf6nekmgjk07ht.mp4",  
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776123314/mapegh4ph9lcdebbirzx.jpg",
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776139303/VID-20260414-WA0000_sognnk.mp4",
        //Decoração
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137423/IMG-20260413-WA0134_i4urov.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137424/IMG-20260413-WA0133_g1icbf.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137425/IMG-20260413-WA0126_jx0owg.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137425/IMG-20260413-WA0127_a7iaoy.jpg",  
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137355/IMG-20260413-WA0200_li175h.jpg",  
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137355/IMG-20260413-WA0199_byyoua.jpg",  
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137354/IMG-20260413-WA0205_yzjlo8.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776123384/nuev7inzhp6tpypsnu8p.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776123372/t6e0wtbsd9tcttc9btya.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137427/IMG-20260413-WA0121_vcgrm2.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137427/IMG-20260413-WA0122_lquffn.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137428/IMG-20260413-WA0119_gzeqre.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137426/IMG-20260413-WA0124_dav85d.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137430/IMG-20260413-WA0116_qpqk1b.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137430/IMG-20260413-WA0115_mxezyl.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137431/IMG-20260413-WA0114_tjfrxk.jpg",
        //Parabéns
      "https://res.cloudinary.com/dvpzenktl/video/upload/v1776123280/w6pbnat5gy5p6jq3rvvk.mp4",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137418/IMG-20260413-WA0146_s7nh1u.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137419/IMG-20260413-WA0145_athl26.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137420/IMG-20260413-WA0141_nlmj0u.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137420/IMG-20260413-WA0143_eodbte.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137420/IMG-20260413-WA0142_rvwbzr.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137421/IMG-20260413-WA0144_fxmqtm.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137421/IMG-20260413-WA0138_uamii9.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137422/IMG-20260413-WA0140_kseyos.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137422/IMG-20260413-WA0136_gfx0xz.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137422/IMG-20260413-WA0139_r5zo21.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137422/IMG-20260413-WA0137_oixn96.jpg",
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776137423/IMG-20260413-WA0135_knleev.jpg",
        //Foto com Aniversariante
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776123398/wgyeyhfqd4lnnnvieiba.jpg",  
      "https://res.cloudinary.com/dvpzenktl/image/upload/v1776135258/smny8fjawzzwmpgnix9f.jpg"
    ];

    // Mostrar fotos existentes
    fotosExistentes.forEach(url => mostrarFoto(url));

    function mostrarFoto(url) {
        
        if(url.endsWith(".mp4")) {

            const video = document.createElement("video");
            video.src = url;

            video.controls = true;
            video.preload = "metadata";
            
            video.style.width = "200px";
            video.style.margin = "5px";

            galeria.appendChild(video);
            
        } else {

        const img = document.createElement("img");
        img.src = url;
        img.style.width = "200px";
        img.style.margin = "5px";
        galeria.appendChild(img);
        }
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