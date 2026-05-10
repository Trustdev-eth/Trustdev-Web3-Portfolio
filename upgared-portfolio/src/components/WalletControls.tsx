import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { hasWalletConnect } from '../lib/wagmi';

export function WalletControls() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (hasWalletConnect) {
    return <ConnectButton showBalance={false} chainStatus="icon" />;
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        <span className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300 sm:inline">
          {address.slice(0, 6)}…{address.slice(-4)}
        </span>
        <button
          type="button"
          onClick={() => disconnect()}
          className="rounded-xl border border-white/15 px-3 py-2 text-xs font-semibold text-white transition-colors duration-300 ease-out hover:border-acid/60 hover:text-acid sm:rounded-2xl sm:px-4 sm:text-sm"
        >
          Disconnect
        </button>
      </div>
    );
  }

  const injected =
    connectors.find((c) => c.id === 'injected' || c.name === 'Injected') ?? connectors[0];

  return (
    <button
      type="button"
      disabled={isPending || !injected}
      onClick={() => injected && connect({ connector: injected })}
      className="rounded-xl bg-gradient-to-r from-acid to-plasma px-3 py-2 text-xs font-bold text-ink shadow-lg shadow-acid/20 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-acid/40 disabled:cursor-not-allowed disabled:opacity-40 sm:rounded-2xl sm:px-4 sm:text-sm"
    >
      {isPending ? 'Connecting…' : 'Connect wallet'}
    </button>
  );
}
