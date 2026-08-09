<template>
    <div>
        <svg
            aria-hidden="true"
            class="inline-defs-container"
            style="position: absolute; width: 0; height: 0; overflow: hidden"
        ></svg>
        <!-- SideNavBar (Universe Navigator): bottom-centered glass dock -->
        <nav
            class="fixed left-1/2 -translate-x-1/2 bottom-4 md:bottom-8 z-50 flex flex-row items-center gap-1 md:gap-2 bg-black/40 backdrop-blur-none md:backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 md:px-3 md:py-3 shadow-2xl"
            id="sideNav"
        >
            <!-- Identity Tab -->
            <a
                :class="navLinkClass('identity')"
                data-section="identity"
                href="#identity"
            >
                <UIcon
                    :name="navIconName('identity')"
                    class="text-[20px] md:text-[22px]"
                />
                <span
                    class="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-label-sm text-label-sm whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded pointer-events-none"
                    >Identity</span
                >
            </a>
            <!-- Vault Tab -->
            <a
                :class="navLinkClass('vault')"
                data-section="vault"
                href="#vault"
            >
                <UIcon
                    :name="navIconName('vault')"
                    class="text-[20px] md:text-[22px]"
                />
                <span
                    class="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-label-sm text-label-sm whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded pointer-events-none"
                    >Vault</span
                >
            </a>
            <!-- Studio Tab -->
            <a
                :class="navLinkClass('studio')"
                data-section="studio"
                href="#studio"
            >
                <UIcon
                    :name="navIconName('studio')"
                    class="text-[20px] md:text-[22px]"
                />
                <span
                    class="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-label-sm text-label-sm whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded pointer-events-none"
                    >Studio</span
                >
            </a>
        </nav>
        <!-- Universe 1: Identity (fixed / pinned hero) -->
        <section id="identity">
            <!-- Fixed Hero Header -->
            <header class="hero-fixed-header">
                <!-- Atmospheric Halos (monochrome) -->
                <div class="transition-opacity duration-300" id="hero-halos">
                    <div
                        class="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none"
                    ></div>
                    <div
                        class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"
                    ></div>
                </div>
                <!-- Background GIF: full-bleed, covers the entire hero, dimmed so it reads as texture rather than a picture -->
                <div
                    class="absolute inset-0 opacity-0 transition-all duration-700 ease-out scale-95 blur-shift overflow-hidden"
                    id="hero-img-container"
                >
                    <img
                        alt="Hero Background"
                        class="absolute inset-0 w-full h-full object-cover grayscale"
                        :src="logoAnimation"
                    />
                    <div class="absolute inset-0 bg-identity-bg/70"></div>
                </div>
                <!-- Split Wordmark: opens apart and fades out as you scroll -->
                <div
                    class="relative z-20 flex flex-col items-center justify-center h-full w-full"
                    id="hero-title-group"
                >
                    <h1
                        class="font-display-xl font-extrabold text-[96px] md:text-[200px] text-identity-text leading-none tracking-tighter text-glow transition-transform duration-300 ease-out"
                        id="text-top"
                    >
                        S4M
                    </h1>
                    <h1
                        class="font-display-xl font-extrabold text-[96px] md:text-[200px] text-on-surface-variant leading-none tracking-tighter text-glow transition-transform duration-300 ease-out mt-2.5 md:mt-10"
                        id="text-bottom"
                    >
                        N0V
                    </h1>
                </div>
            </header>
        </section>
        <!-- Universe 2: Engineering Vault -->
        <section
            class="min-h-screen w-full h-full z-20 bg-clip-padding backdrop-filter backdrop-blur-none md:backdrop-blur-xl bg-vault-bg/70 border-y border-white/10 text-vault-text flex flex-col relative px-margin-mobile md:px-margin-desktop py-24"
            id="vault"
        >
            <!-- Glass transition: frosted blur fading to nothing, so the hero melts into the Vault instead of cutting -->
            <div
                class="absolute top-0 inset-x-0 h-40 md:h-56 z-30 pointer-events-none glass-transition"
            ></div>
            <div
                class="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 relative"
            >
                <!-- Decorative classical elements -->
                <div
                    class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5"
                    style="
                        background-image: repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 10px,
                            #b5b5b0 10px,
                            #b5b5b0 11px
                        );
                    "
                ></div>
                <!-- Vault Header -->
                <div
                    class="lg:col-span-12 mb-16 text-center border-b border-vault-gold/30 pb-12"
                >
                    <div class="flex justify-center items-center">
                        <UIcon
                            name="i-material-symbols-code-rounded"
                            class="text-vault-gold text-5xl mb-6 block lg:size-20"
                        />
                    </div>
                    <h2
                        class="font-display-lg text-display-lg-mobile md:text-display-lg text-vault-gold tracking-tight uppercase"
                        style="
                            font-family: &quot;JetBrains Mono&quot;, monospace;
                        "
                    >
                        I'm a Software Engineer
                    </h2>
                    <p
                        class="font-code-md text-code-md text-[#C7C7C2] max-w-2xl mx-auto mt-6"
                    >
                        Specializes in front-end and back-end development.
                        Focuses on AI-powered management systems, micro-SaaS
                        platforms, and e-commerce solutions deployed into
                        production—automation, performance, and real-world code.
                    </p>
                </div>
                <!-- Repositories (Manuscripts) -->
                <div class="lg:col-span-8 flex flex-col gap-8">
                    <h3
                        class="font-label-sm text-label-sm uppercase text-ivory mb-4 border-b border-vault-gold/20 pb-2"
                    >
                        Active Constructs
                    </h3>
                    <div class="flex flex-col gap-8" id="vault-repos">
                        <p
                            v-if="reposLoading"
                            class="font-code-md text-code-md text-vault-golang"
                        >
                            Loading repositories…
                        </p>
                        <p
                            v-else-if="reposError"
                            class="font-code-md text-code-md text-vault-golang"
                        >
                            {{ reposError }}
                        </p>
                        <p
                            v-else-if="repos.length === 0"
                            class="font-code-md text-code-md text-vault-golang"
                        >
                            No repositories found.
                        </p>
                        <a
                            v-for="repo in repos"
                            v-else
                            :key="repo.name"
                            class="bg-[#161615] border border-[#302F2D] p-6 hover:border-vault-gold/50 transition-colors group block"
                            :href="repo.html_url"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div class="flex justify-between items-start mb-4">
                                <div class="flex items-center gap-3">
                                    <UIcon
                                        name="i-material-symbols-folder-data-outline-rounded"
                                        class="text-vault-gold text-xl"
                                    />
                                    <h4
                                        class="font-code-md text-code-md font-bold text-vault-gold group-hover:text-vault-text transition-colors"
                                    >
                                        {{ repo.name }}
                                    </h4>
                                </div>
                                <span
                                    class="font-label-sm text-label-sm text-vault-gold border border-vault-gold/50 px-2 py-1 rounded-sm"
                                    >{{
                                        repo.private ? "Private" : "Public"
                                    }}</span
                                >
                            </div>
                            <p
                                class="font-code-md text-code-md text-[#C7C7C2] mb-6 leading-relaxed"
                            >
                                {{
                                    repo.description ||
                                    "No description provided."
                                }}
                            </p>
                            <div class="flex gap-6 items-center flex-wrap">
                                <div class="flex items-center gap-2">
                                    <div
                                        class="w-3 h-3 rounded-full bg-vault-gold"
                                    ></div>
                                    <span
                                        class="font-label-sm text-label-sm text-[#C7C7C2]"
                                        >{{ repo.language || "Text" }}</span
                                    >
                                </div>
                                <div
                                    class="flex items-center gap-2 font-label-sm text-label-sm text-[#C7C7C2]"
                                >
                                    <UIcon
                                        name="i-material-symbols-star-outline-rounded"
                                        class="text-sm"
                                    />
                                    {{ repo.stargazers_count }}
                                </div>
                                <div
                                    class="flex items-center gap-2 font-label-sm text-label-sm text-[#C7C7C2]"
                                >
                                    <UIcon
                                        name="i-material-symbols-fork-right-rounded"
                                        class="text-sm"
                                    />
                                    {{ repo.forks_count }}
                                </div>
                            </div>
                        </a>
                    </div>
                    <a
                        class="self-start font-label-sm text-label-sm uppercase tracking-widest text-vault-gold hover:text-vault-text transition-colors flex items-center gap-2 mt-2"
                        href="https://github.com/s4mn0v?tab=repositories"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        See More
                        <UIcon
                            name="i-material-symbols-arrow-forward-rounded"
                            class="text-base"
                        />
                    </a>
                </div>
                <!-- Gists / Fragments (Sidebar) -->
                <div class="lg:col-span-4 flex flex-col gap-8">
                    <h3
                        class="font-label-sm text-label-sm uppercase text-ivory mb-4 border-b border-vault-gold/20 pb-2"
                    >
                        Fragments
                    </h3>
                    <div
                        class="bg-[#131312] border border-[#A6A6A0]/30 vault-inner-shadow p-6"
                    >
                        <ul class="flex flex-col" id="vault-gists">
                            <li v-if="gistsLoading" class="py-4">
                                <p
                                    class="font-code-md text-code-md text-vault-golang"
                                >
                                    Loading gists…
                                </p>
                            </li>
                            <li v-else-if="gistsError" class="py-4">
                                <p
                                    class="font-code-md text-code-md text-vault-golang"
                                >
                                    {{ gistsError }}
                                </p>
                            </li>
                            <li v-else-if="gists.length === 0" class="py-4">
                                <p
                                    class="font-code-md text-code-md text-vault-golang"
                                >
                                    No public gists found.
                                </p>
                            </li>
                            <li
                                v-for="gist in gists"
                                v-else
                                :key="gist.html_url"
                                class="border-b border-[#292826] last:border-b-0"
                            >
                                <a
                                    class="flex flex-col py-4 px-2 -mx-2 hover:bg-[#1A1A19] transition-colors group cursor-pointer"
                                    :href="gist.html_url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div class="flex items-center gap-3 mb-1">
                                        <UIcon
                                            name="i-material-symbols-description-outline-rounded"
                                            class="text-sm text-[#C7C7C2] group-hover:text-vault-gold"
                                        />
                                        <h5
                                            class="font-code-md text-code-md text-[#C7C7C2] group-hover:text-vault-gold transition-colors"
                                        >
                                            {{ gistFileName(gist) }}
                                        </h5>
                                    </div>
                                    <p
                                        class="font-label-sm text-label-sm text-vault-golang pl-7"
                                    >
                                        {{ gistFileLanguage(gist) }} • Updated
                                        {{ timeAgo(gist.updated_at) }}
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- Artifact Action -->
                    <a
                        class="w-full bg-transparent border border-vault-gold text-vault-gold font-code-md text-code-md py-4 hover:bg-vault-gold hover:text-vault-bg transition-colors flex items-center justify-center gap-2"
                        href="https://gist.github.com/s4mn0v"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <UIcon
                            name="i-material-symbols-code-rounded"
                            class="text-lg"
                        />
                        <span>View All Gists</span>
                    </a>
                </div>
            </div>
            <!-- Internal spacer: black breathing room at the end of this section (not a separate element between sections) -->
            <div
                class="w-screen relative left-1/2 -translate-x-1/2 h-16 md:h-28 mt-16"
                aria-hidden="true"
            ></div>
        </section>
        <section
            class="w-full h-full z-20 bg-clip-padding backdrop-filter backdrop-blur-none md:backdrop-blur-xl bg-studio-bg/70 text-studio-text relative px-margin-mobile md:px-margin-desktop py-32 overflow-hidden"
            id="studio"
        >
            <!-- Glass transition: same soft frosted seam as Identity → Vault, now for Vault → Studio -->
            <div
                class="absolute top-0 inset-x-0 h-40 md:h-56 z-30 pointer-events-none glass-transition"
            ></div>
            <div
                class="absolute -top-20 -left-20 w-125 h-125 bg-studio-accent/10 rounded-full blur-[130px] pointer-events-none z-0"
            ></div>
            <div
                class="absolute top-1/3 right-0 w-112.5 h-112.5 bg-studio-accent-2/10 rounded-full blur-[130px] pointer-events-none z-0"
            ></div>
            <div
                class="absolute bottom-0 left-1/4 w-100 h-100 bg-studio-accent-3/10 rounded-full blur-[130px] pointer-events-none z-0"
            ></div>
            <div class="max-w-container-max mx-auto w-full relative z-10">
                <div class="mb-20 max-w-xl">
                    <UIcon
                        name="i-material-symbols-palette-outline"
                        class="text-vault-gold text-3xl mb-4 block"
                    />
                    <h2
                        class="font-display-lg text-display-lg-mobile md:text-display-lg text-studio-text tracking-tight uppercase leading-none"
                        style="
                            font-family: &quot;JetBrains Mono&quot;, monospace;
                        "
                    >
                        <span class="block ml-8">Designing</span>
                        <span
                            class="block bg-linear-to-r from-studio-accent via-studio-accent-2 to-studio-accent-3 bg-clip-text text-transparent"
                            >The Future</span
                        >
                    </h2>
                    <p
                        class="font-code-md text-code-md text-[#C7C7C2] leading-relaxed mt-6 max-w-sm"
                    >
                        Design of scalable interfaces for dynamic and static
                        websites — more than 52 websites delivered to clients,
                        with load times improved by up to 89%.
                    </p>
                    <button
                        class="bg-transparent border border-vault-gold text-vault-gold hover:bg-vault-gold hover:text-vault-bg font-label-sm text-label-sm px-8 py-4 w-fit transition-colors uppercase tracking-wider mt-6"
                    >
                        View All Projects
                    </button>
                </div>
                <!-- Mockup wall: organized bento grid, no dead space, every piece properly framed -->
                <div class="flex flex-col gap-6">
                    <!-- Top row: the two flagship pieces -->
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <!-- E-Commerce -->
                        <div
                            class="lg:col-span-7 bg-[#161615] border border-[#302F2D] shadow-xl border-t-4 border-t-studio-accent overflow-hidden hover:border-vault-gold/50 transition-colors duration-300"
                        >
                            <div
                                class="p-6 border-b border-[#302F2D] flex justify-between items-center"
                            >
                                <div>
                                    <h3
                                        class="font-code-md text-code-md font-bold text-studio-text uppercase tracking-wide"
                                    >
                                        E-Commerce Platform
                                    </h3>
                                    <span
                                        class="font-label-sm text-label-sm text-studio-accent uppercase mt-2 block tracking-widest"
                                        >Web Application</span
                                    >
                                </div>
                                <span
                                    class="font-label-sm text-label-sm text-[#C7C7C2] border border-[#302F2D] px-2 py-1 rounded-sm"
                                    >Web</span
                                >
                            </div>
                            <div
                                class="aspect-4/3 bg-[#101010] bg-cover bg-top grayscale contrast-110 brightness-90"
                                style="
                                    background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDFexp7AWJlr8lx63gQfxe5DwLv8ONb0pcNTn9LY-C6003LTUmh4wCxB9gyCIXaicbgt7RoNQ0kZBTncooA4ienEKLMASIOGnJ9aFRYsKBq2I0v98jrKlC-KSDigemvbpFRYMzzlPM_DwD4BxivhB_3_818wa0e7JxnNCtL_RZO5lOIlN9ChkYd5hjwQJveYbAxWy5QgjaNOufOWwTAUrl1zrCLNmj7Z-DdLKUzuVxaxyqGVR53mDk&quot;);
                                "
                            ></div>
                        </div>
                        <!-- Fintech App: now properly framed inside its own card, no floating orphan image -->
                        <div
                            class="lg:col-span-5 bg-[#101010] border border-[#302F2D] shadow-xl border-t-4 border-t-studio-accent-2 overflow-hidden hover:border-vault-gold/50 transition-colors duration-300 flex flex-col"
                        >
                            <div
                                class="p-6 border-b border-[#302F2D] flex justify-between items-center"
                            >
                                <div>
                                    <h3
                                        class="font-code-md text-code-md font-bold text-studio-text uppercase tracking-wide"
                                    >
                                        Fintech App
                                    </h3>
                                    <span
                                        class="font-label-sm text-label-sm text-studio-accent-2 uppercase mt-2 block tracking-widest"
                                        >iOS Native</span
                                    >
                                </div>
                                <span
                                    class="font-label-sm text-label-sm text-[#C7C7C2] border border-[#302F2D] px-2 py-1 rounded-sm"
                                    >Mobile</span
                                >
                            </div>
                            <div
                                class="grow flex items-center justify-center p-8 bg-vault-bg"
                            >
                                <div
                                    class="w-full max-w-55 aspect-9/16 bg-cover bg-top grayscale contrast-110 brightness-90 shadow-2xl"
                                    style="
                                        background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBp1F7kPsb_iwSkXVFpnxGqkJEjddYYmWQy_GFneVHRRtL5yf9JAzifCPNgtU_BpDoYgAZjs8u3LFMRi8vSgM7B5Ni_glQoTaN3cfFJn8uICcrKzHHuMcYvk2u568Koc5i_-Z-VhHWGUeywPQ6xm6oQ3_0KDLJZqdz4zDzgYXB-67te_DGN00tNi7xpuU9kqeGCjCIgmUITOz4G0TL1odPS_U_F0PKTIuT2zgSHh7nWE1sEMgnOSxw&quot;);
                                    "
                                ></div>
                            </div>
                        </div>
                    </div>
                    <!-- Bottom row: supporting pieces -->
                    <div
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        <!-- Brand Identity: redesigned with real content instead of an empty box -->
                        <div
                            class="bg-[#161615] border border-[#302F2D] shadow-lg overflow-hidden hover:border-vault-gold/50 transition-colors duration-300 flex flex-col"
                        >
                            <div class="p-5 border-b border-[#302F2D]">
                                <h3
                                    class="font-code-md text-code-md font-bold text-studio-text uppercase tracking-wide text-[15px]"
                                >
                                    Brand Identity
                                </h3>
                            </div>
                            <div
                                class="grow flex flex-col justify-center gap-6 p-6 bg-[#101010]"
                            >
                                <div class="flex gap-2">
                                    <div
                                        class="w-8 h-8 rounded-full bg-identity-text"
                                    ></div>
                                    <div
                                        class="w-8 h-8 rounded-full bg-[#C7C7C2]"
                                    ></div>
                                    <div
                                        class="w-8 h-8 rounded-full bg-vault-golang"
                                    ></div>
                                    <div
                                        class="w-8 h-8 rounded-full bg-[#3F3F3F]"
                                    ></div>
                                    <div
                                        class="w-8 h-8 rounded-full bg-[#101010] border border-[#302F2D]"
                                    ></div>
                                </div>
                                <span
                                    class="font-display-xl text-[28px] leading-none tracking-tighter text-studio-text"
                                    >S4M<span class="text-studio-accent-3"
                                        >N0V</span
                                    ></span
                                >
                            </div>
                        </div>
                        <!-- E-Commerce detail crop -->
                        <div
                            class="bg-[#161615] border border-[#302F2D] shadow-lg overflow-hidden hover:border-vault-gold/50 transition-colors duration-300 flex flex-col"
                        >
                            <div
                                class="aspect-4/3 bg-cover grayscale contrast-110 brightness-90"
                                style="
                                    background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDFexp7AWJlr8lx63gQfxe5DwLv8ONb0pcNTn9LY-C6003LTUmh4wCxB9gyCIXaicbgt7RoNQ0kZBTncooA4ienEKLMASIOGnJ9aFRYsKBq2I0v98jrKlC-KSDigemvbpFRYMzzlPM_DwD4BxivhB_3_818wa0e7JxnNCtL_RZO5lOIlN9ChkYd5hjwQJveYbAxWy5QgjaNOufOWwTAUrl1zrCLNmj7Z-DdLKUzuVxaxyqGVR53mDk&quot;);
                                    background-position: 30% 70%;
                                "
                            ></div>
                            <div class="p-3 border-t border-[#302F2D]">
                                <span
                                    class="font-label-sm text-label-sm text-studio-accent uppercase"
                                    >Detail</span
                                >
                            </div>
                        </div>
                        <!-- Topic tags -->
                        <div
                            class="sm:col-span-2 flex flex-wrap items-center gap-3 p-6 bg-[#161615] border border-[#302F2D]"
                        >
                            <span
                                class="font-code-md text-label-sm uppercase text-[#C7C7C2] border border-vault-gold/20 px-4 py-2 rounded-full"
                                >UI/UX</span
                            >
                            <span
                                class="font-code-md text-label-sm uppercase text-[#C7C7C2] border border-vault-gold/20 px-4 py-2 rounded-full"
                                >Branding</span
                            >
                            <span
                                class="font-code-md text-label-sm uppercase text-[#C7C7C2] border border-vault-gold/20 px-4 py-2 rounded-full"
                                >Web</span
                            >
                            <span
                                class="font-code-md text-label-sm uppercase text-[#C7C7C2] border border-vault-gold/20 px-4 py-2 rounded-full"
                                >E-Commerce</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import logoAnimation from "~/assets/gif/logo-animation.gif";

