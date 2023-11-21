document.querySelectorAll("nav ul a").forEach(link => 
{
    link.addEventListener("click", evento => 
    {
        evento.preventDefault();
        const href = link.getAttribute("href");
        const alvo = document.querySelector(href);
        
        if (alvo)
        {
            alvo.scrollIntoView(
            {
                behavior: "smooth"
            });
        }
    });
});

const menu = document.getElementById("menu");
const limite = 100;

window.addEventListener("scroll", () =>
{
    if (window.scrollY > limite)
    {
        menu.classList.add("shrink");
    }
    else
    {
        menu.classList.remove("shrink");
    }
});

// top
const TOPO = document.getElementById("top");

TOPO.addEventListener("click", () => {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
});
