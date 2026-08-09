<template>
    <div
        class="h-svh w-full overflow-hidden bg-background-void text-on-background antialiased"
    >
        <div
            class="mockups-scroll h-full w-full overflow-y-scroll snap-y snap-mandatory relative"
        >
            <section
                class="h-svh w-full snap-center flex items-center justify-center p-5 md:p-margin-desktop relative"
            >
                <h1
                    class="font-display-xl text-[32px] md:text-display-xl leading-[1.2] md:leading-none tracking-tight md:tracking-tighter uppercase text-primary z-10 mix-blend-difference"
                >
                    <span
                        v-for="(letter, index) in titleLetters"
                        :key="index"
                        class="glitch-letter inline-block"
                        :style="{ animationDelay: `${index * 0.06}s` }"
                        >{{ letter }}</span
                    >
                </h1>
                <div
                    class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
                >
                    <div
                        class="w-[300px] h-[300px] bg-primary rounded-full blur-[100px]"
                    ></div>
                </div>
                <div
                    class="absolute bottom-margin-desktop left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-on-surface-variant z-10"
                >
                    <span class="font-label-xs text-label-xs uppercase"
                        >SCROLL</span
                    >
                    <UIcon name="i-material-symbols-arrow-downward-rounded" />
                </div>
            </section>

            <template v-for="entry in orderedMockups" :key="entry.slug">
                <section
                    v-if="entry.type === 'desktop'"
                    class="h-svh w-full snap-center flex flex-col justify-center items-center p-5 md:p-margin-desktop bg-background-void relative"
                >
                    <div
                        class="max-w-container-max w-full h-full max-h-[870px] flex flex-col gap-gutter relative z-10"
                    >
                        <NuxtLink
                            :to="`/mockups/archive/${entry.slug}`"
                            :aria-label="`Ver ${entry.title} en vivo`"
                            class="group flex-grow bg-glass-fill backdrop-blur-md rounded-xl border border-white/10 overflow-hidden relative shadow-[0_0_80px_rgba(255,255,255,0.05)] flex flex-col cursor-pointer"
                        >
                            <div
                                class="h-10 bg-surface-lowest border-b border-white/10 flex items-center px-4 gap-2 shrink-0"
                            >
                                <div class="flex gap-2">
                                    <div
                                        class="w-3 h-3 rounded-full bg-surface-variant"
                                    ></div>
                                    <div
                                        class="w-3 h-3 rounded-full bg-surface-variant"
                                    ></div>
                                    <div
                                        class="w-3 h-3 rounded-full bg-surface-variant"
                                    ></div>
                                </div>
                                <div
                                    class="mx-auto font-label-xs text-label-xs text-on-surface-variant bg-surface-high px-6 py-1 rounded uppercase"
                                >
                                    {{ entry.title }}
                                </div>
                            </div>
                            <div class="flex-grow overflow-hidden relative">
                                <iframe
                                    :src="mockupSrc(entry.path)"
                                    class="absolute inset-0 w-full h-full pointer-events-none"
                                    loading="lazy"
                                    tabindex="-1"
                                    aria-hidden="true"
                                ></iframe>
                                <div
                                    class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center"
                                >
                                    <div
                                        class="flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-primary font-label-sm text-label-sm uppercase tracking-widest border border-white/30 px-6 py-3 rounded-full bg-black/40 backdrop-blur-sm"
                                    >
                                        <UIcon
                                            name="i-material-symbols-open-in-new-rounded"
                                        />
                                        View Live
                                    </div>
                                </div>
                                <div
                                    class="mockup-touch-hint hidden absolute inset-0 pointer-events-none items-center justify-center"
                                >
                                    <div class="absolute inset-0 bg-black/60"></div>
                                    <div
                                        class="relative flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest border border-white/30 px-6 py-3 rounded-full bg-black/40 backdrop-blur-sm"
                                    >
                                        <UIcon
                                            name="i-material-symbols-open-in-new-rounded"
                                        />
                                        View Live
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                        <div
                            class="shrink-0 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-4 gap-4 pb-4"
                        >
                            <div class="flex flex-col gap-1">
                                <span
                                    class="font-label-xs text-label-xs text-code-comment uppercase"
                                    >PROJECT</span
                                >
                                <span
                                    class="font-label-sm text-label-sm text-primary uppercase"
                                    >{{ entry.title }}</span
                                >
                            </div>
                            <div class="flex flex-col gap-1 md:text-right">
                                <span
                                    class="font-label-xs text-label-xs text-code-comment uppercase"
                                    >STACK</span
                                >
                                <span
                                    class="font-label-sm text-label-sm text-on-surface-variant uppercase"
                                    >{{ entry.stack }}</span
                                >
                            </div>
                            <div class="flex flex-col gap-1 md:text-right">
                                <span
                                    class="font-label-xs text-label-xs text-code-comment uppercase"
                                    >ROLE</span
                                >
                                <span
                                    class="font-label-sm text-label-sm text-on-surface-variant uppercase"
                                    >{{ entry.role }}</span
                                >
                            </div>
                            <div
                                class="flex-col gap-1 md:text-right hidden md:flex"
                            >
                                <span
                                    class="font-label-xs text-label-xs text-code-comment uppercase"
                                    >YEAR</span
                                >
                                <span
                                    class="font-label-sm text-label-sm text-on-surface-variant uppercase"
                                    >{{ entry.year }}</span
                                >
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]"
                    >
                        <div
                            class="w-[800px] h-[400px] bg-primary rounded-full blur-[150px]"
                        ></div>
                    </div>
                </section>

                <section
                    v-else
                    class="h-svh w-full snap-center flex flex-col justify-center items-center p-5 md:p-margin-desktop bg-background-void relative"
                >
                    <div
                        class="max-w-container-max w-full h-full max-h-[870px] flex flex-col md:flex-row gap-gutter relative z-10"
                    >
                        <div
                            class="flex-grow flex justify-center items-center relative overflow-hidden"
                        >
                            <NuxtLink
                                :to="`/mockups/archive/${entry.slug}`"
                                :aria-label="`Ver ${entry.title} en vivo`"
                                class="group block w-[300px] md:w-[360px] h-[600px] md:h-[720px] bg-surface-lowest rounded-[2.5rem] border-8 border-[#1A1A1A] p-2 relative shadow-[0_0_100px_rgba(255,255,255,0.03)] overflow-hidden shrink-0 cursor-pointer"
                            >
                                <div
                                    class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1A1A1A] rounded-b-xl z-20"
                                ></div>
                                <div
                                    class="w-full h-full bg-background rounded-[2rem] overflow-hidden relative"
                                >
                                    <iframe
                                        :src="mockupSrc(entry.path)"
                                        class="absolute inset-0 w-full h-full pointer-events-none"
                                        loading="lazy"
                                        tabindex="-1"
                                        aria-hidden="true"
                                    ></iframe>
                                    <div
                                        class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <div
                                            class="flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-primary font-label-xs text-label-xs uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm"
                                        >
                                            <UIcon
                                                name="i-material-symbols-open-in-new-rounded"
                                            />
                                            View Live
                                        </div>
                                    </div>
                                    <div
                                        class="mockup-touch-hint hidden absolute inset-0 pointer-events-none items-center justify-center"
                                    >
                                        <div class="absolute inset-0 bg-black/60"></div>
                                        <div
                                            class="relative flex items-center gap-2 text-primary font-label-xs text-label-xs uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm"
                                        >
                                            <UIcon
                                                name="i-material-symbols-open-in-new-rounded"
                                            />
                                            View Live
                                        </div>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                        <div
                            class="w-full md:w-1/3 flex flex-col justify-end border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 gap-6 pb-4 shrink-0"
                        >
                            <div class="flex flex-col gap-1">
                                <span
                                    class="font-label-xs text-label-xs text-code-comment uppercase"
                                    >PROJECT</span
                                >
                                <span
                                    class="font-label-sm text-label-sm text-primary uppercase md:text-lg"
                                    >{{ entry.title }}</span
                                >
                            </div>
                            <div class="flex flex-col gap-1">
                                <span
                                    class="font-label-xs text-label-xs text-code-comment uppercase"
                                    >STACK</span
                                >
                                <span
                                    class="font-label-sm text-label-sm text-on-surface-variant uppercase"
                                    >{{ entry.stack }}</span
                                >
                            </div>
                            <div class="flex flex-col gap-1">
                                <span
                                    class="font-label-xs text-label-xs text-code-comment uppercase"
                                    >ROLE</span
                                >
                                <span
                                    class="font-label-sm text-label-sm text-on-surface-variant uppercase"
                                    >{{ entry.role }}</span
                                >
                            </div>
                            <div class="flex flex-col gap-1">
                                <span
                                    class="font-label-xs text-label-xs text-code-comment uppercase"
                                    >YEAR</span
                                >
                                <span
                                    class="font-label-sm text-label-sm text-on-surface-variant uppercase"
                                    >{{ entry.year }}</span
                                >
                            </div>
                        </div>
                    </div>
                </section>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { mockups, type MockupEntry } from "~/data/mockups";

