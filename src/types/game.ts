export type GrowthStage = 'egg' | 'chick' | 'juvenile' | 'subadult' | 'adult'

export type Weather = 'sunny' | 'rainy' | 'snowy' | 'stormy'

export type Personality = 'bold' | 'shy' | 'gentle' | 'curious' | 'stubborn'

export type BerryType = 'red' | 'blue' | 'golden'

export type GamePhase = 'start' | 'playing' | 'breeding' | 'ended'

export type MilestoneType =
  | 'first_hatch'
  | 'all_hatched'
  | 'first_chick_to_juvenile'
  | 'all_chick_to_juvenile'
  | 'first_juvenile_to_subadult'
  | 'all_juvenile_to_subadult'
  | 'first_subadult_to_adult'
  | 'all_adult'
  | 'first_breeding'
  | 'second_breeding'
  | 'no_death_5_days'
  | 'golden_berry_collector_5'
  | 'perfect_care'

export interface MilestoneReward {
  foodBonus?: number
  scoreBonus: number
  honorBadge: string
  honorTitle: string
}

export interface Milestone {
  id: MilestoneType
  name: string
  description: string
  emoji: string
  stage?: GrowthStage
  reward: MilestoneReward
}

export interface UnlockedMilestone {
  id: MilestoneType
  unlockedAt: number
  rewardClaimed: boolean
}

export interface Bird {
  id: string
  name: string
  stage: GrowthStage
  stageProgress: number
  hunger: number
  fear: number
  health: number
  personality: Personality
  hatchDuration: number
  hatchTimeLeft: number
  isAway: boolean
  isSick: boolean
  isDead: boolean
  feedingCount: number
  lastFedAt: number
  awayUntil?: number
  sickUntil?: number
  justHatched?: boolean
  justGrew?: boolean
  justFed?: boolean
}

export interface Berry {
  id: string
  x: number
  y: number
  value: number
  type: BerryType
  spawnedAt: number
}

export interface GameState {
  phase: GamePhase
  day: number
  dayProgress: number
  currentWeather: Weather
  nextWeatherChangeAt: number
  foodStock: number
  birds: Bird[]
  berries: Berry[]
  totalHatched: number
  totalDied: number
  breedingCount: number
  maxBreedingRounds: number
  eventLog: { id: string; message: string; type: string; timestamp: number }[]
  score?: GameScore
  selectedBirdId?: string
  unlockedMilestones: UnlockedMilestone[]
  pendingMilestoneModal: MilestoneType | null
  goldenBerryCollected: number
  noDeathDayStart: number
}

export interface GameScore {
  totalScore: number
  survivalRate: number
  avgHealth: number
  breedingBonus: number
  personalityBonus: number
  milestoneBonus: number
  stars: number
  rank: string
  unlockedHonors: { badge: string; title: string; milestoneId: MilestoneType }[]
}

export interface WeatherEffect {
  hungerMod: number
  fearMod: number
  healthMod: number
  awayChance?: number
  sickChance?: number
}
