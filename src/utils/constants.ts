import type { Weather, WeatherEffect, BerryType, GrowthStage, Personality, Milestone } from '@/types/game'

export const ATTR_MIN = 0
export const ATTR_MAX = 100
export const DEATH_THRESHOLD = 10

export const STAGE_DURATION: Record<Exclude<GrowthStage, 'adult'>, number> = {
  egg: 1,
  chick: 2,
  juvenile: 2,
  subadult: 1,
}

export const STAGE_NAMES: Record<GrowthStage, string> = {
  egg: '🥚 蛋',
  chick: '🐣 雏鸟',
  juvenile: '🐥 幼鸟',
  subadult: '🦜 亚成鸟',
  adult: '🐦 成鸟',
}

export const STAGE_EMOJI: Record<GrowthStage, string> = {
  egg: '🥚',
  chick: '🐣',
  juvenile: '🐥',
  subadult: '🦜',
  adult: '🐦',
}

export const FOOD_NEED_MULTIPLIER: Record<Exclude<GrowthStage, 'egg'>, number> = {
  chick: 1.5,
  juvenile: 1.2,
  subadult: 1.0,
  adult: 0.8,
}

export const HUNGER_DECAY_RATE = 1.5
export const FEAR_DECAY_RATE = 0.8
export const HEALTH_RECOVERY_RATE = 0.5

export const BERRY_SPAWN_INTERVAL = 4000
export const BERRY_MAX_COUNT = 8
export const BERRY_LIFETIME = 20000

export const BERRY_VALUES: Record<BerryType, number> = {
  red: 10,
  blue: 15,
  golden: 25,
}

export const BERRY_COLORS: Record<BerryType, string> = {
  red: '#C41E3A',
  blue: '#4169E1',
  golden: '#FFD700',
}

export const BERRY_EMOJI: Record<BerryType, string> = {
  red: '🍒',
  blue: '🫐',
  golden: '✨',
}

export const WEATHER_CHANGE_INTERVAL = 25000

export const WEATHER_EFFECTS: Record<Weather, WeatherEffect> = {
  sunny: { hungerMod: 1.0, fearMod: 0.8, healthMod: 1.0 },
  rainy: { hungerMod: 1.3, fearMod: 1.5, healthMod: 0.9, awayChance: 0.08 },
  snowy: { hungerMod: 1.5, fearMod: 1.2, healthMod: 0.7, sickChance: 0.12 },
  stormy: { hungerMod: 1.2, fearMod: 2.0, healthMod: 0.6, awayChance: 0.2, sickChance: 0.18 },
}

export const WEATHER_NAMES: Record<Weather, string> = {
  sunny: '☀️ 晴天',
  rainy: '🌧️ 雨天',
  snowy: '❄️ 雪天',
  stormy: '🌪️ 暴风',
}

export const WEATHER_COLORS: Record<Weather, string> = {
  sunny: 'from-amber-300/30 to-yellow-200/20',
  rainy: 'from-blue-400/40 to-gray-500/30',
  snowy: 'from-blue-100/40 to-white/30',
  stormy: 'from-gray-600/50 to-purple-800/40',
}

export const PERSONALITY_NAMES: Record<Personality, string> = {
  bold: '勇敢大胆',
  shy: '胆小害羞',
  gentle: '温柔恬静',
  curious: '好奇活泼',
  stubborn: '倔强独立',
}

export const PERSONALITY_EMOJI: Record<Personality, string> = {
  bold: '💪',
  shy: '🥺',
  gentle: '🌸',
  curious: '🌟',
  stubborn: '😤',
}

export const DAY_DURATION = 60000
export const INITIAL_FOOD = 30
export const MIN_EGGS = 2
export const MAX_EGGS = 4
export const MAX_BREEDING_ROUNDS = 2

export const BIRD_NAMES = [
  '毛毛', '豆豆', '啾啾', '喳喳', '花花', '点点', '果果', '泡泡',
  '糖糖', '圆圆', '小米', '小麦', '云朵', '星星', '月亮', '太阳',
  '小橘', '小蓝', '小绿', '小红', '阿黄', '阿白', '阿黑', '阿灰',
]