const config = useRuntimeConfig();

const titleLetters = "SELECTED_WORK".split("");

function mockupSrc(path: string): string {
    return `${config.app.baseURL}${path}`;
}

function shuffle<T>(items: T[]): T[] {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

const orderedMockups = ref<MockupEntry[]>(mockups);

onMounted(() => {
    orderedMockups.value = shuffle(mockups);
});
</script>

<style scoped>
.mockups-scroll::-webkit-scrollbar {
    display: none;
}
.mockups-scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
@media (hover: none) and (pointer: coarse) {
    .mockup-touch-hint {
        display: flex;
        animation: mockup-touch-hint-pulse 2.4s ease-in-out infinite;
    }
}
@keyframes mockup-touch-hint-pulse {
    0%,
    100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
.glitch-letter {
    animation: glitch-font 5s steps(1) infinite;
}
@keyframes glitch-font {
    0% {
        font-family: "Monoton", cursive;
    }
    8% {
        font-family: "Nabla", system-ui;
    }
    16% {
        font-family: "Rubik Glitch", cursive;
    }
    24% {
        font-family: "Codystar", cursive;
    }
    32% {
        font-family: "Megrim", cursive;
    }
    40% {
        font-family: "Rubik Beastly", cursive;
    }
    48% {
        font-family: "VT323", monospace;
    }
    56%,
    100% {
        font-family: var(--font-display-xl);
    }
}
</style>
