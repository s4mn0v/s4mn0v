<template>
    <div class="h-svh w-full flex flex-col bg-background-void">
        <div
            class="shrink-0 flex items-center justify-between gap-4 px-5 md:px-margin-desktop py-4 border-b border-white/10"
        >
            <NuxtLink
                to="/mockups#archive"
                class="font-label-sm text-label-sm uppercase tracking-widest text-vault-gold hover:text-vault-text transition-colors inline-flex items-center gap-2"
            >
                <UIcon name="i-material-symbols-arrow-back-rounded" />
                Archive
            </NuxtLink>
            <span
                v-if="mockup"
                class="font-code-md text-code-md text-on-surface-variant uppercase truncate"
            >
                {{ mockup.title }}
            </span>
            <a
                v-if="mockup"
                :href="mockupSrc(mockup.path)"
                target="_blank"
                rel="noopener noreferrer"
                class="font-label-sm text-label-sm uppercase tracking-widest text-vault-gold hover:text-vault-text transition-colors inline-flex items-center gap-2 shrink-0"
            >
                Abrir aparte
                <UIcon name="i-material-symbols-open-in-new-rounded" />
            </a>
        </div>
        <div
            v-if="mockup && mockup.type === 'desktop'"
            ref="desktopWrapper"
            class="grow w-full overflow-hidden relative"
        >
            <iframe
                :src="mockupSrc(mockup.path)"
                class="absolute top-0 left-0 border-0"
                :style="{
                    width: `${DESKTOP_DESIGN_WIDTH}px`,
                    height: `${desktopIframeHeight}px`,
                    transform: `scale(${desktopScale})`,
                    transformOrigin: 'top left',
                }"
                title="Mockup preview"
            ></iframe>
        </div>
        <div
            v-else-if="mockup && mockup.type === 'mobile'"
            class="grow w-full overflow-y-auto flex items-center justify-center p-6 bg-surface-lowest"
        >
            <div
                class="w-[300px] sm:w-[380px] h-[600px] sm:h-[780px] max-h-[85vh] bg-surface-lowest rounded-[2.5rem] border-8 border-[#1A1A1A] p-2 relative shadow-[0_0_100px_rgba(255,255,255,0.05)] overflow-hidden shrink-0"
            >
                <div
                    class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1A1A1A] rounded-b-xl z-20"
                ></div>
                <div
                    class="w-full h-full bg-background rounded-[2rem] overflow-hidden relative"
                >
                    <iframe
                        :src="mockupSrc(mockup.path)"
                        class="absolute inset-0 w-full h-full border-0"
                        title="Mockup preview"
                    ></iframe>
                </div>
            </div>
        </div>
        <div
            v-else
            class="grow flex items-center justify-center font-code-md text-code-md text-on-surface-variant"
        >
            Mockup no encontrado.
        </div>
    </div>
</template>

<script setup lang="ts">
import { mockups } from "~/data/mockups";

const route = useRoute();
const config = useRuntimeConfig();
const mockup = computed(() =>
    mockups.find((m) => m.slug === route.params.slug),
);

function mockupSrc(path: string): string {
    return `${config.app.baseURL}${path}`;
}

const DESKTOP_DESIGN_WIDTH = 1440;
const desktopWrapper = ref<HTMLElement | null>(null);
const desktopScale = ref(1);
const desktopIframeHeight = ref(900);

function updateDesktopScale(): void {
    const wrapper = desktopWrapper.value;
    if (!wrapper) return;
    const width = wrapper.clientWidth;
    const height = wrapper.clientHeight;
    if (width <= 0 || height <= 0) return;
    const scale = width / DESKTOP_DESIGN_WIDTH;
    desktopScale.value = scale;
    desktopIframeHeight.value = height / scale;
}

let resizeObserver: ResizeObserver | null = null;

function handleWindowResize(): void {
    updateDesktopScale();
}

onMounted(() => {
    updateDesktopScale();
    if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(() => {
            updateDesktopScale();
        });
        if (desktopWrapper.value) {
            resizeObserver.observe(desktopWrapper.value);
        }
    }
    window.addEventListener("resize", handleWindowResize, { passive: true });
});

onBeforeUnmount(() => {
    resizeObserver?.disconnect();
    window.removeEventListener("resize", handleWindowResize);
});
</script>

<style scoped></style>