interface GithubRepo {
    name: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    fork: boolean;
    private: boolean;
    html_url: string;
}

interface GithubGistFile {
    filename: string;
    language: string | null;
}

interface GithubGist {
    html_url: string;
    updated_at: string;
    files: Record<string, GithubGistFile>;
}

const GITHUB_USER = "s4mn0v";
const MAX_REPOS = 4;
const MAX_GISTS = 5;

const activeSection = ref("identity");

const repos = ref<GithubRepo[]>([]);
const reposLoading = ref(true);
const reposError = ref<string | null>(null);

const gists = ref<GithubGist[]>([]);
const gistsLoading = ref(true);
const gistsError = ref<string | null>(null);

const NAV_ICONS: Record<string, { filled: string; outline: string }> = {
    identity: {
        filled: "i-material-symbols-person-rounded",
        outline: "i-material-symbols-person-outline-rounded",
    },
    vault: {
        filled: "i-material-symbols-terminal-rounded",
        outline: "i-material-symbols-terminal-rounded",
    },
    studio: {
        filled: "i-material-symbols-palette",
        outline: "i-material-symbols-palette-outline",
    },
};

function navIconName(section: string): string {
    const icons = NAV_ICONS[section];
    return activeSection.value === section ? icons.filled : icons.outline;
}

