import { Address } from 'viem';
import { base } from 'viem/chains';

export const TITLE = 'LORA';
export const DESCRIPTION = 'lite zora. built on base';
export const GITHUB_REPO = 'https://github.com/SweetmanTech/lora';
export const PROTOCOL_REWARDS = '0x7777777F279eba3d3Ad8F4E708545291A6fDBA8B' as Address;
export const CHAIN = base;
export const CHAIN_ID = CHAIN.id;
export const EAS = '0x4200000000000000000000000000000000000021' as Address;
export const CURATOR = '0xb5acDED340D66678f01097818940A0F028DAFB8d' as Address;
export const VERCEL_URL = process.env.VERCEL_URL || 'http://localhost:3000';
