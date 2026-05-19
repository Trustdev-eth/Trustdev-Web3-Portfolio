export type ProjectCategory = 'highlight' | 'evm' | 'solana' | 'bitcoin';

export type Project = {
  title: string;
  subtitle: string;
  category: ProjectCategory;
  /** Used for filters: highlight cards also tag evm/solana/bitcoin when relevant */
  tags: ProjectCategory[];
  image: string;
  whatIBuilt: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'Unvault',
    subtitle: 'Omnichain NFT bridge • 6 EVM chains • LayerZero V2',
    category: 'highlight',
    tags: ['highlight', 'evm'],
    image: 'https://github.com/user-attachments/assets/b36977bf-f4c6-49bb-ba22-3ac516153abb',
    whatIBuilt:
      'End-to-end bridge architecture: LayerZero V2 OApps, factory split into three proxy slices for the 24KB limit, OmnichainLZ sender/receiver, bitmap “virtual token” ownership, ERC-2981 royalties, fees + pause/reentrancy guards, and dual flows (new collection unvault + existing vault withdraw). Shipped with Hardhat/TS test matrix (30/30 routes) and production metadata verification.',
  },
  {
    title: 'Fighters Unbound',
    subtitle: 'AI NFT evolution • Shape EVM L2',
    category: 'highlight',
    tags: ['highlight', 'evm'],
    image: 'https://github.com/user-attachments/assets/7134929a-ab82-4df4-85f8-3d6bb2626a5b',
    whatIBuilt:
      'Full product ownership: LangGraph + ChromaDB + Ollama agents, Strava-driven NFT progression, minting contracts, and production web stack. ~10ms AI responses and deep DB/query optimizations in live deployment.',
    liveUrl: 'https://www.unbound.games/',
    repoUrl: 'https://github.com/Fighters-Unbound/fighters-unbound',
  },
  {
    title: 'Clutch Whitelist System',
    subtitle: 'Rank-to-CSV • Ethereum + ApeChain',
    category: 'highlight',
    tags: ['highlight', 'evm'],
    image: 'https://github.com/user-attachments/assets/2ae5e568-06c6-4b6c-9ef2-99a98cbe971b',
    whatIBuilt:
      'Shipped entire Next.js 15 app: wallet scoring (0–10), streamed NDJSON whitelist jobs, $K9 pay flow via Uniswap-fork router, OpenSea collection picker (server keys), multi-chain plumbing, hardened APIs with caps and rate limits.',
    liveUrl: 'https://whitelist.clutch.market/',
  },
  {
    title: 'Anvil NFT Launchpad',
    subtitle: 'Factory • drops • Merkle • Clutch.AMM',
    category: 'highlight',
    tags: ['highlight', 'evm'],
    image: 'https://github.com/user-attachments/assets/4baa4dfd-43c1-4e26-b255-b1be03581a05',
    whatIBuilt:
      'Owned Foundry contracts (LaunchpadFactory + ScheduledDropNFT), Express + Supabase + viem registry API, and Next.js 15 creator studio. Built drift detection (chain vs DB), Anvil launch recording with receipt proofs, and internal security docs.',
    liveUrl: 'https://launchpad.clutch.market/',
  },
  {
    title: 'Ape Store',
    subtitle: 'Pump.fun-style fair launch • Base',
    category: 'evm',
    tags: ['evm'],
    image: 'https://github.com/user-attachments/assets/d4c61a64-88ef-41f3-b13c-a727e37a01c3',
    whatIBuilt:
      'Authored bonding curve + graduation stack: TokenFactory, PumpFun math + quotes, Router/Pairs with optional referrers, pause controls, and AMM handoff. Integrated backend services for indexing and trading UX.',
    liveUrl: 'https://ape.store/',
    repoUrl: 'https://github.com/T-rustdev/evm-base-pumfun-smart-contract-v2',
  },
  {
    title: 'Monstro.fun',
    subtitle: 'Gamified DeFi • Base',
    category: 'evm',
    tags: ['evm'],
    image: 'https://github.com/user-attachments/assets/9e37e353-1ee9-4a50-8738-c2f1864749f1',
    whatIBuilt:
      'Delivered core Solidity for characters, staking vaults, referral accounting, and yield routes with gas-obsessed patterns to keep gameplay loops affordable.',
    liveUrl: 'https://monstro.fun/',
  },
  {
    title: '360-Lore Leaderboard',
    subtitle: '369 Studio progression • ApeChain',
    category: 'evm',
    tags: ['evm'],
    image: 'https://github.com/user-attachments/assets/c23bce8a-3826-4ffc-8b27-fa852ff46459',
    whatIBuilt:
      'Full-stack delivery: Vite/React UI locked to Figma, Express + Supabase services, Discord avatar plumbing, and live vault telemetry for competitive leaderboards.',
    liveUrl: 'https://369-lore-leaderboard.vercel.app/',
  },
  {
    title: '$JMY Token Airdrop',
    subtitle: 'Dead-collection rescue • ApeChain',
    category: 'evm',
    tags: ['evm'],
    image: 'https://github.com/user-attachments/assets/bcfd6dcf-013d-41e8-92a7-a4a1cf3ffad7',
    whatIBuilt:
      'Next.js 19 + Tailwind 4 experience with Privy auth, Anvil market integrations, automated eligibility scans, Merkle claims, admin dispatch tools, and defensive API layering.',
    liveUrl: 'https://airdrop.jmyfi.com/',
  },
  {
    title: 'Nyx Cipher',
    subtitle: 'AI trading agent • EVM + Solana',
    category: 'evm',
    tags: ['evm', 'solana'],
    image: 'https://github.com/user-attachments/assets/377f8819-d786-46e0-889b-6470457d0854',
    whatIBuilt:
      'Built the autonomous signal + execution core: on-chain telemetry ingestion, social NLP stack, strategy engine, and guarded smart contract hooks for non-custodial trades.',
    liveUrl: 'https://nyxcipher.ai/',
  },
  {
    title: 'Slither Game',
    subtitle: 'Realtime multiplayer • Solana',
    category: 'solana',
    tags: ['solana'],
    image: 'https://github.com/user-attachments/assets/9e579ebd-81f3-4314-92d7-0d59989d8a04',
    whatIBuilt:
      'Owned gameplay loop: Rust programs for incentives, websocket mesh w/ Redis arenas, and client UX tuned for sub-second state sync.',
    liveUrl: 'https://pvplabs.xyz/',
  },
  {
    title: 'Luck.io',
    subtitle: 'Provably fair casino • Solana',
    category: 'solana',
    tags: ['solana'],
    image: 'https://github.com/user-attachments/assets/fc0ed620-c590-4de5-8ef2-a05d0ccf2c7b',
    whatIBuilt:
      'Delivered casino vertical: Anchor/Rust verification games, treasury risk controls, non-custodial wallet sessions, offline rehearsal mode, and observability for $8.3M+ bankroll operations.',
    liveUrl: 'https://luck.io/',
    repoUrl: 'https://github.com/T-rustdev/Luck.io-casino-game',
  },
  {
    title: 'Nutmarket',
    subtitle: 'Marketplace + mini-games',
    category: 'solana',
    tags: ['solana'],
    image: 'https://github.com/user-attachments/assets/fefc7452-7810-41a8-a92d-aec682b2e31f',
    whatIBuilt:
      'Rebuilt MagicEden-class UX in Next.js: auctions, spins, escrowed trading, and responsive collection surfaces tuned for high-volume NFT traffic.',
    liveUrl: 'https://nut.market',
  },
  {
    title: 'Critters Quest',
    subtitle: 'Quest staking + spins',
    category: 'solana',
    tags: ['solana'],
    image: 'https://github.com/user-attachments/assets/92b8618c-9856-4756-a65c-bd22ee352b3d',
    whatIBuilt:
      'Frontend + on-chain glue for staking, $QUEST emissions, daily jackpots, leaderboards, and generative PFP tooling.',
    liveUrl: 'https://critters.quest/',
  },
  {
    title: 'Floppy Labs',
    subtitle: 'Non-custodial staking at scale',
    category: 'solana',
    tags: ['solana'],
    image: 'https://github.com/user-attachments/assets/cea297b1-f28e-4324-96eb-dfa1c6323894',
    whatIBuilt:
      'Migrated custodial escrow → trustless Anchor architecture with Merkle gating, self-serve launches, analytics, and 80k+ NFT footprint.',
    liveUrl: 'https://floppylabs.io',
    repoUrl: 'https://github.com/T-rustdev/floppylabs-nft-staking',
  },
  {
    title: 'Artplex',
    subtitle: 'Solana launchpad performance',
    category: 'solana',
    tags: ['solana'],
    image: 'https://placehold.co/1200x630/050508/2dd4bf/png?text=Artplex',
    whatIBuilt:
      'Turbocharged Turborepo apps: build pipelines, mint UX, and Supabase services hardened for creator bursts.',
    liveUrl: 'https://artplex.io/',
    repoUrl: 'https://github.com/T-rustdev/artplex-nft-launchpad',
  },
  {
    title: 'Ballistic',
    subtitle: 'Cross-chain launch infra',
    category: 'solana',
    tags: ['solana'],
    image: 'https://github.com/user-attachments/assets/6529ad37-6c40-43e1-97e6-49c20489138f',
    whatIBuilt:
      'Authored launch/token programs handling multi-phase sales, authority splits, and bridging hooks consumed by the Ballistic app layer.',
    liveUrl: 'https://ballistic.app/',
  },
  {
    title: 'InternetJpegs',
    subtitle: 'Ordinal swap marketplace',
    category: 'bitcoin',
    tags: ['bitcoin'],
    image: 'https://github.com/user-attachments/assets/fe96dd68-50b3-4055-a0e6-011d84e6a989',
    whatIBuilt:
      'Co-founded stack: PSBT swap coordinator, UTXO indexer, chats, trading UI, and settlement monitoring for Bitcoin NFT liquidity.',
    liveUrl: 'https://internetjpeg.com/',
  },
  {
    title: 'ArcusLab',
    subtitle: 'Institutional BTC / BRC-20 lending',
    category: 'bitcoin',
    tags: ['bitcoin'],
    image: 'https://github.com/user-attachments/assets/182ea60e-66c1-4bb9-a05e-ef19ee6dd051',
    whatIBuilt:
      'CTO-owned backend: DLC orchestration, oracle feeds, Deep Lake custody adapters, risk engines, and observability for dual-sided lending books.',
    liveUrl: 'https://arcusbtc.com/',
  },
];