function navLinkClass(section: string): string {
    const base =
        "nav-link relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-500 group";
    return activeSection.value === section
        ? `${base} text-primary bg-white/10 scale-110`
        : `${base} text-on-surface-variant/40 hover:text-white hover:bg-white/5`;
}

function gistFileName(gist: GithubGist): string {
    const files = Object.values(gist.files || {});
    return files[0]?.filename || "gist";
}

function gistFileLanguage(gist: GithubGist): string {
    const files = Object.values(gist.files || {});
    return files[0]?.language || "Text";
}

function timeAgo(isoDate: string): string {
    const then = new Date(isoDate).getTime();
    const seconds = Math.max(Math.floor((Date.now() - then) / 1000), 0);
    const units: [string, number][] = [
        ["year", 31536000],
        ["month", 2592000],
        ["week", 604800],
        ["day", 86400],
        ["hour", 3600],
        ["minute", 60],
    ];
    for (const [label, secs] of units) {
        const amount = Math.floor(seconds / secs);
        if (amount >= 1)
            return `${amount} ${label}${amount > 1 ? "s" : ""} ago`;
    }
    return "just now";
}

async function loadGithubData(): Promise<void> {
    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
        );
        if (!res.ok) throw new Error("repos request failed");
        const data: GithubRepo[] = await res.json();
        repos.value = data
            .filter((r) => !r.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, MAX_REPOS);
    } catch (e) {
        reposError.value =
            "Could not load repositories right now — GitHub may be rate-limiting this connection. Try refreshing in a bit.";
    } finally {
        reposLoading.value = false;
    }

    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USER}/gists?per_page=100`,
        );
        if (!res.ok) throw new Error("gists request failed");
        const data: GithubGist[] = await res.json();
        gists.value = data.slice(0, MAX_GISTS);
    } catch (e) {
        gistsError.value =
            "Could not load gists right now — try refreshing in a bit.";
    } finally {
        gistsLoading.value = false;
    }
}

const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

let cleanupHero: () => void = () => {};

onMounted(() => {
    const textTop = document.getElementById("text-top");
    const textBottom = document.getElementById("text-bottom");
    const heroImgContainer = document.getElementById("hero-img-container");
    const heroHalos = document.getElementById("hero-halos");
    const body = document.body;

    let heroHeight = window.visualViewport?.height ?? window.innerHeight;
    const updateHeroHeight = () => {
        heroHeight = window.visualViewport?.height ?? window.innerHeight;
    };

    const handleHeroScroll = () => {
        const scrollY = window.scrollY;
        const progress = Math.min(scrollY / (heroHeight * 0.6), 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        if (textTop && textBottom) {
            const titleOpacity = Math.max(1 - progress * 1.3, 0);
            textTop.style.transform = `translateY(-${easedProgress * 40}vh)`;
            textBottom.style.transform = `translateY(${easedProgress * 40}vh)`;
            textTop.style.opacity = String(titleOpacity);
            textBottom.style.opacity = String(titleOpacity);
        }

        if (heroHalos) {
            heroHalos.style.opacity = String(Math.max(1 - progress * 1.3, 0));
        }

        if (heroImgContainer) {
            const blurAmount = (1 - progress) * 24;
            heroImgContainer.style.opacity = String(0.55 + progress * 0.35);
            heroImgContainer.style.transform = `scale(${1.05 - progress * 0.05})`;
            heroImgContainer.style.filter = `blur(${blurAmount}px)`;
        }
    };

    const showHeroSettled = () => {
        if (textTop && textBottom) {
            textTop.style.transform = "";
            textBottom.style.transform = "";
            textTop.style.opacity = "1";
            textBottom.style.opacity = "1";
        }
        if (heroHalos) heroHalos.style.opacity = "1";
        if (heroImgContainer) {
            heroImgContainer.style.opacity = "0.9";
            heroImgContainer.style.transform = "scale(1)";
            heroImgContainer.style.filter = "blur(0px)";
        }
    };

    let ticking = false;
    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            handleHeroScroll();
            ticking = false;
        });
    };

    const detachScrollAnimation = () => {
        document.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", updateHeroHeight);
        window.visualViewport?.removeEventListener("resize", updateHeroHeight);
    };

    const attachScrollAnimation = () => {
        handleHeroScroll();
        document.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", updateHeroHeight, {
            passive: true,
        });
        window.visualViewport?.addEventListener("resize", updateHeroHeight, {
            passive: true,
        });
    };

    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    const applyMotionMode = () => {
        detachScrollAnimation();
        if (mobileQuery.matches || reducedMotionQuery.matches) {
            showHeroSettled();
        } else {
            attachScrollAnimation();
        }
    };

    applyMotionMode();
    mobileQuery.addEventListener("change", applyMotionMode);
    reducedMotionQuery.addEventListener("change", applyMotionMode);

    cleanupHero = () => {
        detachScrollAnimation();
        mobileQuery.removeEventListener("change", applyMotionMode);
        reducedMotionQuery.removeEventListener("change", applyMotionMode);
    };

    const sections = document.querySelectorAll("section");

    const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;

                if (entry.target.id === "vault") {
                    body.classList.add("vault-active");
                } else {
                    body.classList.remove("vault-active");
                }
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        if (section.id) observer.observe(section);
    });

    loadGithubData();
});

onBeforeUnmount(() => {
    cleanupHero();
});
</script>

<style scoped></style>
