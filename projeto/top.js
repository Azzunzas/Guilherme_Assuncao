function voltar_aotopo() {
    const TOPO = document.getElementById("top");

    TOPO.addEventListener("click", () => {
        document.body.scrollIntoView({
            behavior: "smooth"
        });
    });

}

voltar_aotopo();