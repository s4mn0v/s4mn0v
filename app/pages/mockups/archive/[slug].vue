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
        <iframe
            v-if="mockup"
            :src="mockupSrc(mockup.path)"
            class="grow w-full border-0"
            title="Mockup preview"
        ></iframe>
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
</script>

<style scoped></style>
