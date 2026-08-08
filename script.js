// Hero parallax: S4M / N0V split apart and fade out as you scroll; the background gif starts visible-but-blurred and sharpens.
const textTop = document.getElementById("text-top");
const textBottom = document.getElementById("text-bottom");
const heroImgContainer = document.getElementById("hero-img-container");
const heroHalos = document.getElementById("hero-halos");
const heroHeight = window.innerHeight;
const body = document.body;

function handleHeroScroll() {
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / (heroHeight * 0.6), 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

    if (textTop && textBottom) {
        const titleOpacity = Math.max(1 - progress * 1.3, 0);
        textTop.style.transform = `translateY(-${easedProgress * 40}vh)`;
        textBottom.style.transform = `translateY(${easedProgress * 40}vh)`;
        textTop.style.opacity = titleOpacity;
        textBottom.style.opacity = titleOpacity;
    }

    if (heroHalos) {
        heroHalos.style.opacity = Math.max(1 - progress * 1.3, 0);
    }

    if (heroImgContainer) {
        // Visible from the start (blurred), then sharpens and gains presence as you scroll
        const blurAmount = (1 - progress) * 24;
        heroImgContainer.style.opacity = 0.55 + progress * 0.35;
        heroImgContainer.style.transform = `scale(${1.05 - progress * 0.05})`;
        heroImgContainer.style.filter = `blur(${blurAmount}px)`;
    }
}

handleHeroScroll();
document.addEventListener("scroll", handleHeroScroll);

// Simple Scroll Spy & Intersection Observers
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Scroll Spy
    const observerOptions = {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const activeId = entry.target.id;

                if (activeId === "vault") {
                    body.classList.add("vault-active");
                } else {
                    body.classList.remove("vault-active");
                }

                navLinks.forEach((link) => {
                    const sectionTarget = link.getAttribute("data-section");
                    const spanIcon = link.querySelector(
                        ".material-symbols-outlined",
                    );
                    const isActive = sectionTarget === activeId;

                    link.className =
                        "nav-link relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-500 group" +
                        (isActive
                            ? " text-primary bg-white/10 scale-110"
                            : " text-on-surface-variant/40 hover:text-white hover:bg-white/5");

                    if (isActive) {
                        spanIcon.setAttribute("data-weight", "fill");
                        spanIcon.style = "font-variation-settings: 'FILL' 1;";
                    } else {
                        spanIcon.removeAttribute("data-weight");
                        spanIcon.style = "";
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        if (section.id) observer.observe(section);
    });

    loadGithubData();
});

// ── Live GitHub data: fetched from the VISITOR's browser, so it always
// reflects the current repos/gists and never hits a shared rate limit. ──
const GITHUB_USER = "s4mn0v";
const MAX_REPOS = 4;
const MAX_GISTS = 5;

function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
}

function timeAgo(isoDate) {
    const then = new Date(isoDate).getTime();
    const seconds = Math.max(Math.floor((Date.now() - then) / 1000), 0);
    const units = [
        ["year", 31536000],
        ["month", 2592000],
        ["week", 604800],
        ["day", 86400],
        ["hour", 3600],
        ["minute", 60],
    ];
    for (const [label, secs] of units) {
        const amount = Math.floor(seconds / secs);
        if (amount >= 1) return `${amount} ${label}${amount > 1 ? "s" : ""} ago`;
    }
    return "just now";
}

function renderRepoCard(repo) {
    const desc = repo.description || "No description provided.";
    const lang = repo.language || "Text";
    return `
    <a class="bg-[#161615] border border-[#302F2D] p-6 hover:border-vault-gold/50 transition-colors group block" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
        <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-vault-gold text-xl">folder_data</span>
                <h4 class="font-code-md text-code-md font-bold text-vault-gold group-hover:text-vault-text transition-colors">${escapeHtml(repo.name)}</h4>
            </div>
            <span class="font-label-sm text-label-sm text-vault-gold border border-vault-gold/50 px-2 py-1 rounded-sm">${repo.private ? "Private" : "Public"}</span>
        </div>
        <p class="font-code-md text-code-md text-[#C7C7C2] mb-6 leading-relaxed">${escapeHtml(desc)}</p>
        <div class="flex gap-6 items-center flex-wrap">
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-vault-gold"></div>
                <span class="font-label-sm text-label-sm text-[#C7C7C2]">${escapeHtml(lang)}</span>
            </div>
            <div class="flex items-center gap-2 font-label-sm text-label-sm text-[#C7C7C2]">
                <span class="material-symbols-outlined text-sm">star</span> ${repo.stargazers_count}
            </div>
            <div class="flex items-center gap-2 font-label-sm text-label-sm text-[#C7C7C2]">
                <span class="material-symbols-outlined text-sm">fork_right</span> ${repo.forks_count}
            </div>
        </div>
    </a>`;
}

function renderGistItem(gist) {
    const files = Object.values(gist.files || {});
    const first = files[0] || {};
    const fname = first.filename || "gist";
    const lang = first.language || "Text";
    return `
    <li class="border-b border-[#292826] last:border-b-0">
        <a class="flex flex-col py-4 px-2 -mx-2 hover:bg-[#1A1A19] transition-colors group cursor-pointer" href="${gist.html_url}" target="_blank" rel="noopener noreferrer">
            <div class="flex items-center gap-3 mb-1">
                <span class="material-symbols-outlined text-sm text-[#C7C7C2] group-hover:text-vault-gold">description</span>
                <h5 class="font-code-md text-code-md text-[#C7C7C2] group-hover:text-vault-gold transition-colors">${escapeHtml(fname)}</h5>
            </div>
            <p class="font-label-sm text-label-sm text-[#8A8A84] pl-7">${escapeHtml(lang)} • Updated ${timeAgo(gist.updated_at)}</p>
        </a>
    </li>`;
}

function renderError(message) {
    return `<p class="font-code-md text-code-md text-[#8A8A84]">${escapeHtml(message)}</p>`;
}

async function loadGithubData() {
    const reposEl = document.getElementById("vault-repos");
    const gistsEl = document.getElementById("vault-gists");

    if (reposEl) {
        try {
            const res = await fetch(
                `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
            );
            if (!res.ok) throw new Error("repos request failed");
            const repos = await res.json();
            const top = repos
                .filter((r) => !r.fork)
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, MAX_REPOS);
            reposEl.innerHTML = top.length
                ? top.map(renderRepoCard).join("")
                : renderError("No repositories found.");
        } catch (e) {
            reposEl.innerHTML = renderError(
                "Could not load repositories right now — GitHub may be rate-limiting this connection. Try refreshing in a bit.",
            );
        }
    }

    if (gistsEl) {
        try {
            const res = await fetch(
                `https://api.github.com/users/${GITHUB_USER}/gists?per_page=100`,
            );
            if (!res.ok) throw new Error("gists request failed");
            const gists = await res.json();
            const top = gists.slice(0, MAX_GISTS);
            gistsEl.innerHTML = top.length
                ? top.map(renderGistItem).join("")
                : `<li class="py-4">${renderError("No public gists found.")}</li>`;
        } catch (e) {
            gistsEl.innerHTML = `<li class="py-4">${renderError("Could not load gists right now — try refreshing in a bit.")}</li>`;
        }
    }
}
