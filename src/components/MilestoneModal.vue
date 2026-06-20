<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { MilestoneType } from '@/types/game'
import { MILESTONES } from '@/utils/constants'

const props = defineProps<{
  milestoneId: MilestoneType | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const isVisible = ref(false)
const showContent = ref(false)

const milestone = computed(() => {
  if (!props.milestoneId) return null
  return MILESTONES[props.milestoneId] ?? null
})

watch(
  () => props.milestoneId,
  (newVal) => {
    if (newVal) {
      isVisible.value = true
      setTimeout(() => {
        showContent.value = true
      }, 50)
    } else {
      showContent.value = false
      setTimeout(() => {
        isVisible.value = false
      }, 300)
    }
  },
  { immediate: true }
)

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isVisible"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        <div
          class="absolute inset-0 bg-black/70 backdrop-blur-sm"
          @click="handleClose"
        />

        <Transition name="scale">
          <div
            v-if="showContent && milestone"
            class="relative z-10 w-full max-w-sm"
          >
            <div class="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
              <div class="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/30 rounded-full blur-3xl animate-pulse" />
              <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 0.5s" />
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s" />
            </div>

            <div class="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-[2rem] p-6 shadow-2xl border-4 border-yellow-400/50 card-shadow overflow-hidden">
              <div class="absolute top-2 left-2 text-2xl opacity-20 animate-float">✨</div>
              <div class="absolute top-4 right-6 text-xl opacity-20 animate-float" style="animation-delay: 0.3s">🌟</div>
              <div class="absolute bottom-8 left-6 text-xl opacity-20 animate-float" style="animation-delay: 0.6s">💫</div>
              <div class="absolute bottom-4 right-3 text-2xl opacity-20 animate-float" style="animation-delay: 0.9s">⭐</div>

              <div class="relative text-center mb-5 animate-pop-in">
                <div class="text-amber-600/80 text-xs font-bold tracking-[0.3em] mb-2 uppercase">Milestone Unlocked</div>
                <div class="text-7xl mb-3 animate-bounce-slow">{{ milestone.emoji }}</div>
              </div>

              <div class="relative text-center mb-4 animate-pop-in" style="animation-delay: 0.1s">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full shadow-lg mb-3">
                  <span class="text-lg">{{ milestone.reward.honorBadge }}</span>
                  <span class="font-bold text-amber-900 text-sm">{{ milestone.reward.honorTitle }}</span>
                </div>
                <h2 class="font-display text-3xl text-amber-900 text-stroke-amber mb-2">{{ milestone.name }}</h2>
                <p class="text-amber-700/80 text-sm leading-relaxed">{{ milestone.description }}</p>
              </div>

              <div class="relative bg-white/70 rounded-2xl p-4 mb-5 border-2 border-yellow-300/60 animate-pop-in" style="animation-delay: 0.2s">
                <div class="text-amber-800/70 text-xs text-center mb-3 font-medium tracking-wider">🎁 奖励已发放</div>
                <div class="flex items-center justify-center gap-4">
                  <div v-if="milestone.reward.foodBonus" class="flex flex-col items-center">
                    <div class="text-3xl mb-1">🍒</div>
                    <div class="font-bold text-green-600 text-lg">+{{ milestone.reward.foodBonus }}</div>
                    <div class="text-xs text-amber-700/70">食物</div>
                  </div>
                  <div class="w-px h-12 bg-amber-300/50" />
                  <div class="flex flex-col items-center">
                    <div class="text-3xl mb-1">⭐</div>
                    <div class="font-bold text-amber-600 text-lg">+{{ milestone.reward.scoreBonus }}</div>
                    <div class="text-xs text-amber-700/70">得分</div>
                  </div>
                </div>
              </div>

              <button
                class="relative w-full py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white rounded-2xl
                       font-bold text-lg btn-3d hover:from-amber-400 hover:via-yellow-400 hover:to-orange-400
                       flex items-center justify-center gap-2 transition-all duration-300 animate-pop-in shadow-xl"
                style="animation-delay: 0.3s"
                @click="handleClose"
              >
                <span class="text-xl">🎉</span>
                <span>太棒了！继续加油</span>
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
</style>