export const MILESTONES: Record<string, Milestone> = {
  first_hatch: {
    id: 'first_hatch',
    name: '生命初啼',
    description: '第一只小鸟成功破壳而出',
    emoji: '🐣',
    stage: 'chick',
    reward: { foodBonus: 20, scoreBonus: 8, honorBadge: '🥇', honorTitle: '初生喜悦' },
  },
  all_hatched: {
    id: 'all_hatched',
    name: '全员苏醒',
    description: '整窝蛋全部成功孵化',
    emoji: '🎉',
    stage: 'chick',
    reward: { foodBonus: 30, scoreBonus: 12, honorBadge: '🏅', honorTitle: '圆满孵化' },
  },
  first_chick_to_juvenile: {
    id: 'first_chick_to_juvenile',
    name: '羽翼渐丰',
    description: '第一只雏鸟成长为幼鸟',
    emoji: '🐥',
    stage: 'juvenile',
    reward: { foodBonus: 15, scoreBonus: 10, honorBadge: '🎖️', honorTitle: '初次蜕变' },
  },
  all_chick_to_juvenile: {
    id: 'all_chick_to_juvenile',
    name: '幼鸟集结',
    description: '所有雏鸟都成长为幼鸟',
    emoji: '🌟',
    stage: 'juvenile',
    reward: { foodBonus: 25, scoreBonus: 15, honorBadge: '🏆', honorTitle: '整窝蜕变' },
  },
  first_juvenile_to_subadult: {
    id: 'first_juvenile_to_subadult',
    name: '少年初成',
    description: '第一只幼鸟成长为亚成鸟',
    emoji: '🦜',
    stage: 'subadult',
    reward: { foodBonus: 20, scoreBonus: 12, honorBadge: '🎗️', honorTitle: '青春绽放' },
  },
  all_juvenile_to_subadult: {
    id: 'all_juvenile_to_subadult',
    name: '风华正茂',
    description: '所有幼鸟都成长为亚成鸟',
    emoji: '✨',
    stage: 'subadult',
    reward: { foodBonus: 35, scoreBonus: 18, honorBadge: '🏵️', honorTitle: '全员少年' },
  },
  first_subadult_to_adult: {
    id: 'first_subadult_to_adult',
    name: '展翅高飞',
    description: '第一只亚成鸟成长为成鸟',
    emoji: '🐦',
    stage: 'adult',
    reward: { foodBonus: 25, scoreBonus: 15, honorBadge: '🎀', honorTitle: '首次成年' },
  },
  all_adult: {
    id: 'all_adult',
    name: '圆满成年',
    description: '所有小鸟都顺利长成成鸟',
    emoji: '🏆',
    stage: 'adult',
    reward: { foodBonus: 50, scoreBonus: 25, honorBadge: '👑', honorTitle: '完美成长' },
  },
  first_breeding: {
    id: 'first_breeding',
    name: '生命延续',
    description: '成鸟们产下第一窝新蛋',
    emoji: '💝',
    reward: { foodBonus: 40, scoreBonus: 20, honorBadge: '💕', honorTitle: '繁衍不息' },
  },
  second_breeding: {
    id: 'second_breeding',
    name: '家族兴旺',
    description: '成鸟们产下第二窝新蛋',
    emoji: '💐',
    reward: { foodBonus: 60, scoreBonus: 30, honorBadge: '💎', honorTitle: '人丁兴旺' },
  },
  no_death_5_days: {
    id: 'no_death_5_days',
    name: '守护天使',
    description: '连续5天没有小鸟离世',
    emoji: '🛡️',
    reward: { foodBonus: 30, scoreBonus: 20, honorBadge: '🔰', honorTitle: '生命守护者' },
  },
  golden_berry_collector_5: {
    id: 'golden_berry_collector_5',
    name: '金色收藏家',
    description: '累计收集5颗金色浆果',
    emoji: '✨',
    reward: { foodBonus: 25, scoreBonus: 15, honorBadge: '🌟', honorTitle: '金光闪耀' },
  },
  perfect_care: {
    id: 'perfect_care',
    name: '完美照料',
    description: '所有存活小鸟的健康值都在80以上',
    emoji: '💚',
    reward: { foodBonus: 35, scoreBonus: 22, honorBadge: '💯', honorTitle: '最佳保姆' },
  },
}

export const MILESTONE_LIST: Milestone[] = Object.values(MILESTONES)
