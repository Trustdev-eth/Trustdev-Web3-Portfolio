import { defineChain, http } from 'viem';
import { createConfig, injected } from 'wagmi';
import { coinbaseWallet } from 'wagmi/connectors';
import { mainnet, base } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const apeChain = defineChain({
  id: 33139,
  name: 'ApeChain',
  nativeCurrency: { name: 'APE', symbol: 'APE', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://apechain.calderachain.xyz/http'] },
  },
});

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? '';

const sharedChains = [mainnet, base, apeChain] as const;

/**
 * RainbowKit + WalletConnect needs a Cloud project id (free at https://dashboard.reown.com).
 * Without it we fall back to injected + Coinbase only so `npm run dev` still works out of the box.
 */
export const wagmiConfig = projectId
  ? getDefaultConfig({
      appName: 'T-rustdev Portfolio',
      projectId,
      chains: [...sharedChains],
      transports: {
        [mainnet.id]: http(),
        [base.id]: http(),
        [apeChain.id]: http(),
      },
      ssr: false,
    })
  : createConfig({
      chains: [...sharedChains],
      connectors: [injected(), coinbaseWallet({ appName: 'T-rustdev Portfolio' })],
      transports: {
        [mainnet.id]: http(),
        [base.id]: http(),
        [apeChain.id]: http(),
      },
    });

export const hasWalletConnect = Boolean(projectId);
